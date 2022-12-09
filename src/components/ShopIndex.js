import React from "react";
import { Link } from "react-router-dom";

const shoes = {
  "air-jordan-3": {
    name: "VALOUR BLUE",
    img: "https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/w_489,c_limit/cb4446de-1dd9-4146-be85-d886902e75ec/air-max-pre-day-mens-shoes-JBXGg7.png",
  },
  "jordan-mars-270": {
    name: "JORDAN LONDON",
    img: "https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/w_489,c_limit/b6b7d0cf-4c29-4211-8cdc-23d693d1f78d/blazer-mid-77-womens-shoes-NPWfjm.png",
  },
  "air-jordan-1": {
    name: "RACER BLUE",
    img: "https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/w_489,c_limit/eca8df7f-246b-42f0-bd3b-98c864321a2c/dunk-high-big-kids-shoes-s8TQL9.png",
  },
};

const ShopIndex = () => {
  return (
    <ul>
      {Object.entries(shoes).map(([id, { name, img }]) => (
        <li key={id} className="shoe_box">
          <Link to={id}>
            <h2>{name}</h2>
            <img src={img} alt={name} />
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default ShopIndex;
