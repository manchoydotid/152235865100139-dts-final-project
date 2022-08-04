import React, { useEffect, useState } from "react";
import axios from "axios";
import "./ListRecipes.css";
import CardRecipe from "../components/CardRecipe.jsx";

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
    // eslint-disable-next-line
  }, []);

  return (
    <div className="boxy">
      <div className="list-recipe">
        {recipes.slice(6).map((recipe) => {
          return <CardRecipe key={recipe.idMeal} propsRecipe={recipe} />;
        })}
      </div>
    </div>
  );
}

export default ListRecipes;
