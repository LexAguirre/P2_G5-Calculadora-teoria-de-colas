"use strict";

export default class Estructurador {
  constructor() {
    this._estructura = new Array();
    this._intX1 = 0;
    this._intX2 = 0;
  }

  P0(receptor) {}

  clientesSistema(receptor) {}

  clientesFila(receptor) {}

  tiempoSistema(receptor) {}

  tiempoFila(receptor) {}

  servidores(receptor) {}

  forRes1(receptor) {
    let forRes1 = `(${receptor.getRes1X1()})X₁ + (${receptor.getRes1X2()})X₂ ${receptor.getSimRes1()} ${receptor.getRes1()}`;

    return forRes1;
  }

  forRes2(receptor) {
    let forRes2 = `(${receptor.getRes2X1()})X₁ + (${receptor.getRes2X2()})X₂ ${receptor.getSimRes2()} ${receptor.getRes2()}`;

    return forRes2;
  }

  cordeRes1x1(receptor) {
    let x1 = receptor.getRes1() / receptor.getRes1X1();

    return parseFloat(x1.toFixed(2));
  }

  cordeRes1x2(receptor) {
    let x2 = receptor.getRes1() / receptor.getRes1X2();

    return parseFloat(x2.toFixed(2));
  }

  cordeRes2x1(receptor) {
    let x1 = receptor.getRes2() / receptor.getRes2X1();

    return parseFloat(x1.toFixed(2));
  }

  cordeRes2x2(receptor) {
    let x2 = receptor.getRes2() / receptor.getRes2X2();

    return parseFloat(x2.toFixed(2));
  }

