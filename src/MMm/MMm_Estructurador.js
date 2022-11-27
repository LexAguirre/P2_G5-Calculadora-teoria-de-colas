"use strict";

export default class Estructurador {
  constructor() {
    this._estructura = new Array();
  }

  P0(receptor) {
    let part1 = 0;
    let n = receptor.getCanales() - 1;
    let divLlegSer = receptor.getLlegada() / receptor.getServicio();

    for (let i = 0; i <= n; i++) {
      part1 += (1 / this.factorial(i)) * Math.pow(divLlegSer, i);
    }
    let part2 =
      (1 / this.factorial(receptor.getCanales())) *
      Math.pow(divLlegSer, receptor.getCanales()) *
      ((receptor.getCanales() * receptor.getServicio()) /
        (receptor.getCanales() * receptor.getServicio() -
          receptor.getLlegada()));

    return 1 / (part1 + part2);
  }

  clientesSistema(receptor) {
    let divLlegSer = receptor.getLlegada() / receptor.getServicio();
    let llegada = receptor.getLlegada(); //(λ)
    let servicio = receptor.getServicio(); //(µ)
    let canales = receptor.getCanales(); //(m)
    let parFacto = canales * servicio - llegada;

    let part1 =
      ((llegada * servicio * Math.pow(divLlegSer, canales)) /
        (this.factorial(canales - 1) * Math.pow(parFacto, 2))) *
      this.P0(receptor);

    return part1 + divLlegSer;
  }

  clientesFila(receptor) {
    let divLlegSer = receptor.getLlegada() / receptor.getServicio();
    let llegada = receptor.getLlegada(); //(λ)
    let servicio = receptor.getServicio(); //(µ)
    let canales = receptor.getCanales(); //(m)
    let parFacto = canales * servicio - llegada;

    let part1 =
      ((servicio * Math.pow(divLlegSer, canales)) /
        (this.factorial(canales - 1) * Math.pow(parFacto, 2))) *
      this.P0(receptor);

    return part1 + 1 / servicio;
  }

  tiempoSistema(receptor) {
    return (
      this.clientesSistema(receptor) -
      receptor.getLlegada() / receptor.getServicio()
    );
  }

  tiempoFila(receptor) {
    return this.clientesFila(receptor) - 1 / receptor.getServicio();
  }

  servidores(receptor) {
    return (
      receptor.getLlegada() / (receptor.getCanales() * receptor.getServicio())
    );
  }

  factorial(n) {
    let total = 1;
    for (let i = 1; i <= n; i++) {
      total = total * i;
    }
    return total;
  }

  add(receptor) {
    this._estructura.push(receptor);

    return true;
  }
}
