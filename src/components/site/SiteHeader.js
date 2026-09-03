"use client";

import { useEffect, useState } from "react";
import { navItems, whatsappLink } from "@/data/site";
import Logo from "./Logo";

const DESKTOP_MIN = 1280;

const SiteHeader = () => {
	const [scrolled, setScrolled] = useState(false);
	const [open, setOpen] = useState(false);
	const [active, setActive] = useState(navItems[0].href.slice(1));

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
				{item.label}
			</a>
		));

	return (
		<header className={`iag-header ${scrolled ? "is-scrolled" : ""}`}>
			<div className="iag-container iag-header__inner">
				<Logo />

				<nav className="iag-nav" aria-label="Main">
					{renderLinks()}
				</nav>

				<a
					className="iag-btn iag-btn--primary iag-header__cta"
					href={whatsappLink()}
					target="_blank"
					rel="noopener noreferrer"
				>
					Request Information
					<i className="fa-brands fa-whatsapp" aria-hidden="true"></i>
				</a>

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

			<div
				id="iag-drawer"
				className={`iag-drawer ${open ? "is-open" : ""}`}
				aria-hidden={!open}
			>
				<nav aria-label="Main menu">{renderLinks()}</nav>
				<a
					className="iag-btn iag-btn--primary"
					href={whatsappLink()}
					target="_blank"
					rel="noopener noreferrer"
				>
					Request Information
					<i className="fa-brands fa-whatsapp" aria-hidden="true"></i>
				</a>
			</div>
		</header>
	);
};

export default SiteHeader;
