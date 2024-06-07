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
