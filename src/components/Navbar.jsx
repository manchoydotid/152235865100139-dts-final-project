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
          <img src="../logo-masak.png" alt="Masakan" />
        </div>
        <div className="right">Login</div>
        <button className="right" onClick={buttonLogoutClickHandler}>
          Logout
        </button>
      </div>
    </div>
  );
}

export default Navbar;
