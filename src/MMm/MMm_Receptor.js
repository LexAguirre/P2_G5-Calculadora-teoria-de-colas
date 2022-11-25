"use strict";

export default class Receptor {
  constructor(llegada, servicio, canales) {
    this._llegada = llegada;
    this._servicio = servicio;
    this._canales = canales;
  }
  //(λ)
  getLlegada() {
    return this._llegada;
  }
  //(µ)
  getServicio() {
    return this._servicio;
  }

  getCanales() {
    return this._canales;
  }

  static readForm() {
    let inpLlegada = document.querySelector("#llegada");
    let inpServicio = document.querySelector("#servicio");
    let inpCanales = document.querySelector("#canales");

    let llegada = Number(inpLlegada.value);
    let servicio = Number(inpServicio.value);
    let canales = Number(inpCanales.value);

    let ecuacion = new Receptor(llegada, servicio, canales);

    return ecuacion;
  }
}
