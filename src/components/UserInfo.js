import { navigate } from '@reach/router';
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { auth, db } from '../firebase-config';

export default function UserInfo() {
    const [userInfo, setUserInfo] = useState({})
    const [allUserData, setAllUserData] = useState({})
    const [orders, setOrders] = useState([])
    const [emailVerified, setEmailVerified] = useState(true)
    


    console.log(allUserData);
    
    useEffect(()=>{
        
        auth.onAuthStateChanged(user => {
            setAllUserData(user)
            
            if(user.emailVerified === true) {
                setEmailVerified(true)
            } else{
                setEmailVerified(false)
                return
            }

            if(user){
                db.collection("users").doc(user.uid).get().then(doc => {
                    setUserInfo(doc.data());
                }) 
                
                return;
            } else {
                navigate("/")
            }
        })
        
    }, [setUserInfo, setAllUserData]);
    
    
    
    useEffect(()=>{
        
    
         /* db.collection(`users/${allUserData.uid}/orders`).add({

         }) */
        
        
        
    }, [])
    
    function createOrder(e) {
        
        const newOrder = {
            orderNum: 12345678,
            orderData: [321, 123, 231, 132]
        }
        
        db.collection(`users`).doc().add({
            orders:[newOrder]
        }).then(users => setOrders(users))
        
        
        /* db.collection(`/users/${allUserData.uid}/orders`).doc("orders").set({
            orders: newOrder
        }).then((order) => {
            console.log(order);
        }) */
        

    }

    function VerifyUser() {
        auth.sendSignInLinkToEmail() 
        console.log("Clicked the verify buton");       
    }


return (
    <div>
            
        <h1>User Info</h1>   
        

        {emailVerified ? null : <div>
            
            <h1>Not verified</h1>
            <button onClick={()=> VerifyUser()}>Verify your profile</button>

            </div>}
          

        <div>
            <h2>Antal ordre:0</h2>
        </div>


        <button onClick={(e) => createOrder(e)}>Lav ordre</button>     
    </div>
  )
}
