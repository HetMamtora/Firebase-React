import React, { useEffect, useState } from 'react'
import { db } from './firebase-config'
import { addDoc, collection, deleteDoc, doc, getDocs, updateDoc } from "firebase/firestore";

export default function App() {

    const [users, setUsers] = useState([]);
    const [name, setName] = useState("");
    const [age, setAge] = useState(0);

    const usersCollectionRef = collection(db,"crud");

    const updateAge = async(id,age) => {
        const usersDoc = doc(db,"crud",id);
        const newAge = {age:age+5};

        await updateDoc(usersDoc,newAge)

    }
    
    const createUser = async() => {
        await addDoc(usersCollectionRef,{name:name,age:age})
    }

    const deleteUser = async(id) => {
        const usersDoc = doc(db,"crud",id);
        await deleteDoc(usersDoc);
    }

    useEffect(() => {
        const getUsers = async() => {
            const data = await getDocs(usersCollectionRef)
            console.log(data);

            const docsRef = data.docs.map((doc) => ({
                ...doc.data(),id:doc.id
            }))
            console.log(docsRef);

            setUsers(docsRef);
        }

        getUsers();
    },[])

  return (
    <div>
        <input type='text' placeholder='Enter Name' value={name} onChange={(e)=> setName(e.target.value)}/>
        <input type='number'  placeholder='Enter Age' value={age} onChange={(e)=> setAge(e.target.value)}/>

        <button onClick={createUser}>Create User</button>
        {
            users.map((user) => {
                return <div>
                        <h1>Name: {user.name}</h1>
                        <h1>Age: {user.age}</h1>
                        <button onClick={() => updateAge(user.id,user.age)}>Update Age</button>
                        <button onClick={() => deleteUser(user.id)}>Delete</button>
                    </div>
            })
        }
    </div>
  )
}
