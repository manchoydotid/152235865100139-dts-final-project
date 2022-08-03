import React from "react";
import Navbar from "./components/Navbar";
import ListRecipes from "./containers/ListRecipes";

function App() {
  return (
    <div className="App">
      <Navbar />
      <ListRecipes RecipeUrl="https://www.themealdb.com/api/json/v1/1/filter.php?c=Dessert" />
    </div>
  );
}

export default App;
