import React  from "react";
import { useHistory } from "react-router-dom";
import Layout from "./layout";



export default function Profile({user , setUser}) {

     let history = useHistory();

    const deleteUser = (id) => { // delete function
        const alterList = user.filter((per) => per.id !== id)
        setUser(alterList); // new list of users
    }

    return (
        <Layout>

            <div className="user-profile">

          

                {user.map((person, index) => (
                    <div className="card h-100" key={index}>
                        <div className="card-header" style={{ backgroundColor: '#ed7014', color: 'white', textAlign: 'center', fontWeight: 900, fontSize: '20px', letterSpacing: '1px' }}><span>{person.name}</span></div>

                        <div className="card-body" style={{ backgroundColor: 'purple', color: 'white' }}>
                            <p>Age : {person.age}</p>
                            <p>Profession : {person.profession}</p>
                            <p>City : {person.city}</p>
                        </div>

                        <div className="card-footer" style={{ backgroundColor: '#ed7014', textAlign: 'center' }}>
                            <button className="btn btn-view" onClick={() => history.push(`/view/${person.id}`)}>View</button>
                            <button className="btn btn-edit" onClick={() => history.push(`/edit/${person.id}`)}>Edit</button>
                            <button className="btn btn-delete" onClick={() => deleteUser(person.id)} >Delete</button>
                        </div>
                    </div>
                ))
                }

            </div>

        </Layout>


         

       






    );
}