import React from "react";
import { Link } from "react-router-dom";

import inventoryImage from "../images/IM.jpg"

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to Inventory Management</h1>
      <img src={inventoryImage} alt="Inventory" style={{ width: "100%", maxWidth: "800px", margin: "20px auto" }} />
      <p>
        Inventory management is the process of efficiently overseeing the constant flow of units into and out of an existing inventory. This includes controlling inventory levels, ordering new products, and organizing existing inventory so that it can be accessed quickly and easily. Effective inventory management helps businesses keep their products stocked and ready for sale, while minimizing waste and reducing costs.
      </p>
      <p>
        Our inventory management system provides a centralized platform for managing your inventory. From here, you can track your inventory levels, manage your suppliers, and analyze your sales data to make informed business decisions. Use the links below to navigate to the different areas of our system:
      </p>
      <ul>
        <li>
          <Link to="/dashboard">Dashboard</Link> - Provides an overview of your inventory and sales data.
        </li>
        <li>
          <Link to="/shops">Shops</Link> - Manage your store locations and inventory levels for each shop.
        </li>
        <li>
          <Link to="/suppliers">Suppliers</Link> - Manage your suppliers and order new products as needed.
        </li>
      </ul>
    </div>
  );
};

export default HomePage;
