import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "../components/Sidebar";

function FamilleDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [dossier, setDossier] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/dossiers/${id}`)
      .then((response) => {
        console.log("Réponse API dossier :", response.data);
        setDossier(response.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Erreur Axios :", err);
        setError(err);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <p>Chargement...</p>;
  }

  if (error) {
    return (
      <div>
        <Sidebar />
        <h1>Erreur</h1>
        <p style={{ color: "red" }}>{error.message}</p>
        <button onClick={() => navigate("/famille")} className="btn-retour">
          ← Retour aux familles
        </button>
      </div>
    );
  }

  return (
    <div>
      <Sidebar />
      
      <div className="famille-details">
      <main>
        <h1>Détails : {dossier.title}</h1>
        <img
          src={`http://localhost:8000/images/${dossier.image}`}
          alt={dossier.title}
          style={{ maxWidth: "400px", borderRadius: "8px" }}
        />
        <p>{dossier.description}</p>
        <button onClick={() => navigate("/famille")} className="btn-retour">
          ← Retour aux familles
        </button>
      </main>
      </div>
    </div>
  );
}

export default FamilleDetails;
