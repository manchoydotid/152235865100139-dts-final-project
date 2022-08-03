import React, { useEffect, useState } from "react";
import axios from "axios";
import "./ListRecipes.css";

const RandomRecipe = (props) => {
  const [randomRecipes, setRandomRecipes] = useState([]);

  useEffect(() => {
    const fetchDataRecipes = async () => {
      try {
        const response = await axios.get(props.RecipeUrl);
        setRandomRecipes(response.data.meals);
      } catch (err) {
        console.log("Error", err);
      }
    };
    fetchDataRecipes();
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <div className="boxy">
        <div className="list-recipe">
          {randomRecipes.map((recipe) => {
            return (
              <div>
                <h1>{recipe.strMeal}</h1>
                <img src={recipe.strMealThumb} alt={recipe.strMeal} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default RandomRecipe;
