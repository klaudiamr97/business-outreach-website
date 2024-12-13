import Image from "next/image";

export function Article(props){
    const {imageUrl, imageAltTxt, title, snippet, link} = props;

    return (
        <article key={index} className="flex flex-col mb-6 md:mb-0 md:basis-1/3">
          <div className="relative w-full h-48 md:h-36 lg:h-64 mt-8">
            <Image
              src={imageUrl}
              alt={imageAltTxt}
              layout="fill"
              objectFit="cover"
              className="rounded"
            />
          </div>
          <h3 className="text-h3 pt-12 md:pt-2 lg:pt-6">{title}</h3>
          <p className="text-p my-4">{snippet}</p>
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary"
          >
            View Full Case Study
          </a>
        </article>
    )
}