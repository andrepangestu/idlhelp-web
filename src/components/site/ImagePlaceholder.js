/**
 * Visual placeholder for imagery that is not ready yet.
 * Replace with <Image> from next/image once the final asset exists.
 */
const ImagePlaceholder = ({ label, hint, ratio = "4 / 3", className = "" }) => {
	return (
		<div
			className={`iag-placeholder ${className}`}
			style={{ aspectRatio: ratio }}
			role="img"
			aria-label={`${label} (placeholder)`}
		>
			<div className="iag-placeholder__inner">
				<i className="fa-light fa-image" aria-hidden="true"></i>
				<strong>{label}</strong>
				{hint ? <span>{hint}</span> : null}
			</div>
		</div>
	);
};

export default ImagePlaceholder;
