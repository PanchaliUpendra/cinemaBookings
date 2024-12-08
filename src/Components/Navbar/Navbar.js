import React from "react";
import './Navbar.css';
import Cinemalogo from '../../Assets/cinemalogo.png';


function Navbar(){
    return(
        <>
            <div className="navbar-con">
                <div className="navbar-logo">
                    <img src={Cinemalogo} alt='cinema logo' className="nav-cine-logo"/>
                </div>
                <div className="navbar-login">
                    <p>login</p>
                    <p>register</p>
                </div>
            </div>
        </>
    );
}

export default Navbar;