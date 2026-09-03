import { audiences } from "@/data/content";
import SectionHeading from "./SectionHeading";

const WhoWeHelp = () => {
	return (
		<section className="iag-section" aria-labelledby="audience-title">
			<div className="iag-container">
				<SectionHeading
					id="audience-title"
					eyebrow="Who we help"
					title="Made for foreigners dealing with Indonesian paperwork"
					text="Whether you drive, ride or simply need to understand a requirement, we explain it clearly in English."
				/>

				<div className="iag-audience">
					{audiences.map((item, index) => (
						<div
							className="iag-audience__item"
							key={item.title}
							data-reveal
							style={{ "--iag-delay": `${index * 70}ms` }}
						>
							<i className={item.icon} aria-hidden="true"></i>
							<div>
								<h3>{item.title}</h3>
								<p>{item.text}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default WhoWeHelp;
