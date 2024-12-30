import Image from 'next/image';

export default function ImageText(props) {
  const { imgSrc, children } = props;
  return (
    <div className="flex flex-col md:flex-row mx-8 md:mx-10 lg:mx-20 mt-10 md:mt-16 lg:mt-24 space-y-8 md:space-y-0 md:space-x-12">
      <div className="md:basis-1/2 flex md:items-center">
        <div>{children}</div>
      </div>
      <div className="relative w-full md:basis-1/2 flex-grow">
        <Image src={imgSrc} alt="Intro image" style={{ width: 'full', height: 'auto', objectFit: 'cover' }} />
      </div>
    </div>
  );
}
