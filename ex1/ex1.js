// let max = parseInt(prompt("ENTER MAX VALUE FOR GUESSING."));
// max++;
// let guessingNum = Math.floor(Math.random()*max);
// alert(guessingNum);
// let rightNum = false;
// while (!rightNum) {
//   let userNum = parseInt(prompt("ENTER A NUMBER BETWEEN 0 AND " +max));
//   if (guessingNum === userNum) {
//     alert("YOU GUESSED RIGHT !!!!!")
//     rightNum = true;
//   } else if (guessingNum < userNum) {
//     alert("YOU GUESSED HIGHER THEN THE NUMBER")
//   } else {
//     alert("YOU GUESSED LOWER THEN THE NUMBER")
//   }
// }


// let somearr = ["MARTIN", "STEFAN", "GORAN", "DAVOR", "SLAVE", "MARKO", "ZLATKO"]
// let notfound = true;
// while (notfound && somearr.length > 0) {
//   if (somearr[0] === "MARKO") {
//     console.log("FOUND HER");
//     notfound=false;
//   } else {
//     somearr.shift();
//   }
// }


// let gunum = Math.floor(Math.random ()*max);
// let max = Number(prompt("ENTER YOUR NUMBER"));


let randomNum = Math.floor(Math.random()*11);
console.log(randomNum);
let userInput = parseInt(prompt("Enter a number between 0 and 10"));
if (userInput > randomNum) {
  console.log("Your number is greater than the random number");
}  else if (userInput < randomNum) {
  console.log("Your number is smaller than the random number");
} 
else if (userInput === randomNum) {
  console.log("YOU GUESS THE NUMBER")
} else {console.log("INVALID OPERATION");}

let message = userInput > randomNum?
"Your number is Greater than the random number" : userInput < randomNum ?
"Your number is smaller than the random number" : "YOU GUESS THE NUMBER";
console.log(message);

