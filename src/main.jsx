import React, { useEffect, useRef, useState } from "react"; 
import { createRoot } from "react-dom/client"; 
import { Heart, Music2, Volume2, VolumeX, ChevronRight, RotateCcw, Sparkles } from "lucide-react"; 
import "./style.css"; 

 
 
const slides = [ 
  { 
    title: "I'm really, really sorry. 🥺", 
    body: "I know that sometimes my words or actions can make things difficult for you. Maybe I didn't understand your feelings, or maybe I reacted without thinking. I'm sorry, Chotiii. You deserved more patience, more understanding, and a softer version of me.", 
    note: "No excuses. Just a genuine sorry." 
  }, 
  { 
    title: "You matter to me. So much. 💗", 
    body: "Sometimes I act like I don't care, or I hide my soft side behind jokes and arguments. But I do care. I care when you're upset, when something bothers you, and when you're quiet in a way that doesn't feel like you. Your happiness matters to me more than you realise.", 
    note: "You are loved on your good and difficult days." 
  }, 
  { 
    title: "I know I can be childish. 🙈", 
    body: "I can be stubborn, dramatic, annoying, and sometimes completely unreasonable. I might argue over tiny things or want the last word. But being your sibling doesn't give me the right to hurt your feelings. I'm sorry for those moments, Chotiii. I'm trying to become more patient and mature aur jab ham koi galdi kar dete hai aur tu woh chiz bolti hai baad me chat me mtlb samne te us time nahi kari woh baat per chat me woh baat bhi ajeeb lagti hai islye me over kar detahu yrr bachaaaa hu yrr pagal sa aur muh bhigad leta hu.", 
    note: "I'm not perfect, but I want to do better." 
  }, 
  { 
    title: "My little jealous heart. 🥹", 
    body: "Sometimes I feel jealous, protective, or scared of losing our special bond, tuje khone ka ya bond lose hona ka dar nahi hai bas tu acha feel kare sab bolde kuch bhi ho kyuki muje chinta hota hai bestieeeeee. And sometimes I express those feelings in the wrong way. I'm sorry if that ever makes you feel restricted. You deserve your own space, your own friends, and your own happiness. I want my love to make you feel safe, not controlled.", 
    note: "Love should give you room to shine." 
  }, 
  { 
    title: "I'm sorry for the pain. 🫂", 
    body: "If I made you cry, added stress to your day, didn't listen, or made you feel alone when you needed me, I'm truly sorry. Maybe I cannot undo those moments, but I can listen to your feelings and understand what hurt you. You never have to pretend you're okay just to make me feel better.", 
    note: "Your feelings will always matter to me." 
  }, 
  { 
    title: "You deserve the softest love. 🌷", 
    body: "You deserve kindness when you're upset, patience when you're struggling, and someone who listens when you need to talk islye bolta rehta hu bol kuch hia kyaa ya tu koi baat soche na jyada roye na per me over kar deta hu. I want to be a sibling you can trust, someone who celebrates your happiness and stands beside you when life feels difficult. I may not always get everything right, but I genuinely care.", 
    note: "I'll always wish the best for you." 
  }, 
  { 
    title: "I'll try to be better. 🤍", 
    body: "I don't want my sorry to be just a few emotional words. I want to show it through my actions. I'll try to listen before reacting, respect your boundaries, apologise without starting another argument, and think about how my words might make you feel. I might make mistakes, but I want to learn from them.", 
    note: "A promise to keep trying, every day." 
  }, 
  { 
    title: "You're my favourite little chaos. 🧸", 
    body: "Your little moods, your smile, your funny moments, your silly talks, and even the way you annoy me sometimes are all part of what makes you special. We might fight over the smallest things, but there are so many beautiful moments I never want to take for granted. Life is sweeter with you in it.", 
    note: "My little sister, my forever favourite." 
  }, 
  { 
    title: "I Worry About You, Bestieeeee 🥺", 
    body: "I know ghar pe daant padti hai, chillate bhi hain, pyaar bhi karte hain, but restrictions aur daant zyada hoti hain. Isliye mujhe teri chinta hoti hai ki kya karu, kya na karu, aur tu kaisa feel karti hogi. Kabhi-kabhi isi tension mein main bhi overreact kar deta hoon aur bhool jaata hoon ki tujhse kaise pyaar se baat karni hai. aur tu sorryyy mat bola kar tu mat socha kar tu boss haiiiiiiiiii, Chotiiii.", 
    note: "Unlimited hugs, only for my Chotiii." 
  }, 
  { 
    title: "I loveeeeee uuuuu 💌", 
    body: "Hum pehle kitni saari baatein karte theeee, har chhoti-badi baat share karte the. 🥹💗 I know humne bahut mistakes ki hain, aur shayad maine zyada hi kar di. Isliye sab kuch aisa ho gaya. But I still want to be the person jisse tu bina dare sab kuch share kar sake, apni problems bata sake, hass sake, aur apni bakwaas bhi kar sakeeee. 😭😂🫂 I want to care for you, understand you, and make you feel safe. I miss our old wali vibe, bestieeeee. I just want us to talk like before again. 🥺💗🧸", 
    note: "I'm sending you the biggest, warmest hug." 
  } 
]; 
 
 
 
