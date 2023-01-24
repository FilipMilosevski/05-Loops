

///// WHILE
// let i = 0;
// while (i<10) {
//   console.log(i);
//   i++
// }



////    WHILE PRIMER 
// let arr = ["MIKE","ANTAL","MARK","EMIR","LOUISA","JACKY"]
// let notfound = true;
// while (notfound && arr.length>0) {
//   if (arr[0]==="LOUISA") {
//     console.log("FOUND HER! ");
//     notfound=false;
//   } else {
//     arr.shift()
//     }
//   }




///// FIBONACCI SO LOOP
// let n1 = 0;
// let n2 = 1;
// let temp;
// arr = []
// while (arr.length < 11) {
//   arr.push(n1);
//   temp=n1+n2;
//   n1=n2;
//   n2=temp
// }
// console.log(arr);



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



///////////            EX 5.2   BROEVI NA 5 DO 100
//  let counter = 0;
//  let step =5;
                          ///// se pravi DO pa posle WHILE, ne edno vo drugo
//  do {
//    console.log(counter);
//    counter+=step;
//   }  while (counter<100)
  //  while(!(counter >=100))                /// ili moze so         while (counter<100)



//////////// DO WHILE 
// let number;
// do {
//   number = prompt("ENTER A NUMBER BETWEEN 0 AND 100")
// }  while (!(number  >=0 && number <100))
//   console.log(number);


//////////// FOR
// for (let i = 0; i < 10; i++) {
//   console.log(i);  
// }


// let arr = [1,2,3,4,5,6,7,8,9]                       /// MOJ PRIMER
// for (let i = 0; i < arr.length; i++) {
//   console.log(i);  
// }


