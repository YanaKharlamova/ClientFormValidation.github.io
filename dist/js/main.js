const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkInputs();
});
function checkInputs() {
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const passwordValue2 = password2.value.trim();
  if (usernameValue === "") {
    setError(username, "Username is blank!");
  } else {
    setSuccess(username);
  }

  if (emailValue === "") {
    setError(email, "Email is blank!");
  } else if (!isValidEmail(emailValue)) {
    setError(email, "Email is not valid!");
  } else {
    setSuccess(email);
  }

  if (passwordValue === "") {
    setError(password, "Password is blank!");
  } else {
    setSuccess(password);
  }
  if (passwordValue2 === "") {
    setError(password2, "Password is blank!");
  } else if (passwordValue !== passwordValue2) {
    setError(password2, "Passwords are not equal! ");
  } else {
    setSuccess(password2);
  }
}

function setError(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");
  //   adding error message to small tag
  small.innerText = message;
  //   adding error class
  formControl.className = "form-control error";
}
function setSuccess(input) {
  const formControl = input.parentElement;
  //   adding success class
  formControl.className = "form-control success";
}

function isValidEmail(emailValue) {
  return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
    emailValue
  );
}
