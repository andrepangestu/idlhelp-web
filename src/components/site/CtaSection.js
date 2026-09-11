import { cta } from "@/data/content";
import { site, whatsappLink } from "@/data/site";
import LocalizedText from "./LocalizedText";
import SkylineArt from "./SkylineArt";

const CtaSection = () => {
	return (
		<section id="contact" className="iag-section" aria-labelledby="cta-title">
			<div className="iag-container">
				<div className="iag-cta" data-reveal>
					<div className="iag-glow" aria-hidden="true"></div>
					<div className="iag-dots" aria-hidden="true"></div>
					<SkylineArt id="cta" />

					<span className="iag-cta__icon" aria-hidden="true">
						<i className="fa-light fa-headset"></i>
					</span>
					<h2 id="cta-title" className="iag-h2">
						<LocalizedText value={cta.title} />
					</h2>
					<p>
						<LocalizedText value={cta.text} />
					</p>
					<div className="iag-cta__actions">
						<a className="iag-btn iag-btn--gold" href={whatsappLink()} target="_blank" rel="noopener noreferrer">
							<i className="fa-brands fa-whatsapp" aria-hidden="true"></i>
							<LocalizedText value={cta.primaryAction} />
						</a>
						<a className="iag-btn iag-btn--outline-light" href="#sim-overview">
							<i className="fa-light fa-list-check" aria-hidden="true"></i>
							<LocalizedText value={cta.secondaryAction} />
						</a>
					</div>
					<a className="iag-cta__mail" href={`mailto:${site.email}`}>
						<LocalizedText value={cta.emailPrefix} /> {site.email}
					</a>
				</div>
			</div>
		</section>
	);
};

export default CtaSection;
