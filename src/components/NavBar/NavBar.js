import React from "react";
import { useAuth0 } from "../../react-auth0-spa";
import { Link } from "react-router-dom";
import "./NavBar.css";
import Jumbotron from "../Jumbotron/Jumbo";

const NavBar = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  return (
    <Jumbotron>
    <div id="wrapper">

      {!isAuthenticated && (
        <span>
        <div class="container">
        <span class="react-logo">
          <span class="nucleo"></span>
        </span>
      
        </div>     
        <h1 class ="animated bounceInRight slow">Welcome</h1>
        <h2 class ="animated bounceInLeft slow">Log in to continue</h2>
        <button class ="animated jackInTheBox slow" id="login" onClick={() =>loginWithRedirect({})}>
          Log in
        </button>
        </span>
      )}

      {isAuthenticated && <button class ="login" id="logout" onClick={() => logout()}>Log out</button>}
      {isAuthenticated && (
        <span>
        <Link to="/posts">Discussions</Link>&nbsp;
        <Link to="/profile">Profile</Link>
      </span>
    )}
    </div>
    </Jumbotron>
  );
};

export default NavBar;