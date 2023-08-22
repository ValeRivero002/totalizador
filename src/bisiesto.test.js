import bisiesto from "./bisiesto.js";

describe("Bisiesto", () => {
  it("deberia imprimir el numero", () => {
    expect(bisiesto(3)).toEqual(3);
  });
  it("deberia imprimir que 400 es bisiesto", () => {
    expect(bisiesto(400)).toEqual("es bisiesto");
  });
  it("deberia imprimir que los divisibles por 400 es bisiesto", () => {
    expect(bisiesto(1200)).toEqual("es bisiesto");
  });
});