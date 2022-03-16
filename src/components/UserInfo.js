import { navigate } from '@reach/router';
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { auth, db } from '../firebase-config';

export default function UserInfo() {
    const [userInfo, setUserInfo] = useState({})
    const [allUserData, setAllUserData] = useState({})
    const [orders, setOrders] = useState([])
    
    console.log(userInfo, allUserData, orders);
    
    useEffect(()=>{
        
        auth.onAuthStateChanged(user => {
            setAllUserData(user)
            
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

return (
    <div>
        <h1>User Info</h1>   
        
        <div>
            <h2>Antal ordre:0</h2>
        </div>


        <button onClick={(e) => createOrder(e)}>Lav ordre</button>     
    </div>
  )
}
