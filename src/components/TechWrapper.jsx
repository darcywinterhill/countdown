import "../styling/TechWrapper.css";

const TechWrapper = ({ height, tech }) => {

  return (

    <div 
      className="TechSection" 
      style={{height: height}}>
      <p>
        {tech}
      </p>
    </div>
  )
}

export default TechWrapper;