import { StaticImageData } from "next/image";
import Image from 'next/image';

interface IntroProps {
  description?: string;
  imgSrc?: string | StaticImageData;
}

const IntroBlock: React.FC<IntroProps> = ({ description, imgSrc }) => {
  return (
    <div className="flex flex-col md:flex-row mx-8 mt-10 md:mx-10 md:mt-16 lg:mx-20 lg:mt-24">
      {imgSrc && (
        <div className="relative w-full md:basis-1/2 md:mr-6 h-auto">
          <Image
            src={imgSrc}
            width={500}
            height={400}
            alt="Intro image"
            layout="responsive"
            objectFit="cover"
          />
        </div>
      )}
      <div className="md:basis-1/2 mt-8 md:mt-0">
        {description && (
          <p className="text-p ">{description}</p>
        )}
      </div>
    </div>
  );
};

export default IntroBlock;
