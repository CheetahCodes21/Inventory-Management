import '../Updation/Manage.css';
// bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css';
// import AddInventory from '../../Component/classComponent';
import AddProduct from '../../Component/funcComponent';

function AppUpd() {
  return (
    <div className="App justify-content-center">
      <header>
        <h1>Product Inventory</h1>
        {/* <AddInventory/> */}
        <AddProduct/>
        {/* <h1>We will cover here:</h1>
        <ul>
          <li>Reactjs ref vs syntheticEvent</li>
          <li>Form in reactjs</li>
          <li>Reactjs Hook: useState()</li>
          <li>React components: functional vs class</li>
          <li>Add product name, price, quantity in inventory data</li>
          <li>React-Bootstrap use case</li>
        </ul> */}
      </header>
    </div>
  );
}

export default AppUpd;