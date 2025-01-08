// Importar React
import React from "react";
import ReactDOM from "react-dom/client";

// Incluir tus estilos en el bundle de Webpack
import '../styles/index.css'; // Asegúrate de que la ruta sea correcta

// Importar tus componentes
import Semaforo from "./component/semaforo.jsx";

// Renderizar tu aplicación de React
const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(<Semaforo />);