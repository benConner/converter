function toCelsius (FahInput) {
	var cels = (FahInput-32)*(5/9);
	console.log("you got " + cels);   
}

function toFahrenheit (celsInput) {
	console.log(celsInput.typeOf);
	var fah = (9/5)*celsInput+32;
	console.log("you got " + fah);
}

// Get a reference to the button element in the DOM
var button = document.getElementById("converter");
var userInput = document.getElementById("temp-input");

// This function should determine which conversion should
// happen based on which radio button is selected.
function determineConverter (clickEvent) {

	var button1 = document.getElementById("fahrenheit-scale-radio");
	var button2 = document.getElementById("celsius-scale-radio");

	if (button1.checked){
		toFahrenheit(userInput.value);
    	console.log("fahrenheit selected");
	}else if (button2.checked) {
		toCelsius(userInput.value);
    	console.log("celsius selected");
	}
}

// Assign a function to be executed when the button is clicked
button.addEventListener("click", determineConverter);