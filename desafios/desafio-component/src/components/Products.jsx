import React from "react";
import Produtos from "../Pages/Produtos";

const produtos = [
  { nome: "Notebook", propriedades: ["16gb ram", "512gb"] },
  { nome: "Smartphone", propriedades: ["2gb ram", "128gb"] },
];

const Products = () => {
  return (
    <div>
      {produtos.map(({ nome, propriedades }) => (
        <div
          key={nome}
          style={{ border: "1px solid black", padding: "10px", margin: "10px" }}
        >
          <p>{nome}</p>
          <ul>
            {propriedades.map((propriedade) => (
              <li key={propriedade}>{propriedade}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Products;
