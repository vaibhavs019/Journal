import React from 'react'
import {MathComponent} from "mathjax-react";
import a from "../91.png";
import b from "../92.png";
import c from "../93.png";
// import "./Exp9.css"



export default function Exp9K(props) {
  return (
      <>

      <div className='my-lg-5'>
        <h1 className={`text-${props.mode==="dark"?"light":"dark"}`}><strong>Experiment-9</strong></h1>
      </div>
      <h2 className={`text-${props.mode==="dark"?"light":"dark"}`}><strong>Title: Design, modeling and fabrication of gripper</strong> </h2>
      <div className={`my-4`} />
      <h3 className={`text-${props.mode==="dark"?"light":"dark"}`}><strong>Aim: To design and verify by modeling and implementation of robotic gripper on industrial robot.</strong></h3>
      <div className='container my-5'/>
      <h4 className={` text-${props.mode==="dark"?"light":"dark"}`}><strong>Introduction</strong></h4>
      <p className={` text-${props.mode==="dark"?"light":"dark"}`}>In robotics, an end effector is the device at the end of a robotic arm, designed to interact with the
        environment. The exact nature of this device depends on the application of the robot. The end effector
        means the last link (or end) of the robot. At this endpoint the tools are attached. In a wider sense, an
        end effector can be seen as the part of a robot that interacts with the work environment. This does not
        refer to the wheels of a mobile robot or the feet of a humanoid robot which are also not end effectors—
        they are part of the robot's mobility.</p>
      <p className={` text-${props.mode==="dark"?"light":"dark"}`}>The design of the end of arm tooling for a robotic assembly system is very important for reducing
          errors and decreasing cycle times. This is the piece of the robotic parts handler or assembler that
          physically interacts with the environment. While many factors may be blamed for the common failures
          of work cells, the culprit is very often the grippers. Well-designed grippers can increase throughput,
          improve system reliability, compensate for robot inaccuracy, and perform value added functions to
          the assembly.</p>
        <h4 className={` text-${props.mode==="dark"?"light":"dark"}`}><strong>Types of end effectors:</strong></h4>
        <ol className={` text-${props.mode==="dark"?"light":"dark"}`}>
            <li><strong>Impactive - </strong> jaws or claws which physically grasp by direct impact upon the object.</li>
            <li><strong>Ingressive - </strong> pins, needles or hackles which physically penetrate the surface of the
                object (used in textile, carbon and glass fibre handling).</li>
            <li><strong>Astrictive - </strong> suction forces applied to the objects surface (whether by vacuum,
                magneto– or electro adhesion).</li>
            <li><strong>Contiguitive - </strong> requiring direct contact for adhesion to take place (such as glue, surface
                tension or freezing).</li>
        </ol>
        <div className={` text-${props.mode==="dark"?"light":"dark"}`}>
        <h4>Design:-</h4>
        <p>In order to design robot we need to consider the gripping force of the robot end effectors to
            grip the object without slippage.</p>
        <h5>Model-1</h5>
        <p>A simple pivot type gripper is used to hold boxes as shown following figure. The gripping
            force, Fg required is 20 kgf. The gripper is to be actuated by a piston device to apply an actuating
            force, Fa. The corresponding lever arms for the two forces are shown in the figure.
            <img src={a} className={`d-block w-250 mx-auto`} height="250px" alt="..." />
            <div className={`card-body align="center"`}>
                <p className={`card-text text-${props.mode==="dark"?"light":"dark"}`} align={`center`}>Fig: Pivot type gripper</p>
            </div>
            Taking moments of the forces on one arm and summing them to zero, we get,</p>
        <MathComponent tex={String.raw`F_a * l_a = F_g * l_g`} />
        <MathComponent tex={String.raw`F_a = \frac{F_g * l_g}{l_a}`} />
        <MathComponent tex={String.raw`       = \frac{20 * 20}{5} kgf`} />
        <p>Therefore, the piston device would have to provide an actuating force of 80 kgf to close
            the gripper with a force against the boxes of 20 kgf.</p>

        <h5>Model-2</h5>
        <p>A block of weight having 1400 N is to be gripped as shown in figure. Find the clamping
            force assuming a safety factor 2. Assume coefficient of friction = 0.2. The centre of gripping does
            not coincide with the centre of gravity.</p>
            <img src={b} className={`d-block w-250 mx-auto`} height="250px" alt="..." />
            <div className={`card-body align="center"`}>
                <p className={`card-text text-${props.mode==="dark"?"light":"dark"}`} align={`center`}>Fig: Gripper for clamping force</p>
            </div>
        <p>Assuming acceleration a upward,</p>
        <p>Resolving vertical forces 1400 + 2 F2 = 2 F1 – (Wa/g)</p>
        <p>Resolving moments about P, </p>
        <MathComponent tex={String.raw`50 * F_2 = \frac{1400 * 250}{2}`}/>
        <MathComponent tex={String.raw`F_2 = \frac{1400*250}{2 * 50} = 3500N`} />
        <p>Therefore, F1 = 5600 N [assuming a = 2g]</p>
        <MathComponent tex={String.raw`Clamping force = \frac{(F_1 + F_2) * safety \: factor}{coefficient\: of\: friction}`}/>
        <MathComponent tex={String.raw` = \frac{9100 * 2}{0.2}`} />
        <MathComponent tex={String.raw` = 91000N`} />
        <p>This is greater than the value for gripping at the C.G. If the block is to be lifted by holding it
            at the C.G. of the block, the gripping force will be less.</p>

        <h4>Modeling:</h4>
        <p>Modeling of different robot grippers is done using suitable modeling software like
            Solid Edge, ProEngineer or Catia V5 for examp le see 3 D figure.
            <img src={c} className={`d-block w-250 mx-auto`} height="250px" alt="..." />
            <div className={`card-body align="center"`}>
                <p className={`card-text text-${props.mode==="dark"?"light":"dark"}`} align={`center`}>Fig: Gripper Approaching Part from Side </p>
            </div></p>

        <h4>Fabrication:</h4>
        <p>Modeled robotic gripper is fabricated using 3D printer. 3D printing is a relatively new
            manufacturing process, and to print gripper components, or in a robotic manner. It’s a
            completely automated process where machines build an object layer by layer. In merely 2
            decades, 3D printing has come out of labs and a few niche companies’ hands to the global
            market, spanning industries from toys to aerospace. Initially handling only a couple of plastic
            materials, 3D printing now supports various plastics, metal, and even composite materials like
            Carbon Fiber</p>

        <h4>Conclusion</h4>
        <p>Two different types of grippers are designed and modeled using CAD software. Further it is
            fabricated using 3D printers.</p>
        </div>

      </>
  )
}
//
// <p className={` text-${props.mode==="dark"?"light":"dark"}`}></p>
// <p className={` text-${props.mode==="dark"?"light":"dark"}`}></p>
// <p className={` text-${props.mode==="dark"?"light":"dark"}`}></p>
// <p className={` text-${props.mode==="dark"?"light":"dark"}`}></p>
// <p className={` text-${props.mode==="dark"?"light":"dark"}`}></p>



