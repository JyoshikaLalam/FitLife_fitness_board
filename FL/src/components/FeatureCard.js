import React from 'react';
import { Link } from 'react-router-dom';
import './FeatureCard.css';

const FeatureCard = ({ to, imgSrc, title, description, altText }) => (
  <Link to={to} className="feature-card">
    <article className="card-content">
      <img loading="lazy" src={imgSrc} className="card-image" alt={altText} />
      <h3 className="card-title">{title}</h3>
      <p className="card-description">{description}</p>
    </article>
  </Link>
);

export default FeatureCard;
