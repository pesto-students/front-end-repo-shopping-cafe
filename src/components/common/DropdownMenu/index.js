import React from 'react'
import { Link } from "react-router-dom";
import ButtonComponent from '../ButtonComponent'
import './style.css'

export default function DropdownMenu() {
  return (
    <div className="dropdown profile-dropdown">
                    <h3>Welcome</h3>
                    <p>To access account and manage orders</p>
                    <span><Link to="/login" className="nav-link"><ButtonComponent text="Login" /></Link></span>
                    <span><Link to="/signup" className="nav-link"><ButtonComponent text="Sign Up" /></Link></span>
                    
                  </div>
  )
}
