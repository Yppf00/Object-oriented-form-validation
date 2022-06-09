const Errors = {
   "username": [
      "username is required",
      "username must be at least 3 characters long",
      "username must be less than 15 characters long",
   ],
   "mail": [
      "email is required",
      "email must be a valid email address",
   ],
   "password": [
      "password is required",
      "password must be at least 8 characters long",
      "password must be less than 15 characters long",

   ],
   "confirmPassword": [
      "confirm password is required",
      "enter the same password as above",
   ],
}

let username = document.getElementById("username");
let mail = document.getElementById("mail");
let password = document.getElementById("password");
let confirmPassword = document.getElementById("confirm_password");
let submit = document.getElementById("submit");
let messages = document.getElementsByTagName('span');

submit.addEventListener('click', function () {

   let usernameValue = username.value;
   let mailValue = mail.value;
   let passwordValue = password.value;
   let confirmPasswordValue = confirmPassword.value;

   if (usernameValue == "") {
      messages[0].innerHTML = Errors.username[0];
      messages[0].style.color = "red";
   } else if (usernameValue.length < 3) {
      messages[0].innerHTML = Errors.username[1];
      messages[0].style.color = "red";
   } else if (usernameValue.length > 15) {
      messages[0].innerHTML = Errors.username[2];
      messages[0].style.color = "red";
   } else {
      messages[0].innerHTML = "";
      username.style.outline = "green solid 1px";
   }

   if (mailValue == "") {
      messages[1].innerHTML = Errors.mail[0];
      messages[1].style.color = "red";
   } else if (!mailValue.match(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/)) {
      messages[1].innerHTML = Errors.mail[1];
      messages[1].style.color = "red";
   } else {
      messages[1].innerHTML = "";
      mail.style.outline = "green solid 1px";
   }

   if (passwordValue == "") {
      messages[2].innerHTML = Errors.password[0];
      messages[2].style.color = "red";
   } else if (passwordValue.length < 8) {
      messages[2].innerHTML = Errors.password[1];
      messages[2].style.color = "red";
   } else if (passwordValue.length > 15) {
      messages[2].innerHTML = Errors.password[2];
      messages[2].style.color = "red";
   } else {
      messages[2].innerHTML = "";
      password.style.outline = "green solid 1px";
   }

   if (confirmPasswordValue == "") {
      messages[3].innerHTML = Errors.confirmPassword[0];
      messages[3].style.color = "red";
   } else if (confirmPasswordValue != passwordValue) {
      messages[3].innerHTML = Errors.confirmPassword[1];
      messages[3].style.color = "red";
   } else {
      messages[3].innerHTML = "";
      confirmPassword.style.outline = "green solid 1px";
   }

   username.addEventListener('click', function () {
      messages[0].innerHTML = "";
   })
   mail.addEventListener('click', function () {
      messages[1].innerHTML = "";
   })
   password.addEventListener('click', function () {
      messages[2].innerHTML = "";
   })
   confirmPassword.addEventListener('click', function () {
      messages[3].innerHTML = "";
   })

   if (usernameValue != "" && mailValue != "" && passwordValue != "" && confirmPasswordValue != "") {
      alert("Successfully registered");
   }
});