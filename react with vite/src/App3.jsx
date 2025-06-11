import React from "react";

const produtos = [
  {
    id: 1,
    nome: "Notebook",
    preco: "R$ 2500",
    cores: ["black", "yellow", "red"],
  },
  {
    id: 2,
    nome: "Geladeira",
    preco: "R$ 3000",
    cores: ["blue", "black", "grey"],
  },
  {
    id: 3,
    nome: "Smartphone",
    preco: "R$ 1500",
    cores: ["orange", "blue", "black"],
  },
  {
    id: 4,
    nome: "Guitarra",
    preco: "R$ 3500",
    cores: ["red", "purple", "yellow"],
  },
];

const App3 = () => {
  const dados = produtos.filter(
    ({ preco }) => Number(preco.replace("R$ ", "")) > 1500
  );

  return (
    <section>
      {dados.map(({ id, nome, preco, cores }) => (
        <div key={id}>
          <h1>{nome}</h1>
          <p>{preco}</p>
          <ul>
            {cores.map((cor) => (
              <li key={cor} style={{ color: cor }}>
                {cor}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
};

export default App3;
