// Only verified project facts already on the site. Add case studies here as they are confirmed.
const items=[['300+','Temple and security projects'],['Government','Project experience'],['Chennai + Kumbakonam','Service presence']];
export default function Projects(){return(<section id="projects" className="sec white"><div className="wrap">
<div className="sec-head"><div className="rv"><span className="eyebrow"><span className="mark" aria-hidden="true"><i/><i/><i/></span>Projects</span><h2>Project experience</h2></div>
<p className="lead rv">Security and technology installations delivered by MSTS. Detailed case studies will be added here.</p></div>
<div className="pgrid">{items.map(([b,t],n)=><div key={t} className="pcard rv" style={{'--d':`${n*70}ms`}}><b>{b}</b><span>{t}</span></div>)}</div></div></section>)}
