import './App.scss';
// import './Timer.scss';
import './buttons.scss';
import { useState, useEffect } from 'react';



function Timer() {
  const [seconds, setSeconds] = useState(0);
  const [timer, setTimer] = useState(null);
  const [time, setTime] = useState(0);

  useEffect(() => {
    if (time > 0) {
      setTimer(setInterval(() => {
        setSeconds(seconds => seconds - 1);
      }, 1000));
    }
    return () => clearInterval(timer);
  }, [time]);

  const startTimer = () => {
    if (time > 0) {
      clearInterval(timer);
      setTimer(setInterval(() => {
        setSeconds(seconds => seconds - 1);
      }, 1000));
    }
  }

  const stopTimer = () => {
    clearInterval(timer);
  }

  const resetTimer = () => {
    clearInterval(timer);
    setSeconds(0);
    setTime(0);
  }

  const handleTimeChange = (event) => {
    setTime(event.target.value);
    setSeconds(event.target.value);
  }

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  }

  return (
    <div className="timer">
      <h1>Laikmatis</h1>
      <div className="timer-input">
        <input type="number" min="0" placeholder="Įveskite laiką (sekundėmis)" onChange={handleTimeChange} />
        <button onClick={startTimer}>Pradėti</button>
        <button onClick={stopTimer}>Sustabdyti</button>
        <button onClick={resetTimer}>Naujas</button>
      </div>
      <div className="timer-display">
        <h2>{formatTime(seconds)}</h2>
      </div>
      {seconds === 0 && <div className="timer-alert">Laikas pasibaigė!</div>}
    </div>
  );
}

export default Timer;
