import React from 'react'
import {Link} from "react-router-dom"


export default function RCS(props) {
  return (
    <div>
      <div className="container">
          <div className={`heading-1 bg-${props.mode} text-${props.mode==="light"?"dark":"light"}`}><h1><strong>Experiment Lists</strong></h1></div>

          <ul className={`list-group list-group-flush bg-black`}>
              <Link className={`list-group-item bg-${props.mode} text-${props.mode==="light"?"dark":"light"}`} to="/rcs/exp-1a">Experiment-1A <span className="badge bg-success">Completed</span></Link>
              <Link className={`list-group-item bg-${props.mode} text-${props.mode==="light"?"dark":"light"}`} to="/rcs/exp-1b">Experiment-1B <span className="badge bg-success">Completed</span></Link>
              <Link className={`list-group-item bg-${props.mode} text-${props.mode==="light"?"dark":"light"}`} to="/rcs/exp-1c">Experiment-1C <span className="badge bg-success">Completed</span></Link>
              <Link className={`list-group-item bg-${props.mode} text-${props.mode==="light"?"dark":"light"}`} to="/rcs/exp-2a">Experiment-2A <span className="badge bg-success">Completed</span></Link>
              <Link className={`list-group-item bg-${props.mode} text-${props.mode==="light"?"dark":"light"}`} to="/rcs/exp-2b">Experiment-2B <span className="badge bg-success">Completed</span></Link>
              <Link className={`list-group-item bg-${props.mode} text-${props.mode==="light"?"dark":"light"}`} to="/rcs/exp-2c">Experiment-2C <span className="badge bg-info">Coming soon</span></Link>
              <Link className={`list-group-item bg-${props.mode} text-${props.mode==="light"?"dark":"light"}`} to="/rcs/exp-3a">Experiment-3A <span className="badge bg-success">Completed</span></Link>
              <Link className={`list-group-item bg-${props.mode} text-${props.mode==="light"?"dark":"light"}`} to="/rcs/exp-3b">Experiment-3B <span className="badge bg-success">Completed</span></Link>
              <Link className={`list-group-item bg-${props.mode} text-${props.mode==="light"?"dark":"light"}`} to="/rcs/exp-4a">Experiment-4A <span className="badge bg-success">Completed</span></Link>
              <Link className={`list-group-item bg-${props.mode} text-${props.mode==="light"?"dark":"light"}`} to="/rcs/exp-4b">Experiment-4B <span className="badge bg-success">Completed</span></Link>
              <Link className={`list-group-item bg-${props.mode} text-${props.mode==="light"?"dark":"light"}`} to="/rcs/exp-5a">Experiment-5A <span className="badge bg-success">Completed</span></Link>
              <Link className={`list-group-item bg-${props.mode} text-${props.mode==="light"?"dark":"light"}`} to="/rcs/exp-5b">Experiment-5B <span className="badge bg-success">Completed</span></Link>
              <Link className={`list-group-item bg-${props.mode} text-${props.mode==="light"?"dark":"light"}`} to="/rcs/exp-6">Experiment-6 <span className="badge bg-success">Completed</span></Link>
              <Link className={`list-group-item bg-${props.mode} text-${props.mode==="light"?"dark":"light"}`} to="/rcs/exp-7">Experiment-7 <span className="badge bg-success">Completed</span></Link>
              <Link className={`list-group-item bg-${props.mode} text-${props.mode==="light"?"dark":"light"}`} to="/rcs/exp-8">Experiment-8 <span className="badge bg-info">Coming soon</span></Link>
              <Link className={`list-group-item bg-${props.mode} text-${props.mode==="light"?"dark":"light"}`} to="/rcs/exp-9">Experiment-9 <span className="badge bg-info">Coming soon</span></Link>
              <Link className={`list-group-item bg-${props.mode} text-${props.mode==="light"?"dark":"light"}`} to="/rcs/exp-10">Experiment-10 <span className="badge bg-info">Coming soon</span></Link>
          </ul>
      </div>
    </div>
  )
}

