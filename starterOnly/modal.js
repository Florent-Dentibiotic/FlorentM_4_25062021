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
function testRegex(field, regex, check){
  if (check === 6){
    if (field.find(e => e.checked === true)) {
      regex.parentElement.lastElementChild.classList.replace("d-block", "d-none");
    } else {
      regex.parentElement.lastElementChild.classList.replace("d-none", "d-block");    
    }
  } else if (check === 1){
    if (field.checked == false){
      field.nextElementSibling.nextElementSibling.nextElementSibling.classList.replace("d-none", "d-block");
    } else {
      field.nextElementSibling.nextElementSibling.nextElementSibling.classList.replace("d-block", "d-none");
    } 
  } else {
    if (regex.test(field.value) == false) {
      field.parentElement.lastElementChild.classList.replace("d-none", "d-block");
      field.classList.remove("valid-field");
      field.classList.add("unvalid-field");
    } else {
      field.parentElement.lastElementChild.classList.replace("d-block", "d-none");
      field.classList.remove("unvalid-field");
      field.classList.add("valid-field");
    }
  }
}


function testRegexFirst () {testRegex(firstName, regexFirst)};
function testRegexLast () {testRegex(lastName, regexLast)};
function testRegexEmail() {testRegex(email, regexEmail)};
function testRegexBirthdate() {testRegex(birthdate, regexBirthdate)};
function testRegexGamesQuantity() {testRegex(gamesQuantity, regexGamesQuantity)};
function testLocation() {testRegex(locationsFields, location1[0], 6)};
function useConditionTest() {testRegex(useConditions, null, 1)};

// class identity :

const Reservation = class {
  constructor(firstName, lastName, email, birthday, gamesPlayed, city, termsConditions, stayTuned ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.birthday = birthday;
    this.gamesPlayed = gamesPlayed;
    //this.city = city;
    this.termsConditions = termsConditions;
    this.stayTuned = stayTuned;
  }
};

// controle de remplissage des formulaires
function validate(){
  testRegexFirst ();
  testRegexLast ();
  testRegexEmail();
  testRegexBirthdate();
  testRegexGamesQuantity();
  testLocation();
  useConditionTest();
  
  if (regexFirst.test(firstName.value) == true && regexLast.test(lastName.value) == true && regexEmail.test(email.value) == true && regexBirthdate.test(birthdate.value) == true && regexGamesQuantity.test(gamesQuantity.value) == true && locationsFields.find(e => e.checked === true) && useConditions.checked == true){
    alert("Merci ! Votre réservation a été reçue.");
    return true;
  } else {
    return false;
  }
};