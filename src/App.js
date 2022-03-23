import { Router } from "@reach/router";
import Dashboard from "./pages/Dashboard";
import LoginSite from "./pages/LoginSite";
import SignUp from "./pages/SignUp";
import Startside from "./pages/Startside";
import "./app.css";
import ProductSide from "./pages/ProductSide";
import { ProductContext } from "./context/CartContext";
import { useState } from "react";
import ShoppingCart from "./pages/ShoppingCart";

function App() {
  const [value, setValue] = useState([]);

  //auth status

  /* 
auth.onAuthStateChanged(user => {
  
   if(user){
    console.log("User is logged in", user)
  } else {
    console.log("No user found");
  } 
})
 */

  return (
    <ProductContext.Provider value={{ value, setValue }}>
      <Router className="App">
        <Startside path="/" />
        <SignUp path="/createAccount" />
        <Dashboard path="/dashboard/*" />
        <LoginSite path="/login" />
        <ProductSide path="/product/:id" />
        <ShoppingCart path="/shoppingCart" />
      </Router>
    </ProductContext.Provider>
  );
}

export default App;
