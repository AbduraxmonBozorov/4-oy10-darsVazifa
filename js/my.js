// ForEach metodi yordamida ishlanadigan masalalar
// 1-masala
// let arr=[1,2,3,4,5];
// let arr1=[];

// arr.forEach(function(item){
//     arr1.push(item**2);
// })
// console.log(arr1);

// 2-masala
// let arr = [1, 2, -3, 4, -5];
// let arr1 = [];
// arr.forEach((item) => {
//   if (item > 0) {
//     arr1.push(item);
//   }
// });
// console.log(arr1);

// 3-masala
// let arr=[1,2,3,4,5];
// arr.forEach(item => console.log(item*2));

// 4-masala
// let sum=0;
// let arr=[1,2,3,4,5];
// arr.forEach(item => sum += item);
// console.log(sum);

// filter metodi yordamida ishlanadigan masalalar.
// 1-masala
// let arr = [1, 2, 3, 4, 5];
// let arr1 = arr.filter(function (item) {
//   let a = item ** 2;
//   return a;
// });
// console.log(arr1);

// 2-masala
// let arr = [1, 2, 3, 4, 5];
// let arr1 = arr.filter(function (item) {
//   if (item % 2 == 0) {
//     return item;
//   }
// });
// console.log(arr1);

// 3-masala
// let arr=[1, 2, 'salom', 'hello', 'xayr', 'bye'];
// let arr1=arr.filter((a) => {
//     if(typeof a == 'string' && a.length < 5){
//         return a;
//     }
// })
// console.log(arr1);

// 4-masala
// let users = [
//   { name: "Ali", age: 21 },
//   { name: "Vali", age: 17 },
//   { name: "Gani", age: 25 },
//   { name: "Toshmat", age: 15 },
// ];
// let users1 = users.filter((user) => {
//   if (user.age > 18) {
//     return user;
//   }
// });
// console.log(users1);

// map metodi yordamida ishlanadigan masalalar.
// 1-masala
// let arr=[1,2,3,4,5];
// let arr1=arr.map((a) => {
//     return a**2;
// })
// console.log(arr1);

// 2-masala
// let arr=[1,2,3,4,5];
// let arr1=arr.map((a) => {
//     return a+5;
// })
// console.log(arr1);

// 3-masala
// let arr = [1, 2, "salom", "hello", "xayr", "bye"];
// let arr1 = arr.filter((a) => {
//   if (typeof a == "string") {
//     a = a.toUpperCase();
//     console.log(a);
//     return a;
//   }
// });
// console.log(arr1);

// 4-masala
// let arr = [1, 16, 4, 9, 64, 25];
// let arr1 = arr.map((item) => {
//   return Math.sqrt(item);
// });
// console.log(arr1);

// some/every metodi yordamida ishlanadigan masalalar.
// 1-masala
// let arr = [1, 2, 3, 4, -5];
// let res = arr.some(function(a){
//     return a < 0 ? true : false
// });
// console.log(res);

// 2-masala
// let arr=[1, 2, 'assalomu aleykum',  3,  'hello'];
// let res=arr.some(item=>{
//     if(typeof item == 'string' && item.length >= 10){
//         return true;
//     }
//     else{
//         return false;
//     }
// });
// console.log(res);

// 3-masala
// let arr = [1, 2, 3, -4, 5];
// let res=arr.every(item=>{
//     if(item>0){
//         return true;
//     }else{
//         return false;
//     }
// })
// console.log(res);

// 4-masala
// let arr=['SALOM', 'HELLO', 'ByE'];
// let res=arr.every(item=>{
//     if(typeof item=='string' && item==item.toUpperCase()){
//         return true;
//     }else{
//         return false;
//     }
// });
// console.log(res);

// Umumiy
// 1-masala
// let arr=[1, 2,  3, 'salom', true];
// let item=true;
// let res=arr.includes(item);
// console.log(res);

// 2-masala
// let arr=[1, 2,  3, 'salom', true];
// let item=true;
// let res=arr.indexOf(item);
// console.log(res);

// 3-masala
// let arr=[1, 2,  3, 'salom', true, 3];
// let item=3;
// let res=arr.lastIndexOf(item);
// console.log(res);

// 4-masala
// let arr = [1, 2, 15, 8, 17, 9, 22];
// let item = arr.find((item) => {
//   return item > 10;
// });
// console.log(item);
