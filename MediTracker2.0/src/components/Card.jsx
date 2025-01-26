import React from 'react';
import './Card.css';

const Card = ({ title, description, Dosage, imgSrc, schedule }) => {
  return (
    <div className="card-container">
      <img src={imgSrc} alt={title} />
      <h2 className="card-title">{title}</h2>
      <div className="card-content">
        <p className="card-description">{description}</p>
        <span className="card-dosage">Dosage: {Dosage}</span>
      </div>

      {/* Display medication schedule */}
      <div className="medication-schedule">
        <h4>Schedule:</h4>
        <p>Days: {schedule.days.join(', ')}</p>
        <p>Time: {schedule.time}</p>
      </div>
    </div>
  );
};

export default Card;