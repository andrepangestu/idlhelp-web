import { hero, heroOptions, heroPoints } from "@/data/content";
import { site, whatsappLink } from "@/data/site";
import LocalizedText from "./LocalizedText";
import SkylineArt from "./SkylineArt";

const GaugeArt = () => (
	<svg className="iag-hero__gauge" viewBox="0 0 400 400" aria-hidden="true" fill="none">
		<defs>
			<linearGradient id="iag-gauge" x1="0" y1="0" x2="1" y2="1">
				<stop offset="0" stopColor="#f0c14b" />
				<stop offset="1" stopColor="#b8860b" />
			</linearGradient>
		</defs>
		<path d="M64 268 A160 160 0 1 1 336 268" stroke="url(#iag-gauge)" strokeWidth="6" strokeLinecap="round" />
		<path d="M82 250 A138 138 0 1 1 318 250" stroke="#f0c14b" strokeOpacity="0.9" strokeWidth="14" strokeDasharray="3 30" />
		<line x1="200" y1="260" x2="286" y2="150" stroke="#ffffff" strokeOpacity="0.85" strokeWidth="6" strokeLinecap="round" />
		<circle cx="200" cy="260" r="12" fill="#0a1f44" stroke="#f0c14b" strokeWidth="4" />
	</svg>
);

const Hero = () => {
	return (
		<section id="home" className="iag-hero" aria-labelledby="hero-title">
			{site.heroPhoto ? (
				<div className="iag-hero__photo" style={{ backgroundImage: `url(${site.heroPhoto})` }} aria-hidden="true"></div>
			) : null}
			<div className="iag-glow" aria-hidden="true"></div>
			<div className="iag-dots" aria-hidden="true"></div>
			<GaugeArt />
			<SkylineArt />

			<div className="iag-container iag-hero__grid">
				<div className="iag-hero__copy">
					<span className="iag-hero__chip">
						<LocalizedText value={hero.chip} />
					</span>

					<h1 id="hero-title" className="iag-h1 iag-hero__title">
						<LocalizedText value={hero.title} />
					</h1>

					<div className="iag-hero__rule" aria-hidden="true"></div>

					<p className="iag-hero__lead">
						<LocalizedText value={hero.lead} />
					</p>

					<p className="iag-hero__text">
						<LocalizedText value={hero.text} />
					</p>

					<div className="iag-hero__actions">
						<a className="iag-btn iag-btn--gold" href="#sim-overview">
							<i className="fa-light fa-book-open-cover" aria-hidden="true"></i>
							<LocalizedText value={hero.primaryAction} />
						</a>
						<a className="iag-btn iag-btn--outline-light" href="#how-it-works">
							<i className="fa-light fa-circle-info" aria-hidden="true"></i>
							<LocalizedText value={hero.secondaryAction} />
						</a>
					</div>

					<ul className="iag-hero__points" aria-label="Service highlights">
						{heroPoints.map((point) => (
							<li key={point.label.en}>
								<i className={point.icon} aria-hidden="true"></i>
								<LocalizedText value={point.label} />
							</li>
						))}
					</ul>
				</div>

				<div className="iag-hero__side">
					<aside className="iag-panel" aria-labelledby="panel-title">
						<div className="iag-panel__head">
							<span className="iag-panel__icon" aria-hidden="true">
								<i className="fa-light fa-comments"></i>
							</span>
							<div>
								<h2 id="panel-title">
									<LocalizedText value={hero.panelTitle} />
								</h2>
								<p>
									<LocalizedText value={hero.panelText} />
								</p>
							</div>
						</div>

						<div className="iag-panel__options">
							{heroOptions.map((option) => (
								<a
									key={option.id}
									className="iag-option"
									href={option.href}
								>
									<i className={option.icon} aria-hidden="true"></i>
									<LocalizedText value={option.label} />
								</a>
							))}
						</div>

						<div className="iag-panel__foot">
							<span>
								<LocalizedText value={hero.panelElse} />
							</span>
							<a href={whatsappLink()} target="_blank" rel="noopener noreferrer">
								<LocalizedText value={hero.panelChat} />
								<i className="fa-light fa-arrow-right" aria-hidden="true"></i>
							</a>
						</div>

						<p className="iag-panel__note">
							<i className="fa-light fa-shield-check" aria-hidden="true"></i>
							<LocalizedText value={hero.panelNote} />
						</p>
					</aside>
				</div>
			</div>
		</section>
	);
};

export default Hero;
