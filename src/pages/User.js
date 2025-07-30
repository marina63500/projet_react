import React, { useEffect, useState } from 'react';
import Sidebar from '../components/Sidebar';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import UserForm from '../components/UserForm';

function User() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/users")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error("Erreur lors du chargement des utilisateurs :", error);
      });
  }, []);

  return (
    <div>
      <Sidebar />
      <main>
    <div className="user-list-container">
      <h1>Liste des utilisateurs</h1>
      <UserForm />
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.first_name} {user.last_name} – {user.email} -{" "}
            {user.phone_number}
          </li>
        ))}
      </ul>
    </div>
    </main>
    </div>
  );
}



export default User;

