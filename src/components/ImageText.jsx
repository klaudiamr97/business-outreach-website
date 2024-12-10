import Image from "next/image";

export default function ImageText(props) {
  const {imgSrc, children} = props;
  return (
    <div className="flex flex-col md:flex-row mx-8 mt-10 md:mx-10 md:mt-16 lg:mx-20 lg:mt-24">
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
      <div className="md:basis-1/2 mt-8 md:mt-0 text-p">
         {children}
      </div>
    </div>
  );
}




