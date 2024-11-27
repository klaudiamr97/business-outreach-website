import BrandShowcase from "@/components/BrandShowcase";
import CaseStudies from "@/components/CaseStudies";
import CallToAction from "@/components/CTA";
import Hero from "@/components/Hero";
import IntroBlock from "@/components/IntroBlock";
import OpportunitiesBlock from "@/components/OpportunitiesBlock";
import Restaurant from "@/assets/veganic_home-1_small.webp"
import FoodImg from "@/assets/food.webp"
import UKR from "@/assets/ukr.jpg"
import McMiller from "@/assets/McMiller_ItsBananas-550x350.jpeg"
import PJC from "@/assets/PJC.jpeg"

export default function Home() {
  const brandShowcaseAchievements = {
    title: "What We Love About Veganic",
    achievements:[
      { label: "Commitment to Sustainability:" ,
        description:"Your focus on organic, locally sourced ingredients is something we deeply admire, setting a new standard in the plant-based dining industry."},
        { label: "Innovative Menu:" ,
          description:"From your mouthwatering vegan tacos to decadent desserts, every dish is a celebration of flavor and ethical dining."},
          { label: "Connection to Community:" ,
            description:"Your dedication to supporting local farmers and reducing your environmental footprint shows how much you care about both people and the planet."},
     
    ]
  }
  const opportunities = {
    title: "Opportunities to Build on Your Success",
    opportunities:[
      { label: "Elevate Your Visibility:" ,
        description:"Implement a customized SEO strategy to attract eco-conscious diners and plant-based food enthusiasts, bringing more visibility to your mission and menu."},
        { label: "Expand Your Reach:" ,
          description:"Launch targeted PPC campaigns to connect with local customers who value sustainable dining and crave innovative vegan cuisine."},
          { label: "Enhance Guest Experience:" ,
            description:"Optimize your website to create a seamless journey from discovery to booking, ensuring visitors are excited to dine with you or order online."},
     
    ]
  }

  const caseStudiesData = {
    heading:"Our Work That Aligns with Your Vision",
    CaseStudies:[
      {
        image: UKR,
        title:"UK Radiators" ,
        description: "We implemented an integrated content strategy for UK Radiators, which tripled their organic traffic. Our tailored approach focused on SEO optimization and engaging, conversion-driven content.",
        link: "https://www.digivate.com/work/uk-radiators-cro/"
      },
      {
        image: McMiller,
        title:"McMiller Games" ,
        description: "For McMiller Games, we designed data-backed advertising personas, leading to a 151% revenue increase and a 400% ROI. This campaign effectively connected their brand to their target audience.",
        link: "https://www.digivate.com/work/mcmiller/"
      },
      {
        image: PJC,
        title:"Private Jet Charter" ,
        description: "Our bespoke SEO strategy for Private Jet Charter increased their conversions by 77.82%. The focus was on driving targeted traffic and delivering a luxury-focused digital experience.",
        link: "https://www.digivate.com/work/private-jet-charter/"
      },
    ]
  }
  return (
    <div className="min-h-screen bg-gray-100 w-full flex flex-col space-y-8 overflow-x-hidden">
      <Hero title="Hello Veganic!" 
      description="We’ve been inspired by your incredible work and wanted to share something special with you." 
      imgSrc={Restaurant}/>
      <IntroBlock 
      description="Your commitment to sustainability, plant-based living, and serving delicious, organic food truly caught our eye. The impact you’re making in the culinary world is not only inspiring but essential to a better, greener future. We believe in your mission, and we’d love to help amplify your reach and success even further. Together, we can share your story with a broader audience and drive even more food lovers to your doors."
      imgSrc={FoodImg} />
      <BrandShowcase
      title={brandShowcaseAchievements.title}
      achievements={brandShowcaseAchievements.achievements}
      />
      <OpportunitiesBlock
      title={opportunities.title}
      opportunities={opportunities.opportunities}
      />
      <CaseStudies 
      heading={caseStudiesData.heading}
      caseStudies={caseStudiesData.CaseStudies}
      />
      <CallToAction 
      heading="We’d Love to Collaborate"
      description="If you’re ready to take your impact to the next level, let’s connect! We’d be thrilled to discuss how we can help Veganic shine even brighter and reach more guests who share your passion for sustainable, plant-based dining."
      buttonLink="#"
      />
    </div>
  );
}
