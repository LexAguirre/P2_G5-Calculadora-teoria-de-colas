"use strict";

export default class Estructurador {
  constructor() {
    this._estructura = new Array();
    this._intX1 = 0;
    this._intX2 = 0;
  }

  tipo(receptor) {
    let tipo = receptor.getMinMax();

    return tipo;
  }

  forObj(receptor) {
    let forObj = `(${receptor.getObjX1()})X₁ + (${receptor.getObjX2()})X₂`;

    return forObj;
  }

  forRes1(receptor) {
    let forRes1 = `(${receptor.getRes1X1()})X₁ + (${receptor.getRes1X2()})X₂ ${receptor.getSimRes1()} ${receptor.getRes1()}`;

    return forRes1;
  }

  forRes2(receptor) {
    let forRes2 = `(${receptor.getRes2X1()})X₁ + (${receptor.getRes2X2()})X₂ ${receptor.getSimRes2()} ${receptor.getRes2()}`;

    return forRes2;
  }

  forRes3(receptor) {
    let forRes3 = `(${receptor.getRes3X1()})X₁ + (${receptor.getRes3X2()})X₂ ${receptor.getSimRes3()} ${receptor.getRes3()}`;

    return forRes3;
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

  cordeRes3x1(receptor) {
    let x1 = receptor.getRes3() / receptor.getRes3X1();

    return parseFloat(x1.toFixed(2));
  }

  cordeRes3x2(receptor) {
    let x2 = receptor.getRes3() / receptor.getRes3X2();

    return parseFloat(x2.toFixed(2));
  }

  metodoSumaResta(receptor) {
    if (receptor.getRes2X1() < 0) {
      let mulr2x1 = -receptor.getRes2X1() * receptor.getRes3X1();
      let mulr2x2 = -receptor.getRes2X1() * receptor.getRes3X2();
      let mulT2 = -receptor.getRes2X1() * receptor.getRes3();
      let mulr1x1 = receptor.getRes3X1() * receptor.getRes2X1();
      let mulr1x2 = receptor.getRes3X1() * receptor.getRes2X2();
      let mulT1 = receptor.getRes3X1() * receptor.getRes2();

      let sumx1 = mulr1x1 + mulr2x1;
      let sumx2 = mulr1x2 + mulr2x2;
      let sumT = mulT1 + mulT2;

      let x2 = sumT / sumx2;

      let x1 =
        (receptor.getRes2() - receptor.getRes2X2() * x2) / receptor.getRes2X1();

      this._intX1 = parseFloat(x1.toFixed(2));
      this._intX2 = parseFloat(x2.toFixed(2));

      return `(${parseFloat(x1.toFixed(2))}, ${parseFloat(x2.toFixed(2))})`;
    } else if (receptor.getRes2X2() < 0) {
      let mulr2x1 = -receptor.getRes2X2() * receptor.getRes3X1();
      let mulr2x2 = -receptor.getRes2X2() * receptor.getRes3X2();
      let mulT2 = -receptor.getRes2X2() * receptor.getRes3();
      let mulr1x1 = receptor.getRes3X2() * receptor.getRes2X1();
      let mulr1x2 = receptor.getRes3X2() * receptor.getRes2X2();
      let mulT1 = receptor.getRes3X2() * receptor.getRes2();

      let sumx1 = mulr1x1 + mulr2x1;
      let sumx2 = mulr1x2 + mulr2x2;
      let sumT = mulT1 + mulT2;

      let x1 = sumT / sumx1;

      let x2 =
        (receptor.getRes2() - receptor.getRes2X1() * x1) / receptor.getRes2X2();

      this._intX1 = parseFloat(x1.toFixed(2));
      this._intX2 = parseFloat(x2.toFixed(2));

      return `(${parseFloat(x1.toFixed(2))}, ${parseFloat(x2.toFixed(2))})`;
    } else if (receptor.getRes3X1() < 0) {
      let mulr2x1 = receptor.getRes2X1() * receptor.getRes3X1();
      let mulr2x2 = receptor.getRes2X1() * receptor.getRes3X2();
      let mulT2 = receptor.getRes2X1() * receptor.getRes3();
      let mulr1x1 = -receptor.getRes3X1() * receptor.getRes2X1();
      let mulr1x2 = -receptor.getRes3X1() * receptor.getRes2X2();
      let mulT1 = -receptor.getRes3X1() * receptor.getRes2();

      let sumx1 = mulr1x1 + mulr2x1;
      let sumx2 = mulr1x2 + mulr2x2;
      let sumT = mulT1 + mulT2;

      let x2 = sumT / sumx2;

      let x1 =
        (receptor.getRes2() - receptor.getRes2X2() * x2) / receptor.getRes2X1();

      this._intX1 = parseFloat(x1.toFixed(2));
      this._intX2 = parseFloat(x2.toFixed(2));

      return `(${parseFloat(x1.toFixed(2))}, ${parseFloat(x2.toFixed(2))})`;
    } else if (receptor.getRes3X2() < 0) {
      let mulr2x1 = receptor.getRes2X2() * receptor.getRes3X1();
      let mulr2x2 = receptor.getRes2X2() * receptor.getRes3X2();
      let mulT2 = receptor.getRes2X2() * receptor.getRes3();
      let mulr1x1 = -receptor.getRes3X2() * receptor.getRes2X1();
      let mulr1x2 = -receptor.getRes3X2() * receptor.getRes2X2();
      let mulT1 = -receptor.getRes3X2() * receptor.getRes2();

      let sumx1 = mulr1x1 + mulr2x1;
      let sumx2 = mulr1x2 + mulr2x2;
      let sumT = mulT1 + mulT2;

      let x1 = sumT / sumx1;

      let x2 =
        (receptor.getRes2() - receptor.getRes2X1() * x1) / receptor.getRes2X2();

      this._intX1 = parseFloat(x1.toFixed(2));
      this._intX2 = parseFloat(x2.toFixed(2));

      return `(${parseFloat(x1.toFixed(2))}, ${parseFloat(x2.toFixed(2))})`;
    } else {
      let mulr2x1 = receptor.getRes2X1() * receptor.getRes3X1();
      let mulr2x2 = receptor.getRes2X1() * receptor.getRes3X2();
      let mulT2 = receptor.getRes2X1() * receptor.getRes3();
      let mulr1x1 = receptor.getRes3X1() * receptor.getRes2X1();
      let mulr1x2 = receptor.getRes3X1() * receptor.getRes2X2();
      let mulT1 = receptor.getRes3X1() * receptor.getRes2();

      let sumx1 = -mulr1x1 + mulr2x1;
      let sumx2 = -mulr1x2 + mulr2x2;
      let sumT = -mulT1 + mulT2;

      let x2 = Math.abs(sumT / sumx2);

      let x1 = Math.abs(
        (receptor.getRes2() - receptor.getRes2X2() * x2) / receptor.getRes2X1()
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
        Cordenada: `(${this.cordeRes3x1(receptor)}, ${0})`,
        Resultado: parseFloat(
          receptor.getObjX1() * this.cordeRes3x1(receptor)
        ).toFixed(2),
      },
      {
        Letra: "F",
        Cordenada: `(${0}, ${this.cordeRes3x2(receptor)})`,
        Resultado: parseFloat(
          receptor.getObjX2() * this.cordeRes3x2(receptor)
        ).toFixed(2),
      },
      {
        Letra: "G",
        Cordenada: this.metodoSumaResta(receptor),
        Resultado: parseFloat(
          receptor.getObjX1() * this._intX1 + receptor.getObjX2() * this._intX2
        ).toFixed(2),
      },
    ];
    console.log(info);
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
    let x7 = this.cordeRes3x1(receptor);
    let x8 = this.cordeRes3x2(receptor);
    data.push({ x: x1, y: 0 });
    data.push({ x: 0, y: x2 });
    data.push({ x: x3, y: 0 });
    data.push({ x: 0, y: x4 });
    data.push({ x: x5, y: x6 });
    data.push({ x: x7, y: 0 });
    data.push({ x: 0, y: x8 });
    return data;
  }

  rMaxX1(receptor) {
    let resultado = 0;
    let r1x1 = this.cordeRes1x1(receptor);
    let r2x1 = this.cordeRes2x1(receptor);
    let r3x1 = this.cordeRes3x1(receptor);

    if (this.tipo(receptor) == "Minimizar") {
      if (r1x1 < r2x1 && r1x1 < r3x1) {
        resultado = parseFloat(
          receptor.getObjX1() * this.cordeRes1x1(receptor)
        ).toFixed(2);

        return resultado;
      } else if (r2x1 < r1x1 && r2x1 < r3x1) {
        resultado = parseFloat(
          receptor.getObjX1() * this.cordeRes2x1(receptor)
        ).toFixed(2);

        return resultado;
      } else if (r3x1 < r1x1 && r3x1 < r2x1) {
        resultado = parseFloat(
          receptor.getObjX1() * this.cordeRes3x1(receptor)
        ).toFixed(2);

        return resultado;
      }
    } else if (this.tipo(receptor) == "Maximizar") {
      if (r1x1 > r2x1 && r1x1 > r3x1) {
        resultado = parseFloat(
          receptor.getObjX1() * this.cordeRes1x1(receptor)
        ).toFixed(2);

        return resultado;
      } else if (r2x1 > r1x1 && r2x1 > r3x1) {
        resultado = parseFloat(
          receptor.getObjX1() * this.cordeRes2x1(receptor)
        ).toFixed(2);

        return resultado;
      } else if (r3x1 > r1x1 && r3x1 > r2x1) {
        resultado = parseFloat(
          receptor.getObjX1() * this.cordeRes3x1(receptor)
        ).toFixed(2);

        return resultado;
      }
    }
  }

  rMaxX2(receptor) {
    let resultado = 0;
    let r1x2 = this.cordeRes1x2(receptor);
    let r2x2 = this.cordeRes2x2(receptor);
    let r3x2 = this.cordeRes3x2(receptor);

    if (this.tipo(receptor) == "Minimizar") {
      if (r1x2 < r2x2 && r1x2 < r3x2) {
        resultado = parseFloat(
          receptor.getObjX2() * this.cordeRes1x2(receptor)
        ).toFixed(2);

        return resultado;
      } else if (r2x2 < r1x2 && r2x2 < r3x2) {
        resultado = parseFloat(
          receptor.getObjX2() * this.cordeRes2x2(receptor)
        ).toFixed(2);

        return resultado;
      } else if (r3x2 < r1x2 && r3x2 < r2x2) {
        resultado = parseFloat(
          receptor.getObjX2() * this.cordeRes3x2(receptor)
        ).toFixed(2);

        return resultado;
      }
    } else if (this.tipo(receptor) == "Maximizar") {
      if (r1x2 > r2x2 && r1x2 > r3x2) {
        resultado = parseFloat(
          receptor.getObjX2() * this.cordeRes1x2(receptor)
        ).toFixed(2);

        return resultado;
      } else if (r2x2 > r1x2 && r2x2 > r3x2) {
        resultado = parseFloat(
          receptor.getObjX2() * this.cordeRes2x2(receptor)
        ).toFixed(2);

        return resultado;
      } else if (r3x2 > r1x2 && r3x2 > r2x2) {
        resultado = parseFloat(
          receptor.getObjX2() * this.cordeRes3x2(receptor)
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
    this.metodoSumaResta(receptor);
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
