// function to only exceute the javascript functions after the page has loaded to avoid errors
window.onload = function () {
  // function to redirect to the unit conversion page when the corresponding button is clicked
  document.getElementById("convert_page").onclick = function () {
    location.href = "convert_page.html";
  };
 // function to redirect to the data unit information page when the corresponding button is clicked
  document.getElementById("more_info").onclick = function () {
    location.href = "more_info.html";
  };
  // function to redirect to the contact us page when the corresponding button is clicked
  document.getElementById("contact").onclick = function () {
    location.href = "contact.html";
  };
  // function to redirect to the registration page when the corresponding button is clicked
  document.getElementById("register").onclick = function () {
    location.href = "registration.html";
  };
};
