import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    roles: ["ROLE_USER"],
    password: "",
    first_name: "",
    last_name: "",
    phone_number: "",
    role_id: "",
    dossier_id: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "roles") {
      setFormData({ ...formData, roles: [value] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8000/api/users/create", formData);
      setMessage(`✅ Utilisateur créé avec ID ${res.data.id}`);
      setFormData({
        email: "",
        roles: ["ROLE_USER"],
        password: "",
        first_name: "",
        last_name: "",
        phone_number: "",
        role_id: "",
        dossier_id: "",
      });
    } catch (error) {
      setMessage(
        error.response?.data?.message || "❌ Erreur lors de la création de l'utilisateur"
      );
    }
  };

  return (
    <div>
      <h2>Créer un utilisateur</h2>
      <form onSubmit={handleSubmit}>
        <input name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
        <input name="password" type="password" placeholder="Mot de passe" value={formData.password} onChange={handleChange} required />
        <input name="first_name" placeholder="Prénom" value={formData.first_name} onChange={handleChange} />
        <input name="last_name" placeholder="Nom" value={formData.last_name} onChange={handleChange} />
        <input name="phone_number" placeholder="Téléphone" value={formData.phone_number} onChange={handleChange} />
        
        <select name="roles" value={formData.roles[0]} onChange={handleChange}>
          <option value="ROLE_USER">Utilisateur</option>
          <option value="ROLE_ADMIN">Administrateur</option>
        </select>

        <input name="role_id" placeholder="ID du rôle" value={formData.role_id} onChange={handleChange} required />
        <input name="dossier_id" placeholder="ID du dossier" value={formData.dossier_id} onChange={handleChange} required />

        <button type="submit">Créer</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default UserForm;