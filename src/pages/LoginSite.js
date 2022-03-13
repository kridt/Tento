import { navigate } from '@reach/router'
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import NavBar from '../components/NavBar';
import { auth, db } from '../firebase-config';

export default function LoginSite() {
  const [footballData, setFootballData ] = useState([])

  auth.onAuthStateChanged(user => {
  
    if(user){
      navigate("/dashboard")
    } else {
      return;
    }
  })

  useEffect(()=>{

//get all data
db.collection('football').get()
.then(snapshot => {
  setFootballData(snapshot.docs)
  
})


}, [setFootballData])
console.log(footballData);

  function logIn(e) {
    e.preventDefault()
    const email = e.target.email.value;
    const password = e.target.password.value;

    
    auth.signInWithEmailAndPassword(email, password)
    .then((cred) => cred)

  }

  

  return (
    <>

    <NavBar />
    
    <h1 style={{textAlign: 'center'}}>Log ind på Tento</h1>

      <form onSubmit={(e) => logIn(e)}>
        <div>
            <label htmlFor="email">Email:</label>
            <input type="email" name="email" />
        </div>
        <div>
            <label htmlFor="password">password:</label>
            <input type="password" name="password" />
        </div>
        <input type="submit" name="logIn" value="Log ind" />
      </form>
      <p>Har på ikke en profil? <span style={{color: 'blue', cursor: 'pointer'}}onClick={() => navigate("/createAccount")}>opret her</span></p>
    

      {/* <div> 
        {footballData.map(doc => {
          const teams = doc.data()
          console.log(teams);

          return (
            <h3>{teams.name} plays in the {teams.league}</h3>
          )
        })}
      </div> */}

    </>
  )
}

