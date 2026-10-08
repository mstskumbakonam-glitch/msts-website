// Light-theme security-technology illustration built only from MSTS logo colours.
// Shared system (rings, radar, node network, frame, signal) + a centre piece per slide.
const B = '#61A5CC', BD = '#1F6F99', BL = '#EAF4FA', G = '#60AB55', GD = '#3B7D36', R = '#ED603D', LINE = '#C5D5DF';
const C = 220;
const pt = (r, deg) => [C + r * Math.cos((deg * Math.PI) / 180), C + r * Math.sin((deg * Math.PI) / 180)];
const NODE_ANG = [-90, -18, 54, 126, 198];
const nodes = NODE_ANG.map(a => pt(150, a));
const ticks = Array.from({ length: 72 }, (_, i) => {
  const a = i * 5, long = i % 6 === 0;
  const [x1, y1] = pt(long ? 176 : 180, a), [x2, y2] = pt(186, a);
  return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke={long ? BD : LINE} strokeWidth={long ? 1.5 : 1} />;
});
const [wx, wy] = pt(150, -42);
const wedge = `M${C} ${C}L${C + 150} ${C}A150 150 0 0 0 ${wx} ${wy}Z`;
const S = { fill: '#fff', stroke: BD, strokeWidth: 2.5, strokeLinejoin: 'round' };

function Dome() {
  return <g className="float">
    <rect x="148" y="176" width="144" height="16" rx="4" fill={BL} stroke={BD} strokeWidth="2.5" />
    <path d="M160 192a60 60 0 0 0 120 0z" {...S} />
    <circle cx="220" cy="222" r="24" {...S} />
    <circle cx="220" cy="222" r="13" fill={B} />
    <circle cx="215" cy="217" r="4" fill="#fff" />
    <circle className="blink" cx="258" cy="203" r="3.5" fill={R} />
  </g>;
}
function Bullet() {
  return <g className="float">
    <path d="M168 248v24h-34" fill="none" stroke={BD} strokeWidth="2.5" strokeLinecap="round" />
    <rect x="116" y="262" width="20" height="40" rx="3" fill={BL} stroke={BD} strokeWidth="2.5" />
    <rect x="132" y="180" width="150" height="12" rx="4" fill={BL} stroke={BD} strokeWidth="2.5" />
    <rect x="142" y="192" width="128" height="56" rx="10" {...S} />
    <rect x="270" y="198" width="26" height="44" rx="5" fill={BL} stroke={BD} strokeWidth="2.5" />
    <circle cx="283" cy="220" r="11" fill={B} stroke={BD} strokeWidth="2" />
    <circle cx="280" cy="217" r="3" fill="#fff" />
    <line x1="160" y1="232" x2="210" y2="232" stroke={LINE} strokeWidth="2" strokeLinecap="round" />
    <circle className="blink" cx="160" cy="210" r="3.5" fill={R} />
  </g>;
}
function Detect({ id }) {
  const corner = 'M140 168v-18h18M262 150h18v18M280 272v18h-18M158 290h-18v-18';
  const person = (x, y, s) => <g fill={BL} stroke={BD} strokeWidth="2">
    <circle cx={x} cy={y} r={9 * s} /><path d={`M${x - 18 * s} ${y + 62 * s}v-26a${18 * s} ${16 * s} 0 0 1 ${36 * s} 0v26`} />
  </g>;
  return <g>
    <rect x="140" y="150" width="140" height="140" fill="#fff" />
    <path d={corner} fill="none" stroke={BD} strokeWidth="3" strokeLinecap="round" />
    {person(186, 196, 1)}{person(244, 214, .8)}
    <rect x="162" y="180" width="48" height="82" fill="none" stroke={G} strokeWidth="2" />
    <rect x="224" y="200" width="40" height="64" fill="none" stroke={G} strokeWidth="2" strokeDasharray="4 3" />
    <text className="lab" x="162" y="175" fill={GD}>ID 014</text>
    <g className="scan"><rect x="142" y="142" width="136" height="12" fill={`url(#${id}-scan)`} /><line x1="142" y1="154" x2="278" y2="154" stroke={G} strokeWidth="2" /></g>
  </g>;
}
function Network() {
  return <g className="float">
    {[[34, .9], [52, .6], [70, .35]].map(([r, o], i) =>
      <path key={i} d={`M${C - r * .8} ${196 - r * .45}a${r} ${r} 0 0 1 ${r * 1.6} 0`} fill="none" stroke={i ? B : BD} strokeOpacity={o} strokeWidth="2.5" strokeLinecap="round" />)}
    <circle cx={C} cy="196" r="4" fill={BD} />
    <rect x="164" y="214" width="112" height="44" rx="6" {...S} />
    {[184, 200, 216, 232].map(x => <rect key={x} x={x} y="238" width="10" height="8" rx="1" fill={BL} stroke={BD} strokeWidth="1.5" />)}
    <circle cx="256" cy="230" r="4" fill={G} /><circle className="blink" cx="256" cy="244" r="3" fill={R} />
  </g>;
}

