import React from "react";
import Layout from "./layout";

export default function Dashboard() {

    return (

        <Layout>
          
            

            <div className="img-con">

            <h1 style={{ color: '#f8f8f8' }}>Dashboard</h1>
            <p style={{ color: '#f8f8f8' }}>CREATE | READ | UPDATE | DELETE</p>

                <div className="dashboard p-3 ">



                    <img src="https://codebots.com/crud/CRUD_Operations_Banner.png" alt="crud" className="image"></img>
                </div>


            </div>
            
        </Layout>

    );
}