import { disclaimer } from "@/data/content";

const Disclaimer = () => {
	return (
		<section id="disclaimer" className="iag-disclaimer" aria-labelledby="disclaimer-title">
			<div className="iag-container">
				<div className="iag-disclaimer__box">
					<i className="fa-light fa-scale-balanced" aria-hidden="true"></i>
					<div>
						<h2 id="disclaimer-title">{disclaimer.title}</h2>
						{disclaimer.paragraphs.map((paragraph) => (
							<p key={paragraph}>{paragraph}</p>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Disclaimer;
