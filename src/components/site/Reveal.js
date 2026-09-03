"use client";

import { useEffect } from "react";

/**
 * Reveals [data-reveal] elements once as they scroll into view.
 * Adds an `iag-js` class to <html> so the hidden state only applies when JS runs.
 */
const Reveal = () => {
	useEffect(() => {
		const root = document.documentElement;
		const elements = Array.from(document.querySelectorAll("[data-reveal]"));
		const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

		if (!("IntersectionObserver" in window) || reduceMotion) {
			elements.forEach((el) => el.classList.add("is-visible"));
			return undefined;
		}

		root.classList.add("iag-js");
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						entry.target.classList.add("is-visible");
						observer.unobserve(entry.target);
					}
				});
			},
			{ rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
		);
		elements.forEach((el) => observer.observe(el));

		return () => {
			observer.disconnect();
			root.classList.remove("iag-js");
		};
	}, []);

	return null;
};

export default Reveal;
