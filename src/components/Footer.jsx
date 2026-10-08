import {nav,COMPANY,LOGO_ALT} from '../data/nav.js';
const support=['Support','AMC','Remote monitoring'];
export default function Footer(){return(<footer className="ftr"><div className="wrap fgrid">
<div><span className="logo-tile"><img src="/logo.png" alt={LOGO_ALT} width="72" height="72"/></span><h3 className="co">{COMPANY}</h3><p>Integrated security &amp; technology solutions.</p></div>
<div><h4>Quick Links</h4>{nav.map(([n,h])=><a key={n} href={h}>{n}</a>)}</div>
<div><h4>Support</h4>{support.map(x=><a key={x} href="#contact">{x}</a>)}</div></div>
<p className="copy">© {new Date().getFullYear()} Micro Solution Technology Private Limited. All rights reserved.</p></footer>)}
