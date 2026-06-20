import React from "react";
import Header from "./Components/Header";
import Collections from "./Pages/Collections";
import Home from "./Pages/Home";
import { Route, Routes } from "react-router-dom";
import Contact from "./Pages/Contact";
import About  from "./Pages/About";
import Cart from "./Pages/Cart";
import Product from "./Pages/Product"
import Login from "./Pages/Login";
import PlaceOrder from "./Pages/PlaceOrder";
import Order from "./Pages/Order";
import Verify from "./Pages/Verify";
const App = ()=>{
  return(
    <main className="overflow-hidden text-[#404040] bg-slate-50">
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/collection" element={<Collections/>}/>
       <Route path="/about" element={<About/>}/>
       <Route path="/contact" element={<Contact/>}/>
        <Route path="/product" element={<Product/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/placeOrder" element={<PlaceOrder/>}/>
        <Route path="/order" element={<Order/>}/>
        <Route path="/verify" element={<Verify/>}/>       
    </Routes>
    </main>
  );
};
export default App;