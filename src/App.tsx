import { useState } from "react";
import "./styles.css";
import { TimeEntry } from "./types/types";
import TimeEntryForm from "./components/TimeEntryForm";

function App() {
  const [entries, setEntries] = useState<TimeEntry[]>([]);

  const addEntry = (taskName: string, hours: number) => {
    setEntries([...entries, { id: Date.now().toString(), taskName, hours }]);
    console.log(`Added entry: ${taskName} for ${hours} hours`);
  };
  return (
    <div className="app">
      <h1>Time Tracker</h1>
      <TimeEntryForm onAdd={addEntry} />
    </div>
  );
}

export default App;
