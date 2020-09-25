//Create a function that grabs the number of snacks from the input
const help = document.querySelector('#help').addEventListener('click', stopSnacking)

function stopSnacking() {
  let numberOfSnacks = parseInt(document.querySelector('input').value)
//and tells you to stop that many times
  for(let i = 1;i<=numberOfSnacks;i++) {
    document.querySelector('#stops').innerText += " Staaahhpp "
  }

}
