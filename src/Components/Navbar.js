
import React from 'react'
import PropTypes from 'prop-types'
import {Link} from "react-router-dom"


function Navbar(props) {
    
    

    return (
        <nav className={`navbar navbar-expand-lg bg-${props.mode}`}>
            
        <div className="container-fluid">
        <a className={`navbar-brand text-${props.mode==="light"?"dark":"light"}`} href="/">{props.title}</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
                <Link className={`nav-link active text-${props.mode==="light"?"dark":"light"}`} aria-current="page" to="/home">Home</Link>
            </li>
            <li className="nav-item dropdown">
                <a className={`nav-link dropdown-toggle text-${props.mode==="light"?"dark":"light"}`} href="/" role="button"  data-bs-toggle="dropdown"
                aria-expanded="false">
                Subjects
                </a>
                <ul className={`dropdown-menu bg-${props.mode}`}>
                <li><Link className={`dropdown-item text-${props.mode==="light"?"dark":"light"}`} to="/kdr">Kinematics and Dynamics</Link></li>
                    <li><Link className={`dropdown-item text-${props.mode==="light"?"dark":"light"}`} to="/rcs">Robotic Control System</Link></li>

                </ul>
            </li>
            <li className="nav-item">
                <Link className={`nav-link text-${props.mode==="light"?"dark":"light"}`} to="/about">{props.About}</Link>
            </li> 
            </ul>
            <form className={`d-flex text-${props.mode==="light"?"dark":"light"}`} role="search">
                <input className="form-control me-2" type="search" placeholder="Search experiment" aria-label="Search"/>
                <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
            
            <div className={`form-check form-switch text-${props.mode==="light"?"dark":"light"}`} text->
            <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
            <label  ame="form-check-label" htmlFor="flexSwitchCheckDefault">Dark Mode</label>
            </div>
            </div>
        </div>
        </nav>
    )
}
Navbar.propTypes = {
    title : PropTypes.string,
    About : PropTypes.string
}
Navbar.defaultProps = {
    title : "Set title here",
    About : `About`
}
export default Navbar
