import { Router } from "@reach/router";
import Dashboard from "./pages/Dashboard";
import LoginSite from "./pages/LoginSite";
import SignUp from "./pages/SignUp";
import Startside from "./pages/Startside";
import "./app.css";
import ProductSide from "./pages/ProductSide";

function App() {
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
    <Router className="App">
      <Startside path="/" />
      <SignUp path="/createAccount" />
      <Dashboard path="/dashboard/*" />
      <LoginSite path="/login" />
      <ProductSide path="/product/:id" />
    </Router>
  );
}

export default App;
