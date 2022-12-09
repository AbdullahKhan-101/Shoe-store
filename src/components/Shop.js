import React from "react";
import { Outlet } from "react-router-dom";

const Shop = () => {
  return (
    <div className="container">
      <h1>Shop </h1>
      <Outlet />
    </div>
  );
};

export default Shop;
