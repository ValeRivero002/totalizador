import { totalizador, multiplicar, sumar, descuento } from "./totalizador";

const first = document.querySelector("#primer-numero");
const second = document.querySelector("#segundo-numero");
const form = document.querySelector("#anio-form");
const div = document.querySelector("#resultado-div");
const div2 = document.querySelector("#resultado2-div");
const optionsSelect = document.getElementById("options");
const optionsContainer = document.getElementById("options-container");
const div3 = document.getElementById("resultado3-div");
const div4 = document.getElementById("resultado4-div");
const div5 = document.getElementById("resultado5-div");
const div6 = document.getElementById("resultado6-div");

function scrollToOption(optionValue) {
  const optionElement = document.querySelector(`option[value="${optionValue}"]`);
  optionElement.scrollIntoView({ behavior: "smooth", block: "center" });
  return optionElement.textContent;
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstNumber = Number.parseInt(first.value);
  const secondNumber = Number.parseInt(second.value);
  const selectedOption = optionsSelect.value;
  const selectedOptionText = scrollToOption(selectedOption);
  const precioNeto = multiplicar(firstNumber, secondNumber);

  let taxPercentage = 0;
  switch (selectedOption) {
    case "CA":
      taxPercentage = 8.25;
      break;
    case "TX":
      taxPercentage = 6.25;
      break;
    case "NV":
      taxPercentage = 8.00;
      break;
    case "UT":
      taxPercentage = 6.65;
      break;
    case "AL":
      taxPercentage = 4.00;
      break;
  }

  const impuesto = multiplicar(precioNeto, taxPercentage / 100);
  const precioTotalConImpuesto = sumar(precioNeto, impuesto);

  const porcentajeDescuento = descuento(precioTotalConImpuesto);
  const descuentoAplicado = multiplicar(precioTotalConImpuesto, porcentajeDescuento / 100);

  const precioTotalConDescuento = sumar(precioTotalConImpuesto, -descuentoAplicado);

  div2.innerHTML = "<p>" + "Estado: " + selectedOptionText + "</p>";
  div.innerHTML = "<p>" + "Cantidad por Item: " + totalizador(firstNumber) + " - Precio por Item: " + totalizador(secondNumber) + "</p>";
  div3.innerHTML = "<p>" + "Precio Neto (" + firstNumber  + "* $"+ secondNumber+"): " + totalizador(precioNeto) + "</p>";
  div4.innerHTML = "<p>" + "Impuesto (" + taxPercentage + "): " + totalizador(impuesto) + "</p>";
  div5.innerHTML = "<p>" + "Descuento (%): " + totalizador(multiplicar(porcentajeDescuento,100))  + "</p>";
  div6.innerHTML = "<p>" + "Precio Total (descuento e impuesto): " + totalizador(precioTotalConDescuento) + "</p>";
});
