import React from "react";
import { useNavigate } from "react-router-dom";
import "./CardRecipe.css";

const CardMovie = ({ propsRecipe }) => {
  const navigate = useNavigate();
  return (
    <div
      className="recipe-card"
      onClick={() => {
        navigate(`/recipes/${propsRecipe.idMeal}`);
      }}
    >
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
