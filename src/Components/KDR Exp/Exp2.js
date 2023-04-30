import React from 'react'
import SCARA from "../SCARA.png"
import Aritculated from "../Articulated.webp"
// import "./Exp2.css"

export default function Exp2(props) {
  return (
    <div>
        <div className='container my-lg-5'>
            <h1 className={`text-${props.mode==="dark"?"light":"dark"}`}><strong>Experiment-2</strong></h1>
        </div>
        <h2 className={`text-${props.mode==="dark"?"light":"dark"}`}><strong>Title: DEMONSTRATION OF ARTICULATED/SCARA ROBOT</strong> </h2>
        <div className='container my-4'/>
        <h3 className={`text-${props.mode==="dark"?"light":"dark"}`}><strong>Aim: To study different robot configurations.</strong></h3>
        <div className='container my-5'/>
        <h4 className={`my-3 text-${props.mode==="dark"?"light":"dark"}`}><strong>Introduction</strong></h4>
        <p className={`text-${props.mode==="dark"?"light":"dark"}`}><h5><strong>Industrial Robots Definition:</strong></h5>
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
              <img src={Aritculated} className={`d-block w-250 mx-auto`} height="250px" alt="..." />
        <div className={`card-body align="center"`}>
            <p className={`card-text text-${props.mode==="dark"?"light":"dark"}`} align={`center`}>Fig: Articulated co-ordinate robot</p>
        </div>
        <h5 className={`my-3 text-${props.mode==="dark"?"light":"dark"}`}>Commonly used for:</h5>
        <p className={`text-${props.mode==="dark"?"light":"dark"}`}>
            <li className={`text-${props.mode==="dark"?"light":"dark"}`}>Material handling</li>
            <li className={`text-${props.mode==="dark"?"light":"dark"}`}>Welding</li>
            <li className={`text-${props.mode==="dark"?"light":"dark"}`}>Assembly</li>
            <li className={`text-${props.mode==="dark"?"light":"dark"}`}>Machine tending</li>
        </p>
        <h5 className={`my-2 text-${props.mode==="dark"?"light":"dark"}`}>Advantages:</h5>
        <p className={`text-${props.mode==="dark"?"light":"dark"}`}>
            <li className={`text-${props.mode==="dark"?"light":"dark"}`}>All rotary joints allows for maximum flexibility.</li>
            <li className={`text-${props.mode==="dark"?"light":"dark"}`}>Any point in total volume can be reached.</li>
            <li className={`text-${props.mode==="dark"?"light":"dark"}`}>All joints can be sealed from the environment.</li>
        </p>
        <h5 className={`my-2 text-${props.mode==="dark"?"light":"dark"}`}>Disadvantages:</h5>
        <p className={`text-${props.mode==="dark"?"light":"dark"}`}>
            <li className={`text-${props.mode==="dark"?"light":"dark"}`}>Low accuracy</li>
            <li className={`text-${props.mode==="dark"?"light":"dark"}`}>Restricted volume coverage</li>
            <li className={`text-${props.mode==="dark"?"light":"dark"}`}>Extremely difficult to visualize, control, and program</li>
            <li>They are costly as compared with other robot coordinate system and require more sophisticated control system</li>
        </p>
        
        <div className={`container my-5`} />
        <h4 className={`my-3 text-${props.mode==="dark"?"light":"dark"}`}>SCARA Robot</h4>
        <p className={`text-${props.mode==="dark"?"light":"dark"}`}>The SCARA (Selective Compliance Assembly Robot Arm) is a cylindrical type, whose
            reach is obtained by using a revolute, instead of a prismatic joint. SCARA robot is
            suitable for assembly operation and is therefore extensively used in several
            industries for this purpose. A robot with at least 2 parallel rotary joints.</p>
            <img src={SCARA} className={`d-block w-350px mx-auto`}  height={`300px`} alt='...'/>
        <div className={`card-body align="center"`}>
            <p className={`card-text text-${props.mode==="dark"?"light":"dark"}`} align={`center`}>Fig: SCARA co-ordinate robot</p>
        </div>

        <h5 className={`my-3 text-${props.mode==="dark"?"light":"dark"}`}>Commonly used for:</h5>
        <p className={`text-${props.mode==="dark"?"light":"dark"}`}>
            <li className={`text-${props.mode==="dark"?"light":"dark"}`}>Tall work piece conveying and stacking machine</li>
            <li className={`text-${props.mode==="dark"?"light":"dark"}`}>Finish product inspection, touch panel type evaluation machine</li>
            <li className={`text-${props.mode==="dark"?"light":"dark"}`}>Process to process transfer of heavy workpieces</li>
            <li className={`text-${props.mode==="dark"?"light":"dark"}`}>Screw tightening work using robot vision system</li>
        </p>
        <h5 className={`my-2 text-${props.mode==="dark"?"light":"dark"}`}>Advantages:</h5>
        <p className={`text-${props.mode==="dark"?"light":"dark"}`}>
            <li className={`text-${props.mode==="dark"?"light":"dark"}`}>Cost effective</li>
            <li className={`text-${props.mode==="dark"?"light":"dark"}`}>Accurate and proficient in a variety of assembly approaches</li>
            <li className={`text-${props.mode==="dark"?"light":"dark"}`}>High speed and height axis is rigid</li>
        </p>
        <h5 className={`my-2 text-${props.mode==="dark"?"light":"dark"}`}>Disadvantages:</h5>
        <p className={`text-${props.mode==="dark"?"light":"dark"}`}>
            <li className={`text-${props.mode==="dark"?"light":"dark"}`}>Limited range of motion</li>
            <li className={`text-${props.mode==="dark"?"light":"dark"}`}>2-ways to reach point</li>
            <li className={`text-${props.mode==="dark"?"light":"dark"}`}>Difficult to program offline</li>
            <li className={`text-${props.mode==="dark"?"light":"dark"}`}>Highly complex arm</li>
        </p>
    </div>
  )
}
