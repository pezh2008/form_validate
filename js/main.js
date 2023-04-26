const REG_EXP_NAME = /^[a-zа-яА-ЯA-Z-]{3,16}$/;
const REG_EXP_PASSWORD =
  /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{8,}/g;
const REG_EXP_EMAIL =
  /^([a-z0-9-]+.)[a-z0-9-]+@[a-z0-9-]+(.[a-z0-9_-]+).[a-z]{2,6}$/;

const form = document.querySelector(".form");
const firstName = document.querySelector("#first-name");
const lastName = document.querySelector("#last-name");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirm-password");

const error = (input, message) => {
  input.classList.add("error");
  const parent = input.parentNode;
  parent.nextElementSibling.textContent = message;
  const svg = input.nextElementSibling;
  svg.classList.remove("opacity");
};
const success = (input) => {
  input.classList.remove("error");
  const parent = input.parentNode;
  parent.nextElementSibling.textContent = "";
  const svg = input.nextElementSibling;
  svg.classList.add("opacity");
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const firstNameValue = firstName.value.trim();
  const lastNameValue = lastName.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const confirmValue = confirmPassword.value.trim();

  if (firstNameValue == "") {
    error(firstName, "Поле не может быть пустым");
  } else if (REG_EXP_NAME.test(firstNameValue) == false) {
    error(firstName, "Ведите коректное Имя");
  } else {
    success(firstName);
  }

  if (lastNameValue == "") {
    error(lastName, "Поле не может быть пустым");
  } else if (REG_EXP_NAME.test(lastNameValue) == false) {
    error(lastName, "Ведите коректную Фамилию");
  } else {
    success(lastName);
  }

  if (emailValue == "") {
    error(email, "Поле не может быть пустым");
  } else if (REG_EXP_EMAIL.test(emailValue) == false) {
    error(email, "Ведите коретный Email");
  } else {
    success(email);
  }

  if (passwordValue == "") {
    error(password, "Поле не может быть пустым");
  } else if (REG_EXP_PASSWORD.test(passwordValue) == false) {
    error(password, "Введите правильный пароль");
  } else {
    success(password);
  }

  if (confirmValue == "") {
    error(confirmPassword, "Поле не может быть пустым");
  } else if (REG_EXP_PASSWORD.test(confirmValue) == false) {
    error(confirmPassword, "Введите правильный пароль");
  } else {
    success(confirmPassword);
  }


});
