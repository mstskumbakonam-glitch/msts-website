import {solutions} from '../data/solutions.js';
export default function Solutions(){return(<section id="solutions" className="sec"><div className="wrap">
<div className="sec-head"><div className="rv"><span className="eyebrow"><span className="mark" aria-hidden="true"><i/><i/><i/></span>Solutions</span><h2>Complete security solutions</h2></div>
<p className="lead rv">Integrated technology designed to protect people, property and infrastructure.</p></div>
<div className="cards">{solutions.map((s,n)=><a href="#contact" key={s.title} className="card rv" style={{'--d':`${(n%3)*70}ms`}}>
<div className="top"><span className="ic"><svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={s.d}/></svg></span><span className="no">{String(n+1).padStart(2,'0')}</span></div>
<h3>{s.title}</h3><p>{s.text}</p><span className="more">Enquire</span></a>)}</div></div></section>)}
