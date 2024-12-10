
export default function ListBlock(props) {
  const {title, listElements} = props;
    return (
      <div className="flex flex-col md:flex-row md:space-x-12 mx-8 mt-10 md:mx-10 md:mt-16 lg:mx-20 lg:mt-24">
        <h2 className="text-h2 mb-4 md:mb-0 md:basis-1/2">{title}</h2>
        <ul className="space-y-4 md:space-y-6 md:basis-1/2">
          {listElements.map((listElement, index) => (
            <li key={index} className="flex flex-col">
              <span className="text-h5 pb-4">{listElement.label}</span>
              <p className="text-p">{listElement.description}</p>
            </li>
          ))}
        </ul>
        {props.children}
      </div>
    );
  }
  

  
