import React from 'react'
// import IMG_1583 from "../IMG_1583.MOV"
import Cartesian from "../Cartesian.gif"
import Cylindrical from "../Cylindrical.png"
import Polar from "../Polar.png"

export default function Exp1(props) {
  return (
    <div>
        <h1 className={`text-${props.mode==="dark"?"light":"dark"}`}><strong>Experiment-1</strong></h1>
        <h2 className={`text-${props.mode==="dark"?"light":"dark"}`}><strong>Title: DEMONSTRATION OF CARTESIAN/CYLINDRICAL/SPHERICAL ROBOT</strong> </h2>
        <h3 className={`text-${props.mode==="dark"?"light":"dark"}`}><strong>Aim: To study basic robot co-ordinate configurations.</strong></h3>
        <div className='container my-5'/>
        <h4 className={` text-${props.mode==="dark"?"light":"dark"}`}><strong>Introduction</strong></h4>
        <p className={`my-0 text-${props.mode==="dark"?"light":"dark"}`}><h5><strong>Industrial Robots DeFinition:</strong></h5>
              A robot is a programmable arm simulator.
              “A robot is a re-programmable, multifunction manipulator designed to move material,
              parts, tools, or special devices through variable programmed motions for the
              performance of a variety of tasks”</p>

        <h4 className={`my-3 text-${props.mode==="dark"?"light":"dark"}`}>Cartesian Co-Ordinate Robot</h4>
        <p className={`text-${props.mode==="dark"?"light":"dark"}`}>The Cartesian co-ordinate robot is one that consists of a column and an arm. It is
              sometimes called an x-y-z robot, indicating the axes of motion. The x-axis is lateral
              motion, the y-axis is longitudinal motion, and the z-axis is vertical motion. Thus, the

              arm can move up and down on the z-axis; the arm can slide along its base on the x-
              axis; and then it can telescope to move to and from the work area on the y-axis. The

              Cartesian co-ordinate robot was developed mainly for arc welding, but it is also suited
              for many other assembly operations.
              Robots with Cartesian configurations consists of links connected by linear joints (L).
              Gantry robots are Cartesian robots (LLL). A robot with 3 prismatic joints – the axes
              consistent with a Cartesian coordinate system.</p>
              <img src={Cartesian} className={`d-block w-250 mx-auto`} width="250px" height="250px" alt="..." />
        <h5 className={`my-3 text-${props.mode==="dark"?"light":"dark"}`}>Commonly used for</h5>
        <p className={`text-${props.mode==="dark"?"light":"dark"}`}>
            <li className={`text-${props.mode==="dark"?"light":"dark"}`}>Pick and place work</li>
            <li className={`text-${props.mode==="dark"?"light":"dark"}`}>Assembly operations</li>
            <li className={`text-${props.mode==="dark"?"light":"dark"}`}>Handling machine tools</li>
            <li className={`text-${props.mode==="dark"?"light":"dark"}`}>Arc welding</li>
        </p>
        <h5 className={`my-3 text-${props.mode==="dark"?"light":"dark"}`}>Advantages:</h5>
        <p className={`text-${props.mode==="dark"?"light":"dark"}`}>
            <li className={`text-${props.mode==="dark"?"light":"dark"}`}>Ability to do straight line insertions into furnaces</li>
            <li className={`text-${props.mode==="dark"?"light":"dark"}`}>Easy to computation and programmming</li>
            <li className={`text-${props.mode==="dark"?"light":"dark"}`}>Most rigid structure for given length</li>
        </p>
        <h5 className={`my-3 text-${props.mode==="dark"?"light":"dark"}`}>Disadvantages:</h5>
        <p className={`text-${props.mode==="dark"?"light":"dark"}`}>
            <li className={`text-${props.mode==="dark"?"light":"dark"}`}>Requires large operating volume</li>
            <li className={`text-${props.mode==="dark"?"light":"dark"}`}>Exposed guiding surfaces require covering in corrosive or dusty
                environments</li>
            <li className={`text-${props.mode==="dark"?"light":"dark"}`}>Can only reach front of itself</li>
            <li className={`text-${props.mode==="dark"?"light":"dark"}`}>Axes hard to seal</li>
        </p>
        
        <div className={`container my-5`} />
        <h4 className={`my-3 text-${props.mode==="dark"?"light":"dark"}`}>Cylindrical Co-Ordinate Robot</h4>
        <p className={`text-${props.mode==="dark"?"light":"dark"}`}>The cylindrical co-ordinate robot is a variation of the Cartesian robot. This robot
            consists of a base and a column, but the column is able to rotate. It also carries an
            extending arm that can move up and down on the column to provide more freedom of
            movement. The cylindrical co-ordinate robot is designed for handling machine tools
            and assembly.

            Robots with cylindrical configuration have one rotary ( R) joint at the base and linear
            (L) joints succeeded to connect the links. A robot with 2 prismatic joints and a rotary
            joint – the axes consistent with a cylindrical coordinate system</p>
            <img src={Cylindrical} className={`d-block w-250 mx-auto`} height="250px"  alt="..." />
        <h5 className={`my-3 text-${props.mode==="dark"?"light":"dark"}`}>Commonly used for:</h5>
        <p className={`text-${props.mode==="dark"?"light":"dark"}`}>
            <li className={`text-${props.mode==="dark"?"light":"dark"}`}>Robotic coating and finishing applications</li>
            <li className={`text-${props.mode==="dark"?"light":"dark"}`}>Automated assembly operations</li>
            <li className={`text-${props.mode==="dark"?"light":"dark"}`}>Material handling applications including package assembly and palletizing</li>
            <li className={`text-${props.mode==="dark"?"light":"dark"}`}>Spot welding automation</li>
            <li className={`text-${props.mode==="dark"?"light":"dark"}`}>Robotic coating and finishing applications</li>
        </p>
        <h5 className={`my-3 text-${props.mode==="dark"?"light":"dark"}`}>Advantages:</h5>
        <p className={`text-${props.mode==="dark"?"light":"dark"}`}>
            <li className={`text-${props.mode==="dark"?"light":"dark"}`}>Can reach all around itself</li>
            <li className={`text-${props.mode==="dark"?"light":"dark"}`}>Rotational axis easy to seal</li>
            <li className={`text-${props.mode==="dark"?"light":"dark"}`}>Relatively easy programming</li>
            <li className={`text-${props.mode==="dark"?"light":"dark"}`}>Rigid enough to handle heavy loads through large working space</li>
            <li className={`text-${props.mode==="dark"?"light":"dark"}`}>Good access into cavities and machine openings</li>
        </p>
        <h5 className={`my-3 text-${props.mode==="dark"?"light":"dark"}`}>Disadvantages:</h5>
        <p className={`text-${props.mode==="dark"?"light":"dark"}`}>
            <li className={`text-${props.mode==="dark"?"light":"dark"}`}>Their overall mechanical rigidity is reduced because robots with a rotary axis must overcome the inertia of the object when rotating</li>
            <li className={`text-${props.mode==="dark"?"light":"dark"}`}>Their repeatability and accuracy is also reduced in the direction of rotary movement</li>
            <li className={`text-${props.mode==="dark"?"light":"dark"}`}>The cylindrical configuration requires a more sophisticated control system than the Cartesian configuration</li>
        </p>

        <div className={`container my-5`} />
        <h4 className={`my-3 text-${props.mode==="dark"?"light":"dark"}`}>Spherical Co-Ordinate Robot</h4>
        <p className={`text-${props.mode==="dark"?"light":"dark"}`}>The polar co-ordinate, or spherical co-ordinate robot consists of a rotary base, an
              elevation pivot, and a telescoping extend-and-retract boom axis. These robots
              operate according to spherical co-ordinates and offer greater flexibility. They are
              used particularly in spot welding.
              Polar robots have a work space of spherical shape. Generally, the arm is connected to
              the base with a twisting (T) joint and rotatory (R) and linear (L) joints follow. A robot
              with 1 prismatic joint and 2 rotary joints – the axes consistent with a polar coordinate
              system.</p>
            <img src={Polar} className={`d-block w-250 mx-auto`} height="250px" alt="..." />
        <h5 className={`my-3 text-${props.mode==="dark"?"light":"dark"}`}>Commonly used or</h5>
        <p className={`text-${props.mode==="dark"?"light":"dark"}`}>
            <li className={`text-${props.mode==="dark"?"light":"dark"}`}>Arc/spot welding</li>
            <li className={`text-${props.mode==="dark"?"light":"dark"}`}>Diecast process tending</li>
            <li className={`text-${props.mode==="dark"?"light":"dark"}`}>Assembly operations</li>
            <li className={`text-${props.mode==="dark"?"light":"dark"}`}>Painting systems and paint line tending applications</li>
        </p>
        <h5 className={`my-3 text-${props.mode==="dark"?"light":"dark"}`}>Advantages</h5>
        <p className={`text-${props.mode==="dark"?"light":"dark"}`}>
            <li className={`text-${props.mode==="dark"?"light":"dark"}`}>Simple control systems</li>
            <li className={`text-${props.mode==="dark"?"light":"dark"}`}>Long reach and fast operations</li>
            <li className={`text-${props.mode==="dark"?"light":"dark"}`}>Two rotary devices are easily sealed against liquids/dust</li>
        </p>
        <h5 className={`my-3 text-${props.mode==="dark"?"light":"dark"}`}>Disadvantages</h5>
        <p className={`text-${props.mode==="dark"?"light":"dark"}`}>
            <li className={`text-${props.mode==="dark"?"light":"dark"}`}>Complex coordinates more difficult to visualize, control and program</li>
            <li className={`text-${props.mode==="dark"?"light":"dark"}`}>Exposed linear device</li>
            <li className={`text-${props.mode==="dark"?"light":"dark"}`}>Low accuracy</li>
        </p>

        {/* <a href="/path/to/file.pdf" download>Download PDF</a> */}
    </div>
  )
}
