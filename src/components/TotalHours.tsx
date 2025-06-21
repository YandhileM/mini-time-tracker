import { TimeEntry } from '../types/types';

interface TotalHoursProps {
  entries: TimeEntry[];
}

export default function TotalHours({ entries }: TotalHoursProps) {
  const total = entries.reduce((sum, entry) => sum + entry.hours, 0);

  return (
    <div className="total-hours">
      <h2>Total Hours: {total.toFixed(2)}</h2>
    </div>
  );
}