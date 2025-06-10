import React from "react";

const App2 = () => {
  const livros = [
    { nome: "Dom Casmurro", ano: 1899 },
    { nome: "Memórias Póstumas de Brás Cubas", ano: 1881 },
    { nome: "O Guarani", ano: 1857 },
    { nome: "Iracema", ano: 1865 },
    { nome: "Senhora", ano: 1875 },
  ];

  return (
    <ul>
      {livros
        .filter(({ ano }) => ano >= 1850)
        .map(({ nome, ano }) => (
          <li key={nome}>
            {nome} - {ano}
          </li>
        ))}
    </ul>
  );
};

export default App2;
