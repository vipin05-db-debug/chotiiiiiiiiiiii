from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()

class VoiceCommand(BaseModel):
    text: str

@app.post("/process_command")
async def process_command(command: VoiceCommand):
    text = command.text.lower().strip()
    print(f"Received Command: {text}")

    # 1. SYSTEM COMMANDS
    if "go back" in text or "back" in text:
        return {"action": "SYSTEM", "type": "BACK", "speak": ""}
    if "go home" in text or "home screen" in text:
        return {"action": "SYSTEM", "type": "HOME", "speak": ""}
    if "clear background" in text or "recent apps" in text:
        return {"action": "SYSTEM", "type": "RECENTS", "speak": "Opening recent apps"}
    if "volume up" in text:
        return {"action": "SYSTEM", "type": "VOL_UP", "speak": ""}
    if "volume down" in text:
        return {"action": "SYSTEM", "type": "VOL_DOWN", "speak": ""}

    # 2. DYNAMIC APP OPENING (Works for ANY app)
    if "open" in text:
        # Extract the app name (e.g., "open instagram" -> "instagram")
        app_name = text.replace("open", "").strip()
        return {"action": "OPEN_APP", "app_name": app_name, "speak": f"Opening {app_name}"}
    
    # 3. DYNAMIC FALLBACK (Clicking words on screen)
    if "click" in text:
        target = text.replace("click", "").strip()
        return {"action": "DYNAMIC_CLICK", "target_word": target, "speak": f"Clicking {target}"}

    # 4. SEARCHING (Using Deep Links)
    if "search" in text:
        query = text.replace("search", "").strip()
        return {"action": "SEARCH", "query": query, "speak": f"Searching for {query}"}

    return {"action": "UNKNOWN", "speak": "Command not recognized"}

# Run with: uvicorn local_ai_server:app --host 0.0.0.0 --port 8000