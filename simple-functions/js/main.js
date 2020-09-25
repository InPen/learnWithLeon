//---Easy
//create a function that subtracts two numbers and alerts the difference
function subtract(n1,n2) {
  difference = (n1-n2)
  console.log(difference)
}
subtract(98,45)
//create a function that divides three numbers and console logs the quotient
function divide(nu1,nu2,nu3) {
  quo = (nu1/nu2/nu3)
  console.log(quo)
}
divide(765,435,341)
//create a function that multiplys three numbers and returns the product
function multiply(nm1,num2,nm3) {
  pro = (nm1*num2*nm3)
  console.log(pro)
}
multiply(8,45,673459)
//---Medium
//create a function that takes in three numbers.
function ranDom(q1,q2,q3) {
//Add the first two numbers
//return the remainder of dividing the sum of the first two numbers by the third number
  return (q1+q2) % q3
}
ranDom(5,20,78)

//---Hard
//create a function that takes in 4 numbers.
function calculate(num1, num2, num3, num4) {
//Multiply the first two numbers.
  product = num1 * num2
  console.log(product)
//If the product is greater than 100 add the sum of the last two numbers and console log the value.
  if (product > 100) {
    value = product + (num3 * num4)
    console.log(value)
    console.log("grater than ran")
//If the product is less that 100, subtract the difference of the last two numbers and console log the value.
  } else if (product < 100) {
    value = product - (num3 * num4)
    console.log(value)
    console.log("less than ran")
//If the product is 100, multiply the first three numbers together and alert the remainder of dividing the fourth number
  } else if (product == 100) {
    remainder = (num1*num2*num3)/num4
    console.log(remainder)
  }
}
calculate(300,76,777,182)
