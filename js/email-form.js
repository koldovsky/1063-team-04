const form = document.querySelector(".contact__email");
const email = document.querySelector(".contact__email-input");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  validateEmailInput();
});
const isValidEmail = (email) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};
const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = message;
  inputControl.classList.add("error");
  inputControl.classList.remove("success");
};
const setSuccess = (element) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = "";
  inputControl.classList.add("success");
  inputControl.classList.remove("error");
};
const validateEmailInput = () => {
  if (email.value === "") {
    setError(email, "Email is required");
  } else if (!isValidEmail(email.value)) {
    setError(email, "Provide a valid email address");
  } else {
    setSuccess(email);
  }
};
