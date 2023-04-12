import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header>
      <span>Logo</span>
      <h1>Titulo</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/game">Game</Link>
        <Link to="/stats">Stats</Link>
      </nav>
    </header>
  );
};
