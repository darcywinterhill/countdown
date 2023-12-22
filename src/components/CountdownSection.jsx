import "../styling/CountdownSection.css";

const CountdownSection = ({ id, height, dueDate }) => {

  let date = new Date();
  let endDate = new Date(dueDate)

  return (
    <div 
      className="Section" 
      id={id} 
      style={{
        height: height, 
        backgroundColor: date < endDate ? "#FFECD1" : "#FF7D00"
      }}>
    </div>
  )
}

export default CountdownSection;