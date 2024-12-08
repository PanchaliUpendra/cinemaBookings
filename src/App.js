import React from 'react';
import './App.css';
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import Homepage from './Components/Homepage/Homepage';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import Eachmovie from './Components/Eachmovie/Eachmovie';
import Bookingdetails from './Components/Bookingdetails/Bookingdetails';
import Addmovies from './Components/Addmovies/Addmovies';
import AddTheaters from './Components/Addtheaters/AddTheaters';
import Ticketadmhistory from './Components/Ticketadmhistory/Ticketadmhistory';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/eachmovie/:movieid' element={<Eachmovie/>}/>
        <Route path='/bookingdetails' element={<Bookingdetails/>}/>
        <Route path='/addmovies' element={<Addmovies/>}/>
        <Route path='/addtheaters' element={<AddTheaters/>}/>
        <Route path='/ticketadmhistory' element={<Ticketadmhistory/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
