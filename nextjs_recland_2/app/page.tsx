import HeroSection from "@/components/sections/home/HeroSection";
import AboutSection from "@/components/sections/home/AboutSection";
import PartnerSection from "@/components/sections/home/PartnerSection";
import JobsSection from "@/components/sections/home/JobSection";
import FeatureSection from "@/components/sections/home/FeatureSection";
import BonusSection from "@/components/sections/home/BonusSection";
import ReviewSection from "@/components/sections/home/ReviewSection";
import Footer from "@/components/layouts/Footer";

export default function Home() {
  return (
    <>
        <HeroSection />
        <AboutSection />
        <PartnerSection />
        <JobsSection />
        <FeatureSection />
        <BonusSection />
        <ReviewSection />
    </>
  );
}
