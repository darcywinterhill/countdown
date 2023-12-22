import "../styling/Countdown.css";

import React, { useEffect, useState } from "react";

const Countdown = ({ deadline }) => {
  const [days, setDays] = useState(0);

  const leading0 = (num) => {
    return num < 10 ? "0" + num : num;
  };

  const getTimeUntil = (deadline) => {
    const time = Date.parse(deadline) - Date.parse(new Date());
    if (time < 0) {
      setDays(0);
    } else {
      setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
    }
  };

  useEffect(() => {
    setInterval(() => getTimeUntil(deadline), 1000);

    return () => getTimeUntil(deadline);
  }, [deadline]);

  return (
    <div className="CounterDays">- {leading0(days)} days left -</div>
  );
};

export default Countdown;
