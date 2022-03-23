import { Link } from "@reach/router";
import React, { useContext, useState } from "react";
import { ProductContext } from "../context/CartContext";
import { auth } from "../firebase-config";
import "./NavBar.css";

export default function NavBar() {
  /* const [userState, setUserState] = useState(false); */
  const { value, setValue } = useContext(ProductContext);

  console.log(value);
  function titleChange() {
    const currentPage = document.location.pathname;

    if (currentPage.split("/")[1] === "") {
      document.title = "Tentii";
    } else {
      document.title = `Tentii | ${currentPage.split("/")[1]}`;
    }
  }

  /* auth.onAuthStateChanged((user) => {
    if (user) {
      setUserState(true);
    } else {
      setUserState(false);
      return;
    }
  }); */

  /* function signOut() {
    auth.signOut().then(() => {
      console.log("User has been signed out");
    });
  } */

  return (
    <nav onClick={() => titleChange()} id="navbar">
      <ul>
        <li>
          <Link id="logo" to={`/`}>
            Tentii
          </Link>
        </li>
      </ul>
      {/* <ul>
        <div className="navUser">
          <i class="fa-regular fa-user"></i>

          <div className="userDropDown">
            <Link to="/dashboard">
              
            </Link>
          </div>
        </div>
        <li>
          {userState ? (
            <>
              <Link onClick={() => signOut()} to="/">
                Log Out
              </Link>
              <Link to="/dashboard">Dashboard</Link>
            </>
          ) : (
            <Link to="/login">Log in</Link>
          )}
        </li>
      </ul> */}

      <ul>
        <li className="navProfile">
          <Link className="linket" to="/">
            <i className="fa-regular fa-user"></i>
          </Link>
          <ul className="profileDropDown">
            <Link to="/dashboard">Din side</Link>
            <Link to="/">Dine ordre</Link>
            <Link to="/">Hjælp og Kontakt</Link>
          </ul>
        </li>
        <li>
          <Link to="/">
            <i className="fa-regular fa-heart"></i>
          </Link>
        </li>
        <li className="navCart">
          <Link to="/">
            <i className="fa-solid fa-bag-shopping"></i>
            <p>{value.length}</p>
            <ul className="currentCart">
              {value.map((product) => {
                console.log(product);

                return (
                  <>
                    <div className="productCartElement">
                      <Link to={"/product/" + product.id}>
                        {product.productName}{" "}
                      </Link>

                      <p>{product.price} kr</p>
                    </div>
                  </>
                );
              })}
              <br />
              <div className="productCartElement">
                <p>Total:</p>
                <p>
                  {" "}
                  {value.reduce((currentTotal, product) => {
                    return product.price + currentTotal;
                  }, 0)}{" "}
                  kr
                </p>
              </div>
            </ul>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
