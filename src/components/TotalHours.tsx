import { TimeEntry } from '../types/types';

interface TotalHoursProps {
  entries: TimeEntry[];
}

export default function TotalHours({ entries }: TotalHoursProps) {
  const total = entries.reduce((sum, entry) => sum + entry.hours, 0);

  const formatTime = (hours: number): string => {
    const wholeHours = Math.floor(hours);
    const remainingHours = hours - wholeHours;
    const wholeMinutes = Math.floor(remainingHours * 60);
    const seconds = Math.round((remainingHours * 60 - wholeMinutes) * 60);
    
    if (wholeHours === 0 && wholeMinutes === 0 && seconds === 0) {
      return '0 seconds';
    }
    
    const parts = [];
    if (wholeHours > 0) {
      parts.push(`${wholeHours} ${wholeHours === 1 ? 'hour' : 'hours'}`);
    }
    if (wholeMinutes > 0) {
      parts.push(`${wholeMinutes} ${wholeMinutes === 1 ? 'minute' : 'minutes'}`);
    }
    if (seconds > 0) {
      parts.push(`${seconds} ${seconds === 1 ? 'second' : 'seconds'}`);
    }
    
    return parts.join(' ');
  };

  return (
    <div className="total-hours">
      <h2>Total Time: {formatTime(total)}</h2>
    </div>
  );
}