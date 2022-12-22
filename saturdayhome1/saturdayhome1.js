///////////////1  vo prazen arr brojki
///////////////2  kolku pati se deli brojot
///////////////3  fibonachi
///////////////4  neparni/parni broevi
///////////////5  od prv do vtor broj 
///////////////6  zbir na prv i vtor broj
///////////////7  parni/neparni broevi vo arr
///////////////8  mnozenje broevi od razlicen arr
///////////////9  najgolem/najmal broj od arr
///////////////10 x od cars
///////////////11 restoran



///////////////1  vo prazen arr brojki
// let arr = []
// let i = 0;
// while (i<=10) {
//   arr.push(i)
//   i++
// } console.log(arr);



///////////////2  kolku pati se deli brojot
// let num = 768898;
// let count = 0;
// while (num !=0) {
//   num = Math.floor(num/10)
//   count++
// } console.log(count);



///////////////3  fibonachi
// let n1=0;
// let n2=1;
// let n3;
// let fibnum=12;
// let count=2;
// while (count<=fibnum) {
//   n3=n1+n2;
//   console.log(n3);
//   n1=n2;
//   n2=n3;
//   count++
// }


///////////////4  neparni/parni broevi
// let arr =[]
// let i = 1;
// while (i<=100) {
//   if (i%2 !=0) arr.push(i)
//   i++
// } console.log(arr);
// let arr = []
// let i = 1;
// while (i<=100) {
//   if (i%2 ==0) arr.push(i)
//   i++
// } console.log(arr);


///////////////5  od prv do vtor broj 
// let n1 = parseInt(prompt('ENTER THE FIRST NUMBER: '))
// let n2 = parseInt(prompt("ENTER THE SECOND NUMBER: "))
// do {
//   console.log(n1)
//   n1++
// } while (n1<=n2)




///////////////6  zbir na prv i vtor broj
// for (let i = 0; i < 9; i++) {
//   for (let j = 0; j < 9; j++) {
//     console.log(`Zbirot na broevite ${i} i ${j} pravat vkupno ${i+j}`);
//     }
//   }


///////////////7  parni/neparni broevi vo arr
// let arr = [1,2,3,4,5,6,7,8,9]
// console.log(arr);
// for (let i = 0; i < arr.length; i++) {  
//   if (arr[i]%2 !==0) {
//     console.log(arr[i]);
//   }
// }

// let arr = [1,2,3,4,5,6,7,8,9]
// console.log(arr);
// for (let i = 0; i < arr.length; i++) { 
//     if (arr[i]%2 ==0) {
//       console.log(arr[i]);
//     }
// }



///////////////8  mnozenje broevi od razlicen arr
// let a1 = [9,4,5,6,9];
// let a2 = [3,4,2,7,6];
// let product = [];
// for (let i = 0; i < a1.length; i++) {
//   product[i] = a1[i] * a2[i] 
//   console.log(`THE PRODUCT OF ${a1[i]} and ${a2[i]} is ${product[i]}`); 
// }



///////////////9  najgolem/najmal broj od arr
// let arr = [22,98,12,45,66,77,53]
// let largest = 0;
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] >largest)
//     largest = arr[i]  
// } console.log(largest);
// let arr = [22,98,12,45,66,77,53]
// let smallest = arr[0]
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i]<smallest)
//     smallest = arr[i]  
// } console.log(smallest);





///////////////10 x od cars
// let cars = ["AUDI", "BMW", "HONDA","CITROEN","FORD"]
// for (x of cars) console.log(x);




///////////////11 restoran
// Restaurant = {
//   Name:"Remo",
//   Cake:"Cheesecake",
//   Ingredients: ["Creamer", "Sugar","Brownies","Cocoa","Orange"]
// }
//  for (elements in Restaurant) {
//   console.log(elements);
//  }
//  for (elements in Restaurant.Ingredients) {
//   console.log(Restaurant.Ingredients[elements]);
//  }


// let car = {
//   model:"GOLF",
//   make:"VW",
//   year:1999,
//   color:"Black"
// }
// // console.log(car.model); 
// // console.log(car["model"]);

// for(let prop in car) {
//   console.log(car[prop]);
// }
