import React from "react";
import './Homepage.css';
import Navbar from "../Navbar/Navbar";

import Poster1 from '../../Assets/rrrposter.jpg';
import Poster3 from '../../Assets/salaar.jpg';
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function Homepage(){
    const navigate = useNavigate();
    const isLoggedIn = useSelector((state)=>state.userdata.isLoggedIn);
    const userrole = useSelector((state)=>state.userdata.userrole);
    return(
        <>
            <Navbar/>
            <div className="homepage-con">
                {/* two blur images */}
                <div className="homepage-blur-img1"></div>
                <div className="homepage-blur-img2"></div>

                {/* admin below navbar */}
                {
                    isLoggedIn && userrole==='admin' && 
                    <ul className="homepage-admin-nav">
                        <li onClick={()=>navigate('/addmovies')}>Add Movies</li>
                        <li onClick={()=>navigate('/addtheaters')}>Add Theaters</li>
                    </ul>
                }
                

                {/* now showing */}
                <h1 className="homepage-header">Now Showing</h1>

                {/* showing all movies */}
                <div className="homepage-show-allmovies">

                    <div className="homepage-each-movie" onClick={()=>navigate('/eachmovie/replacemovieid')}>
                        <div className="homepage-each-movie-img">
                             <img src={Poster1} alt='poster'/>
                        </div>
                        <p>movie name</p>
                    </div>

                    <div className="homepage-each-movie" onClick={()=>navigate('/eachmovie/replacemovieid')}>
                        <div className="homepage-each-movie-img">
                             <img src={Poster3} alt='poster'/>
                        </div>
                        <p>movie name</p>
                    </div>

                    <div className="homepage-each-movie" onClick={()=>navigate('/eachmovie/replacemovieid')}>
                        <div className="homepage-each-movie-img">
                             <img src={Poster1} alt='poster'/>
                        </div>
                        <p>movie name</p>
                    </div>

                    <div className="homepage-each-movie" onClick={()=>navigate('/eachmovie/replacemovieid')}>
                        <div className="homepage-each-movie-img">
                             <img src={Poster3} alt='poster'/>
                        </div>
                        <p>movie name</p>
                    </div>

                    <div className="homepage-each-movie" onClick={()=>navigate('/eachmovie/replacemovieid')}>
                        <div className="homepage-each-movie-img">
                             <img src={Poster1} alt='poster'/>
                        </div>
                        <p>movie name</p>
                    </div>

                    <div className="homepage-each-movie" onClick={()=>navigate('/eachmovie/replacemovieid')}>
                        <div className="homepage-each-movie-img">
                             <img src={Poster1} alt='poster'/>
                        </div>
                        <p>movie name</p>
                    </div>

                    <div className="homepage-each-movie" onClick={()=>navigate('/eachmovie/replacemovieid')}>
                        <div className="homepage-each-movie-img">
                             <img src={Poster3} alt='poster'/>
                        </div>
                        <p>movie name</p>
                    </div>

                </div>
            </div>
        </>
    );
}

export default Homepage;