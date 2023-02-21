import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { storeData } from "../store.js";

const Products = () => {
  const [store, setStore] = useState([]);
  useEffect(() => {
    setStore(storeData);
  }, []);
  return (
    <div
      style={{
        width: "20rem",
        display: "flex",
        gap: "5%",
      }}
    >
      {store.map((item) => (
        <div
          style={{
            textAlign: "center",
            border: "1px solid black",
            backgroundColor: "lightblue",
            width: "9rem",
          }}
        >
          <p>{item.title}</p>
          <img style={{ width: "8rem" }} src={item.imageUrl} alt="item" />
          <button>
            <Link to="/">Back to Homepage</Link>
          </button>
        </div>
      ))}
    </div>
  );
};

export default Products;
