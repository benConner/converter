function toCelsius (FahInput) {
	var cels = (FahInput-32)*(5/9);
	console.log("cel"+ cels)
}

function toFahrenheit (celsInput) {
	var fah = (9/5)*celsInput+32;
	console.log("fah "+ fah)
}

// Get a reference to the button element in the DOM
var button = document.getElementById("converter");
var userInput = document.getElementById("temp-input");

// This function should determine which conversion should
// happen based on which radio button is selected.
function determineConverter (clickEvent) {

	var fahBtn = document.getElementById("fahrenheit-scale-radio");
	var celsBtn = document.getElementById("celsius-scale-radio");

	//calls upon the functions that convert temperatures
	if (fahBtn.checked){
		toFahrenheit(userInput.value);
	}else if (celsBtn.checked) {
		toCelsius(userInput.value);
	}
	debugger
	if (fahBtn.checked && userInput.value > 32 || celsBtn.checked && userInput > 90){
		console.log('red');
	}else if(fahBtn.checked && userInput.value < 32 || celsBtn.checked && userInput < 0){
		console.log('blue');
	}else{
		console.log('green')
	}
}

// Assign a function to be executed when the button is clicked
button.addEventListener("click", determineConverter);
