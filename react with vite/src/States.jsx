import React from "react";
import Modal from "./Components/Modal.jsx";
import ButtonModal from "./Components/ButtonModal.jsx";

const States = () => {
  const [ativo, setAtivo] = React.useState(true);
  const [modal, setModal] = React.useState(false);

  // O useState retorna um array com dois valores:
  // 1. O estado atual (ativo)
  // 2. A função para atualizar o estado (setAtivo)
  return (
    <>
      <h3>
        Não existem limites para o uso do useState, podemos definir diversos no
        mesmo componente.
      </h3>

      <Modal modal={modal} setModal={setModal} />
      <ButtonModal setModal={setModal} />

      <button onClick={() => setAtivo(!ativo)}>
        {ativo ? "Botão Ativo" : "Botão Inativo"}
      </button>
    </>
  );
};

export default States;
