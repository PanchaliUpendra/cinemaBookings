import React from "react";
import './Navbar.css';
import Cinemalogo from '../../Assets/cinemalogo.png';
import { useNavigate } from "react-router-dom";


function Navbar(){
    const navigate = useNavigate();
    return(
        <>
            <div className="navbar-con">
                <div className="navbar-logo">
                    <img src={Cinemalogo} alt='cinema logo' className="nav-cine-logo"/>
                </div>
                <div className="navbar-login">
                    <p onClick={()=>navigate('/login')}>login</p>
                    <p onClick={()=>navigate('/register')}>register</p>
                </div>
            </div>
        </>
    );
}

export default Navbar;