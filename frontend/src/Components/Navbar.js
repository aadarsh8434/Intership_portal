import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {
  return (
    <div className="navbar">
      <ul>
        <li>
          <Link to="/" className={({ isActive }) => isActive ? 'active' : ''}>Home</Link>
        </li>
        <li>
          <Link to="/dashboard" className={({ isActive }) => isActive ? 'active' : ''}>Dashboard</Link>
        </li>
      </ul>
    </div>
  )
}
