import React from "react";
import NavBar from "../components/NavBar";
import UserInfo from "../components/UserInfo";

export default function Dashboard() {
  return (
    <>
      <NavBar />

      <h1 style={{ textAlign: "center" }}> Her er dit Dashboard </h1>
      <div>
        <UserInfo />
      </div>
    </>
  );
}
