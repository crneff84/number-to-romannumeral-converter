//Backend
var total = 0;
var converted = function(romanNumeral) {
      var romanNumeralArray = romanNumeral.split("");
      for (var i = 0; i < romanNumeralArray.length; i += 1) {
        if (romanNumeralArray[i] === "I") {
          romanNumeralArray.splice(i, 1, 1);
          total += romanNumeralArray[i];
        } else if (romanNumeralArray[i] === "V") {
          romanNumeralArray.splice(i, 1, 5);
          total += romanNumeralArray[i]
        } else if (romanNumeralArray[i] === "X") {
          romanNumeralArray.splice(i, 1, 10);
          total += romanNumeralArray[i]
        } else if (romanNumeralArray[i] === "L") {
          romanNumeralArray.splice(i, 1, 50);
          total += romanNumeralArray[i]
        } else if (romanNumeralArray[i] === "C") {
          romanNumeralArray.splice(i, 1, 100);
          total += romanNumeralArray[i]
        } else if (romanNumeralArray[i] === "D") {
          romanNumeralArray.splice(i, 1, 500);
          total += romanNumeralArray[i]
        } else if (romanNumeralArray[i] === "M") {
          romanNumeralArray.splice(i, 1, 1000);
          total += romanNumeralArray[i]
        }
  } return total;
}


//Frontend
$(document).ready(function(){
  $("#blanks form").submit(function(event){
  event.preventDefault();
  var userInput = $("#rn-input").val().toUpperCase();
  var output = converted(userInput);
  $("#output-display").empty().append(output);
  $("#blanks").hide();
  $("#results").show();
  console.log(output)
  });
});
