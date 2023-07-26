// function to only exceute the javascript functions after the page has loaded to avoid errors
window.onload = function () {
  // function to redirect to the registration page when the corresponding button is clicked
  document.getElementById("register").onclick = function () {
    location.href = "registration.html";
  };
  // function to convert the units
  document.getElementById("convert_units").onclick = function () {
    // check if the field is empty and output an alert
    var num = document.getElementById("input").value;
    if (num.toString().length == 0 || num < 0) {
      alert(
        "Plese enter a correct value before converting. Do not enter negative values."
      );
    }
    //declare the necessary variables 
    var input = document.getElementById("input").value;

    var result;
    var start_index;
    var result_index;
    var start_unit = document.getElementById("unit1").value;

    var result_unit = document.getElementById("unit2").value;
    // array of supported units
    var unit_arr = [
      "bits",
      "Bytes",
      "KiloBytes",
      "MegaBytes",
      "GigaBytes",
      "TeraBytes",
      "PetaBytes",
      "ExaBytes",
    ];
    //for loop to find out the two units the user wants to convert between
    for (i = 0; i < unit_arr.length; i++) {
      // if the user did not input a number or if the number is negative, break 
      if (num.toString().length == 0 || num < 0) {
        break;
      }
      //identify start unit
      if (start_unit == unit_arr[i]) {
        start_index = i;
      }
      //identify result unit
      if (result_unit == unit_arr[i]) {
        result_index = i;
      }
    }
    //if the user set the starting or result unit to bit, we will alter the calculation to account for that
    if (start_index == 0 || result_index == 0) {
      if (start_index == 0 && result_index == 0) {
        result = input;
      } 
      else
       {
        //if the start unit is smaller than the result unit
        if (start_index < result_index) {
          power = start_index - result_index + 1;
          result = (input * Math.pow(1024, power)) / 8;
        } else {
          power = start_index - result_index - 1;
          result = input * Math.pow(1024, power) * 8;
        }
      }
      //if the user did not choose bit
    } else {
      power = start_index - result_index;
      result = input * Math.pow(1024, power);
    }

    document.getElementById("result").value = result;
  }
}
