import Image from "next/image";
import FoodImg from "@/assets/food.webp";

const introData = {
  description:
    "Your commitment to sustainability, plant-based living, and serving delicious, organic food truly caught our eye. The impact you’re making in the culinary world is not only inspiring but essential to a better, greener future. We believe in your mission, and we’d love to help amplify your reach and success even further. Together, we can share your story with a broader audience and drive even more food lovers to your doors.",
  imgSrc: FoodImg,
};

export default function IntroBlock() {
  return (
    <div className="flex flex-col md:flex-row mx-8 mt-10 md:mx-10 md:mt-16 lg:mx-20 lg:mt-24">
      {introData.imgSrc && (
        <div className="relative w-full md:basis-1/2 md:mr-6 h-auto">
          <Image
            src={introData.imgSrc}
            width={500}
            height={400}
            alt="Intro image"
            layout="responsive"
            objectFit="cover"
          />
        </div>
      )}
      <div className="md:basis-1/2 mt-8 md:mt-0">
        {introData.description && (
          <p className="text-p">{introData.description}</p>
        )}
      </div>
    </div>
  );
}





