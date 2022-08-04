import React from "react";
import Navbar from "./components/Navbar";
import RandomRecipe from "./containers/RandomRecipe";
import ListRecipes from "./containers/ListRecipes";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <RandomRecipe RecipeUrl="https://www.themealdb.com/api/json/v1/1/random.php" />
      <ListRecipes RecipeUrl="https://www.themealdb.com/api/json/v1/1/filter.php?c=Dessert" />
      <Footer />
    </div>
  );
}

export default App;
