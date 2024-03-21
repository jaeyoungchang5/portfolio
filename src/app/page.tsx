import AboutSection from "./components/AboutSection";
import ExperiencesSection from "./components/ExperiencesSection";
import HeroSection from "./components/HeroSection";
import ProjectsSection from "./components/ProjectsSection";
import SkillsSection from "./components/SkillsSection";


export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24 bg-neutral-900">
			<div className="container mt-24 mx-auto px-12 py-4">
				<HeroSection />
				<AboutSection />
				<SkillsSection />
				<ExperiencesSection />
				<ProjectsSection />
			</div>
		</main>
	);
}
