import "../styling/TopContent.css";

import Countdown from "./Countdown";

const TopContent = () => {

  let deadline = "March, 12, 2024";

  return (
    <div className="AboutContainer">
      <div className="TitleContainer">
        <h1>
          Countdown
        </h1>
      </div>
      <Countdown deadline={deadline} />
    </div>
  )
}

export default TopContent;