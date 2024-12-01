function OpportunitiesBlock() {
    return (
      <div className="flex flex-col md:flex-row md:space-x-12 mx-8 mt-10 md:mx-10 md:mt-16 lg:mx-20 lg:mt-24">
        <h2 className="md:basis-1/2 text-h2 mb-4 md:mb-0 md:pr-8">{opportunities.title}</h2>
        <ul className="md:basis-1/2 space-y-4 md:space-y-6">
          {opportunities.opportunities.map((opportunity, index) => (
            <li key={index} className="flex flex-col">
              <span className="text-h5 pb-4">{opportunity.label}</span>
              <p className="text-p">{opportunity.description}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  
  const opportunities = {
    title: "Opportunities to Build on Your Success",
    opportunities: [
      {
        label: "Elevate Your Visibility:",
        description:
          "Implement a customized SEO strategy to attract eco-conscious diners and plant-based food enthusiasts, bringing more visibility to your mission and menu.",
      },
      {
        label: "Expand Your Reach:",
        description:
          "Launch targeted PPC campaigns to connect with local customers who value sustainable dining and crave innovative vegan cuisine.",
      },
      {
        label: "Enhance Guest Experience:",
        description:
          "Optimize your website to create a seamless journey from discovery to booking, ensuring visitors are excited to dine with you or order online.",
      },
    ],
  };
  
  export default OpportunitiesBlock;
  