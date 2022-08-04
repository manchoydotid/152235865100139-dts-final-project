import React from "react";
import { useNavigate } from "react-router-dom";
import { auth, keluarDariAplikasi } from "../authentication/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import "./Navbar.css";

function Navbar() {
  const navigate = useNavigate();
  const [user] = useAuthState(auth);

  const buttonLogoutClickHandler = async () => {
    await keluarDariAplikasi();
    navigate("/");
  };

  return (
    <div className="navbar">
      <div className="container">
        <div className="left">
          <img src="../sunny-side-up-eggs.png" alt="recipe logo" />
          <div
            className="button"
            onClick={() => {
              navigate("/");
            }}
          >
            Home
          </div>
        </div>
        <div className="button right" onClick={buttonLogoutClickHandler}>
          {!user ? "Login" : "Logout"}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
