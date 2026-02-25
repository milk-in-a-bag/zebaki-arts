import Layout from "../components/Layout";
import HeroSection from "../components/home/HeroSection";
import IntroSection from "../components/home/IntroSection";
import FeaturedWorks from "../components/home/FeaturedWorks";
import TestimonialsSection from "../components/home/TestimonialsSection";
import NewsletterSection from "../components/home/NewsletterSection";

export default function HomePage() {
  return (
    <Layout>
      <main>
        <HeroSection />
        <IntroSection />
        <FeaturedWorks />
        <TestimonialsSection />
        <NewsletterSection />
      </main>
    </Layout>
  );
}
