import { footer, guide } from "@/data/content";
import { contactLabels, navItems, site, whatsappLink } from "@/data/site";
import LocalizedText from "./LocalizedText";
import Logo from "./Logo";

const SiteFooter = () => {
	const year = new Date().getFullYear();
	const guideLinks = [
		guide.overview,
		guide.categories,
		guide.requirements,
		guide.procedure,
		guide.vehicle,
	];

	return (
		<footer className="iag-footer">
			<div className="iag-dots" aria-hidden="true"></div>
			<div className="iag-container">
				<div className="iag-footer__grid">
					<div className="iag-footer__brand">
						<Logo light />
						<p>
							<LocalizedText value={footer.description} />
						</p>
					</div>

					<nav aria-labelledby="footer-links">
						<h3 id="footer-links">
							<LocalizedText value={footer.quickLinks} />
						</h3>
						<ul>
							{navItems.map((item) => (
								<li key={item.href}>
									<a href={item.href}>
										<LocalizedText value={item.label} />
									</a>
								</li>
							))}
						</ul>
					</nav>

					<nav aria-labelledby="footer-services">
						<h3 id="footer-services">
							<LocalizedText value={footer.information} />
						</h3>
						<ul>
							{guideLinks.map((item) => (
								<li key={item.id}>
									<a href={`#${item.id}`}>
										<LocalizedText value={item.title} />
									</a>
								</li>
							))}
						</ul>
					</nav>

					<nav aria-labelledby="footer-legal">
						<h3 id="footer-legal">
							<LocalizedText value={footer.legal} />
						</h3>
						<ul>
							<li>
								<a href="#disclaimer">
									<LocalizedText value={footer.disclaimer} />
								</a>
							</li>
							<li>
								<a href="#" title="Page to be added">
									<LocalizedText value={footer.privacy} />
								</a>
							</li>
							<li>
								<a href="#" title="Page to be added">
									<LocalizedText value={footer.terms} />
								</a>
							</li>
						</ul>
					</nav>

					<div className="iag-footer__contact">
						<h3>
							<LocalizedText value={footer.contact} />
						</h3>
						<ul>
							<li>
								<a href={whatsappLink()} target="_blank" rel="noopener noreferrer">
									<i className="fa-brands fa-whatsapp" aria-hidden="true"></i>
									<LocalizedText value={contactLabels.whatsapp} />
								</a>
							</li>
							<li>
								<a href={`mailto:${site.email}`}>
									<i className="fa-light fa-envelope" aria-hidden="true"></i>
									{site.email}
								</a>
							</li>
						</ul>
					</div>
				</div>

				<div className="iag-footer__bottom">
					<span>
						&copy; {year} {site.name}. <LocalizedText value={footer.rights} />
					</span>
					<span>
						<LocalizedText value={footer.serviceNote} />
					</span>
				</div>
			</div>
		</footer>
	);
};

export default SiteFooter;
