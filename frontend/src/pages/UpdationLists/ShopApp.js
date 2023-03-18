import '../UpdationLists/Manage.css';
import Sidebar from '../Sidebar/Sidebar';
import InventoryList from './Suppliers.js';
import AddInventoryItem from './Shops.js';
import React, { useState } from "react";

const inventorys = [
  {
    id: 1,
    name: "Item 1",
    description: "Description of Item 1",
    quantity: 1,
    price: 100,
  },
  {
    id: 2,
    name: "Item 2",
    description: "Description of Item 2",
    quantity: 1,
    price: 10,
  },
  {
    id: 3,
    name: "Item 3",
    description: "Description of Item 3",
    quantity: 1,
    price: 25,
  },
  {
    id: 4,
    name: "Item 4",
    description: "Description of Item 4",
    quantity: 1,
    price: 15,
  }
];

function ShopApp() {
  const [inventory, setInventory] = useState(inventorys);
  
  const handleAddItem = (newItem) => {
    setInventory([...inventory, { ...newItem, id: inventory.length + 1 }]);
  };

  const handleDeleteItem = (itemId) => {
    setInventory(inventory.filter(item => item.id !== itemId));
  };

  return (
    <div className="App">
      <Sidebar />
      <main className='app__main'>

        <h1>Inventory Management System</h1>
        <InventoryList inventoryItems={inventory} onDelete={handleDeleteItem} />
        <p>Items Available: {inventory.length}</p>
        <AddInventoryItem
          onSubmit={(inventoryItem) => {
            console.log(inventoryItem);
            handleAddItem(inventoryItem);
          }}
        />
      </main>
    </div>
  );
}

export default ShopApp;
