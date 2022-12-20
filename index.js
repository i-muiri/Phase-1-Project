
const list = document.getElementById("list");
const search = document.getElementById("search");

const drinkName = document.getElementById("name");
const category = document.getElementById("category");
const glass = document.getElementById("glass");
const image = document.getElementById("image");
const ingList = document.getElementById("ingList");
const instructions = document.getElementById("instructions");

let cocktails = [];
let selectedCocktailId = null;
let searchText = null;

window.addEventListener("load", () => {
  getCocktails();
});



search.addEventListener("input", () => {
  searchText = search.value.toLowerCase();
  getCocktails();
});

function getCocktails() {
  const url = searchText
    ? `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchText}`
    : "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a";
  fetch(url, {
    method: "GET",
  })
    .then((response) => response.json())
    .then((data) => {
      cocktails = data.drinks;
      listCocktails();
    })
    .catch((error) => {
      console.log(error);
    });
}

function listCocktails() {
  removeChilds(list);
  console.log({ cocktails });

  if (cocktails) {
    cocktails.forEach((cocktail, id) => {
      const listItem = document.createElement("li");
      listItem.textContent = cocktail.strDrink;
      listItem.setAttribute("class", "listItem");

      listItem.addEventListener("click", () => {
        selectedCocktailId = cocktail.idDrink;
        setCocktailDetails();
      });

      //add <li> element to <ul>
      list.append(listItem);
    });
  }
}

function setCocktailDetails() {
  const cocktail = cocktails.find((c) => c.idDrink == selectedCocktailId);

  drinkName.textContent = cocktail.strDrink;
  category.textContent = cocktail.strCategory;
  glass.textContent = cocktail.strGlass;
  image.setAttribute("src", cocktail.strDrinkThumb);
  instructions.textContent = cocktail.strInstructions;

  removeChilds(ingList);
  Object.keys(cocktail)
    .filter((key) => key.includes("strIngredient") && cocktail[key])
    .forEach((key) => {
      const listItem = document.createElement("li");
      listItem.textContent = cocktail[key];
      listItem.setAttribute("class", "ingr");

      //add <li> element to <ul>
      ingList.append(listItem);
    });
}

const removeChilds = (parent) => {
  while (parent.lastChild) {
    parent.removeChild(parent.lastChild);
  }
};