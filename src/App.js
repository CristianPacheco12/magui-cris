// src/App.js
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Music from './Music';
import Calendar from './Calendar';
import Memories from './Memories';


function Home() {
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
        <Link to="/calendar" className="card">📅 Calendario</Link>
        <Link to="/memories" className="card">📷 Recuerdos</Link>
      </main>
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
