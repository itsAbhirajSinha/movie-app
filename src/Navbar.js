import React from 'react'
import {BrowserRouter,NavLink} from 'react-router-dom'
import './App.css'


function Navbar() {
  return (
    <div className='nav'>
        <BrowserRouter>

    
    <img width='100px' height='70px'src='https://www.edigitalagency.com.au/wp-content/uploads/Netflix-logo-red-black-png.png'></img>
    
    
   <div className='link'>
    <NavLink>Home</NavLink>
    </div> 

    <div className='link'>
        <NavLink>TV Shows</NavLink>
    </div>

   <div className='link'>
    <NavLink>Categories </NavLink>
   </div> 

   <div className='link'>
    <NavLink>Login</NavLink>
   </div> 
    

</BrowserRouter>




    </div>
  )
}

export default Navbar