  metodoSumaResta(receptor) {
    if (receptor.getRes1X1() < 0) {
      let mulr2x1 = -receptor.getRes1X1() * receptor.getRes2X1();
      let mulr2x2 = -receptor.getRes1X1() * receptor.getRes2X2();
      let mulT2 = -receptor.getRes1X1() * receptor.getRes2();
      let mulr1x1 = receptor.getRes2X1() * receptor.getRes1X1();
      let mulr1x2 = receptor.getRes2X1() * receptor.getRes1X2();
      let mulT1 = receptor.getRes2X1() * receptor.getRes1();

      let sumx1 = mulr1x1 + mulr2x1;
      let sumx2 = mulr1x2 + mulr2x2;
      let sumT = mulT1 + mulT2;

      let x2 = sumT / sumx2;

      let x1 =
        (receptor.getRes1() - receptor.getRes1X2() * x2) / receptor.getRes1X1();

      this._intX1 = parseFloat(x1.toFixed(2));
      this._intX2 = parseFloat(x2.toFixed(2));

      return `(${parseFloat(x1.toFixed(2))}, ${parseFloat(x2.toFixed(2))})`;
    } else if (receptor.getRes1X2() < 0) {
      let mulr2x1 = -receptor.getRes1X2() * receptor.getRes2X1();
      let mulr2x2 = -receptor.getRes1X2() * receptor.getRes2X2();
      let mulT2 = -receptor.getRes1X2() * receptor.getRes2();
      let mulr1x1 = receptor.getRes2X2() * receptor.getRes1X1();
      let mulr1x2 = receptor.getRes2X2() * receptor.getRes1X2();
      let mulT1 = receptor.getRes2X2() * receptor.getRes1();

      let sumx1 = mulr1x1 + mulr2x1;
      let sumx2 = mulr1x2 + mulr2x2;
      let sumT = mulT1 + mulT2;

      let x1 = sumT / sumx1;

      let x2 =
        (receptor.getRes1() - receptor.getRes1X1() * x1) / receptor.getRes1X2();

      this._intX1 = parseFloat(x1.toFixed(2));
      this._intX2 = parseFloat(x2.toFixed(2));

      return `(${parseFloat(x1.toFixed(2))}, ${parseFloat(x2.toFixed(2))})`;
    } else if (receptor.getRes2X1() < 0) {
      let mulr2x1 = receptor.getRes1X1() * receptor.getRes2X1();
      let mulr2x2 = receptor.getRes1X1() * receptor.getRes2X2();
      let mulT2 = receptor.getRes1X1() * receptor.getRes2();
      let mulr1x1 = -receptor.getRes2X1() * receptor.getRes1X1();
      let mulr1x2 = -receptor.getRes2X1() * receptor.getRes1X2();
      let mulT1 = -receptor.getRes2X1() * receptor.getRes1();

      let sumx1 = mulr1x1 + mulr2x1;
      let sumx2 = mulr1x2 + mulr2x2;
      let sumT = mulT1 + mulT2;

      let x2 = sumT / sumx2;

      let x1 =
        (receptor.getRes1() - receptor.getRes1X2() * x2) / receptor.getRes1X1();

      this._intX1 = parseFloat(x1.toFixed(2));
      this._intX2 = parseFloat(x2.toFixed(2));

      return `(${parseFloat(x1.toFixed(2))}, ${parseFloat(x2.toFixed(2))})`;
    } else if (receptor.getRes2X2() < 0) {
      let mulr2x1 = receptor.getRes1X2() * receptor.getRes2X1();
      let mulr2x2 = receptor.getRes1X2() * receptor.getRes2X2();
      let mulT2 = receptor.getRes1X2() * receptor.getRes2();
      let mulr1x1 = -receptor.getRes2X2() * receptor.getRes1X1();
      let mulr1x2 = -receptor.getRes2X2() * receptor.getRes1X2();
      let mulT1 = -receptor.getRes2X2() * receptor.getRes1();

      let sumx1 = mulr1x1 + mulr2x1;
      let sumx2 = mulr1x2 + mulr2x2;
      let sumT = mulT1 + mulT2;

      let x1 = sumT / sumx1;

      let x2 =
        (receptor.getRes1() - receptor.getRes1X1() * x1) / receptor.getRes1X2();

      this._intX1 = parseFloat(x1.toFixed(2));
      this._intX2 = parseFloat(x2.toFixed(2));

      return `(${parseFloat(x1.toFixed(2))}, ${parseFloat(x2.toFixed(2))})`;
    } else {
      let mulr2x1 = receptor.getRes1X1() * receptor.getRes2X1();
      let mulr2x2 = receptor.getRes1X1() * receptor.getRes2X2();
      let mulT2 = receptor.getRes1X1() * receptor.getRes2();
      let mulr1x1 = receptor.getRes2X1() * receptor.getRes1X1();
      let mulr1x2 = receptor.getRes2X1() * receptor.getRes1X2();
      let mulT1 = receptor.getRes2X1() * receptor.getRes1();

      let sumx1 = -mulr1x1 + mulr2x1;
      let sumx2 = -mulr1x2 + mulr2x2;
      let sumT = -mulT1 + mulT2;

      let x2 = Math.abs(sumT / sumx2);

      let x1 = Math.abs(
        (receptor.getRes1() - receptor.getRes1X2() * x2) / receptor.getRes1X1()
      );

      this._intX1 = parseFloat(x1.toFixed(2));
      this._intX2 = parseFloat(x2.toFixed(2));

      return `(${parseFloat(x1.toFixed(2))}, ${parseFloat(x2.toFixed(2))})`;
    }
  }

  tableInfo(receptor) {
    let info = [
      {
        Letra: "A",
        Cordenada: `(${this.cordeRes1x1(receptor)}, ${0})`,
        Resultado: parseFloat(
          receptor.getObjX1() * this.cordeRes1x1(receptor)
        ).toFixed(2),
      },
      {
        Letra: "B",
        Cordenada: `(${0}, ${this.cordeRes1x2(receptor)})`,
        Resultado: parseFloat(
          receptor.getObjX2() * this.cordeRes1x2(receptor)
        ).toFixed(2),
      },
      {
        Letra: "C",
        Cordenada: `(${this.cordeRes2x1(receptor)}, ${0})`,
        Resultado: parseFloat(
          receptor.getObjX1() * this.cordeRes2x1(receptor)
        ).toFixed(2),
      },
      {
        Letra: "D",
        Cordenada: `(${0}, ${this.cordeRes2x2(receptor)})`,
        Resultado: parseFloat(
          receptor.getObjX2() * this.cordeRes2x2(receptor)
        ).toFixed(2),
      },
      {
        Letra: "E",
        Cordenada: this.metodoSumaResta(receptor),
        Resultado: parseFloat(
          receptor.getObjX1() * this._intX1 + receptor.getObjX2() * this._intX2
        ).toFixed(2),
      },
    ];
    return info;
  }

