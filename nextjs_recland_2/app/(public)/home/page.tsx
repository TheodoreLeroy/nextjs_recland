import HeroSection from "@/components/sections/home/HeroSection";
import AboutSection from "@/components/sections/home/AboutSection";
import PartnerSection from "@/components/sections/home/PartnerSection";
import JobsSection from "@/components/sections/home/JobSection";
import FeatureSection from "@/components/sections/home/FeatureSection";
import Image from "next/image";
import AIPlatform from "@/components/sections/home/AIPlatform";
import CTASection from "@/components/sections/home/CTASection";
export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <PartnerSection />
      <FeatureSection />
      <JobsSection />
      <AIPlatform />
      <CTASection />
    </>
  );
}
