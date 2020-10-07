//Create a function that takes in an array of numbers.
function numsArray(array){
  let evenNums = []
//Return a new array containing every even number from the original array (do not use map)
  for(let i = 0; i < array.length; i++) {
    if(array[i] % 2 === 0) {
      evenNums.push(array[i])
    }
  }
}
numsArray([32,81,6,8])
