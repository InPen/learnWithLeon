// Create a function that takes in an array.
function arrayTaker(array){
//If the first number, is less than the last number, alert "Hi".
  if(array[0] < array[array.legth - 1]){
    console.log('Hewo')
//If the first number is greater than the last number, alert "Bye".
} else if(array[0] > array[array.legth - 1]){
    console.log('Bye Felicia')
//If they are equal, alert "We close in an hour".
} else {
    console.log("We close in an hour")
  }
}
arrayTaker([1,5,6,3,9,0])
