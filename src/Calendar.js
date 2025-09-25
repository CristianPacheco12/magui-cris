
import React, { useState } from 'react';
import './Calendar.css';
import dia1 from './assets/dia1.jpg';


const events = {
  '2025-09-25': {
    title: 'Pensamiento del día',
    description: 'Hoy estoy haciendo esta pequeña pagina, espero te guste mucho mi amor ❤️, te vere mas tarde espero todo salga bien te quiero mucho mi magui bonita.',
    image:dia1 
  }
  
};

export default function Calendar() {
  const [selectedDate, setSelectedDate] = useState(null);

  const today = new Date();
  const days = [];
  for (let i = 0; i < 30; i++) {
    const date = new Date();
    date.setDate(today.getDate() + i);
    days.push(date);
  }

  const handleClick = (date) => {
    setSelectedDate(date.toISOString().split('T')[0]); 
  };

  const selectedEvent = selectedDate ? events[selectedDate] : null;

  return (
    <div className="calendar-container">
      <h2>📅 Calendario</h2>
      <p>Haz click en cada dia, todos los dias te dejare notitas mi bb</p>
      
      <div className="calendar-grid">
        {days.map((day, idx) => (
          <div 
            key={idx} 
            className="calendar-day"
            onClick={() => handleClick(day)}
          >
            {day.getDate()}/{day.getMonth()+1}
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
