import {useEffect,useState} from 'react';
const nav=[['Home','#home'],['Products','#products',['CCTV Cameras','NVR & DVR','Accessories']],['Solutions','#solutions',['CCTV','AI Security','Fire Alarm','Access Control']],['Projects','#projects'],['About','#about'],['Contact','#contact']];
export default function Header(){const [s,setS]=useState(false),[o,setO]=useState(false);
useEffect(()=>{const f=()=>setS(scrollY>40);f();addEventListener('scroll',f,{passive:true});return()=>removeEventListener('scroll',f)},[]);
return(<header className={`hdr ${s?'solid':''} ${o?'open':''}`}><div className="wrap hdr-in">
<a href="#home" className="brand" aria-label="MSTS home"><img src="/logo.png" alt="MSTS logo" width="46" height="46"/><span>MSTS</span></a>
<nav aria-label="Main">{nav.map(([n,h,sub])=><div key={n} className="ni"><a href={h} onClick={()=>setO(false)}>{n}</a>{sub&&<div className="dd">{sub.map(x=><a key={x} href={h}>{x}</a>)}</div>}</div>)}</nav>
<a className="btn pri sm" href="#contact">Get a quote</a>
<button className="burger" aria-label="Menu" aria-expanded={o} onClick={()=>setO(!o)}><i/><i/><i/></button></div></header>)}
