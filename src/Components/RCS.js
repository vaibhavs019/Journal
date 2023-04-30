import React from 'react'
import {Link} from "react-router-dom"


export default function RCS(props) {
  return (
    <div>
      <div className="container">
          <div className={`heading-1 bg-${props.mode} text-${props.mode==="light"?"dark":"light"}`}><h1><strong>Experiment Lists</strong></h1></div>

          <ul className={`list-group list-group-flush bg-black`}>
              <Link className={`list-group-item bg-${props.mode} text-${props.mode==="light"?"dark":"light"}`} to="/rcs/exp-1a">Experiment-1A </Link>
              <Link className={`list-group-item bg-${props.mode} text-${props.mode==="light"?"dark":"light"}`} to="/rcs/exp-1b">Experiment-1B </Link>
              <Link className={`list-group-item bg-${props.mode} text-${props.mode==="light"?"dark":"light"}`} to="/rcs/exp-1c">Experiment-1C </Link>
              <Link className={`list-group-item bg-${props.mode} text-${props.mode==="light"?"dark":"light"}`} to="/rcs/exp-2a">Experiment-2A </Link>
              <Link className={`list-group-item bg-${props.mode} text-${props.mode==="light"?"dark":"light"}`} to="/rcs/exp-2b">Experiment-2B </Link>
              <Link className={`list-group-item bg-${props.mode} text-${props.mode==="light"?"dark":"light"}`} to="/rcs/exp-3a">Experiment-3A </Link>
              <Link className={`list-group-item bg-${props.mode} text-${props.mode==="light"?"dark":"light"}`} to="/rcs/exp-3b">Experiment-3B </Link>
              <Link className={`list-group-item bg-${props.mode} text-${props.mode==="light"?"dark":"light"}`} to="/rcs/exp-4a">Experiment-4A </Link>
              <Link className={`list-group-item bg-${props.mode} text-${props.mode==="light"?"dark":"light"}`} to="/rcs/exp-4b">Experiment-4B </Link>
              <Link className={`list-group-item bg-${props.mode} text-${props.mode==="light"?"dark":"light"}`} to="/rcs/exp-5a">Experiment-5A </Link>
              <Link className={`list-group-item bg-${props.mode} text-${props.mode==="light"?"dark":"light"}`} to="/rcs/exp-5b">Experiment-5B </Link>
              <Link className={`list-group-item bg-${props.mode} text-${props.mode==="light"?"dark":"light"}`} to="/rcs/exp-6a">Experiment-6A </Link>
              <Link className={`list-group-item bg-${props.mode} text-${props.mode==="light"?"dark":"light"}`} to="/rcs/exp-6b">Experiment-6B </Link>
              <Link className={`list-group-item bg-${props.mode} text-${props.mode==="light"?"dark":"light"}`} to="/rcs/exp-7">Experiment-7 </Link>
              <Link className={`list-group-item bg-${props.mode} text-${props.mode==="light"?"dark":"light"}`} to="/rcs/exp-8">Experiment-8 </Link>
              <Link className={`list-group-item bg-${props.mode} text-${props.mode==="light"?"dark":"light"}`} to="/rcs/exp-9">Experiment-9 </Link>
              <Link className={`list-group-item bg-${props.mode} text-${props.mode==="light"?"dark":"light"}`} to="/rcs/exp-10">Experiment-10 </Link>
          </ul>
      </div>
    </div>
  )
}

