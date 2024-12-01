import Image from "next/image";
import UKR from "@/assets/ukr.jpg";
import McMiller from "@/assets/McMiller_ItsBananas-550x350.jpeg";
import PJC from "@/assets/PJC.jpeg";


function CaseStudies() {
  return (
    <div className="flex flex-col mx-8 mt-10 md:mx-10 md:mt-16 lg:mx-20 lg:mt-24">
      {caseStudiesData.heading && (
        <div>
          <h2 className="text-h2 mb-6 md:mb-4">{caseStudiesData.heading}</h2>
        </div>
      )}
      <div className="flex flex-col md:flex-row md:space-x-6">
        {caseStudiesData.CaseStudies.map((caseStudy, index) => (
          <div key={index} className="flex flex-col mb-6 md:mb-0 md:basis-1/3">
            <div className="relative w-full h-48 md:h-36 lg:h-64 mt-8">
              <Image
                src={caseStudy.image}
                alt={caseStudy.title}
                layout="responsive"
                width={100}
                height={75}
                objectFit="cover"
                className="rounded"
              />
            </div>
            <h3 className="text-h3 pt-12 md:pt-2 lg:pt-6">{caseStudy.title}</h3>
            <p className="text-p my-4">{caseStudy.description}</p>
            <a
              href={caseStudy.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary"
            >
              View Full Case Study
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

// Content for prompts
const caseStudiesData = {
  heading: "Our Work That Aligns with Your Vision",
  CaseStudies: [
    {
      image: UKR,
      title: "UK Radiators",
      description:
        "We implemented an integrated content strategy for UK Radiators, which tripled their organic traffic. Our tailored approach focused on SEO optimization and engaging, conversion-driven content.",
      link: "https://www.digivate.com/work/uk-radiators-cro/",
    },
    {
      image: McMiller,
      title: "McMiller Games",
      description:
        "For McMiller Games, we designed data-backed advertising personas, leading to a 151% revenue increase and a 400% ROI. This campaign effectively connected their brand to their target audience.",
      link: "https://www.digivate.com/work/mcmiller/",
    },
    {
      image: PJC,
      title: "Private Jet Charter",
      description:
        "Our bespoke SEO strategy for Private Jet Charter increased their conversions by 77.82%. The focus was on driving targeted traffic and delivering a luxury-focused digital experience.",
      link: "https://www.digivate.com/work/private-jet-charter/",
    },
  ],
};

export default CaseStudies;
