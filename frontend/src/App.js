import { Routes,Route, BrowserRouter } from 'react-router-dom';
// import Login from './Component/Login';
// import HomePage from './pages/HomePage';
// import Chart from './pages/Chart';
// import Dashboards from './pages/Dashboard';
import ShopApp from './pages/UpdationLists/ShopApp';

function App() {
  return (
    <BrowserRouter>
    <Routes>
    {/* <Route path="/" element={<Login/>}> */}
    {/* <Route path="/home" element={<HomePage/>}/> */}
    {/* <Route path="/chart" element={<Chart/>}/> */}
    <Route path="/shopApp" element={<ShopApp/>}/>
    {/* </Route> */}
    </Routes>
    </BrowserRouter>
  );
}

export default App;
