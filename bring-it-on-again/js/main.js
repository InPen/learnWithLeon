// *Variables*
// Declare a variable, assign it a value, and alert the value
let dog = 'Snooky'
function print(){
  console.log(dog)
}
print()
// Create a variable, divide it by 10, and console log the value
let time = 25
function reduce(){
  console.log(time/10)
}
reduce()
// *Functions*
// Create a function that multiplys 3 numbers and alerts the product
function times3(num1,num2,num3){
  console.log(num1*num2*num3)
}
times3(18,23,6)
// Create a function that takes in 4 numbers.
function four(num1, num2,num3,num4){
//Add the first two numbers and subtract the next two.
//Console log the result
  console.log(`result 1: ${num1.toString()+num2.toString()}, result 2: ${num3-num4}`)
  console.log(num1+num2-num3-num4)
}
four(44,2,666,18)

// *Conditionals*
// Create a function that takes in 3 numbers.
function winnah(num1,num2,num3){
//Starting with 100 add the first number, subtract the second, and divide the third.
value = ((100 + num1) - num2) / num3
//If the value is greater then 25, console log "WE HAVE A WINNNA"
if (value > 25) {
  console.log('WE HAVE A WINNNA!!!')
}
}
winnah(5,0,1)

// Create a function that takes in a day of the week.
function whatDayIsIt(day){
  day = day.toLowerCase()
//If it is a weekend alert, "weekend" and if not alert "week day".
 if(day === 'saturday' || day === 'sunday'){
   console.log('Yay is the weeEEEekend!')
 } else if (day === 'monday' || day === 'tuesday' || day === 'wednesday' || day === 'thursday' || day === 'friday') {
   console.log('just another day')
 } else {
   console.log('try again')
 }
}
whatDayIsIt('monday')
//Handle capitilization and if the user does not enter a day of the week alert "Try again!"

//*Loops*
//Create a function that takes in a number. Console log all values from 1 to that number or greater, but count by 3
function countByThree(num) {
  for (let i =1; i<= num; i+=3) {
    console.log(i)
  }
}
countByThree(5)
