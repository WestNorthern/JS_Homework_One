// Create a script with two variables, each assigned to a number. 
// Add them together and output the result to the console. Now do the same with two strings (concatenation).
// One


let firstNumber = 19;
let secondNumber = 262;

console.log(firstNumber + secondNumber);

let firstHalf = "Malt can do more than Milton can, ";
let secondHalf = "to justify the ways of Him to man.";

console.log(firstHalf + secondHalf);


// Create a multidimensional array. The array will be an array of Aston Martin cars, 
// BMW cars, and Bentley cars, 3 cars of each make.
// Two

let coolArray = [["Fantasy Ridge", "Jupiter Peak"], ["Cathedral Cirque", "Silver Fork"]];

console.log(coolArray[0][0] + " is a way more interesting ski area than " + coolArray[1][0]);

let carArray = [["Bentley", "Other Bentley", "Third Bentley"],["James Bond Car", "Bofeldmobile", "Bug Eyed Sprite"],["Z4", "TZ88", "Z77"]];


// Write a script that checks if a variable captured from a js prompt is less than 100. 
// If it is, alert the user that their variable is less than 100. If it is not alert the user 
// of what the value was and that it was greater than 100.
// Three

let userNumber = prompt('User, you must supply a number!');


function checkNumber(num){
	if(num < 100){
		alert("That number is less than 100");
	}
	else if(num > 100){
		alert("The number you chose to supply is " + userNumber + ", which is of course greater than 100!");
	}
	else if(num === 100){
		alert("One Hunnet!");
	}
	else{
		alert("I don't think that was a number, buddy!");
	}
}

checkNumber(userNumber);

// Declare a function that takes a name as an argument and tells the user what name they've entered. 
// Try running it after it has been declared.
// Four

let echoName = prompt("Give me a name, any name!");

function nameEcho(name){
	name = echoName;
	alert("You have given me the name: " + name + "! amirite??");
}

nameEcho();

// Four Intermediate

let echoNameIn = prompt("Give me another name. I'll tell you some fascinating things.");

function nameEchoIntermediate(name) {
	name = echoNameIn;
	let nameReversed = name.split('').reverse().join('');
	alert("That name you just supplied is " + name + ".\n It is exactly " + name.length + " characters long.\nThat name reversed is: " + nameReversed);
}

nameEchoIntermediate();


// Declare a function that takes no arguments but prints "I am a great function" to the console. 
// Try running it after it has been declared.
// Five

function greatFunction() {
	console.log("I am a great function.");
}

// Declare a function that lets you choose which door to open of 3 doors (like the TV game show). 
// Behind one of the doors is a goat, behind another is a Jeep, and behind another is a can of worms. 
// Alert the user which prize they got when a door number is passed in.
// Six

function prizeDoors () {
	let doorChoice = prompt("Pick a number between One and Three to discover which prize is yours!");
	
	if (parseInt(doorChoice) === 1) {
		alert("You have chosen Door Number One! You won a can of worms!!!");
	}
	else if (parseInt(doorChoice) === 2) {
		alert("Let's see what is behind Door Number Two! ... It is a goat.");
	}
	else if (parseInt(doorChoice) === 3) {
		alert("Door Number Three!!! It is a freaking Jeep, bro!");
	}
  else {
	  alert("You failed to pick a number between One and Three. Way to go! No prize for Mr. Smartypants over here.");
	}
}

prizeDoors();


// Number 6 Intermediate

function prizeDoorsIntermediate() {
	let prizeArray = ["Jeep", "Lobster Bisque", "Panera Gift Card", "Pick of Destiny", "Tesseract", "Billiam Jepskowski"];
	let junkPrize = ["Moth balls", "Phlebotomist", "Goat", "Can of Worms", "Ricketts", "Vogon Poetry"];

	let doorNumber = prompt("Okay, User. Pick a door!");

	let rando = Math.floor(Math.random() * 6);

	if (parseInt(doorNumber) === 1) {
		alert(`You have chosen door number ${doorNumber}, so you win a ${prizeArray[rando]}!`);
	}
	else if (parseInt(doorNumber) === 2) {
		alert(`You have chosen door number ${doorNumber}, so you win a ${prizeArray[rando]}!`);

	}
	else if (parseInt(doorNumber) === 3) {
		alert(`You have chosen door number ${doorNumber}, so you win a ${prizeArray[rando]}!`);

	}
	else {
		alert(`That is not a prize door. So here, you can have this: ${junkPrize[rando]}.`);
	}
}


prizeDoorsIntermediate();
