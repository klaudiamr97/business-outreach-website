import Image from "next/image";
import DigivateLogo from "@/assets/white-logo.svg";
import VeganicLogo from "@/assets/logo_veganic_restaurant_jasne.webp";
import { HeroData } from "config";



export default function Hero() {
  const {imgSrc,title, description} = HeroData;
  return (
    <div className="relative flex flex-col items-center justify-center h-screen">
      {imgSrc && (
        <div className="relative w-full h-full">
          <Image
            src={imgSrc}
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
            {title.split(" ")[0]}
          </span>{" "}
          {title.split(" ").slice(1).join(" ")}
        </h1>
        <p className="text-h5 max-w-3xl text-white">{description}</p>
      </div>
    </div>
  );
}




