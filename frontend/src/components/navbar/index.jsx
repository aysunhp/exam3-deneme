import React, { useState } from 'react'
import "./navbar.scss"
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
  const [display,setDisplay]=useState(false)
  return (
 <>
<header>
<div className="containerr">
<div className="logo">
  <span>Tasty</span>
</div>
<ul>

  <li>Home</li>
  <li>Add</li>
  <li>Basket
  </li>
  <li>Wishlist </li>
  <li>Menu</li>
  <li>Specislists</li>
  <li>Reaservation</li>
  <li>Blog</li>
  <li>About</li>
  <li>Contact</li>
</ul>

<div className="mobile-bar" onClick={()=>{
  setDisplay(!display)
}}>
<MenuIcon style={{color:"#8C817D"}}/>
<p>MENU</p>
</div>
</div>
<div className="mobile-nav" style={{display: display?"block":"none"}}>
         
            <ul>
                <li>Home</li>
                <li>Menu</li>
                <li>Specialist</li>
                <li>Reservation</li>
                <li>Blog</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            
        </div>
</header>

 </>
  )
}

export default Navbar