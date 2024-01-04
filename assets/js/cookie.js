const cookiePopUp = document.getElementById("Cookie_container");
const body = document.body;

const reqCheckbox = document.getElementById("req");
const statCheckbox = document.getElementById("stat");
const funcCheckbox = document.getElementById("func");

const allBtn = document.querySelector(".Cookie_button_ok");

const selectedBtn = document.querySelector(".Cookie_button_no");

window.addEventListener("load", () => {
  body.classList.add("no-scroll");
  cookiePopUp.classList.add("show-cookie");
});

allBtn.addEventListener("click", () => {
  reqCheckbox.checked = true;
  statCheckbox.checked = true;
  funcCheckbox.checked = true;

  closeCookiePopUp();
});

selectedBtn.addEventListener("click", () => {
  closeCookiePopUp();
});

let closeAttemps = 0;

const closeCookiePopUp = () => {
  if (reqCheckbox.checked || statCheckbox.checked || funcCheckbox.checked) {
    body.classList.remove("no-scroll");
    cookiePopUp.classList.remove("show-cookie");
  } else {
    alert("Du skal vælge en!");
    closeAttemps++;
    if (closeAttemps > 4) {
      alert("Er du dum eller hva?");
    }
  }
};
