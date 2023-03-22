import React from "react";
import { Link } from "react-router-dom";
import inventoryImage from "../images/IM.jpg";

const HomePage = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">Inventory Management</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/Dashboard">Dashboard</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/AppUpd">Shops</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/suppliers">Suppliers</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/chart">Charts</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container my-5">
        <div className="row">
          <div className="col-md-8 mx-auto text-center">
            <h1>Welcome to Inventory Management</h1>
            <img src={inventoryImage} alt="Inventory" className="img-fluid my-5" />
          </div>
        </div>
        <div className="row">
          <div className="col-md-8 mx-auto">
            <p className="lead">
              Inventory management is the process of efficiently overseeing the constant flow of units into and out of an existing inventory. This includes controlling inventory levels, ordering new products, and organizing existing inventory so that it can be accessed quickly and easily. Effective inventory management helps businesses keep their products stocked and ready for sale, while minimizing waste and reducing costs.
            </p>
            <p className="lead">
              Our inventory management system provides a centralized platform for managing your inventory. From here, you can track your inventory levels, manage your suppliers, and analyze your sales data to make informed business decisions. Use the links below to navigate to the different areas of our system:
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
