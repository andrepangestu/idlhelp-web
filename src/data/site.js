/**
 * Site-wide settings for Indonesia Driving License Help (IDL Help).
 *
 * Replace the placeholder contact details below before going live.
 * `whatsappNumber` must be digits only, starting with the country code (62 for Indonesia).
 */
export const site = {
	name: "Indonesia Driving License Help",
	shortName: "IDL Help",
	tagline: {
		en: "Information · Guidance · Support",
		id: "Informasi · Panduan · Dukungan",
	},
	description:
		"Independent information, consultation, document checking and preparation guidance for foreigners navigating driving, vehicle and general administrative requirements in Indonesia.",
	email: "info@idlhelp.com", // PLACEHOLDER
	whatsappNumber: "6281181209336",
	whatsappDefaultMessage:
		"Hello, I would like to request general administrative information and independent guidance regarding requirements in Indonesia.",
	/**
	 * Optional photo for the hero banner, served from /public.
	 * Example: "/images/site/hero-banner.jpg". Leave null to use the built-in artwork only.
	 */
	heroPhoto: null,
};

export const navItems = [
	{ label: { en: "Home", id: "Beranda" }, href: "#home" },
	{ label: { en: "SIM Guide", id: "Panduan SIM" }, href: "#services" },
	{ label: { en: "How It Works", id: "Cara Kerja" }, href: "#how-it-works" },
	{ label: { en: "About", id: "Tentang" }, href: "#about" },
	{ label: { en: "FAQ", id: "Tanya Jawab" }, href: "#faq" },
	{ label: { en: "Contact", id: "Kontak" }, href: "#contact" },
];

export const contactLabels = {
	whatsapp: { en: "WhatsApp consultation", id: "Konsultasi WhatsApp" },
};

/** Builds a wa.me deep link with a pre-filled message. */
export function whatsappLink(message = site.whatsappDefaultMessage) {
	return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
