import "../styling/CountdownSection.css";

const CountdownSection = ({ height, dueDate }) => {

  let date = new Date();
  let endDate = new Date(dueDate)

  return (
    <div 
      className="Section" 
      style={{
        height: height, 
        backgroundColor: date < endDate ? "#FFECD1" : "#001524"
      }}>
    </div>
  )
}

export default CountdownSection;