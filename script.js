// Write your JavaScript code here!

/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/

window.addEventListener("load", function() {
   let form = document.querySelector("form");
   form.addEventListener("submit", function(event) {

      event.preventDefault();

      let pilotName = document.querySelector("#pilotName");
      let copilotName = document.querySelector("#copilotName");
      let fuelLevel = document.querySelector("#fuelLevel");
      let cargoMass = document.querySelector("#cargoMass"); 
      
      if ((pilotName.value === "") || (copilotName.value === "") || (fuelLevel.value === "") || (cargoMass.value === "")) {
         window.alert("All fields are required!");
         

      } else if (isNaN(fuelLevel.value) || isNaN(cargoMass.value)) {
         window.alert("Please make sure Fuel Level and Cargo Mass contain numbers!");
      }
      
   });
});