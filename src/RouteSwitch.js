import { BrowserRouter, Routes, Route} from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Shop from "./components/Shop";
import Cart from "./components/Cart";
import Lenny from "./components/Lenny";
import {useState} from "react";

const RouteSwitch = () => {
  const [cartList, setCartList] = useState([]);
  return (
    <BrowserRouter>
      <Nav cartList = {cartList}/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/shop" element={<Shop cartList = {cartList} setCartList = {setCartList}/>}/>
        <Route path="/cart" element={<Cart cartList = {cartList} setCartList = {setCartList}/>}/>
        <Route path="/lenny" element={<Lenny />}/>
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;