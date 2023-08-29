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
  it("deberia imprimir el porcentaje de decuento cuando es mayor o igual a 3000", () => {
    expect(descuento(3000)).toEqual(0.05);
  });
  it("deberia imprimir el porcentaje de decuento cuando es mayor o igual a 7000", () => {
    expect(descuento(7000)).toEqual(0.07);
  });
 
});