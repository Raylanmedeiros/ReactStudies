import React from "react";

// Esse componente Titulo recebe duas props: cor e texto.
// Ele renderiza um elemento <h1> com o texto passado e a cor definida pela prop cor.
const Titulo = (props) => {
  return <h1 style={{ color: props.cor }}>{props.texto}</h1>;
};

// Segunda versão do componente Titulo, utilizando desestruturação para as props.
// Aqui, as props cor e texto são extraídas diretamente do objeto props.
// const Titulo = ({ cor, texto }) => {
//   return <h1 style={{ color: cor }}>{texto}</h1>;
// };

const App4 = () => {
  return <Titulo cor="red" texto="Título do Componente" />;
};

export default App4;
