// let arr = [];
// let value = 7;



// outer:
// for(let i = 1; i<5; i++) {
//   let temp = [];
//   inner:
//   for (let j = 1; j < 10; j++) {
//       let res = i * j
//       temp.push(res)
//   }
//   arr.push(temp)
// }
// console.log(arr);



// let multTable = [];
// let value = 7;
// outer:
// for (let i = 1; i < 5; i++) {
//     let temp = [];
//     inner:
//     for (let j = 1; j < 20; j++) {
//         let res = i * j
//         if (res > 45) {
//             break outer;
//         }
//         if (temp.length === 7) {
//             break;
//         }
//         if (res % 2 === 0) {
//             continue;
//         }
//         temp.push(res);
//     }
//     multTable.push(temp);
// }
// console.log(multTable);


///////////////////////////////VEZBA

// let employees =[
//   {
//     name:"FILIP",
//     age:28,
//     department:"IT",
//     online:true
//   },
//   {
//     name:"MARKO",
//     age:41,
//     department:"Marketing",
//     online:true
//   },
//   {
//     name:"STEFAN",
//     age:31,
//     department:"Sales",
//     online:false
//   },
//   ,
//   {
//     name:"NAUM",
//     age:35,
//     department:"Marketing",
//     online:false
//   }
// ]

// if (age<=40) {
  
// }


// let car = {
//   model:"Leon",
//   make:"Seat",
//   year:2019,
//   color:"gray"
// }
// let arrKeys = Object.keys(car);
// console.log(arrKeys);
// for (const fil of arrKeys) {
//   console.log(fil);
// }
// for (const filip of arrKeys){
//   if (filip==="model"){
//     console.log(car[filip]);
//   }
// }
// for (const fm of arrKeys) {
//   if (fm==="make"){
//     console.log(car[fm]);
//   }
// }

// let arrEntries = Object.entries(car);
// console.log(arrEntries)
// for (const element of arrEntries) {
//   console.log(element[0]+" : "+element[1]);
// }



/////primer 
// let car = {
//   model:"Leon",
//   make:"Seat",
//   year:2019,
//   color:"gray"
// }
// console.log(car);

// let arrKeys = Object.keys(car)
// console.log(arrKeys);

// for (let fil of Object.keys(car)){
//   console.log(fil);
// }

// for (let fm of Object.values(car)) {
//   console.log(fm);
// }


// let arrKeys1 = Object.keys(car);
// for (let i = 0; i <arrKeys1.length; i++) {
//   console.log(arrKeys1[i] + " : "+car[arrKeys1[i]]);
// }


// let arrEntries = Object.entries(car);
// console.log(arrEntries);

// for (let fil of Object.keys(car)) {
//   console.log(fil);
// }

////////////primer predavanje

// let car = {
//   model:"golf",
//   make:"volkswagen",
//   year:2022,
//   color:"black"
// };

// console.log(car);
// let arrKeys = Object.keys(car);
// console.log(arrKeys);
// for (const element of arrKeys) {
//   console.log(element);
// }

// let arrvalues= Object.values(car);
// console.log(arrvalues);
// for (const element of arrvalues) {
//   console.log(element);
// }

// let arrEntries = Object.entries(car)
// console.log(arrEntries);
// for (const element of arrEntries) {
//   console.log(element[0]+" : "+element[1]);
// }

////////////

// let arrkeys = Object.keys(car);
// console.log(arrkeys);
// for (const element of arrkeys) {
//   console.log(element);
// }

// let arrvalues = Object.values(car);
// console.log(arrvalues);
// for (const element of arrvalues) {
//   console.log(element);
// }

// let arrentries = Object.entries(car);
// console.log(arrentries);
// for (const element of arrentries) {
//   console.log(element);
// }
// for (const element of arrentries) {
//   console.log(element[0]+" : "+element[1]);
// }
// let a = "//////////////////////////////////";
// console.log(a);



// console.log(car);
// console.log(arrKeys);
// console.log(arrvalues);
// console.log(arrEntries[0],arrKeys[0],arrvalues[0]);
// console.log(arrvalues[1],arrEntries[0],arrKeys[0]);



// let car = {
//   model:"golf",
//   make:"volkswagen",
//   year:2022,
//   color:"black"
// };

// console.log(car);

// let arrkeys = Object.keys(car);
// console.log(arrkeys);
// for (const element of arrkeys) {
//   console.log(element);
// }

// let arrvalues = Object.values(car);
// console.log(arrvalues);
// for (const element of arrvalues) {
//   console.log(element);
// }

// let arrentries = Object.entries(car);
// console.log(arrentries);
// for (const element of arrentries) {
//   console.log(element);
// }
// for (const element of arrentries) {
//   console.log(element[0]+" : "+element[1]);
// }

// let car = {
//   model:"Golf",
//   make:"Volkswagen",
//   year:2022,
//   color:"Black"
// }
// console.log(car);

// let arrkeys = Object.keys(car)
// console.log(arrkeys);
// for (const element of arrkeys) {
//   console.log(element);
// }
// let arrvalues = Object.values(car)
// console.log(arrvalues);
// for (const element of arrvalues){
//  console.log(element);
// }
// let arrentries = Object.entries(car)
// console.log(arrentries);
// for (const element of arrentries) {
//   console.log(element);
// }
// for (const element of arrentries) {
//   console.log(element[0]+" : "+element[1]);
// }


// for (let i = 0; i < 10; i++) {
//     if(i===3) 
//     {
//       break;
//     }  
//     console.log(i);
// }

// console.log(`Break`);




// for (let i = 0; i < 10; i++) {
//   if(i===3) 
//   {
//     continue;
//   }  
//   console.log(i);
// }

// console.log(`Break`);

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



