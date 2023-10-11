import React, { useState, useEffect } from 'react';

function CountdownTimer() {
  const [duration, setDuration] = useState(0);
  const [time, setTime] = useState(duration);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let countdown;

    if (isRunning && time > 0) {
      countdown = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    } else if (time === 0) {
      clearInterval(countdown);
    }

    return () => {
      clearInterval(countdown);
    };
  }, [isRunning, time]);

  const startCountdown = () => {
    if (duration > 0) {
      setIsRunning(true);
      setTime(duration);
    }
  };

  const stopCountdown = () => {
    setIsRunning(false);
  };

  return (
    <div>
      <div>
        <input
          type="number"
          placeholder="Enter duration (seconds)"
          value={duration}
          onChange={(e) => setDuration(parseInt(e.target.value))}
        />
        <button onClick={startCountdown}>Start</button>
        <button onClick={stopCountdown}>Stop</button>
      </div>
      <p>Countdown Timer: {time} seconds</p>
    </div>
  );
}

export default CountdownTimer;