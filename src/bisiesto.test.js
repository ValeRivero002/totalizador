import bisiesto from "./bisiesto.js";

describe("Bisiesto", () => {
  it("deberia imprimir el numero", () => {
    expect(bisiesto(3)).toEqual(3);
  });
  it("deberia imprimir que 400 es bisiesto", () => {
    expect(bisiesto(400)).toEqual("es bisiesto");
  });
});