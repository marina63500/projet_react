import React, { useEffect, useState } from 'react';
import Sidebar from '../components/Sidebar';
import axios from 'axios';

const Famille = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:8000/api/dossiers')
      .then(response => {
        console.log(response.data);
        setData(response.data); // on met à jour le state ici
      })
      .catch(error => {
        console.error('Erreur Axios :', error);
      });
  }, []); // le tableau vide signifie que ça s’exécute une seule fois au montage

  return (
    <div>
      <Sidebar />
      <main>
      <h1>Bienvenue sur la page Famille</h1>
      <ul>
        {data.map(dossier => (
          <li key={dossier.id}>
            <strong>{dossier.title}</strong> : {dossier.image} - {dossier.description}
          </li>
        ))}
      </ul>
      </main>
    </div>
  );
};

export default Famille;