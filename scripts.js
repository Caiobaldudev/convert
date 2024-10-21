// Cotação
const USD = 5.7;
const EUR = 6.16;
const GBP = 7.4;

// Code
const form = document.querySelector("form");
const amount = document.getElementById("amount");
const currency = document.getElementById("currency");
const footer = document.querySelector("main footer");

amount.addEventListener("input", () => {
  const hasCaractersRegex = /\D+/g;
  amount.value = amount.value.replace(hasCaractersRegex, "");
});

form.onsubmit = (e) => {
  e.preventDefault();

  switch (currency.value) {
    case "USD":
      convertCurrency(amount.value, USD, "US$");
      break;
    case "EUR":
      convertCurrency(amount.value, EUR, "€");
      break;
    case "GBP":
      convertCurrency(amount.value, GBP, "£");
      break;
  }
};

function convertCurrency(amount, price, symbol) {
  try {
    footer.classList.add("show-result");
  } catch (error) {
    footer.classList.remove("show-result");
  }
}
