import bisiesto from "./bisiesto.js";

describe("Bisiesto", () => {
 /* it("deberia imprimir el numero", () => {
    expect(bisiesto(3)).toEqual(3);
  });*/
  it("deberia imprimir que 400 es bisiesto", () => {
    expect(bisiesto(400)).toEqual("es bisiesto");
  });
  it("deberia imprimir que los divisibles por 400 es bisiesto", () => {
    expect(bisiesto(1200)).toEqual("es bisiesto");
  });
  it("deberia imprimir que los divisibles por 100 pero no por 400 no es bisiesto", () => {
    expect(bisiesto(1800)).toEqual("No es bisiesto");
  });
  it("deberia imprimir que los divisibles por 4 pero no por 100 es bisiesto", () => {
    expect(bisiesto(2012)).toEqual("es bisiesto");
  });
  it("deberia imprimir que no son divisibles por 4 no es bisiesto", () => {
    expect(bisiesto(2019)).toEqual("No es bisiesto");
  });
});