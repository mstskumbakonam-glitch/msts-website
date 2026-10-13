import CctvScene from './CctvScene.jsx';
const services=['CCTV Surveillance','Fire Alarm','Access Control','Networking'];
export default function Hero(){return(<section id="home" className="hero" aria-labelledby="hero-title">
<div className="grid-bg"/><div className="glow"/>
<div className="wrap hero-grid">
<div className="txt">
<span className="eyebrow a0"><span className="mark" aria-hidden="true"><i/><i/><i/></span><span className="wm">MSTS</span><span className="sep">|</span>Security &amp; Technology</span>
<h1 id="hero-title" className="a1">Integrated Security &amp; <em>Technology</em> Solutions</h1>
<p className="a2">Smart security, surveillance and technology infrastructure solutions for institutions, businesses and public facilities.</p>
<div className="btns a3"><a className="btn pri" href="#solutions">Explore solutions</a><a className="btn ghost" href="#contact">Get a quote</a></div>
<ul className="svc a4" aria-label="Core services">{services.map(s=><li key={s}>{s}</li>)}</ul>
</div>
<div className="hero-viz a-viz"><CctvScene/></div>
</div></section>)}
