import { site, whatsappLink } from "@/data/site";
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
						Need general administrative guidance?
					</h2>
					<p>
						Speak with our independent assistance team. We are here to help you
						understand and prepare.
					</p>
					<div className="iag-cta__actions">
						<a className="iag-btn iag-btn--gold" href={whatsappLink()} target="_blank" rel="noopener noreferrer">
							<i className="fa-brands fa-whatsapp" aria-hidden="true"></i>
							Request a Consultation
						</a>
						<a className="iag-btn iag-btn--outline-light" href="#services">
							<i className="fa-light fa-list-check" aria-hidden="true"></i>
							See what we help with
						</a>
					</div>
					<a className="iag-cta__mail" href={`mailto:${site.email}`}>
						or email {site.email}
					</a>
				</div>
			</div>
		</section>
	);
};

export default CtaSection;
