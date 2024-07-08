import React from 'react'
import { Link } from 'react-router-dom'
import './header.css'
import { VscListUnordered } from "react-icons/vsc";

const Header = () => {
  return (
    <header>
        <div className="menu">
        <h2>Abdurahmon_portfolio</h2>
        <input type="checkbox" id="bar" />
            <ul className='desc'>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='about'>About</Link></li>
                <li><Link to='works'>Works</Link></li>
                <li><Link to='contact'>Contact</Link></li>
            </ul> 
            <label for="bar"><VscListUnordered /></label>
    
        </div>
    </header>
    
  )
}

export default Header