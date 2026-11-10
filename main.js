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
  const isEmpty = input.value.trim() === "";
  const isInvalidEmail = input.validity.typeMismatch;
  const hasError = isEmpty || isInvalidEmail;
  if (isEmpty) {
    errorMsg.textContent = "Whoops! It looks like you forgot to add your email";
  } else if (isInvalidEmail) {
    errorMsg.textContent = "Please provide a valid email address";
  }
  errorState(input, hasError);
  if (hasError) {
    input.focus();
  }
});

input.addEventListener("input", () => {
  errorState(input, false);
});
