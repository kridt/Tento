import { navigate } from '@reach/router';
import React, { useState } from 'react'
import { useEffect } from 'react';
import NavBar from '../components/NavBar';
import { auth, db } from '../firebase-config';

export default function Dashboard() {
    const [user, setUser] = useState({})
    const [userInfo, setUserInfo] = useState({})
    
    
    useEffect(()=>{

        
        auth.onAuthStateChanged(user => {
            
            
            if(user){
                setUser(user);
                
                db.collection("users").doc(user.uid).get().then(doc => {
                    setUserInfo(doc.data());
                }) 
                
                return;
            } else {
                navigate("/")
            }
        })
        
    }, [setUserInfo]);

    const id = JSON.stringify(user.uid)

    console.log(id); //Outputs: Tabs1

    function createOrder() {
    

        return db.collection('users').doc().set({
                

            }).then(() =>{

                navigate("/dashboard")
            })

    }


    function signOut(e) {
        e.preventDefault();

        auth.signOut().then(() =>{
            console.log("User has been signed out");
        })
    }



  return (
    <>
    <NavBar />

     <h1 style={{textAlign: "center"}}> Her er dit Dashboard </h1>
        <div style={{textAlign: "center"}}>
            <p>Din email: {user.email}</p>
            <p>Og du er {userInfo.age} år gammel</p>
            
        </div>


        <button onClick={(e)=> signOut(e)}>Log ud</button>

    </>
  )
}
