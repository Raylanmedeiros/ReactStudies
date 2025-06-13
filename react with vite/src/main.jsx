import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import App2 from "./App2.jsx";
import App3 from "./App3.jsx";
import App4 from "./App4.jsx";
import Form from "./Form/Form.jsx";

createRoot(document.getElementById("root")).render(
  <>
    <h1>Exercícios das aulas em um único arquivo</h1>
    <App />
    <hr />
    <App2 />
    <hr />
    <App3 />
    <hr />
    <App4 />
    <hr />
    <Form />
  </>
);
