const drinkName = document.getElementById("name")
const category = document.getElementById("category")
const glass = document.getElementById("glass")
const image = document.getElementById("image")
const instructions = document.getElementById("instructions")


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
            
            
            //add <li> element to <ul>
            list.append(listItem)  
        })
        
    }
}

function setCocktailDetails(){
    //checking each item id is equal selected cocktailID
    const cocktail = cocktails.find((c) => c.idDrink == selectedCocktailId); 

    drinkName.textContent = cocktail.strDrink;
    category.textContent =cocktail.strCategory;
    glass.textContent = cocktail.strGlass;
    image.setAttribute("src", cocktail.strDrinkThumb);
    instructions.textContent = cocktail.strInstructions;


}