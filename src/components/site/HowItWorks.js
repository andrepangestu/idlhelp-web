import { steps } from "@/data/content";
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
					eyebrow="How it works"
					title="A simple, clear process"
					text="From your first message to the official channel, you always know what comes next."
				/>

				<ol className="iag-steps">
					{steps.map((step, index) => (
						<li
							className="iag-step"
							key={step.title}
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
								{step.title}
							</h3>
							<p>{step.text}</p>
						</li>
					))}
				</ol>
			</div>
		</section>
	);
};

export default HowItWorks;
