/**
 * Localized page content for the one-page site.
 *
 * Each user-facing value uses `{ en, id }`. Components render both variants,
 * while the header controls which language is visible. English remains the
 * default because the primary audience is foreigners in Indonesia.
 */

export const hero = {
	chip: {
		en: "Independent administrative guidance",
		id: "Panduan administratif independen",
	},
	title: {
		en: "Driving License Guidance for Foreigners in Indonesia",
		id: "Panduan SIM untuk Warga Asing di Indonesia",
	},
	lead: {
		en: "Clear information. Independent guidance. Better preparation.",
		id: "Informasi jelas. Panduan independen. Persiapan lebih baik.",
	},
	text: {
		en: "We provide independent information, consultation, document-checking guidance and preparation guidance, with a focus on driving and vehicle documentation in Indonesia.",
		id: "Kami menyediakan informasi independen, konsultasi, panduan pemeriksaan dokumen, dan panduan persiapan dengan fokus pada dokumen berkendara dan kendaraan di Indonesia.",
	},
	primaryAction: { en: "Request Information", id: "Lihat Informasi" },
	secondaryAction: { en: "Learn How It Works", id: "Pelajari Cara Kerja" },
	panelTitle: {
		en: "What do you need help with?",
		id: "Informasi apa yang Anda butuhkan?",
	},
	panelText: {
		en: "Choose a topic to read the relevant guidance.",
		id: "Pilih topik untuk membaca panduan yang relevan.",
	},
	panelElse: { en: "Something else?", id: "Topik lainnya?" },
	panelChat: {
		en: "Chat with us on WhatsApp",
		id: "Hubungi kami melalui WhatsApp",
	},
	panelNote: {
		en: "Independent service. We are not a government agency and do not issue or approve documents.",
		id: "Layanan independen. Kami bukan instansi pemerintah dan tidak menerbitkan atau menyetujui dokumen.",
	},
};

export const heroOptions = [
	{
		id: "driving-information",
		icon: "fa-light fa-steering-wheel",
		label: { en: "Driving information", id: "Informasi berkendara" },
		href: "#sim-requirements",
	},
	{
		id: "vehicle-information",
		icon: "fa-light fa-car-side",
		label: { en: "Vehicle information", id: "Informasi kendaraan" },
		href: "#vehicle-administration",
	},
	{
		id: "document-checking",
		icon: "fa-light fa-file-magnifying-glass",
		label: { en: "Document guidance", id: "Panduan dokumen" },
		href: "#sim-requirements",
	},
	{
		id: "general-consultation",
		icon: "fa-light fa-comments",
		label: { en: "General guidance", id: "Panduan umum" },
		href: "#sim-overview",
	},
];

export const heroPoints = [
	{ icon: "fa-light fa-globe", label: { en: "English and Indonesian", id: "Bahasa Inggris dan Indonesia" } },
	{ icon: "fa-light fa-shield-check", label: { en: "Independent service", id: "Layanan independen" } },
	{ icon: "fa-light fa-handshake", label: { en: "Consultation-based", id: "Berbasis konsultasi" } },
	{ icon: "fa-light fa-lock", label: { en: "Your information is safe", id: "Informasi Anda aman" } },
];

export const notice = {
	label: { en: "Important notice", id: "Pemberitahuan penting" },
	text: {
		en: "We are not a government agency and do not issue, approve or guarantee any government document or service outcome. Official applications and decisions are handled through the relevant authorized channels.",
		id: "Kami bukan instansi pemerintah dan tidak menerbitkan, menyetujui, atau menjamin dokumen pemerintah maupun hasil layanan apa pun. Permohonan dan keputusan resmi ditangani melalui saluran berwenang yang relevan.",
	},
};

