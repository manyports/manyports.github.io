import React, { useState, useEffect } from 'react';

const Time = () => {
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const fetchTime = async () => {
      try {
        const response = await fetch('http://worldtimeapi.org/api/timezone/Asia/Almaty');
        const data = await response.json();
        const astanaTime = new Date(data.utc_datetime);
        setCurrentTime(astanaTime.toLocaleTimeString());
      } catch (error) {
        console.error('Error fetching time:', error);
      }
    };

    fetchTime();
    const intervalId = setInterval(fetchTime, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <h2>time in my city:</h2>
      <p>: {currentTime}</p>
    </div>
  );
};

export default Time;
