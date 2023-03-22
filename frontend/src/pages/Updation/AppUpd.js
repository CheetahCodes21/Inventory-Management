// import '../Updation/Manage.css';
// bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css';
import AddProduct from '../../Component/funcComponent';

function AppUpd() {
  return (
    <body className='body2'>
    <div className="App justify-content-center">
      <header>
        <h1>Product Inventory</h1>
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
    </body>
  );
}

export default AppUpd;