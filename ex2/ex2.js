// let i = 0;
// console.log(i<10);
// if (true) {
//     console.log("if statement")
// }
// while (i<10) {
//     console.log(i<10);
//     console.log("VARIABLE   I:"+i);
//     i++
// }
// console.log(i<10);

// let number;

// do {
//     number = prompt("PLEASE ENTER A NUMBER BETWEEN 0 AND 100");
// } while (!(number >=0 && number <=100));
// console.log(number);



///exercise 5.2 
// let counter = 0;
// let step =5;

// do {
//   console.log(counter);
//   counter+=step;
// } while (!(counter >=100))                /// ili moze so         while (counter<100)


                    //////////////////////////////////////////////////////
// for (let i = 0; i < 10; i++) {
//   console.log(i);
  
// }



// let arr = [];
// for (let i =0; i<100; i++) { 
//   arr.push(i);
// }
// console.log(arr);

// let arr = [];
// for (let i =0; i<100; i=i+2) {   ////ili i+=2
//   arr.push(i);
// }
// console.log(arr);

                            /////////////////////////////////
// let mywork = [];
// for (let i = 1; i < 11; i++) {
//   let _name = "Lesson " +i;
//   let _status = i % 2 >0 ? true : false; 

//   mywork.push ({name: _name, status: _status})
// }

// console.log(mywork);


                  ///////////////////////////////////////// exercise 5.4 nested array

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
                              
           //////// slicno
// let arrofarr = [];
// for (let i = 0; i < 3; i++) {
//    arrofarr.push([]);
//    for (let j = 0; j < 7; j++) {
//       arrofarr[i].push(j);    
//    } 
// }

// console.log(arrofarr);

                             /////////////////////////////////////////5.5
                            //  const grid = [];
                            //  const cells = 64;
                            //  let counter = 0;
                            //  let row;
                            //  for (let x = 0; x < cells +1; x++) {
                            //     if (counter % 8 == 0) {
                            //        if (row != undefined) {
                            //           grid.push(row);
                            //        }
                            //        row = [];
                            //     }
                            //     row.push(++counter);
                            //  }
                            //  console.table(grid);
///////////////////////////////

// let arr = ["TEST1", "TEST2", "TEST3","TEST4"];
// console.log("============FOR ===========");
// for (let i = 0; i < arr.length; i++) {
//   const item = arr[i];
//   console.log(item)
  
// }
// console.log("=================FOR OF ================");
// for (let item of arr) {
//   console.log(item);
// }
  
// console.log("===================== FOR EACH ==========");
// arr.forEach(element=>console.log(element))


                          //////////////////5.6


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

                  ////////////////////////////
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
//////////////////////////////////////////VEZBA


// let lesson = {
//   name:"FILIP",
//   dificulty:9,
//   mandatory:true
// }

// for (let prop in lesson) {
//   console.log(prop+": " +lesson[prop]);
// }


