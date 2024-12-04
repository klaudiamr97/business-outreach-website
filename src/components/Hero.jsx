import Image from "next/image";
import Restaurant from "@/assets/veganic_home-1_small.webp";
import DigivateLogo from "@/assets/white-logo.svg";
import VeganicLogo from "@/assets/logo_veganic_restaurant_jasne.webp";

const heroData = {
  title: "Hello Veganic!",
  description:
    "We’ve been inspired by your incredible work and wanted to share something special with you.",
  imgSrc: Restaurant,
};


export default function Hero() {
  return (
    <div className="relative flex flex-col items-center justify-center h-screen">
      {heroData.imgSrc && (
        <div className="relative w-full h-full">
          <Image
            src={heroData.imgSrc}
            alt="hero-image"
            objectFit="cover"
            layout="fill"
            objectPosition="center"
          />
          <div className="absolute inset-0 bg-gray-900 opacity-50 z-0"></div>
        </div>
      )}
      <div className="absolute top-0 md:left-0 m-4 z-10">
        <Image
          src={VeganicLogo}
          alt="Veganic Logo"
          width={150}
          height={50}
          objectPosition="center"
        />
      </div>

      <div className="absolute flex flex-col items-center text-center z-10 m-4">
        <Image
          src={DigivateLogo}
          alt="Digivate Logo"
          width={100}
          height={50}
          objectPosition="center"
        />
        <h1 className="text-h1 py-4 text-white">
          <span className="text-veganic-gold">
            {heroData.title.split(" ")[0]}
          </span>{" "}
          {heroData.title.split(" ").slice(1).join(" ")}
        </h1>
        <p className="text-h5 max-w-3xl text-white">{heroData.description}</p>
      </div>
    </div>
  );
}




