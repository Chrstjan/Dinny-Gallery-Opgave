const loginBtn = document.getElementById("login-btn");

const loginModal = document.getElementById("signIn_container");

const closeBtn = document.getElementById("login_modal_close");

const formElement = document.querySelector(".myloginform");
const formFieldset = document.querySelector(".form-fieldset");

const username = document.getElementById("Sname");
const password = document.getElementById("Spassword");

const submitBtn = document.querySelector(".submit");

const validateInput = (input, regEx) => {
  const trimmedValue = input.value.trim();
  const isValid = regEx.test(trimmedValue);

  if (isValid) {
    input.classList.add("valid");
    input.classList.remove("invalid");
  } else {
    input.classList.add("invalid");
    input.classList.remove("valid");
    //Display error message
  }

  return isValid;
};

const formValidation = (e) => {
  const nameRegEx = /^[a-zA-Z]{2,17}$/;
  const passwordRegEx = /^[a-zA-Z]{2,17}$/;

  const isNameValid = validateInput(username, nameRegEx);
  const isPasswordValid = validateInput(password, passwordRegEx);

  if (isNameValid && isPasswordValid) {
    formFieldset.innerHTML = "";
    const loginMessage = document.createElement("h3");
    loginMessage.textContent = "Login as User: " + username.value;

    formFieldset.appendChild(loginMessage);
  } else {
    e.preventDefault();
  }
};

submitBtn.addEventListener("click", formValidation);

loginBtn.addEventListener("click", () => {
  loginModal.classList.add("show-modal");
});

closeBtn.addEventListener("click", () => {
  loginModal.classList.remove("show-modal");
  console.log("click click");
});
