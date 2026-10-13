import {useEffect,useState} from 'react';

// Hero illustration: wall-mounted bullet CCTV camera sweeping its field of view
// across a gate, with a live-feed monitoring card. MSTS logo colours only.
const B='#61A5CC',BD='#1F6F99',BL='#EAF4FA',G='#60AB55',GD='#3B7D36',R='#ED603D',LINE='#C5D5DF',INK='#0E2F44';
// Camera is drawn pointing left, then aimed down at the gate around its wall-joint pivot.
const PIVOT='440 100',AIM=-32;

function Clock(){
  const [t,setT]=useState(()=>new Date());
  useEffect(()=>{const id=setInterval(()=>setT(new Date()),1000);return()=>clearInterval(id)},[]);
  return <time dateTime={t.toISOString()}>{t.toLocaleTimeString('en-GB',{hour12:false})}</time>;
}

function Gate(){
  const bars=Array.from({length:9},(_,i)=>60+i*18);
  return <g>
    <line x1="10" y1="420" x2="550" y2="420" stroke={LINE} strokeWidth="1.5"/>
    {[0,1,2,3,4,5].map(i=><line key={i} x1={40+i*90} y1="420" x2={i*110-20} y2="470" stroke={LINE} strokeOpacity=".5"/>)}
    {/* gate pillars and bars */}
    <rect x="34" y="292" width="22" height="128" rx="2" fill="#fff" stroke={BD} strokeWidth="2"/>
    <rect x="222" y="292" width="22" height="128" rx="2" fill="#fff" stroke={BD} strokeWidth="2"/>
    <rect x="30" y="284" width="30" height="10" rx="2" fill={BL} stroke={BD} strokeWidth="2"/>
    <rect x="218" y="284" width="30" height="10" rx="2" fill={BL} stroke={BD} strokeWidth="2"/>
    <path d="M56 318H222M56 404H222" stroke={BD} strokeWidth="2"/>
    {bars.map(x=><line key={x} x1={x} y1="318" x2={x} y2="404" stroke={LINE} strokeWidth="2"/>)}
    {/* person passing the gate */}
    <g className="walker">
      <circle cx="130" cy="338" r="10" fill={BL} stroke={BD} strokeWidth="2"/>
      <path d="M112 418v-46a18 16 0 0136 0v46" fill={BL} stroke={BD} strokeWidth="2"/>
      <rect className="det" x="102" y="320" width="56" height="102" fill="none" stroke={G} strokeWidth="2"/>
      <rect x="102" y="306" width="50" height="14" fill={G}/>
      <text x="106" y="316" className="lab" fill="#fff">PERSON</text>
    </g>
  </g>;
}

function Camera(){
  return <g transform={`rotate(${AIM} ${PIVOT})`}>
    <g className="pan">
      {/* field of view */}
      <polygon className="cone" points="252,130 252,146 -40,52 -40,230" fill="url(#cone)"/>
      <line x1="252" y1="138" x2="10" y2="138" stroke={B} strokeOpacity=".55" strokeDasharray="3 7" className="flow"/>
      {/* neck */}
      <rect x="430" y="98" width="18" height="16" rx="3" fill="#fff" stroke={BD} strokeWidth="2.5"/>
      {/* sun shield */}
      <rect x="258" y="104" width="186" height="13" rx="5" fill={BL} stroke={BD} strokeWidth="2.5"/>
      {/* body */}
      <rect x="270" y="116" width="164" height="46" rx="20" fill="#fff" stroke={BD} strokeWidth="2.5"/>
      <rect x="422" y="122" width="16" height="34" rx="5" fill={BL} stroke={BD} strokeWidth="2.5"/>
      <line x1="300" y1="152" x2="404" y2="152" stroke={LINE} strokeWidth="2" strokeLinecap="round"/>
      {/* logo-colour mark */}
      <g><rect x="372" y="129" width="16" height="4" rx="2" fill={B}/><rect x="390" y="129" width="7" height="4" rx="2" fill={G}/><rect x="399" y="129" width="3" height="4" rx="1.5" fill={R}/></g>
      <circle className="blink" cx="300" cy="131" r="3.5" fill={R}/>
      {/* lens */}
      <rect x="250" y="112" width="28" height="54" rx="9" fill={BD}/>
      <ellipse cx="252" cy="139" rx="7" ry="21" fill="url(#glass)"/>
      <ellipse className="glint" cx="250" cy="130" rx="2" ry="6" fill="#fff"/>
    </g>
  </g>;
}

export default function CctvScene(){
  return <div className="cam-stage">
    <svg viewBox="0 0 560 480" className="cam-svg" role="img" aria-label="Wall-mounted CCTV camera monitoring a gate">
      <defs>
        <linearGradient id="cone" x1="1" y1="0" x2="0" y2="0"><stop offset="0" stopColor={B} stopOpacity=".42"/><stop offset=".75" stopColor={B} stopOpacity=".06"/><stop offset="1" stopColor={B} stopOpacity="0"/></linearGradient>
        <radialGradient id="glass" cx=".4" cy=".35" r=".8"><stop offset="0" stopColor={B}/><stop offset=".55" stopColor={BD}/><stop offset="1" stopColor={INK}/></radialGradient>
      </defs>
      <Gate/>
      {/* wall and mount (static) */}
      <rect x="508" y="0" width="52" height="420" fill="#F6F9FB"/>
      <line x1="508" y1="0" x2="508" y2="420" stroke={LINE} strokeWidth="1.5"/>
      <rect x="486" y="56" width="22" height="92" rx="6" fill={BL} stroke={BD} strokeWidth="2.5"/>
      <circle cx="497" cy="70" r="2.5" fill={BD}/><circle cx="497" cy="134" r="2.5" fill={BD}/>
      <rect x="444" y="93" width="44" height="14" rx="4" fill="#fff" stroke={BD} strokeWidth="2.5"/>
      <Camera/>
      <circle cx="440" cy="100" r="11" fill="#fff" stroke={BD} strokeWidth="2.5"/>
      <circle cx="440" cy="100" r="4" fill={BD}/>
    </svg>

    <div className="chip" aria-hidden="true"><i/>Remote monitoring</div>

    <div className="feed" aria-hidden="true">
      <div className="feed-top"><span className="live"><i/>LIVE</span><span className="cam">CAM 01 · Main Gate</span><Clock/></div>
      <div className="feed-view">
        <svg viewBox="0 0 240 120" preserveAspectRatio="xMidYMid slice">
          <rect width="240" height="120" fill={BL}/>
          <path d="M0 96H240" stroke={LINE}/>
          {[30,60,90,120,150,180,210].map(x=><line key={x} x1={x} y1="36" x2={x} y2="96" stroke={LINE}/>)}
          <path d="M0 36H240" stroke={LINE}/>
          <g className="walker-s">
            <circle cx="104" cy="54" r="7" fill="#fff" stroke={BD} strokeWidth="1.5"/>
            <path d="M92 96V68a12 11 0 0124 0v28" fill="#fff" stroke={BD} strokeWidth="1.5"/>
            <rect x="86" y="42" width="36" height="56" fill="none" stroke={G} strokeWidth="1.5"/>
          </g>
          <rect className="feed-scan" x="0" y="0" width="240" height="3" fill={G} opacity=".5"/>
        </svg>
        <span className="det-tag">Motion detected</span>
      </div>
      <div className="feed-bot"><span><i className="ok"/>Recording</span><span>NVR · HD</span></div>
    </div>
  </div>;
}
