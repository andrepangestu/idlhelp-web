import { trustItems } from "@/data/content";

const TrustStrip = () => {
	return (
		<section className="iag-trust" aria-labelledby="trust-title">
			<div className="iag-dots" aria-hidden="true"></div>
			<h2 id="trust-title" className="iag-sr-only">
				Why work with us
			</h2>
			<div className="iag-container iag-trust__grid">
				{trustItems.map((item, index) => (
					<div
						className="iag-trust__item"
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
		</section>
	);
};

export default TrustStrip;
