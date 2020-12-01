/* eslint-disable no-useless-constructor */
import React from "react";
import './Home.css'

const Home = (props) =>{

    const titulo = "BIENVENIDOS A NUESTRA CLINICA DENTAL";
    let foto = {photo:'./dental.jpg'}
    
   
        return(
            <div className="Home">
                <h1 className="h1">{titulo}</h1>

                <img src={foto.photo} alt="Dientes" className="foto"/>               
            </div>
        );
    
}



export default Home;
