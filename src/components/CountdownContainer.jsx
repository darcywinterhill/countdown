import "../styling/CountdownContainer.css";

import LeftSideContent from "./LeftSideContent";
import CountdownSection from "./CountdownSection";
import RightSideContent from "./RightSideContent";

const CountdownContainer = () => {

  return (
    <div className="Background">
      <LeftSideContent />
      <div className="CountdownWrapper">
        <CountdownSection 
          id="Section12" 
          height="10%"
          dueDate="2024-03-09"
        />
        <CountdownSection 
          id="Section11" 
          height="15%"
          dueDate="2024-02-24"
        />
        <CountdownSection 
          id="Section10" 
          height="5%"
          dueDate="2024-02-03"
        />
        <CountdownSection 
          id="Section9" 
          height="5%"
          dueDate="2024-01-27"
        />
        <CountdownSection 
          id="Section8" 
          height="5%"
          dueDate="2024-01-20"
        />
        <CountdownSection 
          id="Section7" 
          height="5%"
          dueDate="2024-01-13"
        />
        <CountdownSection 
          id="Section6" 
          height="5%"
          dueDate="2024-01-06"
        />
        <CountdownSection 
          id="Section5" 
          height="5%"
          dueDate="2023-12-30"
        />
        <CountdownSection 
          id="Section4" 
          height="5%"
          dueDate="2023-12-23"
        />
        <CountdownSection 
          id="Section3" 
          height="10%"
          dueDate="2023-12-16"
        />
        <CountdownSection 
          id="Section2" 
          height="5%"
          dueDate="2023-12-02"
        />
        <CountdownSection 
          id="Section1" 
          height="20%"
          dueDate="2023-11-25"
        />
      </div>
      <RightSideContent />
    </div>
  )
}

export default CountdownContainer;