const bookingContainer = document.getElementById("book_modal_container");

const bookBtn = document.getElementById("book-btn");

const closeBookBtn = document.getElementById("book_modal_close");

bookBtn.addEventListener("click", () => {
  bookingContainer.classList.add("show-table");
});

closeBookBtn.addEventListener("click", () => {
  bookingContainer.classList.remove("show-table");
});

const bookingFieldset = document.querySelector(".bookingFieldset");

const fName = document.getElementById("fname");

const lName = document.getElementById("lname");

const date = document.getElementById("ldate");

const time = document.getElementById("ltime");

const email = document.getElementById("email");

const password = document.getElementById("password");

const submitBtn = document.getElementById("bookingBtn");

const validateFormInput = (input, regEx) => {
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

const validateDate = (dateLocal) => {
  const isDateValid = dateLocal.value !== "";

  if (isDateValid) {
    dateLocal.classList.add("valid");
    dateLocal.classList.remove("invalid");
  } else {
    dateLocal.classList.add("invalid");
    dateLocal.classList.remove("valid");
  }

  return isDateValid;
};

const validateBookingForm = (e) => {
  const nameRegEx = /^[a-zA-Z]{2,17}$/;
  const emailRegEx = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/;
  const passwordRegEx = /^[a-zA-Z]{2,17}$/;

  const isFNameValid = validateFormInput(fName, nameRegEx);
  const isLNameValid = validateFormInput(lName, nameRegEx);
  const isDateValid = validateDate(date);
  const isTimeValid = validateDate(time);
  const isEmailValid = validateFormInput(email, emailRegEx);
  const isPasswordValid = validateFormInput(password, passwordRegEx);

  if (
    isFNameValid &&
    isLNameValid &&
    isDateValid &&
    isTimeValid &&
    isEmailValid &&
    isPasswordValid
  ) {
    bookingFieldset.innerHTML = "";
    const recivedBooking = document.createElement("h3");
    recivedBooking.textContent = "Thank you for your booking";

    const bookingTime = document.createElement("p");
    const bookingDate = document.createElement("p");

    bookingTime.textContent = time.value;
    bookingDate.textContent = date.value;

    const appendChildren = (parent, elements) => {
      elements.forEach((element) => {
        parent.appendChild(element);
      });
    };

    appendChildren(bookingFieldset, [recivedBooking, bookingTime, bookingDate]);
  } else {
    e.preventDefault();
  }
};

submitBtn.addEventListener("click", validateBookingForm);
