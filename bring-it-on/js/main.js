// *Variables*
// Create a variable and console log the value
let baby = 'Han'
console.log(baby)
// Create a variable, add 10 to it, and alert the value

let bob = 0
console.log(bob+10)

// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference
function subFour(nu1,nu2,nu3,nu4) {
  diff = nu1-nu2-nu3-nu4
  console.log(diff)
}
subFour(2,8,66,0)
// Create a function that divides one number by another and returns the remainder
function divide(num1,num2) {
  remainder=(num1%num2)
  console.log(remainder)
}
divide(55,3)
// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji
function jumanji(num1, num2){
  result = num1 + num2
  if(result > 50) {
    console.log('JUMANJI!')
  }
}
jumanji(500,1)
// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA
function zebra(num1,num2,num3){
  product = num1*num2*num3
  if(zebra%3 === 0) {
    console.log('ZeeBRA')
  }
}
zebra(18,3,12)
//*Loops*
//Create a function that takes in a word and a number.
function numWord(num, word) {
//Console log the word x times where x was the number passed in
 for(let i = 1;i<=num;i++)
 console.log(word)
}
numWord(19, "hell")
