import BrandShowcase from "@/components/BrandShowcase";
import CaseStudies from "@/components/CaseStudies";
import CallToAction from "@/components/CTA";
import Hero from "@/components/Hero";
import IntroBlock from "@/components/IntroBlock";
import OpportunitiesBlock from "@/components/OpportunitiesBlock";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 w-full flex flex-col space-y-8 overflow-x-hidden">
      <Hero />
      <IntroBlock/>
      <BrandShowcase/>
      <OpportunitiesBlock/>
      <CaseStudies />
      <CallToAction />
    </div>
  );
}
