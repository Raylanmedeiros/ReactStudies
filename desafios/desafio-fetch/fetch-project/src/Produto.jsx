import React from "react";

const Produto = ({ dados }) => {
  return (
    <section>
      <>
        <h1>{dados.nome}</h1>
        <p>R$ {dados.preco}</p>
        <img src={dados.fotos[0].src} alt={dados.fotos[0].titulo} />
        <p>{dados.fotos[0].titulo}</p>
        <p>{dados.descricao}</p>
      </>
    </section>
  );
};

export default Produto;
