import React, { useState } from 'react'
import { auth } from '../firebase-config';
import { createUserWithEmailAndPassword } from 'firebase/auth';

export default function Create() {

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const createAccount = (e) => {
        e.preventDefault();

        createUserWithEmailAndPassword(auth,email,password)
        .then((userCredentials) => {
            console.log(userCredentials);
        })
    }

  return (
    <div>
        <form onSubmit={createAccount}>
            <h1>Create a New Account</h1>
            <input type ='email' placeholder='Enter your Email' value={email} onChange={(e)=> setEmail(e.target.value)}/>
            <input type ='password' placeholder='Enter your Password' value={password} onChange={(e)=> setPassword(e.target.value)}/>
            <button type='submit'>Create</button>
        </form>
    </div>
  )
}
