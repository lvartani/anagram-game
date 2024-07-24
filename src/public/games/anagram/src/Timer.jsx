import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // navigate to another page using react router

function Timer() {
  const [secondsRemaining, setSecondsRemaining] = useState(600);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      setSecondsRemaining(prevSeconds => Math.max(0, prevSeconds - 1));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (secondsRemaining === 0) {
      navigate('/score'); // Navigate on when time expires
    }
  }, [secondsRemaining]); // Dependency on secondsRemaining

  return (
    <div className="countdown-timer">
      {secondsRemaining === 0 ? (
        <p>Time's Up!</p>
      ) : (
        <p>Time Left: {secondsRemaining} seconds</p>
      )}
    </div>
  );
}

export default Timer;