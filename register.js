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
  //function to validate the password
  function validatePassword() {
    passwrd = document.getElementById("password").value;
    // check if the password field is empty
    if (passwrd.length == 0) {
        alert("Please enter a password.");
        return false;
      }
      // check if the password is of the correct length
    if (passwrd.length < 8) {
      alert("The Password must be 8 characters or longer.");
      return false;
    }
  }

  //function to validate the email
  function validateEmaillgn() {
    var mail = document.getElementById("email_lgn").value;
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
  //function to validate the password
  function validatePasswordlgn() {
    passwrd = document.getElementById("password_lgn").value;
    // check if the password field is empty
    if (passwrd.length == 0) {
        alert("Please enter a password.");
        return false;
      }
      // check if the password is of the correct length
    if (passwrd.length < 8) {
      alert("The Password must be 8 characters or longer.");
      return false;
    }
  }
  //perform the functions when the button is clicked
  document.getElementById("register").onclick = function () {
    validateName();
    validateEmail();
    validatePassword();
    if(validateName() != false && validateEmail() != false &&validatePassword()!= false)
    {
      document.getElementById("reg_form").submit();
    }
  };
  //perform the functions when the button is clicked
  document.getElementById("login").onclick = function () {
    validateEmaillgn();
    validatePasswordlgn();
    if(validateEmaillgn() != false && validatePasswordlgn()!= false)
    {
      document.getElementById("log_form").submit();
    }
  };
  