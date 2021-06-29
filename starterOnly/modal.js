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
let useConditions = document.getElementById('checkbox1');

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

firstName.addEventListener('change', function(event) {
  if (event.target.validity.valid) {
    firstName.parentElement.lastElementChild.classList.replace("d-block", "d-none");
  } else {
    firstName.parentElement.lastElementChild.classList.replace("d-none", "d-block");
  }
}, false);

lastName.addEventListener('change', function(event) {
  if (event.target.validity.valid) {
    lastName.parentElement.lastElementChild.classList.replace("d-block", "d-none");
  } else {
    lastName.parentElement.lastElementChild.classList.replace("d-none", "d-block");
  }
}, false);

email.addEventListener('change', function(event) {
  if (event.target.validity.valid) {
    email.parentElement.lastElementChild.classList.replace("d-block", "d-none");
  } else {
    email.parentElement.lastElementChild.classList.replace("d-none", "d-block");
  }
}, false);

birthdate.addEventListener('change', function(event) {
  if (event.target.validity.valid) {
    birthdate.parentElement.lastElementChild.classList.replace("d-block", "d-none");
  } else {
    birthdate.parentElement.lastElementChild.classList.replace("d-none", "d-block");
  }
}, false);

gamesQuantity.addEventListener('change', function(event) {
  if (event.target.validity.valid) {
    gamesQuantity.parentElement.lastElementChild.classList.replace("d-block", "d-none");
  } else {
    gamesQuantity.parentElement.lastElementChild.classList.replace("d-none", "d-block");
  }
}, false);

location1.forEach(element => element.addEventListener('change', function(event) {
  if (event.target.validity.valid) {
    location1[0].parentElement.lastElementChild.classList.replace("d-block", "d-none");
  } else {
    location1[0].parentElement.lastElementChild.classList.replace("d-none", "d-block");
  }
}, false));

useConditions.addEventListener('change', function(event) {
  if (event.target.validity.valid) {
    useConditions.parentElement.lastElementChild.classList.replace("d-block", "d-none");
  } else {
    useConditions.parentElement.lastElementChild.classList.replace("d-none", "d-block");
  }
}, false);

// controle de remplissage des formulaires
function testFieldsValidity(){
  if (firstName.validity.valid == false){
  firstName.parentElement.lastElementChild.classList.replace("d-none", "d-block");
  } else {
    firstName.parentElement.lastElementChild.classList.replace("d-block", "d-none");
  } 

  if (lastName.validity.valid == false){
    lastName.parentElement.lastElementChild.classList.replace("d-none", "d-block");
  } else {
      lastName.parentElement.lastElementChild.classList.replace("d-block", "d-none");
  } 

  if (email.validity.valid == false){
    email.parentElement.lastElementChild.classList.replace("d-none", "d-block");
  } else {
      email.parentElement.lastElementChild.classList.replace("d-block", "d-none");
  } 

  if (birthdate.validity.valid == false){
    birthdate.parentElement.lastElementChild.classList.replace("d-none", "d-block");
  } else {
      birthdate.parentElement.lastElementChild.classList.replace("d-block", "d-none");
  } 

  if (gamesQuantity.validity.valid == false){
    gamesQuantity.parentElement.lastElementChild.classList.replace("d-none", "d-block");
  } else {
      gamesQuantity.parentElement.lastElementChild.classList.replace("d-block", "d-none");
  } 

  if (location1[0].validity.valid == false){
    location1[0].parentElement.lastElementChild.classList.replace("d-none", "d-block");
  } else {
    location1[0].parentElement.lastElementChild.classList.replace("d-block", "d-none");
  } 

  if (useConditions.validity.valid == false){
    useConditions.nextElementSibling.nextElementSibling.nextElementSibling.classList.replace("d-none", "d-block");
  } else {
      useConditions.nextElementSibling.nextElementSibling.nextElementSibling.classList.replace("d-block", "d-none");
  } 

};

sumitInscription.addEventListener("click", testFieldsValidity);