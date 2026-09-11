/**
 * Renders both language variants so the static export remains server-rendered.
 * Visibility is controlled by `.iag-site[data-iag-lang]`, set by SiteHeader.
 */
const LocalizedText = ({ value, preserveEnglish = false }) => {
	if (typeof value === "string") return value;

	return (
		<>
			<span
				className={`iag-lang iag-lang--en ${preserveEnglish ? "iag-lang--preserved-en" : ""}`.trim()}
				lang="en"
			>
				{value.en}
			</span>
			<span className="iag-lang iag-lang--id" lang="id">
				{value.id}
			</span>
		</>
	);
};

export default LocalizedText;
