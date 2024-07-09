import React from 'react';
import { useNavigate } from 'react-router-dom';

function Menu() {
  const navigate = useNavigate();

  return (
    <div className="container d-flex flex-column align-items-center justify-content-center" style={{ height: '100vh' }}>
      <h1 className="mt-4 mb-4">Menú</h1>
      <button type="button" className="btn btn-primary mb-2" onClick={() => navigate('/holis')}>Holis</button>
      <button type="button" className="btn btn-secondary mb-2" onClick={() => navigate('/secreto')}>Secreto</button>
    </div>
  );
}

export default Menu;
