import LocalizedText from "./LocalizedText";

const SectionHeading = ({ eyebrow, title, text, center = false, id }) => {
	return (
		<div className={`iag-heading ${center ? "iag-heading--center" : ""}`}>
			{eyebrow ? (
				<span className="iag-eyebrow">
					<LocalizedText value={eyebrow} />
				</span>
			) : null}
			<h2 className="iag-h2" id={id}>
				<LocalizedText value={title} />
			</h2>
			{text ? (
				<p>
					<LocalizedText value={text} />
				</p>
			) : null}
		</div>
	);
};

export default SectionHeading;