export const guide = {
	heading: {
		eyebrow: { en: "SIM information guide", id: "Panduan informasi SIM" },
		title: {
			en: "Understand the essentials before using an official channel",
			id: "Pahami hal penting sebelum menggunakan saluran resmi",
		},
		text: {
			en: "A practical overview of Indonesian driving licenses, common requirements and official procedures for foreign nationals.",
			id: "Ringkasan praktis mengenai SIM Indonesia, persyaratan umum, dan prosedur resmi bagi warga negara asing.",
		},
	},
	overview: {
		id: "sim-overview",
		label: { en: "Start here", id: "Mulai di sini" },
		title: { en: "What is a SIM?", id: "Apa itu SIM?" },
		paragraphs: [
			{
				en: "A SIM (Surat Izin Mengemudi) is an official driving license issued to qualified drivers in Indonesia. It shows that the holder has met the applicable qualifications to operate a motor vehicle.",
				id: "SIM (Surat Izin Mengemudi) adalah surat izin mengemudi resmi yang diterbitkan bagi pengemudi yang memenuhi syarat di Indonesia. Dokumen ini menunjukkan bahwa pemegangnya telah memenuhi kualifikasi yang berlaku untuk mengemudikan kendaraan bermotor.",
			},
			{
				en: "The appropriate SIM category depends on the vehicle being driven. Categories cover passenger cars, motorcycles and certain heavier vehicles.",
				id: "Kategori SIM yang sesuai bergantung pada kendaraan yang dikemudikan. Kategorinya mencakup mobil penumpang, sepeda motor, dan kendaraan berat tertentu.",
			},
			{
				en: "Requirements may vary by license type, vehicle classification, residency status and current regulations. Drivers should confirm the correct category and keep required driving documentation valid.",
				id: "Persyaratan dapat berbeda menurut jenis SIM, klasifikasi kendaraan, status izin tinggal, dan peraturan terkini. Pengemudi perlu memastikan kategori yang tepat serta menjaga keabsahan dokumen berkendara yang diwajibkan.",
			},
		],
		image: "/images/site/sim-overview.webp",
	},
	categories: {
		id: "sim-categories",
		label: { en: "License categories", id: "Kategori SIM" },
		title: {
			en: "Indonesian driving license categories",
			id: "Kategori Surat Izin Mengemudi Indonesia",
		},
		items: [
			{
				name: "SIM A",
				text: { en: "Generally intended for eligible four-wheeled motor vehicles, including private cars.", id: "Umumnya ditujukan untuk kendaraan bermotor roda empat yang memenuhi ketentuan, termasuk mobil pribadi." },
			},
			{
				name: "SIM C",
				text: { en: "Generally intended for eligible two-wheeled motor vehicles, including motorcycles.", id: "Umumnya ditujukan untuk kendaraan bermotor roda dua yang memenuhi ketentuan, termasuk sepeda motor." },
			},
			{
				name: "SIM B1",
				text: { en: "Generally intended for eligible private or commercial motor vehicles in a higher permitted weight classification.", id: "Umumnya ditujukan untuk kendaraan bermotor pribadi atau komersial yang memenuhi ketentuan pada klasifikasi berat yang lebih tinggi." },
			},
			{
				name: "SIM B2",
				text: { en: "Generally intended for eligible heavy motor vehicles and vehicles with trailers or other specified configurations.", id: "Umumnya ditujukan untuk kendaraan bermotor berat serta kendaraan dengan kereta tempelan atau konfigurasi tertentu lainnya." },
			},
		],
		image: "/images/site/sim-license.webp",
	},
	requirements: {
		id: "sim-requirements",
		label: { en: "For foreign nationals", id: "Bagi warga negara asing" },
		title: { en: "SIM requirements for foreigners", id: "Persyaratan SIM bagi warga negara asing" },
		intro: {
			en: "Foreign nationals who wish to drive in Indonesia may need to meet requirements based on their residency status and applicable regulations.",
			id: "Warga negara asing yang ingin berkendara di Indonesia mungkin perlu memenuhi persyaratan berdasarkan status izin tinggal dan peraturan yang berlaku.",
		},
		items: [
			{ en: "Valid passport", id: "Paspor yang masih berlaku" },
			{ en: "Valid visa or residence permit", id: "Visa atau izin tinggal yang masih berlaku" },
			{ en: "Relevant identification documents", id: "Dokumen identitas yang relevan" },
			{ en: "Applicable health requirements", id: "Persyaratan kesehatan yang berlaku" },
			{ en: "Other documents required by the relevant authorities", id: "Dokumen lain yang diwajibkan oleh instansi berwenang terkait" },
		],
		image: "/images/site/sim-requirements.webp",
	},
	procedure: {
		id: "sim-procedure",
		label: { en: "Official procedure", id: "Prosedur resmi" },
		title: { en: "Understanding the official SIM procedure", id: "Memahami prosedur resmi SIM" },
		intro: {
			en: "The sequence below is general information. Always confirm current steps and service locations with the relevant authorities.",
			id: "Urutan berikut merupakan informasi umum. Selalu pastikan tahapan dan lokasi layanan terkini kepada instansi berwenang terkait.",
		},
		steps: [
			{
				title: { en: "Find the relevant authorized service location", id: "Cari lokasi layanan resmi yang relevan" },
				text: { en: "Use official information to identify the appropriate police or driving-license service location.", id: "Gunakan informasi resmi untuk menemukan lokasi kepolisian atau layanan SIM yang sesuai." },
			},
			{
				title: { en: "Review the required documents", id: "Periksa dokumen yang disyaratkan" },
				text: { en: "Confirm the identification and supporting documents required for your situation.", id: "Pastikan dokumen identitas dan dokumen pendukung yang diperlukan sesuai situasi Anda." },
			},
			{
				title: { en: "Follow the official intake instructions", id: "Ikuti petunjuk penerimaan resmi" },
				text: { en: "Follow the instructions provided at the authorized service location.", id: "Ikuti petunjuk yang diberikan di lokasi layanan resmi." },
			},
			{
				title: { en: "Complete the applicable assessments", id: "Jalani penilaian yang berlaku" },
				text: { en: "Administrative, health, knowledge or practical driving requirements may apply depending on the SIM category.", id: "Persyaratan administratif, kesehatan, pengetahuan, atau praktik berkendara dapat berlaku sesuai kategori SIM." },
			},
			{
				title: { en: "Confirm each official step", id: "Pastikan setiap tahapan resmi" },
				text: { en: "Complete only the steps instructed by the relevant authorized authorities.", id: "Ikuti hanya tahapan yang diarahkan oleh instansi berwenang terkait." },
			},
		],
		image: "/images/site/sim-procedure.webp",
	},
	vehicle: {
		id: "vehicle-administration",
		label: { en: "Vehicle documents", id: "Dokumen kendaraan" },
		title: { en: "Additional vehicle administration information", id: "Informasi administrasi kendaraan tambahan" },
		intro: {
			en: "Authorized vehicle administration offices may publish information about vehicle documentation and records. Available services vary by location and current regulations.",
			id: "Kantor administrasi kendaraan yang berwenang dapat menyediakan informasi mengenai dokumen dan pencatatan kendaraan. Layanan yang tersedia berbeda menurut lokasi dan peraturan terkini.",
		},
		items: [
			{ en: "Vehicle registration validity", id: "Masa berlaku registrasi kendaraan" },
			{ en: "Changes in recorded ownership", id: "Perubahan data kepemilikan" },
			{ en: "Changes in registration area", id: "Perubahan wilayah pencatatan" },
			{ en: "Vehicle document administration", id: "Administrasi dokumen kendaraan" },
			{ en: "Other applicable vehicle information", id: "Informasi kendaraan lain yang berlaku" },
		],
	},
	note: {
		title: { en: "Information changes over time", id: "Informasi dapat berubah" },
		text: {
			en: "SIM categories, requirements, procedures and vehicle classifications may change. Refer to the relevant official authorities for the latest and most accurate information.",
			id: "Kategori SIM, persyaratan, prosedur, dan klasifikasi kendaraan dapat berubah. Rujuk instansi berwenang terkait untuk memperoleh informasi terbaru dan paling akurat.",
		},
	},
};

