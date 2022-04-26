import { Link } from "@reach/router";
import React, { useState } from "react";
import { auth } from "../firebase-config";
import "./NavBar.css";

export default function NavBar() {
  const [userState, setUserState] = useState(false);

  function titleChange() {
    const currentPage = document.location.pathname;

    if (currentPage.split("/")[1] === "") {
      document.title = "Tentii";
    } else {
      document.title = `Tentii | ${currentPage.split("/")[1]}`;
    }
  }

  auth.onAuthStateChanged((user) => {
    if (user) {
      setUserState(true);
    } else {
      setUserState(false);
      return;
    }
  });

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
            <ul className="currentCart"></ul>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
