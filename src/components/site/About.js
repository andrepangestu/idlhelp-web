import { about } from "@/data/content";
import ImagePlaceholder from "./ImagePlaceholder";
import SectionHeading from "./SectionHeading";

const About = () => {
	return (
		<section id="about" className="iag-section" aria-labelledby="about-title">
			<div className="iag-container iag-about">
				<div className="iag-about__media" data-reveal>
					<div className="iag-about__frame">
						<ImagePlaceholder
							label="About image"
							hint="Suggested: consultation or workspace scene · 960 × 720"
							ratio="4 / 3"
						/>
					</div>
					<div className="iag-about__badge">
						<i className="fa-light fa-shield-check" aria-hidden="true"></i>
						<div>
							<strong>Independent service</strong>
							<span>English · Consultation-based</span>
						</div>
					</div>
				</div>

				<div className="iag-about__copy">
					<SectionHeading
						id="about-title"
						eyebrow="About our service"
						title="Independent. Professional. Helpful."
						text={about.text}
					/>

					<div className="iag-about__lists">
						<div className="iag-about__list iag-about__list--do">
							<h3>What we do</h3>
							<ul>
								{about.weDo.map((item) => (
									<li key={item}>
										<i className="fa-solid fa-check" aria-hidden="true"></i>
										{item}
									</li>
								))}
							</ul>
						</div>
						<div className="iag-about__list iag-about__list--dont">
							<h3>What we do not do</h3>
							<ul>
								{about.weDoNot.map((item) => (
									<li key={item}>
										<i className="fa-solid fa-xmark" aria-hidden="true"></i>
										{item}
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
