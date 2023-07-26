//function to validate the first and last names
function validateName() {
  var first_name = document.getElementById("fname").value;
  var last_name = document.getElementById("lname").value;
  
  // check if the user inputted a first and last name
  if (first_name.length == 0) {
    alert("Please enter a first name ");
    return false;
  }

  if (last_name.length == 0) {
    alert("Please enter a last name ");
    return false;
  }
}
//function to validate the email
function validateEmail() {
  var mail = document.getElementById("email").value;
  //make sure the user inputted an email
  if (mail.length == 0) {
    alert("Please enter an email address.");
    return false;
  }
  //make sure the user entered a correct email format
  if (mail.match(/^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-Z0-9]{2,4}$/) == null) {
    alert("Please enter a valid email.");
    return false;
  }
}
//function to validate the phone number
function validateNumber() {
  number = document.getElementById("phone").value;
  //the phone number should be a positive number and not more than 11 digits
  if (number.toString().length > 11 || number < 0) {
    alert("Please enter a valid phone number.");
    return false;
  }
  //the phone number must be 11 characters
  if (number.toString().length < 11 && number.toString().length > 0) {
    alert(
      "Please enter a valid phone number. The entered number is too short."
    );
    return false;
  }
  if (number.toString().length == 0) {
    alert("Please enter your phone number.");
    return false;
  }
}
// function to redirect to the registration page when the corresponding button is clicked
document.getElementById("register").onclick = function () {
  location.href = "registration.html";
}
//make sure the user types out the message to be sent in the email
function validateMessage() {
  var message = document.getElementById("help").value;
  if (message.length == 0) {
    alert("Plese enter a message to be sent via email.");
    return false;
  }
}
//perform the functions when the button is clicked
document.getElementById("send_email").onclick = function () {
  validateName();
  validateEmail();
  validateNumber();
  validateMessage();
  if(validateName() == false ||validateEmail() == false||
  validateNumber() == false|| validateMessage() == false)
  {
    alert("Email was not sent. Check your details");
  }
  else
  {
    alert("Email was sent sccessfully!");
    location.href = "contact.html";
  }
    

};
