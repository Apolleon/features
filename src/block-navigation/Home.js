import React from "react";
import { Link, NavLink } from "react-router-dom";

const Home = () => {
  return (
    <section className="page">
      <div className="flex__column">
        <h1>Home</h1>
        <NavLink to={"/page"}>На следующую страницу</NavLink>
      </div>
    </section>
  );
};

export default Home;
