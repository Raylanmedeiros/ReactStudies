import React from "react";

// Versão 1: Usando uma função para alternar o estado do modal
// Usando callback para alternar o estado do modal consegue abrir e fechar o modal
// de forma mais eficiente, evitando problemas de concorrência.
// const ButtonModal = ({ setModal }) => {
//   function handleClick() {
//     setModal((anterior) => !anterior);
//   }
//   return <button onClick={handleClick}>Abrir Modal</button>;
// };

// Versão 2: Usando uma função anônima diretamente no onClick
const ButtonModal = ({ setModal }) => {
  return <button onClick={() => setModal(true)}>Abrir Modal</button>;
};

export default ButtonModal;
