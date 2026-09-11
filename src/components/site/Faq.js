"use client";

import { useState } from "react";
import { faqSection, faqs } from "@/data/content";
import { whatsappLink } from "@/data/site";
import LocalizedText from "./LocalizedText";
import SectionHeading from "./SectionHeading";

const Faq = () => {
	const [openIndex, setOpenIndex] = useState(0);

	return (
		<section id="faq" className="iag-section iag-section--cloud" aria-labelledby="faq-title">
			<div className="iag-container iag-faq-grid">
				<div className="iag-faq-aside">
					<SectionHeading
						id="faq-title"
						eyebrow={faqSection.eyebrow}
						title={faqSection.title}
						text={faqSection.text}
					/>
					<div className="iag-faq-aside__card">
						<h3>
							<LocalizedText value={faqSection.cardTitle} />
						</h3>
						<p>
							<LocalizedText value={faqSection.cardText} />
						</p>
						<a className="iag-btn iag-btn--gold" href={whatsappLink()} target="_blank" rel="noopener noreferrer">
							<i className="fa-brands fa-whatsapp" aria-hidden="true"></i>
							<LocalizedText value={faqSection.cardAction} />
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
										<LocalizedText value={item.q} />
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
										<p>
							<LocalizedText value={item.a} preserveEnglish />
										</p>
										{item.detail ? (
											<p className="iag-faq__detail">
												<LocalizedText value={item.detail} />
											</p>
										) : null}
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
