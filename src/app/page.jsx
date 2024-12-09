import BrandShowcase from "@/components/BrandShowcase";
import CaseStudies from "@/components/CaseStudies";
import CallToAction from "@/components/CTA";
import Hero from "@/components/Hero";
import ImageText from "@/components/ImageText";
import OpportunitiesBlock from "@/components/OpportunitiesBlock";
import Image from "next/image";
import FoodImg from "@/assets/food.webp";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 w-full flex flex-col space-y-8 overflow-x-hidden">
      <Hero />
      <ImageText >
        <div className="relative w-full md:basis-1/2 md:mr-6 h-auto">
          <Image
            src={FoodImg}
            width={500}
            height={400}
            alt="Intro image"
            layout="responsive"
            objectFit="cover"
          />
        </div>
      <div className="md:basis-1/2 mt-8 md:mt-0">
          <p className="text-p">Your commitment to sustainability, plant-based living, and serving delicious, organic food truly caught our eye. The impact you’re making in the culinary world is not only inspiring but essential to a better, greener future. We believe in your mission, and we’d love to help amplify your reach and success even further. Together, we can share your story with a broader audience and drive even more food lovers to your doors.</p>
      </div>
      </ImageText>
      <BrandShowcase/>
      <OpportunitiesBlock/>
      <CaseStudies>
        <h2>Our Work That Aligns with Your Vision</h2>
      </CaseStudies>
      <CallToAction>
      <h2 className="text-h2 mb-2 md:mb-4">We’d Love to Collaborate</h2>
    <p className="text-p py-4 md:pt-0 max-w-4xl">If you’re ready to take your impact to the next level, let’s connect! We’d be thrilled to discuss how we can help Veganic shine even brighter and reach more guests who share your passion for sustainable, plant-based dining.</p>
    <a
      href="#"
      target="_blank"
      rel="noopener noreferrer"
    >
    <button className="bg-button-bg text-button hover:bg-white border-2 hover:text-button-hover border-button-bg px-8 md:px-16 py-2 rounded-md my-4 transition ease-in-out">
      Book a Call
    </button>
    </a>
      </CallToAction>
    </div>
  );
}
