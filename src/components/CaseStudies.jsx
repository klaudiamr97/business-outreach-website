import { Article } from './Article';
import { useFetchData } from '@/api/useFetchData';
import { ErrorMessage } from './ErrorMessage';

export default function CaseStudies(props) {
  const { title } = props;

  let { data, loading, error } = useFetchData('https://67560b6111ce847c992bd68c.mockapi.io/case-studies/Casestudies');

  return error ? (
    <ErrorMessage>Oops! It looks like the case studies are missing.</ErrorMessage>
  ) : (
    <div className="flex flex-col mx-8 mt-10 md:mx-10 md:mt-16 lg:mx-20 lg:mt-24">
      <div>
        <h2 className="text-h2 items-center text-center mb-6 md:mb-4">{title}</h2>
      </div>
      <div className="flex flex-col md:flex-row md:space-x-6">
        {data?.map((caseStudy, index) => (
          <Article
            title={caseStudy.company}
            snippet={caseStudy.description}
            imageUrl={caseStudy.image}
            imageAltText={caseStudy.alt}
            link={caseStudy.link}
            key={`${caseStudy.title}-${index}`}
            isLoading={loading}
          />
        ))}
      </div>
    </div>
  );
}
