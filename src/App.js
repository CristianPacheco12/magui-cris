// src/App.js
import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Music from './Music';
import Calendar from './Calendar';
import Memories from './Memories';

// para el carrusel (rutas relativas y entre comillas)
import img1 from './assets/carruzel1.jpeg';
import img2 from './assets/carruzel2.jpeg';
import img3 from './assets/carruzel3.jpeg';
import img4 from './assets/carruzel4.jpeg';
import img5 from './assets/carruzel5.jpeg';
import img6 from './assets/carruzel6.jpeg';
import img7 from './assets/carruzel7.jpeg';
import img8 from './assets/carruzel8.jpeg';
import img9 from './assets/carruzel9.jpeg'; 

const carruzelImages = [img1, img2, img3, img4, img5, img6, img7, img8, img9];

function Home() {
  // índice actual
  const [currentIndex, setCurrentIndex] = useState(0);

  // cambia de foto automáticamente cada 3s
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % carruzelImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const goPrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? carruzelImages.length - 1 : prev - 1
    );
  };

  const goNext = () => {
    setCurrentIndex((prev) => (prev + 1) % carruzelImages.length);
  };

  return (
    <div className="app">
      <header className="header">
        <h1>💌 Magui</h1>
        <p>
          Esto es para ti, aquí podrás encontrar todo lo que hemos vivido
          así como mis pensamientos día a día sobre ti mi amor.
        </p>
      </header>

      <main className="main">
        <Link to="/music" className="card">🎵 Música</Link>
        <Link to="/calendar" className="card">📅 Mi diario</Link>
        <Link to="/memories" className="card">📷 Recuerdos</Link>
      </main>

      {/* Carrusel */}
      <div className="carousel-one">
        <button className="prev" onClick={goPrev}>&lt;</button>
        <img
          src={carruzelImages[currentIndex]}
          alt={`Foto ${currentIndex + 1}`}
          className="carousel-image"
        />
        <button className="next" onClick={goNext}>&gt;</button>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/music" element={<Music />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/memories" element={<Memories />} />
      </Routes>
    </Router>
  );
}

export default App;
