import React from "react";

const App = () => {
  const [dados, setDados] = React.useState(null);
  const [loading, setLoading] = React.useState(null);

  React.useEffect(() => {
    const preferido = localStorage.getItem("preferido");
    if (preferido) {
      fetch(`https://ranekapi.origamid.dev/json/api/produto/${preferido}`)
        .then((response) => response.json())
        .then((dados) => {
          setDados(dados);
          console.log(dados);
        });
    }
  }, []);

  async function handleClick(event) {
    setLoading(true);
    const preferido = event.target.innerText.toLowerCase();
    localStorage.setItem("preferido", preferido);
    console.log(localStorage.getItem("preferido"));

    const responde = await fetch(
      `https://ranekapi.origamid.dev/json/api/produto/${preferido}`
    )
      .then((response) => response.json())
      .then((dados) => {
        setDados(dados);
        console.log(dados);
        setLoading(false);
      });
  }

  function localStorageClear() {
    localStorage.clear();
    setDados(null);
    alert("Preferências zeradas!");
  }

  return (
    <div>
      <h1>Preferências:</h1>
      <button onClick={handleClick}>Notebook</button>
      <button onClick={handleClick}>Smartphone</button>
      <button onClick={localStorageClear}>Zerar</button>

      {loading && <p>Loading...</p>}
      {dados && (
        <>
          <h1>{dados.nome}</h1>
          <p>R$ {dados.preco}</p>
        </>
      )}
    </div>
  );
};

export default App;
