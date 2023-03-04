import './App.css';
import Sidebar from './components/Sidebar';
import InventoryList from './components/InventoryList';
import AddInventoryItem from './components/AddInventory';
import React, { useState } from "react";
const inventorys = [
  {
    id: 1,
    name: "Item 1",
    description: "Description of Item 1",
    quantity: 10,
    price: 100,
  },
  {
    id: 2,
    name: "Item 2",
    description: "Description of Item 2",
    quantity: 5,
    price: 50,
  },
  {
    id: 3,
    name: "Item 3",
    description: "Description of Item 3",
    quantity: 20,
    price: 200,
  },
  {
    id: 4,
    name: "Item 4",
    description: "Description of Item 4",
    quantity: 15,
    price: 150,
  }
];

function App() {
  const [inventory, setInventory] = useState(inventorys);
  const handleAddItem = (newItem) => {
    setInventory([...inventory, { ...newItem, id: inventory.length + 1 }]);
  };

  return (
    <div className="App">
      {/* <Homepage/> */}
      <Sidebar />
      <main className='app__main'>

      <h1>Inventory Management System</h1>
      <InventoryList inventoryItems={inventory} />
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

export default App;
