import { navigate } from "@reach/router";
import React, { useState } from "react";
import { auth, db } from "../firebase-config";
import NavBar from "../components/NavBar";
import "./SignUp.css";

export default function SignUp() {
  const [role, setRole] = useState(false);

  console.log(role);

  function signUp(e) {
    e.preventDefault();
    //User info
    const email = e.target.email.value;
    const password = e.target.password.value;
    const age = e.target.age.value;

    //sign up the user

    auth.createUserWithEmailAndPassword(email, password).then((cred) => {
      return db
        .collection("users")
        .doc(cred.user.uid)
        .set({
          age: age,
        })
        .then(() => {
          navigate("/dashboard");
        });
    });
  }

  return (
    <>
      <NavBar />
      <h1 style={{ textAlign: "center" }}>Opret en profil</h1>
      <br />
      <br />
      <br />
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <div>
          <p>Kunde</p>
        </div>

        <div>
          <label onClick={(e) => setRole(e.target.checked)} className="switch">
            <input
              type="checkbox"
              htmlFor="input"
              name="input"
              className="input"
            />
            <span className="slider round"></span>
          </label>
        </div>
        <div>
          <p>Sælger</p>
        </div>
      </div>
      <br />
      <br />
      <br />

      {role ? (
        <>
          <h2 className="roleName">Sælger</h2>
          <form style={{ textAlign: "center" }} onSubmit={(e) => signUp(e)}>
            <div>
              <label htmlFor="email">Email:</label>
              <input type="email" name="email" />
            </div>
            <br />
            <div>
              <label htmlFor="age">Alder: </label>
              <input type="number" name="age" />
            </div>
            <br />
            <div>
              <label htmlFor="email">Adgangskode:</label>
              <input type="password" name="password" />
            </div>
            <input type="submit" />
          </form>
        </>
      ) : (
        <>
          <h2 className="roleName">Kunde</h2>
          <form style={{ textAlign: "center" }} onSubmit={(e) => signUp(e)}>
            <div>
              <label htmlFor="email">Email:</label>
              <input type="email" name="email" />
            </div>

            <br />
            <div>
              <label htmlFor="email">Adgangskode:</label>
              <input type="password" name="password" />
            </div>
            <input type="submit" />
          </form>
        </>
      )}
    </>
  );
}
