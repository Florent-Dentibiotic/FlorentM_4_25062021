function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeMdal = document.querySelector(".close");
const sumitInscription = document.querySelector(".btn-submit");
let firstName = document.getElementById('first');
let lastName = document.getElementById('last');
let email = document.getElementById('email');
let birthdate = document.getElementById('birthdate');
let gamesQuantity = document.getElementById('quantity');
let location1 = document.querySelectorAll(".cities");
let locationsFields = Array.from(location1);
let useConditions = document.getElementById('checkbox1');
let stayTuned = document.getElementById('checkbox2');
let form_OK = true;
const regexFirst = /^[a-zA-Z][a-zA-Z]+$/;
const regexLast = /^[a-zA-Z][a-zA-Z'-]+$/;
const regexEmail = /^[a-z0-9]+([_|\.|-]{1}[a-z0-9]+)*@[a-z0-9]+([_|\.|-]­{1}[a-z0-9]+)*[\.]{1}[a-z]{2,6}$/;
const regexBirthdate = /^(19|20)\d\d[-](0[1-9]|1[012])[-](0[1-9]|[12][0-9]|3[01])$/;
const regexGamesQuantity = /^[0-99]$/;

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

//close modal event 
closeMdal.addEventListener("click", closeModal);

// close modal form
function closeModal() {
  modalbg.style.display = "none";
}

//Event listerner during field completion :
firstName.addEventListener('change', testRegexFirst, false);
lastName.addEventListener('change', testRegexLast, false);
email.addEventListener('change', testRegexEmail, false);
birthdate.addEventListener('change', testRegexBirthdate, false);
gamesQuantity.addEventListener('change', testRegexGamesQuantity, false);
location1.forEach(element => element.addEventListener('change', testLocation, false));
useConditions.addEventListener('change', useConditionTest, false);

// Regex tests :
function testRegexFirst () {
  if (regexFirst.test(firstName.value) == false) {
    firstName.parentElement.lastElementChild.classList.replace("d-none", "d-block");
    firstName.classList.remove("valid-field");
  } else {
    firstName.parentElement.lastElementChild.classList.replace("d-block", "d-none");
    firstName.classList.add("valid-field");
  }
};

function testRegexLast () {
  if (regexLast.test(lastName.value) == false) {
    lastName.parentElement.lastElementChild.classList.replace("d-none", "d-block");
    lastName.classList.remove("valid-field");
  } else {
    lastName.parentElement.lastElementChild.classList.replace("d-block", "d-none");
    lastName.classList.add("valid-field");
  }
};

function testRegexEmail() {
  if (regexEmail.test(email.value) == false) {
    email.parentElement.lastElementChild.classList.replace("d-none", "d-block");
    email.classList.remove("valid-field");
  } else {
    email.parentElement.lastElementChild.classList.replace("d-block", "d-none");
    email.classList.add("valid-field");
    
  }
};

function testRegexBirthdate() {
  if (regexBirthdate.test(birthdate.value) == true) {
    birthdate.parentElement.lastElementChild.classList.replace("d-block", "d-none");
    birthdate.classList.add("valid-field");
  } else {
    birthdate.parentElement.lastElementChild.classList.replace("d-none", "d-block");
    birthdate.classList.remove("valid-field");
  }
};

function testRegexGamesQuantity() {
  if (regexGamesQuantity.test(gamesQuantity.value) == true) {
    gamesQuantity.parentElement.lastElementChild.classList.replace("d-block", "d-none");
    gamesQuantity.classList.add("valid-field");
  } else {
    gamesQuantity.parentElement.lastElementChild.classList.replace("d-none", "d-block");
    gamesQuantity.classList.remove("valid-field");
  }
};

function testLocation() {
  if (locationsFields.find(e => e.checked === true)) {
    location1[0].parentElement.lastElementChild.classList.replace("d-block", "d-none");
  } else {
    location1[0].parentElement.lastElementChild.classList.replace("d-none", "d-block");    
  }
};

function useConditionTest() {
  if (useConditions.checked == false){
    useConditions.nextElementSibling.nextElementSibling.nextElementSibling.classList.replace("d-none", "d-block");
  } else {
    useConditions.nextElementSibling.nextElementSibling.nextElementSibling.classList.replace("d-block", "d-none");
  } 
};

// class identity :

const Reservation = class {
  constructor(firstName, lastName, email, birthday, gamesPlayed, city, termsConditions, stayTuned ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.birthday = birthday;
    this.gamesPlayed = gamesPlayed;
    this.city = city;
    this.termsConditions = termsConditions;
    this.stayTuned = stayTuned;
  }
};

// controle de remplissage des formulaires
function testFieldsValidity(){
  testRegexFirst ();
  testRegexLast ();
  testRegexEmail();
  testRegexBirthdate();
  testRegexGamesQuantity();
  testLocation();
  useConditionTest();

  console.log(firstName.value, lastName.value, email.value, birthdate.value, gamesQuantity.value, useConditions.checked, stayTuned.checked);
};

sumitInscription.addEventListener("click", testFieldsValidity);