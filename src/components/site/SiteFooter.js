import { services } from "@/data/content";
import { navItems, site, whatsappLink } from "@/data/site";
import Logo from "./Logo";

const SiteFooter = () => {
	const year = new Date().getFullYear();

	return (
		<footer className="iag-footer">
			<div className="iag-dots" aria-hidden="true"></div>
			<div className="iag-container">
				<div className="iag-footer__grid">
					<div className="iag-footer__brand">
						<Logo light />
						<p>
							Independent information and guidance for foreigners navigating
							driving, vehicle and general administrative requirements in
							Indonesia.
						</p>
					</div>

					<nav aria-labelledby="footer-links">
						<h3 id="footer-links">Quick links</h3>
						<ul>
							{navItems.map((item) => (
								<li key={item.href}>
									<a href={item.href}>{item.label}</a>
								</li>
							))}
						</ul>
					</nav>

					<nav aria-labelledby="footer-services">
						<h3 id="footer-services">Services</h3>
						<ul>
							{services.map((service) => (
								<li key={service.id}>
									<a
										href={whatsappLink(service.message)}
										target="_blank"
										rel="noopener noreferrer"
									>
										{service.title}
									</a>
								</li>
							))}
						</ul>
					</nav>

					<nav aria-labelledby="footer-legal">
						<h3 id="footer-legal">Legal</h3>
						<ul>
							<li>
								<a href="#disclaimer">Disclaimer</a>
							</li>
							<li>
								<a href="#" title="Page to be added">
									Privacy Policy
								</a>
							</li>
							<li>
								<a href="#" title="Page to be added">
									Terms &amp; Conditions
								</a>
							</li>
						</ul>
					</nav>

					<div className="iag-footer__contact">
						<h3>Contact</h3>
						<ul>
							<li>
								<a href={whatsappLink()} target="_blank" rel="noopener noreferrer">
									<i className="fa-brands fa-whatsapp" aria-hidden="true"></i>
									WhatsApp consultation
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
						&copy; {year} {site.name}. All rights reserved.
					</span>
					<span>
						Independent administrative assistance service for information and
						guidance only.
					</span>
				</div>
			</div>
		</footer>
	);
};

export default SiteFooter;
