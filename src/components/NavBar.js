import { navigate } from '@reach/router'
import { Link } from '@reach/router'
import React, { useState } from 'react'
import { auth } from '../firebase-config'

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
    <nav>
      
        <ul>
            <li><Link to='/'>Home</Link></li>
            <li>{userState ? <Link onClick={() => signOut()} to='/'>Log Out</Link> : <Link to="/login">Log in</Link>}</li>
            {userState ? null : <li>hej</li>}
        </ul>
    </nav>
  )
}
