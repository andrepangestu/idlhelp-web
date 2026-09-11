import { site } from "@/data/site";
import LocalizedText from "./LocalizedText";

/**
 * Brand lock-up: the IDL mark (cropped from the supplied logo) plus a
 * text wordmark so the brand name stays crisp and searchable.
 */
const Logo = ({ light = false, href = "#home" }) => {
	return (
		<a
			href={href}
			className={`iag-logo ${light ? "iag-logo--light" : ""}`}
			aria-label={`${site.name} — back to top`}
		>
			{light ? (
				<span className="iag-logo__mark">
					<img src="/images/site/idl-mark.png" alt="" width="80" height="48" />
				</span>
			) : (
				<img src="/images/site/idl-mark.png" alt="" width="80" height="48" />
			)}
			<span className="iag-logo__text">
				<span className="iag-logo__word">
					Indonesia <em>Driving</em> License <em>Help</em>
				</span>
				<small>
					<LocalizedText value={site.tagline} />
				</small>
			</span>
		</a>
	);
};

export default Logo;
