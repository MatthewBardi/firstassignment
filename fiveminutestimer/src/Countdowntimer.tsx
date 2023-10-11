import React, { useState, useEffect } from 'react';

function CountdownTimer() {
  const [time, setTime] = useState(300);

  useEffect(() => {
    const countdown = setInterval(() => {
      if (time > 0) {
        setTime(time - 1);
      } else {
        clearInterval(countdown);
        // You can add code here to handle when the countdown reaches zero.
      }
    }, 1000); // Update the timer every second

    return () => {
      clearInterval(countdown); // Cleanup the interval on component unmount
    };
  }, [time]);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  return (
    <div>
      <p>Countdown Timer:</p>
      <p>{`${minutes}:${seconds < 10 ? '0' : ''}${seconds}`}</p>
    </div>
  );
}

export default CountdownTimer;