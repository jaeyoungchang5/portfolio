import SiteFooter from '@/components/layout/SiteFooter';
import SiteHeader from '@/components/layout/SiteHeader';
import AboutSection from '@/components/sections/AboutSection';
import ExperienceSection from '@/components/sections/ExperienceSection';
import Hero from '@/components/sections/Hero';
import ProjectsSection from '@/components/sections/ProjectsSection';
import SkillsSection from '@/components/sections/SkillsSection';

export default function Home() {
    return (
        <>
            <SiteHeader />
            <div className='mx-auto max-w-page px-4 sm:px-8'>
                <main>
                    <Hero />
                    <ExperienceSection />
                    <ProjectsSection />
                    <SkillsSection />
                    <AboutSection />
                </main>
                <SiteFooter />
            </div>
        </>
    );
}
