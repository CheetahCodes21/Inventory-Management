import { Form, Button, Table } from "react-bootstrap";
import { useState, createRef } from 'react';
import "./func.css"
export default function AddProduct() {
  let initialValue = [];
  const [products, setProduct] = useState(initialValue);
  const formData = createRef();

  const add = (event)=>{
    event.preventDefault();
    const newProduct = {
      product_name: formData.current.product_name.value,
      price: formData.current.price.value,
      qty: Number(formData.current.qty.value)
    }
    setProduct([...products,newProduct]);
  }

  const increQty = (event)=>{
    const indexOfArray = event.target.value;
    products[indexOfArray].qty = products[indexOfArray].qty + 1;
    setProduct([...products])
  }

  const decreQty = (event)=>{
    const indexOfArray = event.target.value;
    products[indexOfArray].qty = products[indexOfArray].qty - 1;
    setProduct([...products])
  }

  const deleteProduct = (event)=>{
    const indexOfArray = event.target.value;
    products.splice(indexOfArray, 1);
    setProduct([...products]);
  }

  return (
    <body className="body2">
    <div className="container mt-4">
      <h2>Add Product</h2>
      <Form onSubmit={add} ref={formData}>
        <Form.Group controlId="formBasicProductName">
          <Form.Label>Product Name:</Form.Label>
          <Form.Control type="text" placeholder="Enter Product Name" name="product_name"/>
        </Form.Group>

        <Form.Group controlId="formBasicPrice">
          <Form.Label>Price:</Form.Label>
          <Form.Control type="number" placeholder="Price in Euro" name="price"/>
        </Form.Group>

        <Form.Group controlId="formBasicQty">
          <Form.Label>Quantity:</Form.Label>
          <Form.Control type="number" placeholder="How many: qty" name="qty"/>
        </Form.Group>

        <Button variant="primary" type="submit">
          Add to Inventory
        </Button>
      </Form>
      <hr />
      <h2>Product Inventory</h2>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Index</th>
            <th>Product Name:</th>
            <th>Price</th>
            <th>Qty</th>
            <th>Options</th>
          </tr>
        </thead>
        <tbody>
          {products.map((item, index)=>{
            return(
              <tr key={index}>
                <td>{index}</td>
                <td>{item.product_name}</td>
                <td>{item.price}</td>
                <td>{item.qty}</td>
                <td>
                  <Button variant="success" onClick={event=>increQty(event)} value={index}>+</Button>
                  <Button variant="danger" onClick={event => decreQty(event)} value={index}>-</Button>
                  <Button variant="warning" onClick={event => deleteProduct(event)} value={index}>Delete</Button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </Table>
    </div>
    </body>
  )
}
