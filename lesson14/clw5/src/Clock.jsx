import React, { useState, useEffect } from "react";

const getTimeWithOffset = offset => {
  const currentTime = new Date();
  const utc = currentTime.getTime() + currentTime.getTimezoneOffset() * 60000;
  
  return new Date(utc + 3600000 * offset).toLocaleTimeString('en-US');
}

const User = ({location, offset}) => {
  const [time, setTime] = useState(getTimeWithOffset(offset));


  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(getTimeWithOffset(offset))
    }, 1000)

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="clock">
      <div className="clock__location">
        {location}
      </div>
      <div className="clock__time">
        {time}
      </div>
    </div>
  );
}

export default User;