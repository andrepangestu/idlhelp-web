import { services } from "@/data/content";
import { whatsappLink } from "@/data/site";
import SectionHeading from "./SectionHeading";

const Services = () => {
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
					eyebrow="Our services"
					title="How we can help you"
					text="Independent guidance and information to help you understand and prepare before using official channels."
				/>

				<div className="iag-services">
					{services.map((service, index) => (
						<article
							className="iag-service"
							key={service.id}
							data-reveal
							style={{ "--iag-delay": `${(index % 3) * 80}ms` }}
						>
							<div className="iag-service__icon" aria-hidden="true">
								<i className={service.icon}></i>
							</div>
							<h3>{service.title}</h3>
							<p>{service.text}</p>
							<a
								className="iag-service__link"
								href={whatsappLink(service.message)}
								target="_blank"
								rel="noopener noreferrer"
								aria-label={`Ask about ${service.title} on WhatsApp`}
							>
								Ask about this service
								<i className="fa-light fa-arrow-right" aria-hidden="true"></i>
							</a>
						</article>
					))}
				</div>
			</div>
		</section>
	);
};

export default Services;
