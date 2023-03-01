import "./styles.css";
import { useState } from "react";

export default function App() {
  const [isdark, setIsDark] = useState(false);

  /* Función para cambiar el color del tema*/
  function cambiarColor() {
    /*Cargo la variable con el valor actual del div accediendo por ID */
    var changeColor = document.getElementById("div");

    /*Valido el tema actual */
    if (!isdark) {
      /*Quita el tema claro y asigna el oscuro */
      changeColor.classList.remove("light-theme");
      changeColor.classList.add("dark-theme");

      /*Antes de salir de la validación setea la variable de estado en true*/
      setIsDark(true);
    } else {
      /*Quita el tema oscuro y asigna el claro */
      changeColor.classList.remove("dark-theme");
      changeColor.classList.add("light-theme");

      /*Antes de salir de la validación setea la variable de estado en false*/
      setIsDark(false);
    }
  }
  return (
    <div id="div" className="App light-theme">
      <h1 id="Titulo">
        Current theme:
        {isdark ? "dark" : "light"}
      </h1>
      <p id="description">
        Light themes have lighter backgrounds and darker font colors. Meanwhile,
        dark themes have darker backgrounds and lighter font colors. Dark themes
        prevent <strong>Eyes Strain </strong>
        and reduce device energy consumption
      </p>
      <h3>What we expect?</h3>
      <p>The button below should toggle between light and dark mode</p>
      <button id="boton" onClick={cambiarColor}>
        Toggle theme
      </button>
    </div>
  );
}
