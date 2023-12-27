import "../styling/TechWrapper.css";

const TechWrapper = ({ height, tech, dueDate }) => {
  let date = new Date();
  let endDate = new Date(dueDate)
  return (

    <div 
      className="TechSection" 
      style={{height: height}}>
      <p style={{color: date < endDate ? "#FFECD1" : "#001524"}}>
        {tech}
      </p>
    </div>
  )
}

export default TechWrapper;