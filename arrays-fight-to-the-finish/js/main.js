//Create an array of movie titles. Loop through the array and each element to the h2.
let movies = ['Aaladin', 'Hercules', 'Us', 'HP and the Half Blood Prince', 'Princess Diaries']
movies.forEach(function(element){
  console.log(element);
  document.querySelector('h2').innerText += element
})
//Create an array of numbers.
let arrayOfNums = [4,5,6,7,8] //[4,5,6,7,8]
console.log(arrayOfNums.length);
//Loop through the array and
 for(let i=0;i< arrayOfNums.length;i++){
//ADD three to each number and replace the old number
  arrayOfNums[i] = arrayOfNums[i]+3
  console.log(arrayOfNums);
}
// arrayOfNums.forEach(function(item, index) {
//   console.log((item + 3), index)
//   console.log(arrayOfNums);
// })
//Johann's:
// const newArrayOfNums = []
// arrayOfNums.forEach(function(item, index) {
//   newArrayOfNums.push(item+3)
// })
// console.log("");
// console.log("");
// console.log("arrayOfNums", arrayOfNums)
// console.log("newArrayOfNums", newArrayOfNums)

//Find the average of all the numbers from question three
let sum = 0
for(let i = 0; i <= nums.length; i++){
  sum+=nums[i]
}
let average = sum/nums.length
