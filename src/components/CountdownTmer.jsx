import React, { useEffect, useState } from "react";

function CountdownTmer({ duration }) {
  const [time, setTime] = useState(duration);
  useEffect(() => {
    setTimeout(() => {
      setTime(time - 1000);
    }, 1000);
  }, [time]);

  const timeFormat = (milliSecond) => {
    let total_second = parseInt(Math.floor(milliSecond / 1000));
    let total_minutes = parseInt(Math.floor(total_second / 60));
    let total_hours = parseInt(Math.floor(total_minutes / 60));

    let second = parseInt(total_second % 60);
    let minutes = parseInt(total_minutes % 60);
    let hour = parseInt(total_hours % 24);

    return `${hour} : ${minutes} : ${second}`;
  };

  return (
    <div className="timeContainer">
      <div className="timeBox">{timeFormat(time)}</div>;
    </div>
  );
}

export default CountdownTmer;
