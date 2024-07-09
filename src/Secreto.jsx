import React from 'react';
import SecretMessage from './SecretMessage';

function Secreto() {
  return (
    <SecretMessage
      title="Secreto"
      initialMessage="Has encontrado la página secreta."
      secret={{
        title: "¡Este es el mensaje secreto!",
        message: "Gracias por visitar esta página."
      }}
    />
  );
}

export default Secreto;
