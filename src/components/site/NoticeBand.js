import { notice } from "@/data/content";

const NoticeBand = () => {
	return (
		<div className="iag-container iag-noticeband">
			<aside className="iag-notice" aria-label={notice.label}>
				<span className="iag-notice__icon" aria-hidden="true">
					<i className="fa-light fa-shield-check"></i>
				</span>
				<div>
					<strong>{notice.label}</strong>
					<p>{notice.text}</p>
				</div>
			</aside>
		</div>
	);
};

export default NoticeBand;
