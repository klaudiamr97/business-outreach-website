
const achievements = [
  {
    label: "Commitment to Sustainability:",
    description:
      "Your focus on organic, locally sourced ingredients is something we deeply admire, setting a new standard in the plant-based dining industry.",
  },
  {
    label: "Innovative Menu:",
    description:
      "From your mouthwatering vegan tacos to decadent desserts, every dish is a celebration of flavor and ethical dining.",
  },
  {
    label: "Connection to Community:",
    description:
      "Your dedication to supporting local farmers and reducing your environmental footprint shows how much you care about both people and the planet.",
  },
];

export default function BrandShowcase() {
    return (
      <div className="flex flex-col md:flex-row md:space-x-12 mx-8 mt-10 md:mx-10 md:mt-16 lg:mx-20 lg:mt-24">
        <h2 className="text-h2 mb-4 md:mb-0 md:basis-1/2">What We Love About Veganic</h2>
        <ul className="space-y-4 md:space-y-6 md:basis-1/2">
          {achievements.map((achievement, index) => (
            <li key={index} className="flex flex-col">
              <span className="text-h5 pb-4">{achievement.label}</span>
              <p className="text-p">{achievement.description}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  

  
