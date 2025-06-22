import { useState } from "react";

interface TimeEntryFormProps {
  onAdd: (taskName: string, hours: number) => void;
}

export default function TimeEntryForm({ onAdd }: TimeEntryFormProps) {
  const [taskName, setTaskName] = useState('');
  const [timeInput, setTimeInput] = useState('');

  const parseTimeInput = (input: string): number => {
    // Handle HH:MM:SS format
    if (input.includes(':')) {
      const timeParts = input.split(':');
      
      if (timeParts.length === 3) {
        // HH:MM:SS format
        const hours = parseInt(timeParts[0]) || 0;
        const minutes = parseInt(timeParts[1]) || 0;
        const seconds = parseInt(timeParts[2]) || 0;
        return hours + (minutes / 60) + (seconds / 3600);
      } else if (timeParts.length === 2) {
        // HH:MM format
        const hours = parseInt(timeParts[0]) || 0;
        const minutes = parseInt(timeParts[1]) || 0;
        return hours + (minutes / 60);
      }
    }
    
    // Handle decimal hours (e.g., "1.5" for 1 hour 30 minutes)
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
        placeholder="Time (HH:MM:SS, or 1.5)"
      />
      <button type="submit">Add Entry</button>
    </form>
  );
}