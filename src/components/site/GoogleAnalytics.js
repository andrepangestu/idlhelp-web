import Script from "next/script";

const GA4_MEASUREMENT_ID_PATTERN = /^G-[A-Z0-9]+$/i;

/**
 * Loads Google Analytics 4 only when a valid public measurement ID is provided.
 * The value is embedded at build time because this site is statically exported.
 */
export default function GoogleAnalytics() {
	const measurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID?.trim();

	if (!measurementId || !GA4_MEASUREMENT_ID_PATTERN.test(measurementId)) {
		return null;
	}

	return (
		<>
			<Script
				src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
				strategy="afterInteractive"
			/>
			<Script id="google-analytics" strategy="afterInteractive">
				{`
					window.dataLayer = window.dataLayer || [];
					function gtag(){dataLayer.push(arguments);}
					gtag('js', new Date());
					gtag('config', '${measurementId}');
				`}
			</Script>
		</>
	);
}
