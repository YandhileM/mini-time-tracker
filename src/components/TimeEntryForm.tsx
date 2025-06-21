import { useState } from "react";

interface TimeEntryFormProps {
  onAdd: (taskName: string, hours: number) => void;
}

export default function TimeEntryForm({ onAdd }: TimeEntryFormProps) {
  const [taskName, setTaskName] = useState("");
  const [hours, setHours] = useState(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!taskName.trim()) return;
    onAdd(taskName, hours);
    setTaskName("");
    setHours(0);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        placeholder="Task name"
        required
      />
      <input
        type="number"
        value={hours}
        onChange={(e) => setHours(Number(e.target.value))}
        placeholder="Hours"
        min="0"
        step="0.25"
        required
      />
      <button type="submit">Add Entry</button>
    </form>
  );
}
