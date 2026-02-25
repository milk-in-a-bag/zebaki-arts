import AboutHeader from "../components/about/AboutHeader";
import AboutFooter from "../components/about/AboutFooter";
import HeroSection from "../components/about/HeroSection";
import JourneySection from "../components/about/JourneySection";
import PhilosophyCard from "../components/about/PhilosophyCard";
import StudioLifeSection from "../components/about/StudioLifeSection";
import CTASection from "../components/about/CTASection";

export default function AboutPage() {
  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-[#1b0e10]">
      <div className="relative flex min-h-screen flex-col overflow-x-hidden">
        <AboutHeader />
        <main className="flex-1">
          <HeroSection />
          <JourneySection />
          <PhilosophyCard />
          <StudioLifeSection />
          <CTASection />
        </main>
        <AboutFooter />
      </div>
    </div>
  );
}
