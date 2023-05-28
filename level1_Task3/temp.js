
function convertTemperature() {
  var temperatureInput = document.getElementById("temperature").value;
  var unit = document.getElementById("unit").value;
  var resultElement = document.getElementById("result");

  // Validate input
  if (isNaN(temperatureInput)) {
    resultElement.textContent = "Invalid temperature input!";
    return;
  }

  var temperature = parseFloat(temperatureInput);

  // Perform conversions
  var result;
  if (unit === "celsius") {
    result = {
      fahrenheit: (temperature * 9/5) + 32
    };
  } else {
    result = {
      celsius: (temperature - 32) * 5/9
  }
  }

  // Display the result
  var convertedResult = "Converted temperature: ";
  if (result.celsius !== undefined) {
    convertedResult += result.celsius.toFixed(2) + " °C ";
  }
  if (result.fahrenheit !== undefined) {
    convertedResult += result.fahrenheit.toFixed(2) + " °F ";
  }
  resultElement.textContent = convertedResult;
}
