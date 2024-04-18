import React, { useEffect, useState } from 'react'
import { auth } from '../firebase-config';
import { signInWithEmailAndPassword, signOut } from 'firebase/auth';

export default function Login() {

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [user,setUser] = useState('');

    const login = (e) => {
        e.preventDefault();

        signInWithEmailAndPassword(auth,email,password)
        .then((userCredential) => {
            console.log(userCredential);
            const loggedInUser = userCredential.user;
            setUser(loggedInUser);
        })
        .catch((error) => {
            console.log(error);
        })
    };

    const logout = () => {
        signOut(auth)
        .then(() => {
            setUser(null)
            console.log("Sign Out");
        })
        .catch((error) => {
            console.log(error);
        })
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            if(user){
                setUser(user);
            }
            else{
                setUser(null);
            }
        });

        return () => unsubscribe();
    },[])

  return (
    <div>
        <form onSubmit={login}>
            <h1>Login</h1>
            <input type ='email' placeholder='Enter your Email' value={email} onChange={(e)=> setEmail(e.target.value)}/>
            <input type ='password' placeholder='Enter your Password' value={password} onChange={(e)=> setPassword(e.target.value)}/>
            <button type='submit'>Login</button>
        </form>
        {user ? (
            <div>
                <p>Welcome, {user.email}</p>
                <button onClick={logout}>Log Out</button>
            </div>
        ): (
            <p>You are not registered user.</p>
        )}
        
    </div>
  )
}
