import "../styling/CountdownContainer.css";

import TopContent from "./TopContent";
import CountdownSection from "./CountdownSection";
import BottomContent from "./BottomContent";

const CountdownContainer = () => {

  return (
    <div className="Background">
      <TopContent />
      <div className="CountdownContent">
        <div className="CountdownWrapper">
          <CountdownSection 
            height="10%"
            dueDate="2024-03-09"
          />
          <CountdownSection  
            height="15%"
            dueDate="2024-02-24"
          />
          <CountdownSection 
            height="5%"
            dueDate="2024-02-03"
          />
          <CountdownSection 
            height="5%"
            dueDate="2024-01-27"
          />
          <CountdownSection 
            height="5%"
            dueDate="2024-01-20"
          />
          <CountdownSection  
            height="5%"
            dueDate="2024-01-13"
          />
          <CountdownSection 
            height="5%"
            dueDate="2024-01-06"
          />
          <CountdownSection 
            height="5%"
            dueDate="2023-12-30"
          />
          <CountdownSection 
            height="5%"
            dueDate="2023-12-23"
          />
          <CountdownSection 
            height="10%"
            dueDate="2023-12-16"
          />
          <CountdownSection 
            height="5%"
            dueDate="2023-12-02"
          />
          <CountdownSection 
            height="20%"
            dueDate="2023-11-25"
          />
        </div>
        <BottomContent />
      </div>
    </div>
  )
}

export default CountdownContainer;