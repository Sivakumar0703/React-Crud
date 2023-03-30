import React from "react";
import { useHistory } from "react-router-dom";


export default function Layout({children}) {

let history = useHistory();

    return (

        <div className="layout container-fluid">

            <div className="row">
                <header className="header col-12" style={{backgroundColor:'#ed7014', color:'purple',textAlign:'center',lineHeight:'3',fontWeight:'900', fontSize:'22px'}}>
                     <span>CRUD OPERATION</span>
                </header>
            </div>


            <div className="row">
                <div className="navbar col-12" >
                 <button className="btn" onClick={() => history.push('/add&user')}>ADD USER</button>
                 <button className="btn" onClick={() => history.push('/profile')}>PROFILE</button>
                 <button className="btn" onClick={() => history.push('/')}>DASHBOARD</button>

                </div>
            </div>

            <div className="row">
                <div className="main">
                    {children}
                </div>

            </div>


            <div className="row">
                <footer className="footer col-12" style={{textAlign:'center',fontWeight:'bold'}}>
                   <p style={{margin:'0'}}>Contact us</p>
                   <p style={{margin:'0'}}>mailus@gmail.com</p>
                   <p style={{margin:'0'}}>phone:9876543210</p>
                </footer>
            </div>


        </div>

    );
}