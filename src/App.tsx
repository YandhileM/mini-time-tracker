import { useState } from "react";
import "./styles.css";
import { TimeEntry } from "./types/types";
import TimeEntryForm from "./components/TimeEntryForm";
import TotalHours from "./components/TotalHours";
import TimeEntryList from "./components/TimeEntryList";
import Timer from "./components/Timer";

function App() {
  const [entries, setEntries] = useState<TimeEntry[]>([]);

  const addEntry = (taskName: string, hours: number) => {
    setEntries([...entries, { id: Date.now().toString(), taskName, hours }]);
    console.log(`Added entry: ${taskName} for ${hours} hours`);
  };
    const deleteEntry = (id: string) => {
      console.log(`Deleting entry with id: ${id}`);
    setEntries(entries.filter((entry) => entry.id !== id));
  };
  return (
    <div className="app">
      <h1>Time Tracker</h1>
      <Timer onAdd={addEntry} />
      <TimeEntryForm onAdd={addEntry} />
      <TotalHours entries={entries} />
      <TimeEntryList entries={entries} onDelete={deleteEntry} />
    </div>
  );
}

export default App;
