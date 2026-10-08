import {useEffect,useState} from 'react';import {nav,COMPANY,LOGO_ALT} from '../data/nav.js';
export default function Header(){const [s,setS]=useState(false),[o,setO]=useState(false),[act,setAct]=useState('#home');
useEffect(()=>{const f=()=>setS(scrollY>12);f();addEventListener('scroll',f,{passive:true});return()=>removeEventListener('scroll',f)},[]);
useEffect(()=>{const io=new IntersectionObserver(es=>es.forEach(e=>e.isIntersecting&&setAct('#'+e.target.id)),{rootMargin:'-45% 0px -50% 0px'});document.querySelectorAll('section[id]').forEach(n=>io.observe(n));return()=>io.disconnect()},[]);
return(<header className={`hdr ${s?'solid':''} ${o?'open':''}`}><div className="wrap hdr-in">
<a href="#home" className="brand" aria-label={`${COMPANY} – home`}><img src="/logo.png" alt={LOGO_ALT} width="54" height="54"/><span className="co">{COMPANY}</span></a>
<nav aria-label="Main">{nav.map(([n,h,sub])=><div key={n} className="ni"><a href={h} className={act===h?'act':undefined} aria-current={act===h?'true':undefined} onClick={()=>setO(false)}>{n}</a>{sub&&<div className="dd">{sub.map(x=><a key={x} href={h} onClick={()=>setO(false)}>{x}</a>)}</div>}</div>)}</nav>
<a className="btn pri sm" href="#contact">Get a quote</a>
<button className="burger" aria-label="Menu" aria-expanded={o} onClick={()=>setO(!o)}><i/><i/><i/></button></div></header>)}
