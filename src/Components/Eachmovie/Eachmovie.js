import React, { useEffect , useState} from "react";
import './Eachmovie.css';
import Navbar from "../Navbar/Navbar";
import Movieposter from '../../Assets/salaar.jpg';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Shows } from "../../Docs/Data";


function Eachmovie(){
    const [nextDates,setNextDates] = useState([]);

    
    useEffect(()=>{
        const generateNextFiveDays = () => {
            const startDate = new Date();
            const days = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
            const months = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"];
        
            const result = [];
        
            for (let i = 0; i < 5; i++) {
                const currentDate = new Date(startDate); // Copy the start date
                currentDate.setDate(startDate.getDate() + i); // Increment by i days
        
                result.push({
                    wholedate: currentDate.toISOString().split('T')[0],
                    day: days[currentDate.getDay()],
                    date: currentDate.getDate(),
                    month: months[currentDate.getMonth()],
                    year: currentDate.getFullYear(),
                });
            }
        
            setNextDates(result);
        };
        generateNextFiveDays();//generating next five days
    },[]);
    return(
        <>
            <Navbar/>
            <div className="homepage-con">
                {/* two blur images */}
                <div className="homepage-blur-img1"></div>
                <div className="homepage-blur-img2"></div>
                {/* theaters , dates and times */}
                <div className="eachmovie-first-container">
                    <div className="eachmovie-con-first">

                        <div className="eachmovie-theaters">
                            <h1>Theaters</h1>
                            <div className="eachmovie-theaters-all">

                                <div className="eachmovie-theaters-each">
                                    <LocationOnIcon sx={{fontSize:20 , color:'white'}}/>
                                    <p>theater name</p>
                                </div>

                                <div className="eachmovie-theaters-each">
                                    <LocationOnIcon sx={{fontSize:20 , color:'white'}}/>
                                    <p>theater name</p>
                                </div>

                                <div className="eachmovie-theaters-each">
                                    <LocationOnIcon sx={{fontSize:20 , color:'white'}}/>
                                    <p>theater name</p>
                                </div>

                            </div>
                        </div>

                        <div className="eachmovie-dates">
                            <h1>Dates</h1>
                            <div className="eachmovie-dates-all">
                                {
                                    nextDates.map((item,idx)=>(
                                        <div className="eachmovie-dates-each" key={idx}>
                                            <div className="eachmovie-dates-date-month">
                                                <p>{item.date}</p>
                                                <p>{item.month}</p>
                                            </div>
                                            <p>{item.day}</p>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>

                        <div className="eachmovie-shows">
                            <h1>Time</h1>
                            <div className="eachmovie-shows-all">
                                {
                                    Shows.map((item,idx)=>(
                                        <div className="eachmovie-shows-each" key={idx}>
                                            <input type="time" value={item.start} readOnly/>
                                            <p>-</p>
                                            <input type="time" value={item.end} readOnly/>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                    <div className="eachmovie-con-second">
                        <div className="eachmovie-image">
                            <img src={Movieposter} alt='each-movie-poster'/>
                        </div>
                        <h1>movie title</h1>
                        <p>movie descrption</p>
                        <p>Duration: 180min</p>
                        <p>type:  cartoon</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Eachmovie;