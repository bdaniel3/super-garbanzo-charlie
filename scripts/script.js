$('body').css("background-color", "pink");

// when button is clicked
//IIFE = immediately invoked f/n expression 
$("#btnGetAnimal").on("click", function(){
  //get the user name
  let bakerName = $("#bakerName").val(); 
  //var variableName =  ... let (const) 
  
  $("#greetingArea").text("Hi there, " + bakerName + "!");  
  //give them a personalized greeting
  
  let randomAnimal = spiritAnimals[(Math.floor(Math.random() * spiritAnimals.length))];
  
  $("#animalArea").text("Your spirit animal is: " + randomAnimal)
  //next, also tell spirit animal 
} )

let spiritAnimals = ["🦊","🐰","🐟","🐷","🐸","🦆","file not found"]

//export save
//extract files desktop
//open file
//take stuff outta file
//do x3 files sitting on the file
//
//visual studio code
//get live server
//lower screen right corner now has go live button
//
// local host:5500 (number will be at bottom)
//
