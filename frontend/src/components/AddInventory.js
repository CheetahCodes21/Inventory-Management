import React, { useState } from "react";
function AddInventoryItem(props) {
  const { onSubmit } = props;
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [price, setPrice] = useState(0);

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({ name, description, quantity, price });
    setName("");
    setDescription("");
    setQuantity(0);
    setPrice(0);
  };

  return (
    <div className="add-inventory-item">
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </label>
        <label>
          Description:
          <textarea
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          />
        </label>
        <label>
          Quantity:
          <input
            type="number"
            value={quantity}
            onChange={(event) => setQuantity(event.target.value)}
          />
        </label>
        <label>
          Price:
          <input
            type="number"
            value={price}
            onChange={(event) => setPrice(event.target.value)}
          />
        </label>
        <button type="submit">Add Item</button>
      </form>
    </div>
  );
}

export default AddInventoryItem;
