import React from "react";
import { useNavigate } from "react-router-dom";
import { keluarDariAplikasi } from "../authentication/firebase";
import "./Navbar.css";

function Navbar() {
  const navigate = useNavigate();

  const buttonLogoutClickHandler = async () => {
    await keluarDariAplikasi();
    navigate("/login");
  };

  return (
    <div className="navbar">
      <div className="container">
        <div className="left">
          <img
            src="https://img.icons8.com/color/48/000000/sunny-side-up-eggs.png"
            alt="recipe logo"
          />
        </div>
        <div className="button right" onClick={buttonLogoutClickHandler}>
          Logout
        </div>
      </div>
    </div>
  );
}

export default Navbar;
