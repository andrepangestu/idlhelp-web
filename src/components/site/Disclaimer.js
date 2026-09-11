import { disclaimer } from "@/data/content";
import LocalizedText from "./LocalizedText";

const Disclaimer = () => {
	return (
		<section id="disclaimer" className="iag-disclaimer" aria-labelledby="disclaimer-title">
			<div className="iag-container">
				<div className="iag-disclaimer__box">
					<i className="fa-light fa-scale-balanced" aria-hidden="true"></i>
					<div>
						<h2 id="disclaimer-title">
							<LocalizedText value={disclaimer.title} />
						</h2>
						{disclaimer.paragraphs.map((paragraph) => (
							<p key={paragraph.en}>
								<LocalizedText value={paragraph} preserveEnglish />
							</p>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Disclaimer;
