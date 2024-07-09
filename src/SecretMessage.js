import React, { useState } from 'react';
import './SecretMessage.css'; // Asegúrate de crear y enlazar este archivo CSS

function SecretMessage({ title, initialMessage, secret }) {
  const [showSecret, setShowSecret] = useState(false);

  const handleButtonClick = () => {
    setShowSecret(true);
  };

  return (
    <div className="container d-flex flex-column align-items-center justify-content-center secret-container">
      <h1 className="animate__animated animate__fadeInDown">{title}</h1>
      <p className="animate__animated animate__fadeInUp">{initialMessage}</p>
      <button className="btn btn-warning mt-4" onClick={handleButtonClick}>Revelar Secreto</button>
      {showSecret && (
        <div className="secret-message animate__animated animate__fadeIn">
          <h2>{secret.title}</h2>
          <p>{secret.message}</p>
        </div>
      )}
    </div>
  );
}

export default SecretMessage;
