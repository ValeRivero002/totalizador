import { totalizador, multiplicar, sumar, descuento } from "./totalizador.js";

describe("Totalizador", () => {
 /* it("deberia imprimir el numero", () => {
    expect(bisiesto(3)).toEqual(3);
  });*/
  it("deberia imprimir la cantidad de items", () => {
    expect(totalizador(1)).toEqual(1);
  });
  it("deberia imprimir el porcentaje de decuento cuando es mayor o igual a 1000", () => {
    expect(descuento(1000)).toEqual(0.03);
  });
 
});