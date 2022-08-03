import React from "react";
import "./CardRecipe.css";

const CardMovie = ({ propsRecipe }) => {
  return (
    <div className="recipe-card">
      <figure>
        <img src={propsRecipe.strMealThumb} alt={propsRecipe.strMeal} />
      </figure>
      <div className="card">
        <p className="dish-type">Dessert</p>
        <ul className="dish-stats">
          <li></li>
          <li></li>
        </ul>
      </div>
      <h3>{propsRecipe.strMeal}</h3>
    </div>
  );
};
export default CardMovie;
