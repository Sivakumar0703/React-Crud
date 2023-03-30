import React from "react";
import { useParams } from "react-router-dom";
import Layout from "./layout";


export default function ViewUser({user}) {

    let {id} = useParams();
    let person = user[id-1];

    return (

        <Layout >

            
            <div className="card"  >
                <div className="card-header" style={{ backgroundColor: '#ed7014', color: 'white', textAlign: 'center', fontWeight: 900, fontSize: '20px', letterSpacing: '1px' }}><span>{person.name}</span></div>

                <div className="card-body" style={{ backgroundColor: 'purple', color: 'white' }}>
                    <p>Age : {person.age}</p>
                    <p>Profession : {person.profession}</p>
                    <p>City : {person.city}</p>
                </div>
                </div>
          

            

        </Layout>

    );
} 