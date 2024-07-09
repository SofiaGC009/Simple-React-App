import React from 'react';
import SecretMessage from './SecretMessage';

function Holis() {
  return (
    <SecretMessage
      title="¡Holis!"
      initialMessage="Bienvenido a la página de Holis."
      secret={{
        title: "¡Este es un mensaje adicional!",
        message: "Aquí tienes un mensaje especial en la página de Holis."
      }}
    />
  );
}

export default Holis;
