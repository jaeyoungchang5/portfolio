import AboutSection from "./components/AboutSection";
import ExperiencesSection from "./components/ExperiencesSection";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import ProjectsSection from "./components/ProjectsSection";
import SectionDivider from "./components/SectionDivider";
import SkillsSection from "./components/SkillsSection";


export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-8 md:p-24 bg-neutral-900">
			<Navbar />
			<div className="container mx-auto md:px-12 py-4">
				<HeroSection />
				<AboutSection />
				<SectionDivider />
				<SkillsSection />
				<SectionDivider />
				<ExperiencesSection />
				<SectionDivider />
				<ProjectsSection />
			</div>
			<Footer />
		</main>
	);
}
