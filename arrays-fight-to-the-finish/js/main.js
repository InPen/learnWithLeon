//Create an array of movie titles. Loop through the array and each element to the h2.


//Create an array of numbers.
let arrayOfNums = [88,666,4783,12] //[4,5,6,7,8]
console.log(arrayOfNums.length);
//Loop through the array and
 // for(let i=1;i<=arrayOfNums.length;i++){
//ADD three to each number and replace the old number
//   arrayOfNums
//   console.log(i)
// }
arrayOfNums.forEach(function(item, index) {
  console.log((item + 3), index)
})
//Find the average of all the numbers from question three
