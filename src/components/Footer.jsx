export default function Footer(){const c=[['Company',['Products','Solutions','Projects','About','Contact']],['Support',['Support','AMC','Remote monitoring']]];
return(<footer className="ftr"><div className="wrap fgrid"><div><img src="/logo.png" alt="MSTS" width="56" height="56"/><h3>MSTS</h3><p>Micro Solution Technology Private Limited</p><p>Brand: ARAN™</p></div>
{c.map(([t,l])=><div key={t}><h4>{t}</h4>{l.map(x=><a key={x} href="#home">{x}</a>)}</div>)}</div><p className="copy">© {new Date().getFullYear()} Micro Solution Technology Private Limited. ARAN™ is a brand of MSTS.</p></footer>)}
