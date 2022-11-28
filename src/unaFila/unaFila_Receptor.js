"use strict";

export default class Receptor {
  constructor(llegada, servicio) {
    this._llegada = llegada;
    this._servicio = servicio;
  }
  //(λ)
  getLlegada() {
    return this._llegada;
  }
  //(µ)
  getServicio() {
    return this._servicio;
  }


  static readForm() {
    let inpLlegada = document.querySelector("#llegada");
    let inpServicio = document.querySelector("#servicio");

    let llegada = Number(inpLlegada.value);
    let servicio = Number(inpServicio.value);

    let ecuacion = new Receptor(llegada, servicio);

    return ecuacion;
  }
}
