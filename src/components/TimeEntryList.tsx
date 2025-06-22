import { TimeEntry } from '../types/types';

interface TimeEntryListProps {
  entries: TimeEntry[];
  onDelete: (id: string) => void;
}

export default function TimeEntryList({ entries, onDelete }: TimeEntryListProps) {
  const formatTime = (hours: number): string => {
    const wholeHours = Math.floor(hours);
    const remainingHours = hours - wholeHours;
    const wholeMinutes = Math.floor(remainingHours * 60);
    const seconds = Math.round((remainingHours * 60 - wholeMinutes) * 60);
    
    // Handle 60 seconds overflow to minutes
    let finalMinutes = wholeMinutes;
    let finalSeconds = seconds;
    let finalHours = wholeHours;
    
    if (finalSeconds >= 60) {
      finalMinutes += Math.floor(finalSeconds / 60);
      finalSeconds = finalSeconds % 60;
    }
    
    // Handle 60 minutes overflow to hours
    if (finalMinutes >= 60) {
      finalHours += Math.floor(finalMinutes / 60);
      finalMinutes = finalMinutes % 60;
    }
    
    if (finalHours === 0 && finalMinutes === 0 && finalSeconds === 0) {
      return '0 seconds';
    }
    
    const parts = [];
    if (finalHours > 0) {
      parts.push(`${finalHours} ${finalHours === 1 ? 'hour' : 'hours'}`);
    }
    if (finalMinutes > 0) {
      parts.push(`${finalMinutes} ${finalMinutes === 1 ? 'minute' : 'minutes'}`);
    }
    if (finalSeconds > 0) {
      parts.push(`${finalSeconds} ${finalSeconds === 1 ? 'second' : 'seconds'}`);
    }
    
    return parts.join(' ');
  };

  return (
    <div className="entry-list">
      <h2>Your Entries</h2>
      {entries.length === 0 ? (
        <p>No entries yet</p>
      ) : (
        <ul>
          {entries.map((entry) => (
            <li key={entry.id}>
              <span>{entry.taskName} - {formatTime(entry.hours)}</span>
              <button onClick={() => onDelete(entry.id)}>Delete</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}