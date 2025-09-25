// src/Music.js
import React from 'react';
import './Music.css';

const songs = [
  {
    name: 'Sabanas Blancas',
    description: 'Es la primer cancion que compartimos, recuerdo mucho el primer tik tok que nos compartimos fue por esa canción, y tambien de un dia que estabamos en mi cuarto y lo hicimos bien bonito al ritmo de esa cancion. ',
    date: '2025-09-25',
    spotifyUrl: 'https://open.spotify.com/embed/track/0IBhXEEKXhv0bdpboaw5M3'
  },
  {
    name: 'Sabor a chocolate',
    description: 'Siempre me recuerda a cada parte de ti',
    date: '2025-09-25',
    spotifyUrl: 'https://open.spotify.com/embed/track/29OzJTIOTjCgR7fLyEXY7u'
  },
   {
    name: 'Por ti',
    description: 'Cuando te extraño mucho, esta canción me ayuda a sentirte más cerca 💌, mi corazon late por ti, no puedo dejar lo que siento por ti mi amor',
    date: '2025-09-25',
    spotifyUrl: 'https://open.spotify.com/embed/track/7DJnWboNefoXfb7kySFldt'
  },
   {
    name: 'Astronauta de tus lunares',
    description: 'Gracias por enseñarme la musica de adancito, me encanta quisiera ir a un concierto contigo de el, asi como esta por que es todo lo que me haces sentir, cada parte de ti me encanta quiero estar junto a ti toda la vida',
    date: '2025-09-25',
    spotifyUrl: 'https://open.spotify.com/embed/track/03K83Z46K5t8VlhLrh9l6v'
  }
];

export default function Music() {
  return (
    <div className="music-container">
      <h2 className="section-title">🎵 Nuestra Música</h2>
      <p className="section-description">
        Esto lo dejo aqui para guardar las canciones que mas me recuerdan a ti, espero las escuches mi amor, te ire dejando mas dia a dia uwu.  
      </p>
      
      {songs.map((song, index) => (
        <div key={index} className="song-card">
          <div className="song-info">
            <h3>{song.name}</h3>
            <small>{song.date}</small>
            <p>{song.description}</p>
          </div>
          <div className="song-player">
            <iframe 
              src={song.spotifyUrl} 
              width="100%" 
              height="80" 
              frameBorder="0" 
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
              loading="lazy"
              title={song.name}
            ></iframe>
          </div>
        </div>
      ))}
    </div>
  );
}
