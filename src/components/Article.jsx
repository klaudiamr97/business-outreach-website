import Image from "next/image";

export function Article(props){
    const {isLoading = true, imageUrl, imageAltText, title, snippet, link} = props;

    return isLoading ? (
      <article className="animate-pulse flex flex-col mb-6 md:mb-0 md:basis-1/3">
          <div className="relative w-full h-48 md:h-36 lg:h-64 mt-8">
            <div className="bg-gray-200 h-full"></div>
          </div>
          <h3 className="bg-gray-200 text-h3 mt-12 md:mt-2 lg:mt-6 h-6"></h3>
          <p className="bg-gray-200 h-4 text-p mt-4"></p>
          <p className="bg-gray-200 h-4 text-p mt-2"></p>
          <div
            className="bg-gray-200 h-4 mt-4"
          >
            
          </div>
        </article>
    ) : (
        <article className="flex flex-col mb-6 md:mb-0 md:basis-1/3">
          <div className="relative w-full h-48 md:h-36 lg:h-64 mt-8">
            <Image
              src={imageUrl}
              alt={imageAltText}
              className="rounded"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              style ={{objectFit:"cover"}}
              priority
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