import Image from 'next/image';

export default function ListArticle(props) {
  const { articles } = props;
  return (
    <div className="flex flex-col items-center text-center mx-8 mt-10 md:mx-10 md:mt-16 lg:mx-20 lg:mt-24">
      <div className="flex flex-col md:flex-row md:space-x-6">
        {articles?.map((article, index) => (
          <article key={index} className="flex flex-col mb-6 md:mb-0 md:basis-1/3">
            <h3 className="text-h3  text-veganic-gold pt-12 md:pt-2 lg:pt-6">{article.title}</h3>
            <p className="text-p my-4">{article.snippet}</p>
            <div className="relative w-full h-48 md:h-36 lg:h-64 mt-8">
              <Image
                src={article.imageUrl}
                alt={article.imageAltText}
                className="rounded"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                style={{ objectFit: 'cover', objectPosition: 'center' }}
                priority
              />
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
