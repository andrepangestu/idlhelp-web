import { guide } from "@/data/content";
import LocalizedText from "./LocalizedText";
import SectionHeading from "./SectionHeading";

const GuideLabel = ({ value }) => (
	<span className="iag-guide__label">
		<LocalizedText value={value} />
	</span>
);

const GuideList = ({ items }) => (
	<ul className="iag-guide__checklist">
		{items.map((item) => (
			<li key={item.en}>
				<i className="fa-solid fa-check" aria-hidden="true"></i>
				<LocalizedText value={item} />
			</li>
		))}
	</ul>
);

const Services = () => {
	const guideLinks = [
		guide.overview,
		guide.categories,
		guide.requirements,
		guide.procedure,
		guide.vehicle,
	];

	return (
		<section
			id="services"
			className="iag-section iag-section--cloud iag-services-section"
			aria-labelledby="services-title"
		>
			<div className="iag-container">
				<SectionHeading
					id="services-title"
					center
					eyebrow={guide.heading.eyebrow}
					title={guide.heading.title}
					text={guide.heading.text}
				/>

				<nav className="iag-guide-index" aria-label="SIM guide topics / Topik panduan SIM">
					{guideLinks.map((item, index) => (
						<a key={item.id} className="iag-guide-index__link" href={`#${item.id}`}>
							<span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
							<LocalizedText value={item.title} />
						</a>
					))}
				</nav>

				<article
					id={guide.overview.id}
					className="iag-guide-feature"
					aria-labelledby="sim-overview-title"
					data-reveal
				>
					<div className="iag-guide-feature__copy">
						<GuideLabel value={guide.overview.label} />
						<h3 id="sim-overview-title">
							<LocalizedText value={guide.overview.title} />
						</h3>
						{guide.overview.paragraphs.map((paragraph) => (
							<p key={paragraph.en}>
								<LocalizedText value={paragraph} />
							</p>
						))}
					</div>
					<figure className="iag-guide-feature__media" aria-hidden="true">
						<img
							src={guide.overview.image}
							alt=""
							width="900"
							height="1601"
							loading="lazy"
						/>
						<span>SIM</span>
					</figure>
				</article>

				<div className="iag-guide-pair">
					<article
						id={guide.categories.id}
						className="iag-guide-block iag-guide-block--categories"
						aria-labelledby="sim-categories-title"
						data-reveal
					>
						<div className="iag-guide-block__heading">
							<div>
								<GuideLabel value={guide.categories.label} />
								<h3 id="sim-categories-title">
									<LocalizedText value={guide.categories.title} />
								</h3>
							</div>
							<img src={guide.categories.image} alt="" width="323" height="301" loading="lazy" />
						</div>
						<div className="iag-category-list">
							{guide.categories.items.map((item) => (
								<div className="iag-category-list__item" key={item.name}>
									<strong>{item.name}</strong>
									<p>
										<LocalizedText value={item.text} />
									</p>
								</div>
							))}
						</div>
					</article>

					<article
						id={guide.requirements.id}
						className="iag-guide-block iag-guide-block--requirements"
						aria-labelledby="sim-requirements-title"
						data-reveal
					>
						<div className="iag-guide-block__image" aria-hidden="true">
							<img src={guide.requirements.image} alt="" width="1200" height="802" loading="lazy" />
						</div>
						<GuideLabel value={guide.requirements.label} />
						<h3 id="sim-requirements-title">
							<LocalizedText value={guide.requirements.title} />
						</h3>
						<p>
							<LocalizedText value={guide.requirements.intro} />
						</p>
						<GuideList items={guide.requirements.items} />
					</article>
				</div>

				<article
					id={guide.procedure.id}
					className="iag-guide-procedure"
					aria-labelledby="sim-procedure-title"
					data-reveal
				>
					<div className="iag-guide-procedure__intro">
						<div>
							<GuideLabel value={guide.procedure.label} />
							<h3 id="sim-procedure-title">
								<LocalizedText value={guide.procedure.title} />
							</h3>
							<p>
								<LocalizedText value={guide.procedure.intro} />
							</p>
						</div>
						<img src={guide.procedure.image} alt="" width="1440" height="961" loading="lazy" />
					</div>
					<ol className="iag-official-steps">
						{guide.procedure.steps.map((step, index) => (
							<li key={step.title.en}>
								<span aria-hidden="true">{index + 1}</span>
								<div>
									<h4>
										<LocalizedText value={step.title} />
									</h4>
									<p>
										<LocalizedText value={step.text} />
									</p>
								</div>
							</li>
						))}
					</ol>
				</article>

				<article
					id={guide.vehicle.id}
					className="iag-guide-vehicle"
					aria-labelledby="vehicle-administration-title"
					data-reveal
				>
					<div>
						<GuideLabel value={guide.vehicle.label} />
						<h3 id="vehicle-administration-title">
							<LocalizedText value={guide.vehicle.title} />
						</h3>
						<p>
							<LocalizedText value={guide.vehicle.intro} />
						</p>
					</div>
					<GuideList items={guide.vehicle.items} />
				</article>

				<aside className="iag-guide-note">
					<i className="fa-light fa-circle-info" aria-hidden="true"></i>
					<div>
						<strong>
							<LocalizedText value={guide.note.title} />
						</strong>
						<p>
							<LocalizedText value={guide.note.text} />
						</p>
					</div>
				</aside>
			</div>
		</section>
	);
};

export default Services;
