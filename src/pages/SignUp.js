import { navigate } from '@reach/router';
import React from 'react'
import { auth, db } from '../firebase-config';

export default function SignUp() {


    function signUp(e){
        e.preventDefault();
        //User info
        const email = e.target.email.value
        const password = e.target.password.value
        const age = e.target.age.value;

        //sign up the user

        auth.createUserWithEmailAndPassword(email, password).then(cred => {
            return db.collection('users').doc(cred.user.uid).set({
                age: age,
                orders: []

            }).then(() =>{

                navigate("/dashboard")
            })

        })

    }

  return (
    <>
        <h1 style={{textAlign: "center"}}>Opret en profil</h1>

        <form style={{textAlign: "center"}} onSubmit={(e)=> signUp(e)}>
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
  )
}
