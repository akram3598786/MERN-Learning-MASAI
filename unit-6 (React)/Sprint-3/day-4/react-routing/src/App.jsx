import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar";
import Home from './components/Home';
import Products from './components/Products';
import ProductDetails from "./components/ProductDetails";
import {Routes, Route} from "react-router-dom";
import NotFound from './components/NotFound';


function App() {
  return (
    <div className="App">
       <Navbar/>
        <Routes>   
         <Route path="/" element={<Home/>} ></Route> 
         <Route path="/Products" element={<Products/>} ></Route> 
         <Route path="/Products/:prodId" element={<ProductDetails/>}></Route>
         <Route path='*' element={<NotFound/>}></Route>
        </Routes>
    </div>
  );
}

export default App;