function App() { 
  const [index, setIndex] = useState(0); 
  const [welcome, setWelcome] = useState(true); 
  const [muted, setMuted] = useState(false); 
  const [started, setStarted] = useState(false); 
  const [volume, setVolume] = useState(0.70); 
  const audioRef = useRef(null); 
  const touchStart = useRef(null); 
 
  useEffect(() => { 
    if (audioRef.current) { 
      audioRef.current.volume = 0.70; 
      audioRef.current.muted = false; 
    } 
  }, []); 
 
  useEffect(() => { 
    if (audioRef.current) { 
      audioRef.current.volume = 0.70; 
      audioRef.current.muted = muted; 
    } 
  }, [muted]); 
 
  
 
const startMusic = async () => { 
  if (!audioRef.current) return; 
 
  audioRef.current.volume = 0.7; 
  audioRef.current.loop = true; 
 
  try { 
    await audioRef.current.play(); 
  } catch (error) { 
    console.log("Tap the screen to start music."); 
  } 
}; 
  const next = () => { startMusic(); setIndex(i => (i + 1) % slides.length); }; 
  const slide = slides[index]; 
  const stickerGifs = [ 
  "/bubududu-1.gif", 
  "/bubududu-2.gif", 
  "/bubududu-3.gif", 
  "/bubududu-4.gif", 
  "/bubududu-5.gif", 
  "/bubududu-6.gif", 
  "/bubududu-7.gif", 
  "/bubududu-8.gif", 
  "/bubududu-9.gif", 
  "/bubududu-10.gif" 
]; 
  const activeGif = stickerGifs[index % stickerGifs.length]; 
 
  const onTouchStart = e => { touchStart.current = e.touches[0].clientX; }; 
  const onTouchEnd = e => { 
    if (touchStart.current === null) return; 
    const dx = e.changedTouches[0].clientX - touchStart.current; 
    if (Math.abs(dx) > 55) dx < 0 ? next() : prev(); 
    touchStart.current = null; 
  }; 
 
  return ( 
    <main className="app-shell"> 
      <div className="ambient ambient-one" /><div className="ambient ambient-two" /> 
 
 
      <section className={`story-area ${welcome ? "welcome-mode" : "story-mode"}`} onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}> 
        {welcome ? ( 
          <button className="welcome-screen" onClick={() => { setWelcome(false); startMusic(); }} aria-label="Open your letter"> 
            <div className="welcome-greeting">Hi, <span>Chotiiiiiii</span></div> 
            <div className="welcome-love">I&nbsp; Love&nbsp; U</div> 
            <div className="welcome-gif"><img src="/dudu-main.gif" alt="Dudu and Bubu hugging" /></div> 
            <div className="tap-me">tap on me <span>♡</span></div> 
          </button> 
        ) : ( 
          <> 
          <div className="intro compact-intro"> 
            <span className="tiny-pill"><Sparkles size={13}/> A LITTLE NOTE FOR YOU</span> 
          </div> 
 
        <div className="deck-wrap"> 
          <div className="back-card back-two" aria-hidden="true" /> 
          <div className="back-card back-one" aria-hidden="true" /> 
          <article key={index} className="story-card"> 
            <div className="card-top"> 
              <div className="fixed-dudu" aria-label="Dudu and Bubu animated sticker"> 
                <img src="/bubu-dudu.gif" alt="Dudu and Bubu" /> 
              </div> 
              <div className="center-dudu" aria-label="Dudu and Bubu animated sticker"> 
                <img src={activeGif} alt="Dudu and Bubu" /> 
              </div> 
            </div> 
            <h2>{slide.title}</h2> 
            <div className="glass-box body-box"><p>{slide.body}</p></div> 
            <div className="card-footer"> 
              <span>{slide.note}</span> 
              <span className="page-emoji" aria-label="cute emoji">{["🥺","🧸","💗","🙈","🥹","🫂","🌷","💞","💌","🐻"][index]}</span> 
            </div> 
          </article> 
        </div> 
 
        <div className="music-wave-row" aria-label="Background music playing"> 
          <span className="wave-label">♡</span> 
          <div className={`music-wave ${started && !muted ? "playing" : ""}`} aria-hidden="true"> 
            <i/><i/><i/><i/><i/><i/><i/><i/><i/><i/><i/><i/><i/><i/><i/><i/><i/><i/><i/> 
          </div> 
          <span className="wave-label">♡</span> 
        </div> 
        </> 
        )} 
      </section> 
 
      <audio ref={audioRef} src="/song.mp3" loop preload="auto" /> 
      <div className="tiny-signoff">made with ♡ for you</div> 
    </main> 
  ); 
} 
 
createRoot(document.getElementById("root")).render(<App />); 