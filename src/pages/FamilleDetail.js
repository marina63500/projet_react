import { useParams, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import axios from "axios";
import Sidebar from "../components/Sidebar";
import Card from "../components/Card";

function FamilleDetails() {
  const { id } = useParams(); // récupère l'id de l'URL
  const navigate = useNavigate(); // permet de naviguer entre les pages
  const [dossier, setDossier] = useState(null);
   
  const [error, setError] = useState(null);


 useEffect(() => {
  axios.get(`http://localhost:8000/api/dossiers/${id}`)
    .then((response) => setDossier(response.dossier))
    .catch((err) => setError(err));
}, [id]);

if (error) {
  return <p style={{ color: "red" }}>Erreur : {error.message}</p>;
}

if (!dossier) {
  return <p>Chargement...</p>;
}



  // if (!dossier) return <p>Chargement...</p>;

  return (
    <div>
      <Sidebar />
      <main>
        <div className="famille-details">
          <h2>Détails de la famille</h2>
         {dossier.map(dossier => (
          <Card
            key={dossier.id}
            id={dossier.id}
            image={dossier.image}
            title={dossier.title}
            description={dossier.description}
          />
         
        ))}
          {/* <p>Créé le: {dossier.createdAt}</p> */}

          {/* <h2>{dossier.title}</h2>
          <img src={dossier.image} alt={dossier.title} />
          <p>{dossier.description}</p> */}
        

          <button
          onClick={() => navigate("/famille")}
          className="btn-retour"
          >
          ← Retour aux familles
        </button>
      </div>
      </main>
    </div>
  );
}

export default FamilleDetails;
