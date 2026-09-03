const SectionHeading = ({ eyebrow, title, text, center = false, id }) => {
	return (
		<div className={`iag-heading ${center ? "iag-heading--center" : ""}`}>
			{eyebrow ? <span className="iag-eyebrow">{eyebrow}</span> : null}
			<h2 className="iag-h2" id={id}>
				{title}
			</h2>
			{text ? <p>{text}</p> : null}
		</div>
	);
};

export default SectionHeading;
