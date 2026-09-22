const GA4_MEASUREMENT_ID_PATTERN = /^G-[A-Z0-9]+$/i;
const GOOGLE_ADS_ID_PATTERN = /^AW-[0-9]+$/i;

function validTagId(value, pattern) {
	const tagId = value?.trim();

	return tagId && pattern.test(tagId) ? tagId : null;
}

/**
 * Loads one Google tag and configures every valid measurement destination.
 * Values are embedded at build time because this site is statically exported.
 */
export default function GoogleTag() {
	const analyticsId = validTagId(
		process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID,
		GA4_MEASUREMENT_ID_PATTERN,
	);
	const googleAdsId = validTagId(
		process.env.NEXT_PUBLIC_GOOGLE_ADS_ID,
		GOOGLE_ADS_ID_PATTERN,
	);
	const loaderId = googleAdsId || analyticsId;

	if (!loaderId) {
		return null;
	}

	const configCommands = [analyticsId, googleAdsId]
		.filter(Boolean)
		.map((tagId) => `gtag('config', '${tagId}');`)
		.join("\n");

	return (
		<>
			<script
				id="google-tag-loader"
				async
				src={`https://www.googletagmanager.com/gtag/js?id=${loaderId}`}
			/>
			<script
				id="google-tag"
				dangerouslySetInnerHTML={{
					__html: `
					window.dataLayer = window.dataLayer || [];
					function gtag(){dataLayer.push(arguments);}
					gtag('js', new Date());
					${configCommands}
				`,
				}}
			/>
		</>
	);
}
