import { useState } from 'react';
import Calendar from 'react-calendar';
import { CalendarContainer } from './TodoCalendar.styles';

export default function TodoCalendar() {
  const [value, onChange] = useState(new Date());

  return (
    <CalendarContainer>
      <Calendar onChange={onChange} value={value} />
    </CalendarContainer>
  );
}