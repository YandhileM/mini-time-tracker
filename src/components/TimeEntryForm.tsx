import { useState } from "react";

interface TimeEntryFormProps {
  onAdd: (taskName: string, hours: number) => void;
}

export default function TimeEntryForm({ onAdd }: TimeEntryFormProps) {
  const [taskName, setTaskName] = useState('');
  const [timeInput, setTimeInput] = useState('');

  const parseTimeInput = (input: string): number => {
    if (input.includes(':')) {
      const [hoursStr, minutesStr] = input.split(':');
      const hours = parseInt(hoursStr) || 0;
      const minutes = parseInt(minutesStr) || 0;
      return hours + (minutes / 60);
    }
    

    const decimalHours = parseFloat(input);
    return isNaN(decimalHours) ? 0 : decimalHours;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!taskName.trim()) {
      alert("Please enter a task name!");
      return;
    }
    
    const totalHours = parseTimeInput(timeInput);
    if (totalHours <= 0) {
      alert("Please enter a valid time!");
      return;
    }
    
    onAdd(taskName, totalHours);
    setTaskName('');
    setTimeInput('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        placeholder="Task name"
      />
      <input
        type="text"
        value={timeInput}
        onChange={(e) => setTimeInput(e.target.value)}
        placeholder="Time (e.g., 1:30 or 1.5)"
      />
      <button type="submit">Add Entry</button>
    </form>
  );
}