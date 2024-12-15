import {Article} from "./Article"
import { useFetchData } from "@/api/useFetchData";
import {Loading} from "./Loading"
import { ErrorMessage } from "./ErrorMessage";

export default function CaseStudies (props) {
  
  const {data, loading, error} = useFetchData('https://67560b6111ce847c992bd68c.mockapi.io/case-studies/casestudies');
  
  const {title} = props
  
  if(loading){
    return <Loading loadingText="Loading Case Studies..." />
  } else if (error){
    return <ErrorMessage errorMessage={
      <>
        Oops! It looks like the case studies are missing. <br /> No worries, you can find them at this{" "}
        <a className="text-digivate" href="https://www.digivate.com/work/">
          link
        </a>
        .
      </>
    } />
  } else{
  return (
    <div className="flex flex-col mx-8 mt-10 md:mx-10 md:mt-16 lg:mx-20 lg:mt-24">
      
        <div>
          <h2 className="text-h2 mb-6 md:mb-4">{title}</h2>
        </div>
      <div className="flex flex-col md:flex-row md:space-x-6">
      {data?.map((caseStudy, index) => (
        <Article title={caseStudy.company} snippet={caseStudy.description} imageUrl={caseStudy.image} imageAltText={caseStudy.alt} link={caseStudy.link} key={`${caseStudy.title}-${index}`} />
        
      ))}
    </div>
    </div>
  );}
}