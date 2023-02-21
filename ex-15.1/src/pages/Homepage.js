import React from "react";
import { Link } from "react-router-dom";
const Homepage = () => {
  return (
    <div>
      Homepage
      <button>
        <Link to="/products">Go to Products</Link>
      </button>
    </div>
  );
};

export default Homepage;
