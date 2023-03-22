import { Routes,Route, BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Component/Login';
import HomePage from './pages/HomePage';
import Suppliers from './pages/Updation/Suppliers';
import Chart from './pages/Chart';
import Dashboards from './pages/Dashboard';
import AppUpd from './pages/Updation/AppUpd';


function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Login/>}/>
    <Route path="/home" element={<HomePage/>}/>
    <Route path="/chart" element={<Chart/>}/>
    <Route path="/AppUpd" element={<AppUpd/>}/>
    <Route path="/Suppliers" element={<Suppliers/>}/>
    <Route path="/dashboard" element={<Dashboards/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
