"use strict";

export default class Estructurador {
  constructor() {
    this._estructura = new Array();
    this._n = receptor.getCanales() - 1;
    this._divLlegSer = receptor.getLlegada() / receptor.getServicio();
  }

  P0(receptor) {
    let part1 = 0;
    for (let i = 0; i <= this._n; i++) {
      part1 += (1 / factorial(i)) * Math.pow(this._divLlegSer, i);
    }
    let part2 =
      (1 / factorial(receptor.getCanales())) *
      Math.pow(this._divLlegSer, receptor.getCanales()) *
      ((receptor.getCanales() * receptor.getServicio()) /
        (receptor.getCanales() * receptor.getServicio() -
          receiver.getLlegada()));

    return 1 / (part1 + part2);
  }

  clientesSistema(receptor) {}

  clientesFila(receptor) {}

  tiempoSistema(receptor) {}

  tiempoFila(receptor) {}

  servidores(receptor) {}

  factorial(n) {
    var total = 1;
    for (i = 1; i <= n; i++) {
      total = total * i;
    }
    return total;
  }

  add(receptor) {
    this._estructura.push(receptor);

    return true;
  }
}
