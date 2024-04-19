import React, { useEffect, useState } from 'react'
import { db } from './firebase-config'
import { collection, getDocs } from "firebase/firestore";

export default function App() {

    const [users, setUsers] = useState([]);
    const usersCollectionRef = collection(db,"crud");

    useEffect(() => {
        const getUsers = async() => {
            const data = await getDocs(usersCollectionRef)
            console.log(data);

            const docsRef = data.docs.map((doc) => ({
                ...doc.data(),id:doc.id
            }))
            console.log(docsRef);
        }

        getUsers();
    },[])

  return (
    <div>

    </div>
  )
}
