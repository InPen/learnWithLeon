//The user will enter a cocktail.
fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita")
  .then(res => res.json()) //parse response as JSON
  .then(data => {
    // console.log(data.drinks[0])
    document.querySelector('h2').src = data.drinks.strDrink
    document.querySelector()
    // strDrink = Name
    // strDrinkThumb = img
    // strInstructions = Instructions
    // document.querySelector('img').src =data.message
  })
  .catch(err => {
    console.log(`error ${err}`)
  })
