// Uses only facts already published on the site (meta description, hero, stats, footer).
const delivers=['Design and installation by the MSTS team','CCTV, fire alarm, access control and networking, managed together','AMC and ongoing service support','Remote monitoring'];
export default function About(){return(<section id="about" className="sec white"><div className="wrap about">
<div className="rv"><span className="eyebrow"><span className="mark" aria-hidden="true"><i/><i/><i/></span>About Us</span>
<h2>Micro Solution Technology Private Limited</h2>
<p className="lead">MSTS provides CCTV, AI surveillance, fire alarm, access control, networking and integrated security solutions for institutions, businesses and public facilities.</p>
<p className="lead">With more than 13 years of industry experience, we serve customers from Chennai and Kumbakonam.</p></div>
<ul className="facts rv" style={{'--d':'120ms'}}>{delivers.map(d=><li key={d}>{d}</li>)}</ul></div></section>)}