export const audiencesSection = {
	eyebrow: { en: "Who we help", id: "Siapa yang kami bantu" },
	title: { en: "For foreigners navigating Indonesian driving requirements", id: "Untuk warga asing yang memahami persyaratan berkendara di Indonesia" },
	text: { en: "Whether you drive, ride or need to understand a requirement, we explain general information in clear language.", id: "Baik Anda mengemudikan mobil, mengendarai motor, maupun perlu memahami suatu persyaratan, kami menjelaskan informasi umum dengan bahasa yang jelas." },
};

export const audiences = [
	{
		icon: "fa-light fa-earth-asia",
		title: { en: "Foreigners and expats", id: "Warga asing dan ekspatriat" },
		text: { en: "Living in, moving to or staying long-term in Indonesia.", id: "Tinggal, pindah, atau menetap jangka panjang di Indonesia." },
	},
	{
		icon: "fa-light fa-car",
		title: { en: "Car owners", id: "Pemilik mobil" },
		text: { en: "Understanding vehicle documentation and related requirements.", id: "Memahami dokumen kendaraan dan persyaratan terkait." },
	},
	{
		icon: "fa-light fa-motorcycle",
		title: { en: "Motorcycle riders", id: "Pengendara sepeda motor" },
		text: { en: "Learning which documents matter for riding.", id: "Mengetahui dokumen yang penting untuk berkendara." },
	},
	{
		icon: "fa-light fa-file-signature",
		title: { en: "People preparing information", id: "Orang yang menyiapkan informasi" },
		text: { en: "Understanding requirements before using official channels.", id: "Memahami persyaratan sebelum menggunakan saluran resmi." },
	},
];

