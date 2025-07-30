import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Messagerie.scss";

function Messagerie() {
  const [messages, setMessages] = useState([]);
  const [users, setUsers] = useState([]);
  const [messageContent, setMessageContent] = useState("");
  const [subject, setSubject] = useState("");
  const [destinataireId, setDestinataireId] = useState("");
  const [dossierId, setDossierId] = useState(1); // à adapter selon le dossier actuel

  useEffect(() => {
    // Charger les messages
    axios
      .get("http://localhost:8000/api/message")
      .then((res) => setMessages(res.data))
      .catch((err) => console.error("Erreur messages :", err));

    // Charger les utilisateurs
    axios
      .get("http://localhost:8000/api/users")
      .then((res) => setUsers(res.data))
      .catch((err) => console.error("Erreur users :", err));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const messageData = {
      content: messageContent,
      object: subject,
      dossier_id: dossierId,
      user_id: destinataireId,
    };

    axios
      .post("http://localhost:8000/api/message/add", messageData)
      .then(() => {
        alert("Message envoyé !");
        setMessageContent("");
        setSubject("");
        setDestinataireId("");
        // recharger les messages
        axios
          .get("http://localhost:8000/api/message")
          .then((res) => setMessages(res.data));
      })
      .catch((err) => {
        console.error("Erreur envoi :", err);
        alert("Erreur lors de l'envoi");
      });
  };

  return (
    <div className="messages-container">
      <div className="header">
        <button className="logout-button">
          <span className="icon">👤</span> Déconnexion
        </button>
      </div>

      <form className="send-form" onSubmit={handleSubmit}>
        <h3>Envoyer un message</h3>
        <input
          type="text"
          placeholder="Sujet"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          required
        />
        <textarea
          placeholder="Contenu du message"
          value={messageContent}
          onChange={(e) => setMessageContent(e.target.value)}
          required
        ></textarea>
        <select
          value={destinataireId}
          onChange={(e) => setDestinataireId(e.target.value)}
          required
        >
          <option value="">-- Choisir un destinataire --</option>
          {users.map((user) => (
            <option key={user.id} value={user.id}>
              {user.first_name} {user.last_name}
            </option>
          ))}
        </select>
        <button type="submit">Envoyer</button>
      </form>

      <div className="messages-list">
        {messages.map((msg) => (
          <div key={msg.id} className="message-box">
            <strong>{msg.object}</strong>
            <p>{msg.content}</p>
            <small>
              {msg.createdAt} – {msg.user.first_name} {msg.user.last_name}
            </small>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Messagerie;
