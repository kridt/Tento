import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { CartProvider } from "use-shopping-cart";

ReactDOM.render(
  <React.StrictMode>
    <CartProvider
      mode="payment"
      cartMode="client-only"
      stripe={process.env.REACT_APP_stripeSecret}
      successUrl="http://localhost:3000/success"
      cancelUrl="http://localhost:3000/cancel"
      currency="DKK"
      allowedCountries={["DK"]}
      billingAddressCollection={true}
    >
      <App />
    </CartProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