// let arr = [1,2,3,4,5,6,7,8,9]                         /// MOJ PRIMER    PAR 1
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i]%2 ==0) {
//       console.log(arr[i]);
//     }
// }
// let arr = [1,2,3,4,5,6,7,8,9]                         /// MOJ PRIMER    NEPAR 1
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i]%2 !=0) {
//       console.log(arr[i]);
//     }
// }



// let arr = []                                   /// MOJ PRIMER    PAR 2 SO LOG VO LOOPOT
// for (let i = 0; i < 100; i=i+2) {
//  if (arr%2 ==0) {
//    console.log(i);
//  }  
// }
// let arr = []                                  /// MOJ PRIMER    NEPAR 2 SO LOG VO LOOPOT
// for (let i = 1; i < 100; i+=2) {
//  if (arr%2 ==0) {
//    console.log(i);
//  }  
// }



// let arr = [];                                   /// MOJ PRIMER    PAR 3 PUSH VO LOOPOT I LOG NADVOR
// for (let i =0; i<100; i=i+2) {   ////ili i+=2
//   arr.push(i);
// }
// console.log(arr);
// let arr = [];                                  /// MOJ PRIMER    NEPAR 3 PUSH VO LOOPOT I LOG NADVOR
// for (let i =1; i<100; i=i+2) {   ////ili i+=2
//   arr.push(i);
// }
// console.log(arr);



// let arr = []                                   /// MOJ PRIMER    PAR 2 SO LOG VO LOOPOT
// for (let i = 0; i < 100; i+=2) {
//  if (arr%2 ==0) {
//    console.log(i);
//  }  
// }



// let arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
// for (let i = 0; i < a.length; i++) {
//     if (a[i]%2 ==0) {
//       console.log(a[i]);
//     }
// }


//////////////////// NESTED LOOPS

// let arr = []
// for (let i = 0; i < 3; i++) {
//   arr.push([]);
//   for (let j = 0; j < 7; j++) {
//     arr[i].push(j)
//   }
  
// }
// console.log(arr);
// console.table(arr)                        ///// TABELA SO NESTED LOOP



// let mytable = [];
// let row = 5;
// let col = 7;
// let counter = 0;

// for (let i = 0; i < row; i++) { 
//   let temptable=[];
//   for (let j = 0; j < col; j++) {
//   temptable.push(counter);
//   counter++;  
//   }
//    mytable.push(temptable)
// } 

// console.log(mytable);
// console.table(mytable)


                              
           //////// slicno
// let arrofarr = [];
// for (let i = 0; i < 3; i++) {
//    arrofarr.push([]);
//    for (let j = 0; j < 7; j++) {
//       arrofarr[i].push(j);    
//    } 
// }

// console.log(arrofarr);
// console.table(arrofarr)



////////////////////////////LOOPS AND ARRAYS


// let names = ["Filip","Martin","Stefan","Damjan","Angel"]
// for (let i = 0; i < names.length; i++) {
//   console.log(names[i]);  
// }
// console.log(names);
// for (let i = 0; i < names.length; i++) {
//     names[i] = " Hello " + names[i]

// }
// console.log(names[i] = " Hello " + names[i]);   //// vo loopot
// console.log(names);



///////////////////////////// BRISENJE STRING SO LOOP
// let names = ["Filip","Martin","Stefan","Damjan","Angel"]
// for (let i = 0; i < names.length; i++) {
//   if (names[i].startsWith("F")) {
//     delete names[i];
//     continue;
//   }  
//   names[i] = " Hello " + names[i]
// }
// console.log(names);



//////////////////////////// PUSH SO LOOP
// let names = ["Filip","Martin","Stefan","Damjan","Angel"]
// for (let i = 0; i < names.length; i++) {
//    names.push("PROBA")  
//    break;
// }
// console.log(names);



      /////////////////////////////////////////5.5
  //  const grid = [];
  //   const cells = 64;
  //   let counter = 0;
  //   let row;
  //   for (let x = 0; x < cells +1; x++) {
  //      if (counter % 8 == 0) {
  //         if (row != undefined) {
  //            grid.push(row);
  //         }
  //         row = [];
  //      }
  //      row.push(++counter);
  //   }
  //   console.table(grid);



///////////////////////////////////////// FOR OF LOOP

// let names = ["Filip","Martin","Stefan","Damjan","Angel"]
// for (let name of names) {
//   console.log(name); 
// }

///////////////////////////////////////5.6
// let arr = [];
// for (let i = 1; i <= 10; i++) {
//    arr.push(i);
// }
// console.log(arr);
// for (let i = 0; i < arr.length; i++) {
//    console.log(arr[i]);
// }
// for (const element of arr) {
//    console.log(element);
// }



/////////////////////////////////FOR IN LOOP
// let car = {
//   model: "Golf",
//   make: "Volkswagen",
//   year:1999,
//   color:"Black"
// }
// for (const prop in car) {
//  console.log(car[prop]);
// }
// for (const prop in car) {
//   console.log(prop);
// }



/////////////////////////////////////// CONVERTING
// let car = {
//   model: "Golf",
//   make: "Volkswagen",
//   year:1999,
//   color:"Black"
// }
// let ak = Object.keys(car)                    
// console.log(ak);
// for (let key of Object.keys(car)) {
//   console.log(key);  
// }                                              ///// LOOP NA KEYS ILI PROPERTIES
// for (let key of Object.values(car)) {
//   console.log(key);
// }
// let ak2 = Object.keys(car)                                     ///// LOOP NA VALUES
// for (let i = 0; i < ak2.length; i++) {
//   console.log(ak[i] + " : " +car[ak[i]]);  
// }
// let arrentries = Object.entries(car)
// console.log(arrentries);
// for (const [key,value] of Object.entries(car)) {
//   console.log(key, " : " ,value);  
// }

  

// let car = {
//   model:"golf",
//   make:"volkswagen",
//   year:2022,
//   color:"black"
// };
// for (const d of arrKeys) {
//  if (d=== "make") {
//   console.log(car[d]);
//  }
// }

// for (const d of arrKeys) {
//   if (d=== "model") {
//    console.log(car[d]);
//   }
//  }
 

// let arrEntries = Object.entries(car);
// console.log(arrEntries);



// for (const element of arrEntries) {
//   console.log(element[0] + ": " + element[1]);
// }                                                   ///// NAJVAZEN CONVERT



////////////////OD PREDAVANJE
// let car = {
//   model:"GOLF",
//   make:"VW",
//   year:1999,
//   color:"Black"
// }
// console.log(car.model);
// console.log(car["model"]);

// for(let prop in car) {
//   console.log(car[prop]);
// }


///////////////////////////////////////break continue
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

// console.log(`Continue`);

// for (let i = 0; i < 10; i++) {
//   console.log(i);  
//   if (i === 4) {
//     break;
//   }
// }
// console.log("BREAK");



///////////////////////////////////// EX
// let cars = [
//   {model: "Tipo",
//    make: "Fiat",
//    year:  1991,
//    color: "Black",
//   },
//   {model: "Golf",
//     make:  "Volkswagen",
//     year:  2005,
//     color: "Red",
//    },
//    {model: "Yaris",
//     make:  "Toyota",
//     year:  2015,
//     color: "Blue",
//    },
//    {model: "Civic",
//     make:  "Honda",
//     year:  2013,
//     color: "Gray",
//    },
//    {model: "Leon",
//     make:  "Seat",
//     year:  1998,
//     color: "Orange",
//    },
// ]

// for (let i = 0; i < cars.length; i++) {
//   if (cars[i].year >= 2010)  {
//     if (cars[i].color >=  "Gray") {
//       console.log("I found my car ! : " ,cars[i]);
//       break;
//     }
//   }
// }

// for (let car of cars) {
//   if(car.color !== "Red"){
//       continue;
//   }
//   if (car.year >= 2000) {
//     console.log("We could get this one: ", car);
//   }
// }



// for (let i = 0; i < 50; i=i+2) {
//     console.log(i);  
// }                                      ///// PARNI NEPARNI VO LOOP



// let groups = [
//   ["Martin","Daniel","Milena"],
//   ["Margot","Marina","Ali"],
//   ["Helen","Martinez","Sambikos"]
// ]
// for (let group of groups) {
//   for (let member of group) {
//     if (member.startsWith("M")) {
//       console.log("found one starting with M: ",member);
//       continue;
//     }
//   }
// }



///////////////////////////////////////// VEZBA
// let employees = [
//   {
//       name: "Boban",
//       age: 35,
//       department: "It",
//       online: true
//   },
//   {
//       name: "Goran",
//       age: 41,
//       department: "Marketing",
//       online: true
//   },
//   {
//       name: "Ana",
//       age: 23,
//       department: "Sales",
//       online: false
//   },
//   {
//       name: "Tina",
//       age: 33,
//       department: "Marketing",
//       online: false
//   }
// ]
// console.table(employees);



// for (let i = 0; i < cars.length; i++) {
//   if (cars[i].year >= 2010)  {
//     if (cars[i].color >=  "Gray") {
//       console.log("I found my car ! : " ,cars[i]);
//       break;
//     }
//   }
// }
// // 1.Treba da ja projdeme kolekcijata i da gi zapiseme site vraboteni sto se pod 40 godini
// // 2.Treba da ja projdeme kolekcijata i da prekineme ako najdeme vraboten sto raboti vo Id sektorot koristejki break;
// // 3.Treba da ja projdeme kolekcijata i da gi prikazeme site vraboteni osven tie sto ne rabotat online;
// // 4.Treba da ja projdeme kolekcijata i da gi prikazeme site vraboteni osven tie sto ne rabotat online;
//   let ex1 = "VRABOTENI ISPOD 40 GODINI"
//   console.log(ex1);
// outer:
// for (const element of employees) {
//     let arr = Object.keys(element);
//     let output = "";
//     for (const key of arr) {
//         if (key === "age") {
//             if (element[key] > 40) {
//                 continue outer;
//             }
//         }
//         output += key + ": " + element[key] + " ";
//     }
//     console.log(output);
// }


// let x = "////////////////////////////////"
// console.log(x);
// let a = "VRABOTENI VO IT SEKTOROT"
// console.log(a);
// outer:
// for (const element of employees) {
//     let arr = Object.keys(element);
//     let output = "";
//     for (const key of arr) {
//         if (key === "department") {
//             if (element[key] !="It") {
//                 continue outer;
//             }
//         }
//         output +=key + " : " + element[key] + " ";
//     }
//     console.log(output);
// }

// let f = "/////////////////////////////////"
// console.log(f);


// let o = "VRABOTENI STO NE RABOTAT ONLINE"
// console.log(o);

// outer: 
// for (const element of employees) {
//     let arr = Object.keys(element);
//     let output = "";
//     for (const key of arr){
//         if (key === "online" === true) {
//             if (element[key] !=false){
//                 continue outer;
//             }
//         } 
//         output += key + " : " + element[key] + " ";
//     } 
//     console.log(output);
// }


// let aa = "//////////////////////////////////////////"
// console.log(aa);
//  let ee ="VRABOTENI STO  RABOTAT ONLINE"
//  console.log(ee);


//  outer:
//  for (const element of employees) {
//     let arr = Object.keys(element);
//     let output = "";
//     for (const key of arr) {
//         if (key === "online" === true) {
//             if (element[key] === false) {
//                 continue outer;
//             }
//         }
//         output += key + " : " + element[key] + " "
//     }
//     console.log(output);
//  }

// for (let i = 0; i < 10; i++) {
//   console.log(i);  
//   if (i===4) {
//     break;
//   }
// }


// for (let i = 1; i < 10; i++) {
//   console.log(i);  
//   if (i ===4) {
//     break
//   }
// }