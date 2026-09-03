/**
 * Site-wide settings for Indonesia Driving License Help (IDL Help).
 *
 * Replace the placeholder contact details below before going live.
 * `whatsappNumber` must be digits only, starting with the country code (62 for Indonesia).
 */
export const site = {
	name: "Indonesia Driving License Help",
	shortName: "IDL Help",
	tagline: "Information · Guidance · Support",
	description:
		"Independent information, consultation, document checking and preparation guidance for foreigners navigating driving, vehicle and general administrative requirements in Indonesia.",
	email: "info@idlhelp.com", // PLACEHOLDER
	whatsappNumber: "6281200000000", // PLACEHOLDER
	whatsappDefaultMessage:
		"Hello, I would like to request general administrative information and independent guidance regarding requirements in Indonesia.",
	/**
	 * Optional photo for the hero banner, served from /public.
	 * Example: "/images/site/hero-banner.jpg". Leave null to use the built-in artwork only.
	 */
	heroPhoto: null,
};

export const navItems = [
	{ label: "Home", href: "#home" },
	{ label: "Services", href: "#services" },
	{ label: "How It Works", href: "#how-it-works" },
	{ label: "About", href: "#about" },
	{ label: "FAQ", href: "#faq" },
	{ label: "Contact", href: "#contact" },
];

/** Builds a wa.me deep link with a pre-filled message. */
export function whatsappLink(message = site.whatsappDefaultMessage) {
	return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
