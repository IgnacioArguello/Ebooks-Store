import React from 'react'
import CartWidget from '../CartWidget'
import {NavLink} from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-dark">
            <div className="container-fluid">
                <NavLink to='/'>
                    <img src='./logo.png' width='50' alt=''/>
                </NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item">
                            <NavLink className="nav-link text-white" to='/'>Inicio</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link text-white" to='/categoria/medieval'>Medieval</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link text-white" to='/categoria/fantasia'>Fantasia</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link text-white" to='/cart'>
                                <CartWidget/> 
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Navbar
