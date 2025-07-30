import React from 'react';
import '../styles/components/_card.scss';
import { Link } from 'react-router-dom';

const Card = ({id,image,title,description}) => {
  return (
    <div className="card">
      <img src={image} alt={title} className="card_image" />
      <hr />
      <h2 className="card_title">{title}</h2>
      {/* <p className="card__description">{description}</p> */}
      <button className="card_button">
        <Link to={`/famille/${id}`} className="card_button">Voir plus</Link>
      </button>
    </div>
  );
};

export default Card;