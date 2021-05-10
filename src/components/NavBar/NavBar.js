import React from 'react'
import { NavLink } from 'react-router-dom'


const NavOptions = () => (
    <div className="collapse navbar-collapse" id="navbarsExampleDefault">
        <ul className="navbar-nav mr-auto">
            <li className="nav-item">
                <NavLink className="nav-link" to="/busqueda">Listado persona</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" to="/altaPersonas">Alta persona</NavLink>
            </li>
        </ul>
        <form className="form-inline my-2 my-lg-0">
        </form>
    </div>
)

const NavBar = () => (
    <>
        <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
            <NavLink className="navbar-brand" style={{ marginLeft: '30px' }} to="/">TestReact</NavLink>
            <NavOptions></NavOptions>
        </nav>
    </>
)



export default NavBar
