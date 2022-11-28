"use strict";

import Receptor from "./unaFila_Receptor.js";
import Estructurador from "./unaFila_Estructurador.js";

function limpiar() {
  document.getElementById("Interpolación").reset();
}

class App {
  constructor() {
    this.btnRegister = document.querySelector("#btnRegister");
    btnRegister.addEventListener("click", this.readForm);
    this._estructura = new Estructurador();
  }

  readForm = () => {
    let receptor = Receptor.readForm();

    if (receptor.getLlegada() > receptor.getServicio()) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "La tasa de llegada (λ) no puede ser mayor que la tasa de servicio (µ)",
      });

      return;
    } else {
      this._printResolution(receptor);
      Swal.fire("Bien!", "Ecuación Registrada", "success");
    }
  };

  _printResolution(receptor) {
    document.getElementById("titulo").innerHTML = "Resultados";
    document.getElementById(
      "TitL"
    ).innerHTML = `Número promedio en el sistema: `;
    document.getElementById(
      "FormL"
    ).innerHTML = `▶ L = ${this._estructura.clientesSistema(receptor)}`;
    document.getElementById(
      "TitW"
    ).innerHTML = `Tiempo promedio en el sistema: `;
    document.getElementById(
      "FormW"
    ).innerHTML = `▶ W = ${this._estructura.clientesFila(receptor)}`;
    document.getElementById("TitLq").innerHTML = `Número promedio en la cola: `;
    document.getElementById(
      "FormLq"
    ).innerHTML = `▶ Lq = ${this._estructura.tiempoSistema(receptor)}`;
    document.getElementById("TitWq").innerHTML = `Tiempo promedio en la cola: `;
    document.getElementById(
      "FormWq"
    ).innerHTML = `▶ Wq = ${this._estructura.tiempoFila(receptor)}`;
    document.getElementById("TitRho").innerHTML = `Utilización del sistema: `;
    document.getElementById(
      "FormRho"
    ).innerHTML = `▶ Rho = ${this._estructura.utilizacion(receptor)}`;
    
  }
}

new App();
