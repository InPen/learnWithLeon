// *Variables*
// Declare a variable, reassign it to your favorite food, and alert the value
let faveFood = 'kimchi'
faveFood = 'pozole'
console.log(`My favorite food is ${faveFood}`);
//Declare a variable, assign it a string, alert the second character in the string
//(Use your google-fu and the MDN)
let wordVariable = "Paralelepipedo"
console.log(wordVariable)
let index = 2
console.log(`The second character in our string is ${wordVariable.charAt(index)}`)

// *Functions*
// Create a function that takes in 3 numbers. Divide the first two numbers and multiply the last.
//Alert the product. Call the function.
function threeNums(n1,n2,n3){
  console.log((n1/n2)*n3)
}
threeNums(909,18,6)
// Create a function that takes in 1 number. Console log the cube root of the number. Call the function.
function cubeRoot(number){
  console.log(Math.cbrt(number))
}
cubeRoot(24)
// *Conditionals*
//Create a function that takes in a month.
function seasonMonth(month){
  month = month.toLowerCase()
//If it is a summer month alert "YAY".
  if(month === 'June' || month ==='July' || month ==='August') {
    console.log('YAY!')
//If another other month, alert "Booo"
} else {
    console.log('Booo, so cold!')
  }
}
seasonMonth("January")
//*Loops*
//Create a function that takes in a number.
function takeNum(num){
//Console log every number from 1 to that number while skipping multiples of 5.
  for(let i=1; i <= num; i++ ){
    if (i % 5 !=== 0){
      console.log(i)
    }
  }
}
takeNum(25)
