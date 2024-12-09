import React from "react";
import './Mytickets.css';
import Navbar from "../Navbar/Navbar";

function Mytickets(){
    return(
        <>
            <Navbar/>
            <div className="homepage-con">
                {/* two blur images */}
                <div className="homepage-blur-img1"></div>
                <div className="homepage-blur-img2"></div>
            </div>
        </>
    );
}

export default Mytickets;