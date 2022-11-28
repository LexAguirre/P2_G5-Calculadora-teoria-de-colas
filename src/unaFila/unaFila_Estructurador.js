"use strict";

export default class Estructurador {
  constructor() {
    this._estructura = new Array();
  }

  clientesSistema(receptor) {
    let llegada = receptor.getLlegada(); //(λ)
    let servicio = receptor.getServicio(); //(µ)

    let part1 = llegada*(2*servicio - llegada)

    let part2 = 2*servicio*(servicio - llegada)

    return part1 / part2;
  }

  clientesFila(receptor) {
    let llegada = receptor.getLlegada(); //(λ)
    let servicio = receptor.getServicio(); //(µ)

    let part1 = (servicio*2)*(servicio-llegada)
      

    return (llegada*2) / part1;
  }

  tiempoSistema(receptor) {
    let llegada = receptor.getLlegada(); //(λ)
    let servicio = receptor.getServicio(); //(µ)

    let part1 = (servicio*2)-(llegada)
    let part2 = (servicio*2)*(servicio-llegada)

    return part1 / part2;
  }

  tiempoFila(receptor) {
    let llegada = receptor.getLlegada(); //(λ)
    let servicio = receptor.getServicio(); //(µ)

    return llegada / ((servicio * 2)*(servicio - llegada)); 
  }

  utilizacion(receptor) {
    return receptor.getLlegada() / receptor.getServicio();
  }


  add(receptor) {
    this._estructura.push(receptor);

    return true;
  }
}
