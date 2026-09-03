/**
 * Page content for the one-page site.
 *
 * Wording follows the compliance guidance for this business:
 * we describe information, consultation, checking and preparation guidance only.
 * Never use phrases such as "apply for", "renew", "process your documents" or "guaranteed".
 */

export const hero = {
	chip: "Independent administrative guidance",
	title: "Administrative Guidance for Foreigners in Indonesia",
	lead: "Clear information. Independent guidance. Better preparation.",
	text: "We provide independent information, consultation, document checking and preparation guidance, with a focus on driving and vehicle documentation, so you understand the general requirements in Indonesia before you proceed through the appropriate official channels.",
	panelTitle: "What do you need help with?",
	panelText: "Pick a topic and we will continue on WhatsApp.",
};

export const services = [
	{
		id: "administrative-consultation",
		icon: "fa-light fa-comments",
		title: "Administrative Consultation",
		text: "General consultation to understand your administrative situation and which general requirements apply to you.",
		message:
			"Hello, I would like to request an administrative consultation regarding general requirements in Indonesia.",
	},
	{
		id: "document-checking",
		icon: "fa-light fa-file-magnifying-glass",
		title: "Document Checking",
		text: "We review the documents you already have and point out anything that may need clarification before you proceed.",
		message:
			"Hello, I would like to request document checking and independent guidance regarding requirements in Indonesia.",
	},
	{
		id: "preparation-guidance",
		icon: "fa-light fa-folder-open",
		title: "Preparation Guidance",
		text: "Step-by-step guidance on the information and documents to prepare, so you approach the official process well organised.",
		message:
			"Hello, I would like to request preparation guidance regarding general administrative requirements in Indonesia.",
	},
	{
		id: "driving-information",
		icon: "fa-light fa-steering-wheel",
		title: "Driving Information",
		text: "General information about administrative requirements related to driving in Indonesia as a foreigner.",
		message:
			"Hello, I would like to request general information about driving documentation requirements in Indonesia.",
	},
	{
		id: "vehicle-information",
		icon: "fa-light fa-car-side",
		title: "Vehicle Information",
		text: "General information about vehicle documentation and related administrative matters for car and motorcycle owners.",
		message:
			"Hello, I would like to request general information about vehicle documentation in Indonesia.",
	},
	{
		id: "requirements-guidance",
		icon: "fa-light fa-clipboard-list-check",
		title: "Requirements Guidance",
		text: "Understand the general requirements and your next steps before you use the relevant official channel.",
		message:
			"Hello, I would like to request guidance on general administrative requirements and next steps in Indonesia.",
	},
];

/** Quick-pick options shown in the hero panel. Each maps to a service message. */
export const heroOptions = [
	{ serviceId: "driving-information", label: "Driving information" },
	{ serviceId: "vehicle-information", label: "Vehicle information" },
	{ serviceId: "document-checking", label: "Document checking" },
	{ serviceId: "administrative-consultation", label: "General consultation" },
];

export const heroPoints = [
	{ icon: "fa-light fa-globe", label: "English support" },
	{ icon: "fa-light fa-shield-check", label: "Independent service" },
	{ icon: "fa-light fa-handshake", label: "Consultation-based" },
	{ icon: "fa-light fa-lock", label: "Your information is safe" },
];

export const notice = {
	label: "Important notice",
	text: "We are not a government agency and do not issue, approve or guarantee any government document or service outcome. Official applications and decisions are handled through the relevant authorized channels.",
};

export const audiences = [
	{
		icon: "fa-light fa-earth-asia",
		title: "Foreigners and expats",
		text: "Living in, moving to or staying long-term in Indonesia.",
	},
	{
		icon: "fa-light fa-car",
		title: "Car owners",
		text: "Who want to understand vehicle documentation and related requirements.",
	},
	{
		icon: "fa-light fa-motorcycle",
		title: "Motorcycle riders",
		text: "Who need clear information on the documents that matter for riding.",
	},
	{
		icon: "fa-light fa-file-signature",
		title: "Anyone facing Indonesian paperwork",
		text: "Who prefers to understand the requirements before using official channels.",
	},
];

export const steps = [
	{
		icon: "fa-light fa-message",
		title: "Request Information",
		text: "Tell us about your situation and what you need to understand.",
	},
	{
		icon: "fa-light fa-user-group",
		title: "Consultation",
		text: "We provide independent information and guidance in English.",
	},
	{
		icon: "fa-light fa-file-lines",
		title: "Prepare Information",
		text: "You prepare the necessary information and documents with our guidance.",
	},
	{
		icon: "fa-light fa-building-columns",
		title: "Official Channel",
		text: "You proceed through the relevant authorized channel for the official process.",
	},
];

export const trustItems = [
	{
		icon: "fa-light fa-shield-check",
		title: "Independent and transparent",
		text: "We are not affiliated with any government agency, and we say so clearly.",
	},
	{
		icon: "fa-light fa-globe",
		title: "Clear information in English",
		text: "Complex administrative processes explained in plain language.",
	},
	{
		icon: "fa-light fa-handshake",
		title: "Consultation-based",
		text: "Guidance based on your situation, not a one-size-fits-all package.",
	},
	{
		icon: "fa-light fa-lock",
		title: "Your information stays confidential",
		text: "We respect your privacy and use your details only to guide you.",
	},
];

export const about = {
	text: "We are an independent administrative assistance service. Our mission is to help foreigners better understand general administrative requirements in Indonesia through clear information and professional guidance, so they can prepare properly before using the appropriate official channels.",
	weDo: [
		"General information about requirements",
		"Consultation in English",
		"Document checking",
		"Preparation guidance",
		"Explaining which official channel applies",
	],
	weDoNot: [
		"Issue or approve documents",
		"Register, renew or transfer documents",
		"Guarantee any outcome",
		"Represent any government agency",
	],
};

export const faqs = [
	{
		q: "Are you a government agency?",
		a: "No. We are an independent administrative assistance service. We are not a government agency, licensing authority, tax authority, police authority or official document issuer.",
	},
	{
		q: "Can you issue or approve government documents?",
		a: "No. We do not issue, approve, register, renew, transfer or guarantee any government document. Official applications and decisions are handled only through the relevant authorized channels.",
	},
	{
		q: "Can you guarantee approval or results?",
		a: "No. Official decisions are made by the relevant authorized authorities. What we do is help you understand the general requirements and prepare, so you approach the official process well informed.",
	},
	{
		q: "What services do you provide?",
		a: "Independent information, consultation, document checking and preparation guidance for foreigners dealing with general administrative requirements in Indonesia.",
	},
	{
		q: "How does a consultation work?",
		a: "You send us a message on WhatsApp describing your situation. We reply in English, ask any clarifying questions, and explain the general requirements, the information you may need to prepare, and the official channel that applies.",
	},
	{
		q: "Who is this service for?",
		a: "Foreigners and expatriates living in or moving to Indonesia, including car and motorcycle owners, and anyone who needs help understanding Indonesian administrative requirements.",
	},
];

export const disclaimer = {
	title: "Independent Administrative Assistance Notice",
	paragraphs: [
		"We are an independent administrative assistance service and are not a government agency, licensing authority, tax authority, police authority or official document issuer.",
		"We do not issue, approve, register, renew, transfer or guarantee any government document or government service outcome.",
		"Official applications, registrations, payments, approvals and decisions are handled only through the relevant authorized channels.",
	],
};
