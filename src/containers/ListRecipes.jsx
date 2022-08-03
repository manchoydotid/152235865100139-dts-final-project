import React, { useEffect, useState } from "react";
import axios from "axios";
import "./ListRecipes.css";
import CardRecipe from "../components/CardRecipe.jsx";
import Error from "../components/Error";

function ListRecipes(props) {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchDataRecipes = async () => {
      try {
        const response = await axios.get(props.RecipeUrl);
        setRecipes(response.data.meals);
      } catch (err) {
        console.log("Error", err);
      }
    };
    fetchDataRecipes();
  }, []);

  return (
    <div className="boxy">
      <div className="list-recipe">
        {recipes.slice(3).map((recipe) => {
          return <CardRecipe key={recipe.idMeal} propsRecipe={recipe} />;
        })}
      </div>
    </div>
  );
}

export default ListRecipes;
