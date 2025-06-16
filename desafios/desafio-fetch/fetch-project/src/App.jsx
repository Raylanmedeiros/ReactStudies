import React from "react";
import Produto from "./Produto";

const App = () => {
  const [dados, setDados] = React.useState(null);

  const [loading, setLoading] = React.useState(null);

  async function handleClick(event) {
    setLoading(true);
    const response = await fetch(
      `https://ranekapi.origamid.dev/json/api/produto/${event.target.innerText.toLowerCase()}`
    );
    const dados = await response.json();
    console.log(dados);
    setDados(dados);
    setLoading(false);
  }

  return (
    <div>
      <button onClick={handleClick}>Notebook</button>
      <button onClick={handleClick}>Smartphone</button>
      <button onClick={handleClick}>Tablet</button>

      {loading && <p>Loading...</p>}
      {!loading && dados && <Produto dados={dados} />}
    </div>
  );
};

export default App;
