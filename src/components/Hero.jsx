import {useEffect,useRef,useState} from 'react';import {slides} from '../data/slides.js';import Visual from './Visual.jsx';
const DUR=5000,N=slides.length;
export default function Hero(){
const [i,setI]=useState(0);const bar=useRef(),el=useRef(0),paused=useRef(false);
useEffect(()=>{let last=performance.now(),raf;const t=now=>{if(!paused.current){el.current+=now-last;if(bar.current)bar.current.style.transform=`scaleX(${Math.min(el.current/DUR,1)})`;if(el.current>=DUR){el.current=0;setI(v=>(v+1)%N)}}last=now;raf=requestAnimationFrame(t)};raf=requestAnimationFrame(t);return()=>cancelAnimationFrame(raf)},[]);
const go=n=>{el.current=0;setI((n+N)%N)};
const pos=n=>{const d=(n-i+N)%N;return d===0?'on':d===N-1?'out':'next'};
return(<section id="home" className="hero" onMouseEnter={()=>paused.current=true} onMouseLeave={()=>paused.current=false} aria-roledescription="carousel" aria-label="Featured security solutions">
<div className="grid-bg"/><div className="sweep"/>
<div className="hero-in">{slides.map((s,n)=>(<div key={n} className={`slide ${pos(n)}`} aria-hidden={n!==i}>
<div className="txt">{n===0?<h1 className="a1">{s.h[0]}<br/>{s.h[1]}</h1>:<h2 className="a1">{s.h[0]}<br/>{s.h[1]}</h2>}
<p className="a2">{s.p}</p><div className="btns a3"><a className="btn pri" href="#solutions">{s.cta}</a><a className="btn ghost" href="#contact">Get a quote</a></div></div>
<div className="viz"><Visual k={s.k}/></div></div>))}</div>
<div className="ctrl"><button aria-label="Previous slide" onClick={()=>go(i-1)}>‹</button>
<div className="dots">{slides.map((_,n)=><button key={n} aria-label={`Slide ${n+1}`} className={n===i?'act':''} onClick={()=>go(n)}>{n===i&&<span ref={bar} className="fill"/>}</button>)}</div>
<button aria-label="Next slide" onClick={()=>go(i+1)}>›</button><span className="num">{String(i+1).padStart(2,'0')} / {String(N).padStart(2,'0')}</span></div>
</section>)}
