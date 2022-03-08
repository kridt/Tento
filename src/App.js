import { Router } from "@reach/router";
import { auth } from "./firebase-config";
import Dashboard from "./pages/Dashboard";
import SignUp from "./pages/SignUp";
import Startside from "./pages/Startside";


function App() {
//auth status
auth.onAuthStateChanged(user => {
  
  if(user){
    console.log("User is logged in", user)
  } else {
    console.log("No user found");
  }
})



  return (
    <Router className="App">
      <Startside path="/" />
      <SignUp path="/createAccount" />
      <Dashboard path="/dashboard" />
    </Router>
  );
}

export default App;
