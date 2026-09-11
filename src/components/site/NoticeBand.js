import { notice } from "@/data/content";
import LocalizedText from "./LocalizedText";

const NoticeBand = () => {
	return (
		<div className="iag-container iag-noticeband">
			<aside className="iag-notice" aria-label="Important notice / Pemberitahuan penting">
				<span className="iag-notice__icon" aria-hidden="true">
					<i className="fa-light fa-shield-check"></i>
				</span>
				<div>
					<strong>
						<LocalizedText value={notice.label} />
					</strong>
					<p>
						<LocalizedText value={notice.text} preserveEnglish />
					</p>
				</div>
			</aside>
		</div>
	);
};

export default NoticeBand;
