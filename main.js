const form = document.querySelector(".subscribe-form");
const input = document.querySelector(".form-input");
const errorMsg = document.querySelector("#email-error");

form.noValidate = true;

function errorState(element, hasError) {
  errorMsg.hidden = !hasError;
  element.classList.toggle("error", hasError);
  element.ariaInvalid = String(hasError);
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const hasError = input.value.trim() === "" || input.validity.typeMismatch;
  errorState(input, hasError);
  if (hasError) {
    input.focus();
  }
});

input.addEventListener("input", () => {
  errorState(input, false);
});
