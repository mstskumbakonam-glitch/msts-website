import {useEffect,useRef,useState} from 'react';
function Num({to,suf}){const r=useRef(),[v,setV]=useState(0);
useEffect(()=>{const io=new IntersectionObserver(([e])=>{if(!e.isIntersecting)return;io.disconnect();const t0=performance.now(),f=t=>{const p=Math.min((t-t0)/1400,1);setV(Math.round(to*(1-Math.pow(1-p,3))));if(p<1)requestAnimationFrame(f)};requestAnimationFrame(f)});io.observe(r.current);return()=>io.disconnect()},[to]);
return <b ref={r}>{v}{suf}</b>}
export default function TrustStats(){return(<section className="stats"><div className="wrap sgrid">
<div><Num to={13} suf="+ years"/><span>Industry experience</span></div><div><Num to={300} suf="+"/><span>Temple and security projects</span></div>
<div><b>Government</b><span>Project experience</span></div><div><b>Chennai + Kumbakonam</b><span>Service presence</span></div></div></section>)}