  CoordsInfo(receptor) {
    let data = [];
    let x1 = this.cordeRes1x1(receptor);
    let x2 = this.cordeRes1x2(receptor);
    let x3 = this.cordeRes2x1(receptor);
    let x4 = this.cordeRes2x2(receptor);
    let x5 = this._intX1;
    let x6 = this._intX2;
    data.push({ x: x1, y: 0 });
    data.push({ x: 0, y: x2 });
    data.push({ x: x3, y: 0 });
    data.push({ x: 0, y: x4 });
    data.push({ x: x5, y: x6 });
    return data;
  }

  rMaxX1(receptor) {
    let resultado = 0;

    if (this.tipo(receptor) == "Maximizar") {
      if (this.cordeRes1x1(receptor) < this.cordeRes2x1(receptor)) {
        resultado = parseFloat(
          receptor.getObjX1() * this.cordeRes1x1(receptor)
        ).toFixed(2);

        return resultado;
      } else if (this.cordeRes1x1(receptor) > this.cordeRes2x1(receptor)) {
        resultado = parseFloat(
          receptor.getObjX1() * this.cordeRes2x1(receptor)
        ).toFixed(2);

        return resultado;
      }
    } else if (this.tipo(receptor) == "Minimizar") {
      if (this.cordeRes1x1(receptor) < this.cordeRes2x1(receptor)) {
        resultado = parseFloat(
          receptor.getObjX1() * this.cordeRes2x1(receptor)
        ).toFixed(2);

        return resultado;
      } else if (this.cordeRes1x1(receptor) > this.cordeRes2x1(receptor)) {
        resultado = parseFloat(
          receptor.getObjX1() * this.cordeRes1x1(receptor)
        ).toFixed(2);

        return resultado;
      }
    }
  }

  rMaxX2(receptor) {
    let resultado = 0;

    if (this.tipo(receptor) == "Maximizar") {
      if (this.cordeRes1x2(receptor) < this.cordeRes2x2(receptor)) {
        resultado = parseFloat(
          receptor.getObjX2() * this.cordeRes1x2(receptor)
        ).toFixed(2);

        return resultado;
      } else if (this.cordeRes1x2(receptor) > this.cordeRes2x2(receptor)) {
        resultado = parseFloat(
          receptor.getObjX2() * this.cordeRes2x2(receptor)
        ).toFixed(2);

        return resultado;
      }
    } else if (this.tipo(receptor) == "Minimizar") {
      if (this.cordeRes1x2(receptor) < this.cordeRes2x2(receptor)) {
        resultado = parseFloat(
          receptor.getObjX2() * this.cordeRes2x2(receptor)
        ).toFixed(2);

        return resultado;
      } else if (this.cordeRes1x2(receptor) > this.cordeRes2x2(receptor)) {
        resultado = parseFloat(
          receptor.getObjX2() * this.cordeRes1x2(receptor)
        ).toFixed(2);

        return resultado;
      }
    }
  }

  resultado(receptor) {
    let x1 = Number(this.rMaxX1(receptor));
    console.log(x1);
    let x2 = Number(this.rMaxX2(receptor));
    console.log(x2);
    let interseccion =
      receptor.getObjX1() * this._intX1 + receptor.getObjX2() * this._intX2;
    console.log(interseccion);

    if (this.tipo(receptor) == "Maximizar") {
      if (x1 > x2 && x1 > interseccion) {
        return `Max Z = ${x1}`;
      } else if (x2 > x1 && x2 > interseccion) {
        return `Max Z = ${x2}`;
      } else if (interseccion > x1 && interseccion > x2) {
        return `Max Z = ${interseccion}`;
      }
    } else if (this.tipo(receptor) == "Minimizar") {
      if (x1 < x2 && x1 < interseccion) {
        return `Min Z = ${x1}`;
      } else if (x2 < x1 && x2 < interseccion) {
        return `Min Z = ${x2}`;
      } else if (interseccion < x1 && interseccion < x2) {
        return `Min Z = ${interseccion}`;
      }
    }
  }

  add(receptor) {
    this._estructura.push(receptor);

    return true;
  }
}
