const callToActionData = {
  heading: "We’d Love to Collaborate",
  description:
    "If you’re ready to take your impact to the next level, let’s connect! We’d be thrilled to discuss how we can help Veganic shine even brighter and reach more guests who share your passion for sustainable, plant-based dining.",
  buttonLink: "#",
};

export default function CallToAction() {
    return (
      <div className="flex flex-col mx-6 my-10 md:my-16 lg:my-24 items-center text-center">
        <h2 className="text-h2 mb-2 md:mb-4">{callToActionData.heading}</h2>
        <p className="text-p py-4 md:pt-0 max-w-4xl">{callToActionData.description}</p>
        <a
          href={callToActionData.buttonLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="bg-button-bg text-button hover:bg-white border-2 hover:text-button-hover border-button-bg px-8 md:px-16 py-2 rounded-md my-4 transition ease-in-out">
            Book a Call
          </button>
        </a>
      </div>
    );
  }
  
  
  
 
  