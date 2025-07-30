import React, { useEffect, useState } from 'react';
import Sidebar from '../components/Sidebar';
import axios from 'axios';
import portraitImg from "../assets/images/portrait-d-un-enfant.jpg";

const Home = () => {
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   axios
  //     .get('http://localhost:8000/api/message')
  //     .then(response => {
  //       console.log(response.data);
  //       setData(response.data); // on met à jour le state ici
  //     })
  //     .catch(error => {
  //       console.error('Erreur Axios :', error);
  //     });
  // }, []); // le tableau vide signifie que ça s’exécute une seule fois au montage

  return (
    
    <div>
      <Sidebar />
      <main>
      <h1>Bienvenue sur la page d'accueil</h1>
    <img src={portraitImg} alt="Portrait" className="portrait-img" />;
      {/* <ul>
        {data.map(message => (
          <li key={message.id}>
            <strong>{message.object}</strong> : {message.content} - {message.createdAt}
          </li>
        ))}
      </ul> */}
      </main>
    </div>

   
  );
};

export default Home;