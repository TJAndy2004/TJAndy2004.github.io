window.addEventListener("DOMContentLoaded", domLoaded);

// When the DOM has finished loading, add the event listeners.
function domLoaded() {
   // Register click event handler for the Convert Units button.
   const btn = document.getElementById("convertButton");
   btn.addEventListener("click", ButtonClickEventHandler);

   // Clear the Fahrenheit field when the Celsius field is changed.
   const cInput = document.getElementById("C_in");
   cInput.addEventListener("input", function() {
      document.getElementById("F_in").value = "";
   });

   // Clear the Celsius field when the Fahrenheit field is changed.
   const fInput = document.getElementById("F_in");
   fInput.addEventListener("input", function() {
      document.getElementById("C_in").value = "";
   });
}

// Convert the temperature when the button is clicked.
function convertTemp() {
   const cInput = document.getElementById("C_in");
   const fInput = document.getElementById("F_in");
   const message = document.getElementById("message");

   const C = parseFloat(cInput.value);
   const F = parseFloat(fInput.value);

   // Clear any previous message.
   message.textContent = "";

   if (!isNaN(C)) {
      const convertedF = convertCtoF(C);
      fInput.value = convertedF.toFixed(2);

      displayWeatherIcon(convertedF);
   }
   else if (!isNaN(F)) {
      const convertedC = convertFtoC(F);
      cInput.value = convertedC.toFixed(2);

      displayWeatherIcon(F);
   }
   else {
      message.textContent = "Enter a temperature to convert";
      displayWeatherIcon(NaN);
   }
}

function ButtonClickEventHandler() {
   convertTemp();
}

function convertCtoF(C) {
   // °F = °C * 9/5 + 32
   return C * 9 / 5 + 32;
}

function convertFtoC(F) {
   // °C = (°F - 32) * 5/9
   return (F - 32) * 5 / 9;
}

// Display the appropriate weather icon based on Fahrenheit.
function displayWeatherIcon(F) {
   const icon = document.getElementById("weatherIcon");

   if (F <= 32 && F > -200) {
      icon.src = "images/cold.png";
      icon.alt = "cold";
   }
   else if (F >= 90 && F < 200) {
      icon.src = "images/hot.png";
      icon.alt = "hot";
   }
   else if (F > 32 && F < 90) {
      icon.src = "images/cool.png";
      icon.alt = "cool";
   }
   else if (F >= 200 || F <= -200) {
      icon.src = "images/dead.png";
      icon.alt = "dead";
   }
   else {
      icon.src = "images/C-F.png";
      icon.alt = "C and F";
   }
}
