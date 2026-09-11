"use client";

import { useEffect, useState } from "react";
import { hero } from "@/data/content";
import { navItems } from "@/data/site";
import LocalizedText from "./LocalizedText";
import Logo from "./Logo";

const DESKTOP_MIN = 1280;
const LANGUAGE_KEY = "idlhelp-language";
const LANGUAGES = [
	{ code: "en", label: "EN", title: "English" },
	{ code: "id", label: "ID", title: "Bahasa Indonesia" },
];

const SiteHeader = () => {
	const [scrolled, setScrolled] = useState(false);
	const [open, setOpen] = useState(false);
	const [active, setActive] = useState(navItems[0].href.slice(1));
	const [language, setLanguage] = useState("en");

	useEffect(() => {
		const storedLanguage = window.localStorage.getItem(LANGUAGE_KEY);
		const initialLanguage = storedLanguage === "id" ? "id" : "en";
		setLanguage(initialLanguage);
		document.querySelector(".iag-site")?.setAttribute("data-iag-lang", initialLanguage);
		document.documentElement.lang = initialLanguage;
	}, []);

	// Scroll shadow + scroll-spy for the one-page navigation.
	useEffect(() => {
		const ids = navItems.map((item) => item.href.slice(1));

		const update = () => {
			setScrolled(window.scrollY > 8);

			const line = window.scrollY + 140;
			let best = null;
			for (const id of ids) {
				const el = document.getElementById(id);
				if (!el) continue;
				const top = el.getBoundingClientRect().top + window.scrollY;
				if (top > line) continue;
				// Targets that share a row (FAQ and About side by side on desktop)
				// keep the earlier one active.
				if (!best || top - best.top > 150) best = { id, top };
			}
			const atBottom =
				window.innerHeight + window.scrollY >=
				document.documentElement.scrollHeight - 2;
			setActive(atBottom ? ids[ids.length - 1] : best ? best.id : ids[0]);
		};

		update();
		window.addEventListener("scroll", update, { passive: true });
		window.addEventListener("resize", update);
		return () => {
			window.removeEventListener("scroll", update);
			window.removeEventListener("resize", update);
		};
	}, []);

	// Mobile drawer: lock body scroll, close on Escape or when resized to desktop.
	useEffect(() => {
		document.body.classList.toggle("iag-lock", open);
		if (!open) return;

		const onKey = (event) => {
			if (event.key === "Escape") setOpen(false);
		};
		const onResize = () => {
			if (window.innerWidth >= DESKTOP_MIN) setOpen(false);
		};
		window.addEventListener("keydown", onKey);
		window.addEventListener("resize", onResize);
		return () => {
			window.removeEventListener("keydown", onKey);
			window.removeEventListener("resize", onResize);
			document.body.classList.remove("iag-lock");
		};
	}, [open]);

	const renderLinks = () =>
		navItems.map((item) => (
			<a
				key={item.href}
				href={item.href}
				className={active === item.href.slice(1) ? "is-active" : ""}
				aria-current={active === item.href.slice(1) ? "true" : undefined}
				onClick={() => setOpen(false)}
			>
				<LocalizedText value={item.label} />
			</a>
		));

	const selectLanguage = (nextLanguage) => {
		setLanguage(nextLanguage);
		document.querySelector(".iag-site")?.setAttribute("data-iag-lang", nextLanguage);
		document.documentElement.lang = nextLanguage;
		window.localStorage.setItem(LANGUAGE_KEY, nextLanguage);
	};

	const renderLanguageSwitcher = () => (
		<div
			className="iag-language"
			role="group"
			aria-label="Language / Bahasa"
			data-iag-language-switcher
		>
			{LANGUAGES.map((item) => (
				<button
					key={item.code}
					type="button"
					className={language === item.code ? "is-active" : ""}
					aria-pressed={language === item.code}
					title={item.title}
					data-iag-lang-option={item.code}
					onClick={() => selectLanguage(item.code)}
				>
					{item.label}
				</button>
			))}
		</div>
	);

	return (
		<header className={`iag-header ${scrolled ? "is-scrolled" : ""}`}>
			<div className="iag-container iag-header__inner">
				<Logo />

				<nav className="iag-nav" aria-label="Main">
					{renderLinks()}
				</nav>

				<div className="iag-header__controls">
					<a
						className="iag-btn iag-btn--primary iag-header__cta"
						href="#sim-overview"
					>
						<LocalizedText value={hero.primaryAction} />
						<i className="fa-light fa-book-open-cover" aria-hidden="true"></i>
					</a>

					{renderLanguageSwitcher()}

					<button
						type="button"
						className="iag-burger"
						aria-label={open ? "Close menu" : "Open menu"}
						aria-expanded={open}
						aria-controls="iag-drawer"
						onClick={() => setOpen((value) => !value)}
					>
						<i
							className={`fa-light ${open ? "fa-xmark" : "fa-bars"}`}
							aria-hidden="true"
						></i>
					</button>
				</div>
			</div>

			<div
				id="iag-drawer"
				className={`iag-drawer ${open ? "is-open" : ""}`}
				aria-hidden={!open}
			>
				<nav aria-label="Main menu">{renderLinks()}</nav>
				<a
					className="iag-btn iag-btn--primary"
					href="#sim-overview"
					onClick={() => setOpen(false)}
				>
					<LocalizedText value={hero.primaryAction} />
					<i className="fa-light fa-book-open-cover" aria-hidden="true"></i>
				</a>
			</div>
		</header>
	);
};

export default SiteHeader;
