import { OpportunitiesData } from "config";

export default function OpportunitiesBlock() {
  const {title, opportunities} = OpportunitiesData;
    return (
      <div className="flex flex-col md:flex-row md:space-x-12 mx-8 mt-10 md:mx-10 md:mt-16 lg:mx-20 lg:mt-24">
        <h2 className="md:basis-1/2 text-h2 mb-4 md:mb-0 md:pr-8">{title}</h2>
        <ul className="md:basis-1/2 space-y-4 md:space-y-6">
          {opportunities.map((opportunity, index) => (
            <li key={index} className="flex flex-col">
              <span className="text-h5 pb-4">{opportunity.label}</span>
              <p className="text-p">{opportunity.description}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  
  
  

  