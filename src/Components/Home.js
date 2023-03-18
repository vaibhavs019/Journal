import React from 'react'
import {Link} from "react-router-dom";
import PropTypes from 'prop-types'

export default function Home(props) {
  return (
      <>
      <div >
          <h1 className={`heading-1 text-${props.mode==="light"?"dark":"light"}`}>Symbiosis Institute of Technology</h1>
          <h2 className={`heading-2 text-${props.mode==="light"?"dark":"light"}`}>Department of Robotics and Automation</h2>


      <div className={`container my-5`}/>
      <div className={`heading-1  text-${props.mode==="light"?"dark":"light"}`}><h1><strong>Subjects</strong></h1></div>

        <ul className="list-group list-group-flush">
            <Link className={`list-group-item bg-${props.mode} text-${props.mode==="light"?"dark":"light"}`} to="/kdr">Kinematic and Dynamic for Robots <span className={`badge bg-danger rounded-pill`}>In progress</span> </Link>

            <Link className={`list-group-item bg-${props.mode} text-${props.mode==="light"?"dark":"light"}`} to="/rcs">Robotic Control System <span className={`badge bg-danger rounded-pill`}>In progress</span></Link>
        </ul>
        </div>
      </>

  )
}

Home.propTypes = {
  title : PropTypes.string,
  About : PropTypes.string
}