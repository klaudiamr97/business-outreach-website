export default function ListArticle(props) {
  const { articles } = props;
  return (
    <div className="bg-midnightblue">
      <div className="flex flex-col items-center text-center px-6 mt-14 md:mt-16 lg:mt-16 py-8 md:py-4">
        <div className="flex flex-col md:flex-row md:space-x-6">
          {articles?.map((article, index) => (
            <article key={index} className="flex flex-col mb-6 md:basis-1/3">
              <h4 className="text-h4  text-veganic-gold md:pt-6 lg:pt-6">{article.title}</h4>
              <p className="text-p text-white py-4 px-4 md:px-2">{article.snippet}</p>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
