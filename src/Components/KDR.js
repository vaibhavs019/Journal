import React from 'react'
import {Link} from "react-router-dom";
import "./KDR.css"


export default function KDR(props) {
  return (
    <div>
       <div className="container">

       <div className={`heading-1 bg-${props.mode} text-${props.mode==="light"?"dark":"light"}`}><h1><strong>Experiment Lists</strong></h1></div>

        <ul className="list-group list-group-flush bg-black">
            <Link className={`list-group-item bg-${props.mode} text-${props.mode==="dark"?"light":"dark"}`} to="/kdr/exp-1">Experiment-1 </Link>

            <Link className={`list-group-item bg-${props.mode} text-${props.mode==="light"?"dark":"light"}`} to="/kdr/exp-2">Experiment-2 </Link>

            <Link className={`list-group-item bg-${props.mode} text-${props.mode==="light"?"dark":"light"}`} to="/kdr/exp-3a">Experiment-3A </Link>

            <Link className={`list-group-item bg-${props.mode} text-${props.mode==="light"?"dark":"light"}`} to="/kdr/exp-3b">Experiment-3B</Link>

            <Link className={`list-group-item bg-${props.mode} text-${props.mode==="light"?"dark":"light"}`} to="/kdr/exp-4a">Experiment-4A </Link>

            <Link className={`list-group-item bg-${props.mode} text-${props.mode==="light"?"dark":"light"}`} to="/kdr/exp-4b">Experiment-4B </Link>

            <Link className={`list-group-item bg-${props.mode} text-${props.mode==="light"?"dark":"light"}`} to="/kdr/exp-5">Experiment-5 </Link>

            <Link className={`list-group-item bg-${props.mode} text-${props.mode==="light"?"dark":"light"}`} to="/kdr/exp-6">Experiment-6 </Link>

            <Link className={`list-group-item bg-${props.mode} text-${props.mode==="light"?"dark":"light"}`} to="/kdr/exp-7">Experiment-7 </Link>

            <Link className={`list-group-item bg-${props.mode} text-${props.mode==="light"?"dark":"light"}`} to="/kdr/exp-8">Experiment-8 </Link>

            <Link className={`list-group-item bg-${props.mode} text-${props.mode==="light"?"dark":"light"}`} to="/kdr/exp-9">Experiment-9 </Link>

        </ul>
        </div>
    </div>
  )
}