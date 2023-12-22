import "../styling/LeftSideContent.css";

import Countdown from "./Countdown";

const LeftSideContent = () => {

  let deadline = "March, 06, 2024";

  return (
    <div className="AboutContainer">
      <div className="TitleContainer">
        <h1>Countdown</h1>
      </div>
      <Countdown deadline={deadline} />
    </div>
  )
}

export default LeftSideContent;