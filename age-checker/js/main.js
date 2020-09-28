//Create a conditonal that checks their age
const age = 30

//--- Harder
//On click of the h1
document.querySelector('h1').addEventListener('click', ageChecker)
const para = document.querySelector('p')
function ageChecker(){
  //Take the value from the input
  let age = parseInt(document.querySelector('#danceDanceRevolution').value)
  //Place the result of the conditional in the paragraph
  //If under 16, tell them they can not drive
  if (age <= 16) {
    para.innerText ='you can not drive'
  //If under 18, tell them they can't hate from outside the club, because they can't even get in
  } else if(age <= 18) {
    para.innerText ="go hate from outside the club, because you can't even get in"
  //If under 21, tell them they can not drink
  } else if(age < 21) {
    para.innerText ='no drink for you'
  //If under 25, tell them they can not rent cars affordably
  } else if(age <= 25) {
    para.innerText ='you can not rent cars affordably'
  //If under 30, tell them they can not rent fancy cars affordably
  }else if(age <= 30) {
    para.innerText ='you can not rent fancy cars affordably'
  //If over 30, tell them there is nothing left to look forward too
  } else if(age >= 30) {
    para.innerText ='there is nothing left to look forward to'
  } else {
    para.innerText ="what's your age?"
  }
}