export const processSection = {
	eyebrow: { en: "How it works", id: "Cara kerja" },
	title: { en: "A simple, clear process", id: "Proses yang sederhana dan jelas" },
	text: { en: "From your first message to the official channel, you always know what comes next.", id: "Dari pesan pertama hingga saluran resmi, Anda selalu mengetahui langkah berikutnya." },
};

export const steps = [
	{
		icon: "fa-light fa-message",
		title: { en: "Request Information", id: "Sampaikan Pertanyaan" },
		text: { en: "Tell us about your situation and what you need to understand.", id: "Ceritakan situasi Anda dan informasi yang perlu dipahami." },
	},
	{
		icon: "fa-light fa-user-group",
		title: { en: "Consultation", id: "Konsultasi" },
		text: { en: "We provide independent information and general guidance.", id: "Kami memberikan informasi independen dan panduan umum." },
	},
	{
		icon: "fa-light fa-file-lines",
		title: { en: "Prepare Information", id: "Siapkan Informasi" },
		text: { en: "You prepare the necessary information and documents with our guidance.", id: "Anda menyiapkan informasi dan dokumen yang diperlukan dengan panduan kami." },
	},
	{
		icon: "fa-light fa-building-columns",
		title: { en: "Official Information", id: "Informasi Resmi" },
		text: { en: "For official procedures, refer to the relevant authorized authorities and official channels.", id: "Untuk prosedur resmi, rujuk instansi berwenang dan saluran resmi yang relevan." },
	},
];

export const trustItems = [
	{
		icon: "fa-light fa-shield-check",
		title: { en: "Independent and transparent", id: "Independen dan transparan" },
		text: { en: "We are not affiliated with any government agency, and we say so clearly.", id: "Kami tidak berafiliasi dengan instansi pemerintah mana pun dan menyatakannya dengan jelas." },
	},
	{
		icon: "fa-light fa-globe",
		title: { en: "Clear information", id: "Informasi yang jelas" },
		text: { en: "Complex administrative information explained in plain language.", id: "Informasi administratif yang rumit dijelaskan dengan bahasa sederhana." },
	},
	{
		icon: "fa-light fa-handshake",
		title: { en: "Consultation-based", id: "Berbasis konsultasi" },
		text: { en: "Guidance based on your situation, not a one-size-fits-all package.", id: "Panduan berdasarkan situasi Anda, bukan paket yang sama untuk semua orang." },
	},
	{
		icon: "fa-light fa-lock",
		title: { en: "Privacy matters", id: "Privasi itu penting" },
		text: { en: "We respect your privacy and handle information in accordance with our Privacy Policy.", id: "Kami menghormati privasi Anda dan menangani informasi sesuai Kebijakan Privasi kami." },
	},
];

