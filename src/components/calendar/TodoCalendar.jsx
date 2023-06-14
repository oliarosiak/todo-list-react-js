import { useState } from 'react';
import Calendar from 'react-calendar';

export default function TodoCalendar() {
  const [value, onChange] = useState(new Date());

  console.log(value);

  return (
    <div>
      <Calendar onChange={onChange} value={value} />
    </div>
  );
}