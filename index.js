window.addEventListener('load', () => {
    //getCocktails();
})

fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a') 
  .then((response) => response.json())
  .then((data) => console.log(data));