export const about = {
	eyebrow: { en: "About our service", id: "Tentang layanan kami" },
	title: { en: "Independent. Professional. Helpful.", id: "Independen. Profesional. Membantu." },
	text: {
		en: "We are an independent administrative assistance service. Our mission is to help foreigners better understand general administrative requirements in Indonesia through clear information and professional guidance, so they can prepare properly before using the appropriate official channels.",
		id: "Kami adalah layanan bantuan administratif independen. Misi kami membantu warga asing memahami persyaratan administratif umum di Indonesia melalui informasi yang jelas dan panduan profesional agar mereka dapat bersiap sebelum menggunakan saluran resmi yang sesuai.",
	},
	imageAlt: "Independent guidance consultation / Konsultasi panduan independen",
	badgeTitle: { en: "Independent service", id: "Layanan independen" },
	badgeText: { en: "Bilingual · Consultation-based", id: "Dwibahasa · Berbasis konsultasi" },
	doTitle: { en: "What we do", id: "Yang kami lakukan" },
	doNotTitle: { en: "What we do not do", id: "Yang tidak kami lakukan" },
	weDo: [
		{ en: "General information about requirements", id: "Informasi umum mengenai persyaratan" },
		{ en: "Consultation in English or Indonesian", id: "Konsultasi dalam bahasa Inggris atau Indonesia" },
		{ en: "Document-checking guidance", id: "Panduan pemeriksaan dokumen" },
		{ en: "Preparation guidance", id: "Panduan persiapan" },
		{ en: "Explaining which official channel applies", id: "Penjelasan mengenai saluran resmi yang sesuai" },
	],
	weDoNot: [
		{ en: "Issue or approve documents", id: "Menerbitkan atau menyetujui dokumen" },
		{ en: "Register, renew or transfer documents", id: "Mendaftarkan, memperpanjang, atau memindahkan dokumen" },
		{ en: "Guarantee any outcome", id: "Menjamin hasil apa pun" },
		{ en: "Represent any government agency", id: "Mewakili instansi pemerintah mana pun" },
	],
};

export const faqSection = {
	eyebrow: { en: "Frequently asked questions", id: "Pertanyaan yang sering diajukan" },
	title: { en: "Common questions", id: "Pertanyaan umum" },
	text: { en: "Straight answers about what we do, and what we do not do.", id: "Jawaban langsung mengenai apa yang kami lakukan dan tidak kami lakukan." },
	cardTitle: { en: "Still have a question?", id: "Masih memiliki pertanyaan?" },
	cardText: { en: "Send us a message for clear, independent information.", id: "Kirimkan pesan untuk memperoleh informasi yang jelas dan independen." },
	cardAction: { en: "Ask on WhatsApp", id: "Tanya melalui WhatsApp" },
};

export const faqs = [
	{
		q: { en: "Are you a government agency?", id: "Apakah Anda instansi pemerintah?" },
		a: { en: "No. We are an independent administrative assistance service. We are not a government agency, licensing authority, tax authority, police authority or official document issuer.", id: "Tidak. Kami adalah layanan bantuan administratif independen. Kami bukan instansi pemerintah, otoritas perizinan, otoritas pajak, kepolisian, atau penerbit dokumen resmi." },
	},
	{
		q: { en: "Can you issue or approve government documents?", id: "Apakah Anda dapat menerbitkan atau menyetujui dokumen pemerintah?" },
		a: { en: "No. We do not issue, approve, register, renew, transfer or guarantee any government document. Official applications and decisions are handled only through the relevant authorized channels.", id: "Tidak. Kami tidak menerbitkan, menyetujui, mendaftarkan, memperpanjang, memindahkan, atau menjamin dokumen pemerintah apa pun. Permohonan dan keputusan resmi hanya ditangani melalui saluran berwenang yang relevan." },
	},
	{
		q: { en: "Can you guarantee approval or results?", id: "Apakah Anda dapat menjamin persetujuan atau hasil?" },
		a: { en: "No. Official decisions are made by the relevant authorized authorities. What we do is help you understand the general requirements and prepare, so you approach the official process well informed.", id: "Tidak. Keputusan resmi dibuat oleh instansi berwenang terkait. Kami membantu Anda memahami persyaratan umum dan mempersiapkan informasi agar Anda menggunakan prosedur resmi dengan pemahaman yang baik." },
		detail: { en: "We provide general information and guidance to help you understand applicable requirements and prepare for the official process.", id: "Kami menyediakan informasi dan panduan umum untuk membantu Anda memahami persyaratan yang berlaku dan bersiap menghadapi prosedur resmi." },
	},
	{
		q: { en: "What services do you provide?", id: "Layanan apa yang Anda sediakan?" },
		a: { en: "Independent information, consultation, document checking and preparation guidance for foreigners dealing with general administrative requirements in Indonesia.", id: "Informasi independen, konsultasi, pemeriksaan dokumen, dan panduan persiapan bagi warga asing yang menghadapi persyaratan administratif umum di Indonesia." },
		detail: { en: "We provide independent information, general consultation, document-checking guidance, and preparation guidance for foreigners seeking to understand general administrative requirements in Indonesia.", id: "Kami menyediakan informasi independen, konsultasi umum, panduan pemeriksaan dokumen, dan panduan persiapan bagi warga asing yang ingin memahami persyaratan administratif umum di Indonesia." },
	},
	{
		q: { en: "How does a consultation work?", id: "Bagaimana cara kerja konsultasi?" },
		a: { en: "You send us a message on WhatsApp describing your situation. We reply in English, ask any clarifying questions, and explain the general requirements, the information you may need to prepare, and the official channel that applies.", id: "Anda mengirimkan pesan melalui WhatsApp yang menjelaskan situasi Anda. Kami menjawab, mengajukan pertanyaan klarifikasi, serta menjelaskan persyaratan umum, informasi yang mungkin perlu disiapkan, dan saluran resmi yang sesuai." },
		detail: { en: "We can provide information in English or Indonesian and ask clarifying questions where appropriate.", id: "Kami dapat memberikan informasi dalam bahasa Inggris atau Indonesia dan mengajukan pertanyaan klarifikasi bila diperlukan." },
	},
	{
		q: { en: "Who is this service for?", id: "Untuk siapa layanan ini?" },
		a: { en: "Foreigners and expatriates living in or moving to Indonesia, including car and motorcycle owners, and anyone who needs help understanding Indonesian administrative requirements.", id: "Warga asing dan ekspatriat yang tinggal atau pindah ke Indonesia, termasuk pemilik mobil dan sepeda motor, serta siapa pun yang memerlukan bantuan untuk memahami persyaratan administratif Indonesia." },
	},
];

