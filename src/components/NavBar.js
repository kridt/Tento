import { Link } from '@reach/router'
import React, { useState } from 'react'
import { auth } from '../firebase-config'
import "./NavBar.css"

export default function NavBar() {
    const [userState, setUserState] = useState(false)

    auth.onAuthStateChanged(user => {
  
        if(user){
          setUserState(true)
        } else {
            setUserState(false)
          return;
        }
      })

     function signOut() {
      auth.signOut().then(() =>{
        console.log("User has been signed out");
    })
     }


     

  return (
    <nav id='navbar'>
      <ul>
        <li>
          <Link id='logo' to={`/`}>Tento</Link>
        </li>
      </ul>
        <ul>
            <li><Link to='/'>Alle smykker</Link></li>
            <li>{userState ? 
            <>
            <Link onClick={() => signOut()} to='/'>Log Out</Link>
            <Link to="/dashboard">Dashboard</Link> 
            </>
            : 
            <Link to="/login">Log in</Link>}</li>
            
        </ul>
    </nav>
  )
}
