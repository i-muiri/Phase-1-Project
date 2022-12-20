let cocktails=[];

window.addEventListener('load', () => {
    getCocktails();
})

function getCocktails(){
fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a')
  .then((response) => response.json())
  .then((data) => {
    cocktails = data.drinks;
    listCocktails();
  })
  .catch((error) => {
    console.log(error);
  })
}

function listCocktails(){
    console.log({cocktails});

    if (cocktails) {
        cocktails.forEach((cocktail, id) => {
            const listItem = document.createElement("li");
            listItem.textContent =cocktail.strDrink;
            listItem.setAttribute("class", "listItem");

            list.append(listItem)  
        })
        
    }
}