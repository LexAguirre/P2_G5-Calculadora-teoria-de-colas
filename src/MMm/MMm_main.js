"use strict";

import Receptor from "./MMm_Receptor.js";
import Estructurador from "./MMm_Estructurador.js";

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

    let completado = this._estructura.add(receptor);
    console.log(this._estructura);

    this._printResolution(receptor);
    Swal.fire("Bien!", "Ecuación Registrada", "success");
  };

  _loopPrint(array) {
    let html = "";
    for (let i = 0; i < array.length; i++) {
      html += `Letra: ${array[i].Letra} <br> Cordenada: ${array[i].Cordenada} <br> Resultado: ${array[i].Resultado} <br>`;
    }
    console.log(array);
    return html;
  }

  _getCoords(array) {
    let data = [];
    for (let i = 0; i < array.length; i++) {
      data.push(array[i].Cordenada);
    }
    console.log(data);
  }

  _printResolution(receptor) {
    document.getElementById("tituloObj").innerHTML = "Función Objetivo";
    document.getElementById("textFunc").innerHTML = `${this._estructura.tipo(
      receptor
    )} = ${this._estructura.forObj(receptor)}`;
    document.getElementById("tituloSuj").innerHTML = "Sujeto a: ";
    document.getElementById(
      "R1"
    ).innerHTML = `Restricción 1: ${this._estructura.forRes1(receptor)}
    `;
    document.getElementById(
      "R2"
    ).innerHTML = `Restricción 2: ${this._estructura.forRes2(receptor)}`;
    this._estructura.tableInfo(receptor);
    document.getElementById(
      "resultado"
    ).innerHTML = `${this._estructura.resultado(receptor)}`;
    this._estructura.tableInfo(receptor);
    document.getElementById("info").innerHTML = `${this._loopPrint(
      this._estructura.tableInfo(receptor)
    )}`;

    document.getElementById(
      "graph"
    ).innerHTML = `<canvas id="myChart" width="400" height="400"></canvas>`;

    const data = {
      datasets: [
        {
          label: "Método Gráfico",
          data: this._estructura.CoordsInfo(receptor),
          backgroundColor: "rgb(255, 99, 132)",
        },
      ],
    };

    const ctx = document.getElementById("myChart").getContext("2d");
    const myChart = new Chart(ctx, {
      type: "scatter",
      data: data,
      options: {
        scales: {
          x: {
            beginAtZero: true,
          },
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }
}

new App();
