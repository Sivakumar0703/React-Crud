import React, { useEffect } from "react";
import { useHistory , useParams } from "react-router-dom";
import Layout from "./layout";
import { useState } from "react";


export default function EditUser({user , setUser}) {
    let {id} = useParams();
    const history = useHistory();

    const[identity , setIdentity] = useState('');
    const[name , setName] = useState('');
    const[age , setAge] = useState('');
    const[profession , setProfession] = useState('');
    const[city , setCity] = useState(''); 

    let edit = user.filter((profile) => profile.id == id); 
    

    useEffect (() => {
       setIdentity(edit[0].id); 
       setName(edit[0].name);
       setAge(edit[0].age);
       setProfession(edit[0].profession);
       setCity(edit[0].city);
    },[])
   
   
    // Editing function
   
    const update = () => {
        let profileIndex = user.findIndex(profile => profile.id == id);

       const updated = {
           id,                     
           name,
           age,
           profession,
           city
       }
       
        user[profileIndex] = updated ;
        setUser([...user]);
        history.push('/profile');
    }
       


    return(
        <Layout>
            
        
        <div className="AddField ml-3 mt-3 col-12">

            <span style={{backgroundColor:'#ed7014',fontWeight:900, textAlign:'center'}}>EDIT PROFILE</span> <br />

            <input placeholder="id" value={identity}  onChange={(e) => setIdentity(e.target.value)}/> <br />  

            <input placeholder="Name" value={name}  onChange={(e) => setName(e.target.value)}/> <br /> 

            <input placeholder="Age" value={age}  onChange={(e) => setAge(e.target.value)}/> <br /> 

            <input placeholder="Profession" value={profession}  onChange={(e) => setProfession(e.target.value)}/> <br />

            <input placeholder="City" value={city}  onChange={(e) => setCity(e.target.value)}/> <br />

           <button style={{backgroundColor:'#ed7014',cursor:'pointer'}} onClick={update}>DONE</button>
        </div>
        
        
        </Layout>
    );
}