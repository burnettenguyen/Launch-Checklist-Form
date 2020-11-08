
window.addEventListener("load", function() {
   
   let pilotName = document.querySelector("#pilotName");
   let copilotName = document.querySelector("#copilotName");
   let fuelLevel = document.querySelector("#fuelLevel");
   let cargoMass = document.querySelector("#cargoMass"); 
   let form = document.querySelector("form");

   fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response){
   response.json().then(function(json){
      const missionTarget = document.getElementById("missionTarget");
      let randomPlanet = (Math.floor(Math.random()*5));
      missionTarget.innerHTML = `
      <h2>Mission Destination</h2>
      <ol>
         <li>Name: ${json[randomPlanet].name}</li>
         <li>Diameter: ${json[randomPlanet].diameter}</li>
         <li>Star: ${json[randomPlanet].star}</li>
         <li>Distance from Earth: ${json[randomPlanet].distance}</li>
         <li>Number of Moons: ${json[randomPlanet].moons}</li>
      </ol>
      <img src="${json[randomPlanet].image}">
      `;

   });
   
});

   form.addEventListener("submit", function(event) {

      event.preventDefault();

         if ((pilotName.value === "") || (copilotName.value === "") || (fuelLevel.value === "") || (cargoMass.value === "")) {
            window.alert("All fields are required!");

         } else if (isNaN(fuelLevel.value) || isNaN(cargoMass.value)) {
            window.alert("Please make sure Fuel Level and Cargo Mass contain numbers!");

         } else {
            document.querySelector("#pilotStatus").innerHTML = `Pilot ${pilotName.value} is ready for launch.`;
            document.querySelector("#copilotStatus").innerHTML = `Copilot ${copilotName.value} is ready for launch.`;
            document.querySelector('#faultyItems').style.visibility = 'visible';
      
         } 
            if (fuelLevel.value < 10000 && cargoMass.value > 10000) {
                  document.querySelector("#fuelStatus").innerHTML = "Fuel level too low for launch.";
                  document.querySelector("#cargoStatus").innerHTML = "Cargo mass too heavy for launch."
                  document.querySelector("#launchStatus").innerHTML = "Shuttle not ready for launch.";
                  document.querySelector("#launchStatus").style.color = "red";

            } else if (fuelLevel.value >= 10000 && cargoMass.value > 10000) {
                  document.querySelector("#cargoStatus").innerHTML = "Cargo mass too heavy for launch."
                  document.querySelector("#launchStatus").innerHTML = "Shuttle not ready for launch.";
                  document.querySelector("#launchStatus").style.color = "red";

            } else if (fuelLevel.value < 10000 && cargoMass.value <= 10000) { 
                  document.querySelector("#fuelStatus").innerHTML = "Fuel level too low for launch.";
                  document.querySelector("#cargoStatus").innerHTML = "Cargo mass too heavy for launch."
                  document.querySelector("#launchStatus").innerHTML = "Shuttle not ready for launch.";
                  document.querySelector("#launchStatus").style.color = "red";

            } else {
               document.querySelector("#fuelStatus").innerHTML = "Fuel level ready for launch.";
               document.querySelector("#cargoStatus").innerHTML = "Cargo mass ready for launch."
               document.querySelector("#launchStatus").innerHTML = "Shuttle ready for launch.";
               document.querySelector("#launchStatus").style.color = "green";
            }
         
   });
});