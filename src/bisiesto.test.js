import bisiesto from "./bisiesto.js";

describe("Bisiesto", () => {
  it("deberia imprimir el numero", () => {
    expect(bisiesto(3)).toEqual(3);
  });
});