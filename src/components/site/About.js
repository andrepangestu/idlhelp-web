import { about } from "@/data/content";
import LocalizedText from "./LocalizedText";
import SectionHeading from "./SectionHeading";

const About = () => {
	return (
		<section id="about" className="iag-section" aria-labelledby="about-title">
			<div className="iag-container iag-about">
				<div className="iag-about__media" data-reveal>
					<div className="iag-about__frame">
						<img
							src="/images/site/about-consultation.webp"
							alt={about.imageAlt}
							width="2048"
							height="1365"
							loading="lazy"
						/>
					</div>
					<div className="iag-about__badge">
						<i className="fa-light fa-shield-check" aria-hidden="true"></i>
						<div>
							<strong>
								<LocalizedText value={about.badgeTitle} />
							</strong>
							<span>
								<LocalizedText value={about.badgeText} />
							</span>
						</div>
					</div>
				</div>

				<div className="iag-about__copy">
					<SectionHeading
						id="about-title"
						eyebrow={about.eyebrow}
						title={about.title}
						text={about.text}
					/>

					<div className="iag-about__lists">
						<div className="iag-about__list iag-about__list--do">
							<h3>
								<LocalizedText value={about.doTitle} />
							</h3>
							<ul>
								{about.weDo.map((item) => (
									<li key={item.en}>
										<i className="fa-solid fa-check" aria-hidden="true"></i>
										<LocalizedText value={item} />
									</li>
								))}
							</ul>
						</div>
						<div className="iag-about__list iag-about__list--dont">
							<h3>
								<LocalizedText value={about.doNotTitle} />
							</h3>
							<ul>
								{about.weDoNot.map((item) => (
									<li key={item.en}>
										<i className="fa-solid fa-xmark" aria-hidden="true"></i>
										<LocalizedText value={item} />
									</li>
								))}
							</ul>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
