import React from "react";
import Layout from "./layout";
import { useState } from "react";
import { useHistory } from "react-router-dom";


export default function CreateUser({user , setUser}){
console.log(user)
    const[id , setId] = useState();
    const[name , setName] = useState('');
    const[age , setAge] = useState('');
    const[profession , setProfession] = useState('');
    const[city , setCity] = useState(); 
    const history = useHistory();
   
    // creating object for new user
   
    const createNewUser = () => {
       const newUser = {
           id,                      
           name,
           age,
           profession,
           city
       }
       console.log(newUser)
       
       
       setUser([...user , newUser]);

       setId(''); 
       setName('');
       setAge('');
       setProfession('');
       setCity(''); 
       history.push('/profile'); 
    }


    return(

        <Layout>
        
        <div className="AddField ml-3 mt-3 col-12">

            <span style={{backgroundColor:'#ed7014',fontWeight:900, textAlign:'justify'}}>CREATE NEW PROFILE</span> <br />

            <input placeholder="id" value={id}  onChange={(e) => setId(e.target.value)}/> <br />  

            <input placeholder="Name" value={name}  onChange={(e) => setName(e.target.value)}/> <br /> 

            <input placeholder="Age" value={age}  onChange={(e) => setAge(e.target.value)}/> <br /> 

            <input placeholder="Profession" value={profession}  onChange={(e) => setProfession(e.target.value)}/> <br />

            <input placeholder="City" value={city}  onChange={(e) => setCity(e.target.value)}/> <br />

            <button onClick={createNewUser} style={{backgroundColor:'#ed7014',cursor:'pointer'}}>Add</button>
        </div>
        
        </Layout>
       





    );
}