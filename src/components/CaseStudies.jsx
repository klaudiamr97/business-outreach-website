import Image from "next/image";

  export default async function CaseStudies (props) {
    const {caseStudies, title} = props
    
  return (
    <div className="flex flex-col mx-8 mt-10 md:mx-10 md:mt-16 lg:mx-20 lg:mt-24">
      
        <div>
          <h2 className="text-h2 mb-6 md:mb-4">{title}</h2>
        </div>
      <div className="flex flex-col md:flex-row md:space-x-6">
      {caseStudies?.map((caseStudy, index) => (
        <div key={index} className="flex flex-col mb-6 md:mb-0 md:basis-1/3">
          <div className="relative w-full h-48 md:h-36 lg:h-64 mt-8">
            <Image
              src={caseStudy.image}
              alt={caseStudy.company}
              layout="fill"
              objectFit="cover"
              className="rounded"
            />
          </div>
          <h3 className="text-h3 pt-12 md:pt-2 lg:pt-6">{caseStudy.company}</h3>
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