"use client";

import { useState } from "react";
import { faqs } from "@/data/content";
import { whatsappLink } from "@/data/site";
import SectionHeading from "./SectionHeading";

const Faq = () => {
	const [openIndex, setOpenIndex] = useState(0);

	return (
		<section id="faq" className="iag-section iag-section--cloud" aria-labelledby="faq-title">
			<div className="iag-container iag-faq-grid">
				<div className="iag-faq-aside">
					<SectionHeading
						id="faq-title"
						eyebrow="Frequently asked questions"
						title="Common questions"
						text="Straight answers about what we do, and what we do not do."
					/>
					<div className="iag-faq-aside__card">
						<h3>Still have a question?</h3>
						<p>Send us a message and we will reply in English with clear, independent information.</p>
						<a className="iag-btn iag-btn--gold" href={whatsappLink()} target="_blank" rel="noopener noreferrer">
							<i className="fa-brands fa-whatsapp" aria-hidden="true"></i>
							Ask on WhatsApp
						</a>
					</div>
				</div>

				<div className="iag-faq">
					{faqs.map((item, index) => {
						const isOpen = openIndex === index;
						const buttonId = `faq-q-${index}`;
						const panelId = `faq-p-${index}`;
						return (
							<div className={`iag-faq__item ${isOpen ? "is-open" : ""}`} key={buttonId}>
								<h3>
									<button
										type="button"
										id={buttonId}
										className="iag-faq__q"
										aria-expanded={isOpen}
										aria-controls={panelId}
										onClick={() => setOpenIndex(isOpen ? -1 : index)}
									>
										{item.q}
										<i className="fa-light fa-chevron-down" aria-hidden="true"></i>
									</button>
								</h3>
								<div
									id={panelId}
									role="region"
									aria-labelledby={buttonId}
									aria-hidden={!isOpen}
									className={`iag-faq__panel ${isOpen ? "is-open" : ""}`}
								>
									<div>
										<p>{item.a}</p>
									</div>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
};

export default Faq;