export default function Visual({ k }) {
  const id = `v-${k}`;
  return (
    <svg viewBox="0 0 440 440" className="vis" role="img" aria-label="Security technology illustration">
      <defs>
        <radialGradient id={`${id}-glow`}><stop offset="0" stopColor={B} stopOpacity=".22" /><stop offset="1" stopColor={B} stopOpacity="0" /></radialGradient>
        <linearGradient id={`${id}-sweep`} x1="1" y1="0" x2="0" y2="1"><stop offset="0" stopColor={G} stopOpacity=".28" /><stop offset="1" stopColor={G} stopOpacity="0" /></linearGradient>
        <linearGradient id={`${id}-scan`} x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor={G} stopOpacity="0" /><stop offset="1" stopColor={G} stopOpacity=".25" /></linearGradient>
      </defs>

      <circle cx={C} cy={C} r="210" fill={`url(#${id}-glow)`} />
      {/* scanning frame */}
      <path d="M16 56V16h40M384 16h40v40M424 384v40h-40M56 424H16v-40" fill="none" stroke={BD} strokeWidth="2" strokeLinecap="round" />
      <g className="lab" fill={BD}><circle className="blink" cx="34" cy="38" r="4" fill={R} /><text x="46" y="42">REC</text></g>
      <g className="sig" fill={BD}>{[0, 1, 2, 3].map(i => <rect key={i} x={378 + i * 8} y={42 - (i + 1) * 5} width="5" height={(i + 1) * 5} rx="1" opacity={i === 3 ? .35 : 1} />)}</g>

      {/* rings */}
      <circle className="rot ring-a" cx={C} cy={C} r="204" fill="none" stroke={B} strokeOpacity=".55" strokeDasharray="2 9" strokeWidth="1.5" />
      <g className="rot ring-b">{ticks}</g>
      <circle cx={C} cy={C} r="150" fill="#fff" stroke={LINE} strokeWidth="1.5" />
      <circle cx={C} cy={C} r="108" fill="none" stroke={B} strokeOpacity=".35" strokeDasharray="1 5" />
      <path d={`M${C - 150} ${C}H${C + 150}M${C} ${C - 150}V${C + 150}`} stroke={LINE} strokeOpacity=".6" />

      {/* radar sweep */}
      <g className="rot radar"><path d={wedge} fill={`url(#${id}-sweep)`} /><line x1={C} y1={C} x2={C + 150} y2={C} stroke={G} strokeWidth="1.5" strokeOpacity=".7" /></g>

      {/* node network */}
      <polygon points={nodes.map(p => p.join(',')).join(' ')} fill="none" stroke={G} strokeOpacity=".55" strokeWidth="1.5" className="flow" />
      {nodes.map(([x, y], i) => {
        const [ox, oy] = pt(204, NODE_ANG[i]);
        return <g key={i} className={`n${i + 1}`}>
          <line x1={x} y1={y} x2={ox} y2={oy} stroke={B} strokeOpacity=".6" strokeWidth="1.5" />
          <circle className="halo" cx={x} cy={y} r="7" fill="none" stroke={i === 1 ? G : B} strokeWidth="1.5" />
          <circle cx={x} cy={y} r="7" fill="#fff" stroke={i === 1 ? GD : BD} strokeWidth="2" />
          <circle cx={x} cy={y} r="2.5" fill={i === 1 ? G : BD} />
        </g>;
      })}

      {k === 'dome' && <Dome />}
      {k === 'bullet' && <Bullet />}
      {k === 'ai' && <Detect id={id} />}
      {k === 'net' && <Network />}
    </svg>
  );
}
