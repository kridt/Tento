import { Link } from "@reach/router";
import { Router } from "@reach/router";
import React from "react";
import MineOrdrer from "../components/MineOrdrer";
import MinInfo from "../components/MinInfo";
import MinStartside from "../components/MinStartside";
import NavBar from "../components/NavBar";
import "./Dashboard.css";

export default function Dashboard() {
  return (
    <>
      <NavBar />

      <h1 style={{ textAlign: "center" }}> Her er dit Dashboard </h1>
      <div></div>

      <div className="dashboardInfoBoard">
        <nav className="dashboardNav">
          <Link to="minStartside">Min Startside</Link>
          <Link to="minInfo">Min Info</Link>
          <Link to="mineOrdre">Mine ordrer</Link>
        </nav>

        <div className="dashbordRouter">
          <Router>
            <MinStartside path="/minStartside" />
            <MinInfo path="/minInfo" />
            <MineOrdrer path="/mineOrdre" />
          </Router>
        </div>
      </div>
    </>
  );
}
