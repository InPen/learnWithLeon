// *Variables*
// Declare a variable, assign it a boolean, and alert the value
let kiss = false
console.log(kiss)
// Declare a variable, reassign it to your favorite color, and console log the value
let favColor
favColor = "purple"
console.log(favColor)

// *Functions*
// Create a function that takes in 4 numbers and returns the sum of the first 3 numbers
//divided by the fourth. Return the result. Call the function.
const math = (n1,n2,n3,n4) => {
  console.log((n1+n2+n3)/n4)
}
math(4,88,666,42)
// Create a function that takes in 2 numbers.
//Console log the first number to the power of the second. Call the function.
function iGotThePower(n1,n2){
  console.log(Math.pow(n1,n2))
}
iGotThePower(2,10)
// *Conditionals*
// Create a function that takes in a boolean and a string. If the boolean is true, alert the string. If the boolean is false, console log the string
function dialog(boo, str){
  if(boo == true) {
    console.log(str)//('you get a kiss!')
  } else if(boo == false) {
    console.log(str)//('sorry no kiss for you')
  }
}
dialog(false,'sorry no kiss for you')
//*Loops*
//Create a function that takes in a number.
function fizzBuzz(n1){
//Console log all values from 1 to that number,
  // let n1 = 12
  for(let i=1; i <= n1; i++) {
//but if the number is divisible by 3 log "fizz" instead of that number,
    if(i %3===0 && i % 5===0) {
      console.log('fizzzbuzzzz')
//if the number is divisible by 5 log "buzz" instead of the number,
    } else if(i % 3===0) {
        console.log('fizzz')
//and if the number is divisible by 3 and 5 log "fizzbuzz" instead of that number
    } else if (i % 5===0) {
        console.log("buzz")
    } else {
      console.log(i)
    }
  }
}
fizzBuzz(666)
