const cvv = document.querySelector(".Form-cvv");
const card = document.querySelector(".content");
const formNo = document.querySelector(".Form-no");
const cardNumber = document.querySelector(".card-numbers");
const formName = document.querySelector(".Form-name");
const cardName = document.querySelector(".card-name");
const formYear = document.querySelector(".Form-year");
const formMonth = document.querySelector(".Form-month");
const cardYear = document.querySelector(".card-year");
const cardMonth = document.querySelector(".card-month");
const formCVV = document.querySelector(".Form-cvv");
const cardCVV = document.querySelector(".back-card-cvv");

function updateNo() {
  if (formNo.value === "") {
    cardNumber.textContent = "•••• •••• •••• ••••";
  } else {
    cardNumber.textContent = this.value;
  }
}

formNo.addEventListener("keyup", updateNo);

function updateName() {
  if (formName.value === "") {
    cardName.textContent = "FULL NAME";
  } else {
    cardName.textContent = this.value;
  }
}

formName.addEventListener("keyup", updateName);

cvv.addEventListener("focus", () => {
  card.style.transform = "rotateY(180deg)";
});

cvv.addEventListener("blur", () => {
  card.style.transform = "";
});

function updateYear() {
  if (formYear.value === "") {
    cardYear.textContent = "••";
  } else {
    cardYear.textContent = this.value;
  }
}

formYear.addEventListener("keyup", updateYear);

function updateMonth() {
  cardMonth.textContent = this.value;
}

formMonth.addEventListener("keyup", updateMonth);

function updateCVV() {
  cardCVV.textContent = this.value;
  if (formCVV.value === "") {
    cardCVV.textContent = "•••";
  } else {
    cardCVV.textContent = this.value;
  }
}

formCVV.addEventListener("keyup", updateCVV);
