//Backend
function toRoman(number) {
  var ones = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"]
  var tens = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"]
  var hundreds = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"]
  var thousands = ["", "M", "MM", "MMM"]
  var onesInput = parseInt(number.slice(-1));
  var tensInput = parseInt(number.slice(-2,-1));
  var hundredsInput = parseInt(number.slice(-3,-2));
  var thousandsInput = parseInt(number.slice(-4,-3));

  var numberArray = [thousandsInput, hundredsInput, tensInput, onesInput];

  for (index= 0; index<numberArray.length; index+=1) {
    if (!numberArray[index]) {
      numberArray[index]=0;
    }
  }
  return thousands[numberArray[0]]+hundreds[numberArray[1]]+tens[numberArray[2]]+ones[numberArray[3]];
}


//Frontend
$(document).ready(function(){
  $("#blanks form").submit(function(event){
  event.preventDefault();
  var userInput = $("#number-input").val();
  var output = toRoman(userInput);
  $("#output-display").empty().append(output);
  $("#blanks").hide();
  $("#results").show();
  });
});
