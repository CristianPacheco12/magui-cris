import React, { useState } from 'react';
import './Memories.css';
import foto1 from './assets/foto1.png';
import foto2 from './assets/foto2.png';
import foto3 from './assets/foto3.jpg';
import foto4 from './assets/foto4.jpg';

const memories = [
  {
  title: 'Primer día 27/03/2025',
  description: 'Este fue el día que me aceptaste la solicitud de Instagram. Recuerdo que estaba calentando la comida, me emocioné y procedí a enviarte un mensaje. Considero que fue el día donde todo lo que tenemos empezó, puesto que antes habíamos hablado, pero no del todo bien.',
  image: foto1
},
{
  title: 'Primera vez que estuvimos juntos',
  description: 'Esto ocurrió un día después de Sistemas. Creo que ya habíamos quedado en hablar, pero no te vi después de la clase. Te marqué, tenía pena y me contestaste. Quedamos de vernos en la plaza y allí estuvimos aproximadamente dos horas. Fue una charla muy agradable; yo te veía y sentía algo bonito, tenía tantas ganas de estar más cerca de ti, pero me daba pena.',
  image: foto2
},
{
  title: 'Segunda vez que estuvimos juntos',
  description: 'Esta vez fue aún más especial. No recuerdo el día exacto, pero al igual que antes, fue después de Sistemas. Llegué a la banca frente a los baños y allí estabas, con tu camisa morada y rosada, si no recuerdo mal. Te agarré de los hombros y te asustaste. Allí estuvimos juntos; recuerdo que fue la primera vez que tuve contacto contigo. Fue muy lindo, me gustó tocarte, pero me moría por besarte.',
  image: foto3
},
{
  title: 'Primera vez 28/04/2025',
  description: 'Este día lo recuerdo perfectamente, aunque después me empedé un poco. Fue la vez que fuimos al Urban. Pudimos estar juntos, nos tocamos y nos besamos. Fue un día muy especial para mí; sentir tu piel me encantó, fue una linda experiencia, recuerdo que te tapabas con la sabana no querias que te viera jsjs perdon por lo que paso despues jsjs y tuviste que cargar conmigo jsjs.',
  image: foto4
  }
];

export default function Memories() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="memories-container">
      <h2>📷 Recuerdos</h2>
      <p>
        Estos son algunos de los momentos que más me han marcado contigo 💌, ire agregando más uwu.
      </p>

      <div className="memories-grid">
        {memories.map((memory, idx) => (
          <div key={idx} className="memory-card">
            <img 
              src={memory.image} 
              alt={memory.title} 
              onClick={() => setSelectedImage(memory.image)} 
              style={{cursor: 'pointer'}}
            />
            <h3>{memory.title}</h3>
            <p>{memory.description}</p>
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className="lightbox" onClick={() => setSelectedImage(null)}>
          <img src={selectedImage} alt="en grande" />
        </div>
      )}
    </div>
  );
}
