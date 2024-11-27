
import Image, { StaticImageData } from "next/image";

interface CaseStudy {
    image: string | StaticImageData;
    title: string;
    description: string;
    link: string;
}

interface CaseStudiesProps {
    heading?: string;
    caseStudies?: CaseStudy[];
}

const CaseStudies: React.FC<CaseStudiesProps> = ({ heading, caseStudies }) => {
    return (
        <div className="flex flex-col mx-8 mt-10 md:mx-10 md:mt-16 lg:mx-20 lg:mt-24">
            {heading && <div><h2 className="text-h2 mb-6 md:mb-4">{heading}</h2></div>}
            <div className="flex flex-col md:flex-row md:space-x-6">
                {caseStudies?.map((caseStudy, index) => (
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
                        <a href={caseStudy.link} target="_blank" rel="noopener noreferrer" className="text-primary">
                            View Full Case Study
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CaseStudies;
