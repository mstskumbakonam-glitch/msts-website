export default function Visual({k}){
const beam=<path className="beam" d="M200 215L120 380H280z" fill="url(#g)"/>;
return(<svg viewBox="0 0 400 420" className="vis" role="img" aria-label="Security technology illustration">
<defs><linearGradient id="g" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#35d0ff" stopOpacity=".5"/><stop offset="1" stopColor="#35d0ff" stopOpacity="0"/></linearGradient>
<radialGradient id="l"><stop offset="0" stopColor="#35d0ff"/><stop offset=".5" stopColor="#1f5fd6"/><stop offset="1" stopColor="#06122b"/></radialGradient></defs>
<circle className="ring" cx="200" cy="200" r="170" fill="none" stroke="#2f8cff" strokeOpacity=".25" strokeDasharray="2 8"/>
<circle cx="200" cy="200" r="120" fill="none" stroke="#2f8cff" strokeOpacity=".2"/>
<g className="float">
{k==='dome'&&<g>{beam}<path d="M110 200a90 90 0 01180 0v20H110z" fill="#e8eefc"/><rect x="100" y="216" width="200" height="16" rx="8" fill="#b9c6e6"/><circle className="lens" cx="200" cy="190" r="42" fill="url(#l)" stroke="#06122b" strokeWidth="6"/><circle cx="188" cy="178" r="8" fill="#fff" opacity=".7"/></g>}
{k==='bullet'&&<g transform="rotate(-8 200 200)">{beam}<rect x="90" y="160" width="190" height="70" rx="30" fill="#e8eefc"/><rect x="250" y="168" width="40" height="54" rx="18" fill="#b9c6e6"/><circle className="lens" cx="272" cy="195" r="20" fill="url(#l)"/><rect x="120" y="150" width="130" height="14" rx="7" fill="#b9c6e6"/><rect x="60" y="200" width="36" height="14" rx="7" fill="#7f93c4"/></g>}
{k==='ai'&&<g><rect x="70" y="110" width="260" height="200" rx="14" fill="#0b1c40" stroke="#2f8cff" strokeOpacity=".6"/>
<g className="box"><rect x="110" y="150" width="60" height="130" fill="none" stroke="#35d0ff" strokeWidth="2"/><text x="112" y="145" fill="#35d0ff" fontSize="11">ID 014</text></g>
<g className="box b2"><rect x="215" y="175" width="50" height="105" fill="none" stroke="#35d0ff" strokeWidth="2"/><text x="217" y="170" fill="#35d0ff" fontSize="11">ID 021</text></g>
<text x="82" y="130" fill="#9db4e6" fontSize="11">People 2 · Density low</text></g>}
{k==='net'&&<g stroke="#2f8cff" strokeWidth="2">{[[200,120],[110,240],[290,240],[200,330]].map(([x,y],i)=><g key={i}><line x1="200" y1="215" x2={x} y2={y} strokeDasharray="4 6" className="flow"/><circle cx={x} cy={y} r="24" fill="#0b1c40"/><circle cx={x} cy={y} r="7" fill="#35d0ff"/></g>)}<circle cx="200" cy="215" r="36" fill="#1f5fd6"/></g>}
</g></svg>)}