export const cta = {
	title: { en: "Need general administrative guidance?", id: "Membutuhkan panduan administratif umum?" },
	text: { en: "Speak with our independent assistance team. We are here to help you understand and prepare.", id: "Bicaralah dengan tim bantuan independen kami. Kami membantu Anda memahami informasi dan mempersiapkan kebutuhan." },
	primaryAction: { en: "Request a Consultation", id: "Minta Konsultasi" },
	secondaryAction: { en: "See the SIM guide", id: "Lihat Panduan SIM" },
	emailPrefix: { en: "or email", id: "atau kirim email ke" },
};

export const disclaimer = {
	title: { en: "Independent Administrative Assistance Notice", id: "Pemberitahuan Bantuan Administratif Independen" },
	paragraphs: [
		{ en: "We are an independent administrative assistance service and are not a government agency, licensing authority, tax authority, police authority or official document issuer.", id: "Kami adalah layanan bantuan administratif independen dan bukan instansi pemerintah, otoritas perizinan, otoritas pajak, kepolisian, atau penerbit dokumen resmi." },
		{ en: "We do not issue, approve, register, renew, transfer or guarantee any government document or government service outcome.", id: "Kami tidak menerbitkan, menyetujui, mendaftarkan, memperpanjang, memindahkan, atau menjamin dokumen pemerintah maupun hasil layanan pemerintah apa pun." },
		{ en: "Official applications, registrations, payments, approvals and decisions are handled only through the relevant authorized channels.", id: "Permohonan, pendaftaran, pembayaran, persetujuan, dan keputusan resmi hanya ditangani melalui saluran berwenang yang relevan." },
	],
};

export const footer = {
	description: { en: "Independent information and guidance for foreigners navigating driving, vehicle and general administrative requirements in Indonesia.", id: "Informasi dan panduan independen bagi warga asing yang memahami persyaratan berkendara, kendaraan, dan administrasi umum di Indonesia." },
	quickLinks: { en: "Quick links", id: "Tautan cepat" },
	information: { en: "Information", id: "Informasi" },
	legal: { en: "Legal", id: "Legal" },
	contact: { en: "Contact", id: "Kontak" },
	disclaimer: { en: "Disclaimer", id: "Penyangkalan" },
	privacy: { en: "Privacy Policy", id: "Kebijakan Privasi" },
	terms: { en: "Terms & Conditions", id: "Syarat & Ketentuan" },
	rights: { en: "All rights reserved.", id: "Hak cipta dilindungi." },
	serviceNote: { en: "Independent administrative assistance service for information and guidance only.", id: "Layanan bantuan administratif independen khusus untuk informasi dan panduan." },
};
