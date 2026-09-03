/**
 * Decorative Jakarta skyline (with the Monas monument) and a road in perspective.
 * Purely ornamental; rendered as translucent strokes over dark sections.
 */
const buildings = [
	[0, 200, 70],
	[80, 240, 56],
	[146, 160, 84],
	[240, 258, 46],
	[296, 210, 66],
	[372, 176, 58],
	[440, 236, 76],
	[526, 262, 40],
	[672, 246, 48],
	[730, 214, 68],
	[808, 170, 60],
	[878, 232, 84],
	[972, 196, 56],
	[1038, 150, 80],
	[1128, 228, 72],
];

const SkylineArt = ({ className = "", id = "hero" }) => {
	const buildingFill = `iag-bld-${id}`;
	const roadFill = `iag-road-${id}`;

	return (
		<div className={`iag-art ${className}`} aria-hidden="true">
			<svg viewBox="0 0 1200 320" preserveAspectRatio="xMidYMax slice" fill="none">
				<defs>
					<linearGradient id={buildingFill} x1="0" y1="0" x2="0" y2="1">
						<stop offset="0" stopColor="#ffffff" stopOpacity="0.14" />
						<stop offset="1" stopColor="#ffffff" stopOpacity="0.03" />
					</linearGradient>
					<linearGradient id={roadFill} x1="0" y1="0" x2="0" y2="1">
						<stop offset="0" stopColor="#ffffff" stopOpacity="0.02" />
						<stop offset="1" stopColor="#ffffff" stopOpacity="0.12" />
					</linearGradient>
				</defs>

				{/* buildings */}
				{buildings.map(([x, top, w]) => (
					<rect
						key={x}
						x={x}
						y={top}
						width={w}
						height={300 - top}
						fill={`url(#${buildingFill})`}
						stroke="#ffffff"
						strokeOpacity="0.22"
					/>
				))}

				{/* Monas monument */}
				<rect x="566" y="262" width="68" height="38" fill={`url(#${buildingFill})`} stroke="#ffffff" strokeOpacity="0.28" />
				<polygon points="590,262 610,262 605,70 595,70" fill="#ffffff" fillOpacity="0.12" stroke="#ffffff" strokeOpacity="0.4" />
				<polygon points="600,42 610,66 590,66" fill="#f0c14b" fillOpacity="0.9" />
				<polygon points="600,50 606,66 594,66" fill="#ffffff" fillOpacity="0.6" />

				{/* road in perspective */}
				<polygon points="0,320 1200,320 780,300 420,300" fill={`url(#${roadFill})`} />
				<line x1="600" y1="300" x2="600" y2="320" stroke="#f0c14b" strokeOpacity="0.7" strokeWidth="3" strokeDasharray="6 6" />
				<line x1="0" y1="300" x2="1200" y2="300" stroke="#ffffff" strokeOpacity="0.28" />
			</svg>
		</div>
	);
};

export default SkylineArt;
