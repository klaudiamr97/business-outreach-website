interface Achievement {
    label: string;
    description: string;
}

interface BrandShowcaseProps {
    title?: string;
    achievements?: Achievement[];
}

const BrandShowcase: React.FC<BrandShowcaseProps> = ({
    title,
    achievements
}) => {
    return (
        <div className="flex flex-col md:flex-row md:space-x-12 mx-8 mt-10 md:mx-10 md:mt-16 lg:mx-20 lg:mt-24">
            <h2 className="text-h2 mb-4 md:mb-0 md:basis-1/2">{title}</h2>
            <ul className="space-y-4 md:space-y-6 md:basis-1/2">
                {achievements?.map((achievement, index) => (
                    <li key={index} className="flex flex-col">
                        <span className="text-h5 pb-4">{achievement.label}</span>
                        <p className="text-p">{achievement.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default BrandShowcase;
