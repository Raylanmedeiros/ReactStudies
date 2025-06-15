import React from "react";
import Header from "./components/header.jsx";
import Produtos from "./Pages/Produtos.jsx";
import Home from "./Pages/home.jsx";

const App = () => {
  let Page = <Home />;

  if (window.location.pathname == "/produtos") {
    Page = <Produtos />;
  }

  return (
    <>
      <Header />
      {Page}
    </>
  );
};

export default App;
