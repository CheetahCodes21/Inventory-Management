import React, { useState } from "react";
import { v4 as uuid } from "uuid"; // A library to generate unique ids
import "./suppliers.css"
const Suppliers = () => {
  const [products, setProducts] = useState([]); // A state to store the products

  const [newProduct, setNewProduct] = useState({
    id: "",
    name: "",
    price: "",
    quantity: "",
  }); // A state to store the new product being added

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewProduct({ ...newProduct, [name]: value });
  }; // A function to update the new product state when the user types in the input fields

  const handleAddProduct = (event) => {
    event.preventDefault();
    const { name, price, quantity } = newProduct;
    if (name && price && quantity) {
      const product = {
        id: uuid(),
        name,
        price: Number(price),
        quantity: Number(quantity),
      };
      setProducts([...products, product]);
      setNewProduct({
        id: "",
        name: "",
        price: "",
        quantity: "",
      });
    }
  }; // A function to add the new product to the products state when the user clicks the "Add Product" button

  return (
    <body className="body1">
    <div className="container my-5">
      <h1 className="text-center">Supplier Inventory</h1>
      <div className="row">
        <div className="col-md-8 mx-auto">
          <form onSubmit={handleAddProduct}>
            <div className="form-group">
              <label htmlFor="name">Product Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                value={newProduct.name}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="price">Product Price</label>
              <input
                type="number"
                className="form-control"
                id="price"
                name="price"
                value={newProduct.price}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="quantity">Product Quantity</label>
              <input
                type="number"
                className="form-control"
                id="quantity"
                name="quantity"
                value={newProduct.quantity}
                onChange={handleInputChange}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Add Product
            </button>
          </form>
          <table className="table my-5" style={{ border: "2px solid white" }}>
            <thead className="thead-dark">
              <tr>
                <th style={{ color: "white" }}>ID</th>
                <th style={{ color: "white" }}>Name</th>
                <th style={{ color: "white" }}>Price</th>
                <th style={{ color: "white" }}>Quantity</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id}>
                  <td style={{color:"white"}}>{product.id}</td>
                  <td style={{color:"white"}}>{product.name}</td>
                  <td style={{color:"white"}}>${product.price}</td>
                  <td style={{color:"white"}}>{product.quantity}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
    </body>
  );
};

export default Suppliers;
