//Create a function that takes in an array of numbers.

function numArrayTaker(numArray){
//Multiply each number together and alert the product.
let product = 1
for(let i = 0; i < numArray.length; i++){
  product *= numArray[i]
  }
  console.log(product)
}
numArrayTaker([6,8,18,89,90,20]) 
