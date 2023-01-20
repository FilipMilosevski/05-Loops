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

// 1.Treba da ja projdeme kolekcijata i da gi zapiseme site vraboteni sto se pod 40 godini
// 2.Treba da ja projdeme kolekcijata i da prekineme ako najdeme vraboten sto raboti vo Id sektorot koristejki break;
// 3.Treba da ja projdeme kolekcijata i da gi prikazeme site vraboteni osven tie sto ne rabotat online;
// 4.Treba da ja projdeme kolekcijata i da gi prikazeme site vraboteni osven tie sto ne rabotat online;
// let ex1 = "VRABOTENI ISPOD 40 GODINI"
// console.log(ex1);
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



 