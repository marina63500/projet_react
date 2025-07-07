import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:8000/api/messages')
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
      <h1>Welcome to the Home Page</h1>

      <ul>
        {data.map(message => (
          <li key={message.id}>
            <strong>{message.name}</strong> — {message.content}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;