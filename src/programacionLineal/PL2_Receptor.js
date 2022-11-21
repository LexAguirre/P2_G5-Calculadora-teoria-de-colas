"use strict";

export default class Receptor {
  constructor(
    maxMin,
    funObj_x1,
    funObj_x2,
    Res1_x1,
    Res1_x2,
    SimRes1,
    Res1_resulta,
    Res2_x1,
    Res2_x2,
    SimRes2,
    Res2_resulta
  ) {
    this._maxMin = maxMin;
    this._funObj_x1 = funObj_x1;
    this._funObj_x2 = funObj_x2;
    this._Res1_x1 = Res1_x1;
    this._Res1_x2 = Res1_x2;
    this._SimRes1 = SimRes1;
    this._Res1_resulta = Res1_resulta;
    this._Res2_x1 = Res2_x1;
    this._Res2_x2 = Res2_x2;
    this._SimRes2 = SimRes2;
    this._Res2_resulta = Res2_resulta;
  }

  getMinMax() {
    return this._maxMin;
  }

  getObjX1() {
    return this._funObj_x1;
  }

  getObjX2() {
    return this._funObj_x2;
  }

  getRes1X1() {
    return this._Res1_x1;
  }

  getRes1X2() {
    return this._Res1_x2;
  }

  getSimRes1() {
    return this._SimRes1;
  }

  getRes1() {
    return this._Res1_resulta;
  }

  getRes2X1() {
    return this._Res2_x1;
  }

  getRes2X2() {
    return this._Res2_x2;
  }

  getSimRes2() {
    return this._SimRes2;
  }

  getRes2() {
    return this._Res2_resulta;
  }

  static readForm() {
    let inpMinMax = document.querySelector("#max_min");
    let inpObjX1 = document.querySelector("#funObj_x1");
    let inpObjX2 = document.querySelector("#funObj_x2");
    let inpRes1X1 = document.querySelector("#Res1_x1");
    let inpRes1X2 = document.querySelector("#Res1_x2");
    let inpSimRes1 = document.querySelector("#SimRes1");
    let inpRes1 = document.querySelector("#Res1_resulta");
    let inpRes2X1 = document.querySelector("#Res2_x1");
    let inpRes2X2 = document.querySelector("#Res2_x2");
    let inpSimRes2 = document.querySelector("#SimRes2");
    let inpRes2 = document.querySelector("#Res2_resulta");

    let minMax = inpMinMax.value;
    let SimRes1 = inpSimRes1.value;
    let SimRes2 = inpSimRes2.value;
    let objX1 = Number(inpObjX1.value);
    let objX2 = Number(inpObjX2.value);
    let res1X1 = Number(inpRes1X1.value);
    let res1X2 = Number(inpRes1X2.value);
    let res1 = Number(inpRes1.value);
    let res2X1 = Number(inpRes2X1.value);
    let res2X2 = Number(inpRes2X2.value);
    let res2 = Number(inpRes2.value);

    let ecuacion = new Receptor(
      minMax,
      objX1,
      objX2,
      res1X1,
      res1X2,
      SimRes1,
      res1,
      res2X1,
      res2X2,
      SimRes2,
      res2
    );
    /*
    inpObjX1.value = "";
    inpObjX2.value = "";
    inpRes1X1.value = "";
    inpRes1X2.value = "";
    inpRes1.value = "";
    inpRes2X1.value = "";
    inpRes2X2.value = "";
    inpRes2.value = "";
*/
    return ecuacion;
  }
}
