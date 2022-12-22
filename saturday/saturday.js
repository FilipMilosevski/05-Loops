//////////////////////////////////////1

// let i = 0;
// let arry = [];
// while (i <= 10) {
//   arry.push(i);
//   i++;
// }

// console.log(`The numbers: ${arry}`);



// let arr = [];
// for (let i = 0; i < 11; i++) {
//   arr.push(i);
// }
// console.log(arr);


///////////////////////////////////////////2
// let num = 587999;
// let counter = 0;
// while (num !=0) {
//   num = Math.floor(num/10);
//   counter++;
// }
// let num1 = 587999;
// console.log(`The number of digits of the number : ${num1} is ${counter}`);




////////////////////////////////////////3


// let n1= 0;
// let n2=1;
// let n3;
// let fibnum=12;
// count = 2;
// while(count <=fibnum) {
//   n3=n1+n2;
//   console.log(n3);
//   n1=n2;
//   n2=n3;

//   count++;
// }




//////////////////////4 isprintaj neparni broevi do 100 
// let arr= [];
// let i = 1;
// while (i<=100) {
//   if (i%2 !=0) arr.push(i);  
//   i++;
// }
// console.log(arr);
// // if (i%2 ==0) arr.push(i);



/////////////////////5
// let input1 = parseInt(prompt("ENTER A FIRST NUMBER"))
// let input2 = parseInt(prompt("ENTER A SECOND NUMBER"))
// do {
//   console.log(input1);
//   input1++;
// } while (input1 <= input2)


// let input1 = parseInt(prompt("Enter a first number"));
// let input2 = parseInt(prompt("Enter a second number"));
// do {
//   console.log(input1);
//   input1++;
// } while (input1 <= input2);


/////////////////////////////////6


// let secretNumber = Math.floor(Math.random() * 10);
// let guesses = 0; // for storing the number of guesses
// do {
//   // get input from user
//   let number = parseInt(prompt("Please enter a number between 0 and 10"));
//   // increase the number of guesses
//   guesses++;
//   // check input number with the secret number provide hint if needed
//   if (number > secretNumber) {
//     alert("To high");
//     alert(secretNumber);
//   } else if (number < secretNumber) {
//     alert("To low");
//     alert(secretNumber);
//   } else if (number == secretNumber) {
//     alert(`Bravo! you're correct after ${guesses} guess(es).`);
//   }
// } while (number != secretNumber);



// //////////////////////////7
// for (i = 0; i < 9; i++) {
//   for (j = 0; j < 9; j++) {
//     console.log(`The sum of ${i} and ${j} is: ${i + j}`);
//   }
// }



/////////////////////////////////8
// let arr= [1,5,4,2,3,9,8,7,6]
// console.log(arr);    

// for (i=0; i<arr.length; i++){
//   if (arr[i] % 2 !== 0) {
//     console.log(arr[i]);
//   }
// }





///////////////////////////////////9
// let arr1= [4,5,6,1,2]
// let arr2= [2,4,5,7,9]
// let product= [];
// for (i=0; i<arr1.length; i++) {
//   product[i]=arr1[i] * arr2[i]
//   console.log(`THE PRODUCT OF ${arr1[i]} and ${arr2[i]} is: ${product[i]}`);
// }



///////////////////////10
// let arr= [19,11,1,5,7,22,75]
// let largest = 0;
// for (i=0; i < arr.length; i++) {
//   if (arr[i] > largest)
//     largest = arr[i];
  
// }
// console.log(largest);


// let arr= [19,11,1,5,7,22,75]
// let smaallest = arr[0];
// for (i=0; i < arr.length; i++) {
//   if (arr[i] < smaallest)
//     smaallest = arr[i];
  
// }
// console.log(smallest);



// let array = [1, 2, 70, 3, 10, 5, 0];
// let largest = 0;
// for (i = 0; i < array.length; i++) {
//   if (array[i] > largest) {
//     largest = array[i];
//   }
// }
// console.log(largest);
// let array = [1, 2, 70, 3, 10, 5, 3];
// let minnumber = array[0];

// for (i = 0; i < array.length; i++) {
//   if (array[i] < minnumber) {
//     minnumber = array[i];
//   }
// }
// console.log(minnumber);



////////////////////////////11



// for (let i = 1; i <= 45; i++) {
//   if (i % 3 == 0 && i % 5 == 0) {
//     console.log("FizzBuzz", i);
//   } else if (i % 3 == 0) {
//     console.log("Fizz", i);
//   } else if (i % 5 == 0) {
//     console.log("Buzz", i);
//   }
// }



//////////////////////////////12

// cars = ["BMW", "AUDI", "FIAT", "MECEDES", "LAMBURGINI", "TESLA"];
// for (x of cars) {
//   console.log(x);
// }



///////////////////////////////////13

// Restaurant = {
//   Name: "REMO",
//   Cake: "CheeseCake",
//   Ingidients: ["Cream Chese", "Sugar", "Vanila Extract"],
// };
// for (elements in Restaurant) {
//   console.log(elements);
// }
// for (elements in Restaurant.Ingidients) {
//   console.log(Restaurant.Ingidients[elements]);
// }
