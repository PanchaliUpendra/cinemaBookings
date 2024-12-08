import React from "react";
import './Addmovies.css';
import Navbar from "../Navbar/Navbar";

function Addmovies(){
    return(
        <>
            <Navbar/>
            <div className="homepage-con">
                {/* two blur images */}
                <div className="homepage-blur-img1"></div>
                <div className="homepage-blur-img2"></div>

                {/* add movies */}
                <h1 style={{color:'white'}}>add movies</h1>
            </div>
        </>
    );
}

export default Addmovies;