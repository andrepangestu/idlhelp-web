import "./site.scss";

import About from "@/components/site/About";
import CtaSection from "@/components/site/CtaSection";
import Disclaimer from "@/components/site/Disclaimer";
import Faq from "@/components/site/Faq";
import Hero from "@/components/site/Hero";
import HowItWorks from "@/components/site/HowItWorks";
import NoticeBand from "@/components/site/NoticeBand";
import Reveal from "@/components/site/Reveal";
import Services from "@/components/site/Services";
import SiteFooter from "@/components/site/SiteFooter";
import SiteHeader from "@/components/site/SiteHeader";
import TrustStrip from "@/components/site/TrustStrip";
import WhatsAppFloat from "@/components/site/WhatsAppFloat";
import WhoWeHelp from "@/components/site/WhoWeHelp";

export default function Home() {
	return (
		<div className="iag-site">
			<SiteHeader />
			<main>
				<Hero />
				<NoticeBand />
				<Services />
				<WhoWeHelp />
				<HowItWorks />
				<TrustStrip />
				<About />
				<Faq />
				<CtaSection />
				<Disclaimer />
			</main>
			<SiteFooter />
			<WhatsAppFloat />
			<Reveal />
		</div>
	);
}
