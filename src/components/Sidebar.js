import React from "react";
import "../styles/components/_sidebar.scss";
import { Link } from "react-router-dom";
import { FaHome, FaUsers, FaEnvelope ,FaUserCircle} from "react-icons/fa";

function Sidebar() {
  return (
    <div className="sidebar">
      <ul>
        <li>
          <Link to="/">
            <FaHome className="icon" />
          <span>Accueil</span>
          </Link>
        </li>
        <li>
          <Link to="/famille">
            <FaUsers className="icon" />
            <span>Famille</span>
          </Link>
        </li>
        <li>
          <Link to="/messagerie">
            <FaEnvelope className="icon" />
            <span>Messagerie</span>
          </Link>
        </li>
        <li>
          <Link to="/user">
            <FaUserCircle className="icon" />
            <span>Utilisateurs</span>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;