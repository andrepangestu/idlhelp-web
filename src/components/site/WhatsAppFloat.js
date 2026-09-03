import { whatsappLink } from "@/data/site";

const WhatsAppFloat = () => {
	return (
		<a
			className="iag-wa-float"
			href={whatsappLink()}
			target="_blank"
			rel="noopener noreferrer"
			aria-label="Chat with us on WhatsApp"
		>
			<i className="fa-brands fa-whatsapp" aria-hidden="true"></i>
		</a>
	);
};

export default WhatsAppFloat;
