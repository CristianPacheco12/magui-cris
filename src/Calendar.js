import React, { useState } from 'react';
import './Calendar.css';
import dia1 from './assets/dia1.jpg';

const events = {
  '2025-09-25': {
    title: 'Pensamiento del día',
    description:
      'Hoy estoy haciendo esta pequeña página, espero te guste mucho mi amor ❤️, te veré más tarde, espero todo salga bien. Te quiero mucho mi Magui bonita.',
    image: dia1,
  },
};

export default function Calendar() {
  const [selectedDate, setSelectedDate] = useState(null);

  // Fijar explícitamente la fecha inicial: 25 de septiembre de 2025
  const startDate = new Date(2025, 8, 25); // mes 8 = septiembre (0 = enero)

  const days = [];
  for (let i = 0; i < 30; i++) {
    const date = new Date(startDate);
    date.setDate(startDate.getDate() + i);
    days.push(date);
  }

  const handleClick = (date) => {
    setSelectedDate(date.toISOString().split('T')[0]);
  };

  const selectedEvent = selectedDate ? events[selectedDate] : null;

  return (
    <div className="calendar-container">
      <h2>📅 Calendario</h2>
      <p>Haz click en cada día, todos los días te dejaré notitas mi bb</p>

      <div className="calendar-grid">
        {days.map((day, idx) => (
          <div
            key={idx}
            className="calendar-day"
            onClick={() => handleClick(day)}
          >
            <div className="day-number">{day.getDate()}</div>
            <div className="day-month">{day.getMonth() + 1}</div>
            <div className="day-year">{day.getFullYear()}</div>
          </div>
        ))}
      </div>

      {selectedEvent && (
        <div className="event-card">
          <h3>{selectedEvent.title}</h3>
          <p>{selectedEvent.description}</p>
          {selectedEvent.image && <img src={selectedEvent.image} alt="evento" />}
        </div>
      )}
    </div>
  );
}