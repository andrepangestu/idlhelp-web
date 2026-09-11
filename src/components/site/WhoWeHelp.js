import { audiences, audiencesSection } from "@/data/content";
import LocalizedText from "./LocalizedText";
import SectionHeading from "./SectionHeading";

const WhoWeHelp = () => {
	return (
		<section className="iag-section" aria-labelledby="audience-title">
			<div className="iag-container">
				<SectionHeading
					id="audience-title"
					eyebrow={audiencesSection.eyebrow}
					title={audiencesSection.title}
					text={audiencesSection.text}
				/>

				<div className="iag-audience">
					{audiences.map((item, index) => (
						<div
							className="iag-audience__item"
							key={item.title.en}
							data-reveal
							style={{ "--iag-delay": `${index * 70}ms` }}
						>
							<i className={item.icon} aria-hidden="true"></i>
							<div>
								<h3>
									<LocalizedText value={item.title} />
								</h3>
								<p>
									<LocalizedText value={item.text} />
								</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default WhoWeHelp;
