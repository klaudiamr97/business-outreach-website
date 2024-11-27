interface CallToActionProps {
    heading: string;
    description: string;
    buttonLink: string;
}

const CallToAction: React.FC<CallToActionProps> = ({ heading, description, buttonLink }) => {
    return (
        <div className="flex flex-col mx-6 my-10 md:my-16 lg:my-24 items-center text-center">
            <h2 className="text-h2 mb-2 md:mb-4">{heading}</h2>
            <p className="text-p py-4 md:pt-0 max-w-4xl">{description}</p>
            <a href={buttonLink} target="_blank" rel="noopener noreferrer">
                <button className="bg-button-bg text-button hover:bg-white border-2 hover:text-button-hover border-button-bg px-8 md:px-16 py-2 rounded-md my-4 transition ease-in-out">
                    Book a Call
                </button>
            </a>
        </div>
    )
}

export default CallToAction;


//mx-8 mt-10 md:mx-10 md:mt-16 lg:mx-20 lg:mt-24