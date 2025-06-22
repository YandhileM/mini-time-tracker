import { useState, useEffect } from 'react';

interface TimerProps {
  onAdd: (taskName: string, hours: number) => void;
}

export default function Timer({ onAdd }: TimerProps) {
  const [taskName, setTaskName] = useState('');
  const [isRunning, setIsRunning] = useState(false);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    if (!isRunning) return;
    
    const interval = setInterval(() => setSeconds(s => s + 1), 1000);
    return () => clearInterval(interval);
  }, [isRunning]);

  const start = () => {
    if (!taskName.trim()) {
      alert("Please enter a task name!");
      return;
    }
    setIsRunning(true);
  };

  const stop = () => setIsRunning(false);

  const save = () => {
    if (seconds > 0) {
      onAdd(taskName, seconds / 3600);
      setSeconds(0);
      setTaskName('');
    }
  };

  const formatTime = (s: number) => {
    const h = Math.floor(s / 3600);
    const m = Math.floor((s % 3600) / 60);
    const sec = s % 60;
    return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${sec.toString().padStart(2, '0')}`;
  };

  return (
    <div className="timer">
      <h2>Timer</h2>
      <input
        type="text"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        placeholder="Task name"
        disabled={isRunning}
      />
      <div className="time-display">{formatTime(seconds)}</div>
      <div className="timer-controls">
        <button onClick={isRunning ? stop : start}>
          {isRunning ? 'Stop' : 'Start'}
        </button>
        {!isRunning && seconds > 0 && (
          <button onClick={save}>Save Entry</button>
        )}
      </div>
    </div>
  );
}