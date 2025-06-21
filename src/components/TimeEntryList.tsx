import { TimeEntry } from '../types/types';

interface TimeEntryListProps {
  entries: TimeEntry[];
  onDelete: (id: string) => void;
}

export default function TimeEntryList({ entries, onDelete }: TimeEntryListProps) {
  return (
    <div className="entry-list">
      <h2>Your Entries</h2>
      {entries.length === 0 ? (
        <p>No entries yet</p>
      ) : (
        <ul>
          {entries.map((entry) => (
            <li key={entry.id}>
              <span>{entry.taskName} - {entry.hours} hours</span>
              <button onClick={() => onDelete(entry.id)}>Delete</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}