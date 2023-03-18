import React from 'react'
import SCARA from "../SCARA.png"
import Aritculated from "../Articulated.webp"

export default function Exp2(props) {
  return (
    <div>
        <h1 className={`text-${props.mode==="dark"?"light":"dark"}`}><strong>Experiment-2</strong></h1>
        <h2 className={`text-${props.mode==="dark"?"light":"dark"}`}><strong>Title: DEMONSTRATION OF ARTICULATED/SCARA ROBOT</strong> </h2>
        <h3 className={`text-${props.mode==="dark"?"light":"dark"}`}><strong>Aim: To study different robot configurations.</strong></h3>
        <div className='container my-5'/>
        <h4 className={`my-3 text-${props.mode==="dark"?"light":"dark"}`}><strong>Introduction</strong></h4>
        <p className={`text-${props.mode==="dark"?"light":"dark"}`}><h5><strong>Industrial Robots DeFinition:</strong></h5>
              A robot is a programmable arm simulator.
              “A robot is a re-programmable, multifunction manipulator designed to move material,
              parts, tools, or special devices through variable programmed motions for the
              performance of a variety of tasks”</p>
        
        <h4 className={`my- 3 text-${props.mode==="dark"?"light":"dark"}`}>Articulated Robot</h4>
        <p className={`text-${props.mode==="dark"?"light":"dark"}`}>Those with the designation TRR are also called articulated robots. An articulated
              robot more closely resembles the human arm.
              The jointed-arm is a combination of cylindrical and articulated configurations. The
              arm of the robot is connected to the base with a twisting joint. The links in the arm
              are connected by rotary joints. Many commercially available robots have this
              configuration.
              A robot with at least 3 rotary joints.</p>
              <img src={Aritculated} className={`d-block w-100`} alt="..." />
        <h5 className={`my-2 text-${props.mode==="dark"?"light":"dark"}`}>Commonly used or</h5>
        <p className={`text-${props.mode==="dark"?"light":"dark"}`}>
            <li className={`text-${props.mode==="dark"?"light":"dark"}`}></li>
            <li className={`text-${props.mode==="dark"?"light":"dark"}`}></li>
            <li className={`text-${props.mode==="dark"?"light":"dark"}`}></li>
            <li className={`text-${props.mode==="dark"?"light":"dark"}`}></li>
        </p>
        <h5 className={`my-2 text-${props.mode==="dark"?"light":"dark"}`}>Advantages:</h5>
        <p className={`text-${props.mode==="dark"?"light":"dark"}`}>
            <li className={`text-${props.mode==="dark"?"light":"dark"}`}></li>
            <li className={`text-${props.mode==="dark"?"light":"dark"}`}></li>
            <li className={`text-${props.mode==="dark"?"light":"dark"}`}></li>
        </p>
        <h5 className={`my-2 text-${props.mode==="dark"?"light":"dark"}`}>Disadvantages:</h5>
        <p className={`text-${props.mode==="dark"?"light":"dark"}`}>
            <li className={`text-${props.mode==="dark"?"light":"dark"}`}></li>
            <li className={`text-${props.mode==="dark"?"light":"dark"}`}></li>
            <li className={`text-${props.mode==="dark"?"light":"dark"}`}></li>
        </p>
        

        <h4 className={`my-3 text-${props.mode==="dark"?"light":"dark"}`}>SCARA Robot</h4>
        <p className={`text-${props.mode==="dark"?"light":"dark"}`}>The SCARA (Selective Compliance Assembly Robot Arm) is a cylindrical type, whose
            reach is obtained by using a revolute, instead of a prismatic joint. SCARA robot is
            suitable for assembly operation and is therefore extensively used in several
            industries for this purpose. A robot with at least 2 parallel rotary joints.</p>
            <img src={SCARA} className={`d-block w-100`} alt='...'/>
        <h5 className={`my-3 text-${props.mode==="dark"?"light":"dark"}`}>Commonly used or:</h5>
        <p className={`text-${props.mode==="dark"?"light":"dark"}`}>
            <li className={`text-${props.mode==="dark"?"light":"dark"}`}></li>
            <li className={`text-${props.mode==="dark"?"light":"dark"}`}></li>
            <li className={`text-${props.mode==="dark"?"light":"dark"}`}></li>
        </p>
        <h5 className={`my-3 text-${props.mode==="dark"?"light":"dark"}`}>Advantages</h5>
        <p className={`text-${props.mode==="dark"?"light":"dark"}`}>
            <li className={`text-${props.mode==="dark"?"light":"dark"}`}></li>
            <li className={`text-${props.mode==="dark"?"light":"dark"}`}></li>
            <li className={`text-${props.mode==="dark"?"light":"dark"}`}></li>
        </p>
        <h5 className={`my-3 text-${props.mode==="dark"?"light":"dark"}`}>Disadvanatages</h5>
        <p className={`text-${props.mode==="dark"?"light":"dark"}`}>
            <li className={`text-${props.mode==="dark"?"light":"dark"}`}></li>
            <li className={`text-${props.mode==="dark"?"light":"dark"}`}></li>
            <li className={`text-${props.mode==="dark"?"light":"dark"}`}></li>
        </p>
    </div>
  )
}
