import { processSection, steps } from "@/data/content";
import LocalizedText from "./LocalizedText";
import SectionHeading from "./SectionHeading";

const HowItWorks = () => {
	return (
		<section
			id="how-it-works"
			className="iag-section iag-section--cloud"
			aria-labelledby="how-title"
		>
			<div className="iag-container">
				<SectionHeading
					id="how-title"
					center
					eyebrow={processSection.eyebrow}
					title={processSection.title}
					text={processSection.text}
				/>

				<ol className="iag-steps">
					{steps.map((step, index) => (
						<li
							className="iag-step"
							key={step.title.en}
							data-reveal
							style={{ "--iag-delay": `${index * 90}ms` }}
						>
							<div className="iag-step__badge">
								<i className={step.icon} aria-hidden="true"></i>
								<span className="iag-step__num" aria-hidden="true">
									{index + 1}
								</span>
							</div>
							<h3>
								<span className="iag-sr-only">Step {index + 1}: </span>
								<LocalizedText value={step.title} />
							</h3>
							<p>
								<LocalizedText value={step.text} />
							</p>
						</li>
					))}
				</ol>
			</div>
		</section>
	);
};

export default HowItWorks;
