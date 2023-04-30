import React from 'react'
import traj from "./trajectory.png";
function Exp8(props) {
  return (
    <div>
        <h2 className={`text-${props.mode==="dark"?"light":"dark"}`}>Experiment-8</h2>
        <div className='container my-4'/>
        <h3 className={`text-${props.mode==="dark"?"light":"dark"}`}>To understand the basics of Trajectory Tracking Control</h3>
        <div className='container my-4'/>
        <h4 className={`text-${props.mode==="dark"?"light":"dark"}`}>Introduction</h4>
        <p className={`text-${props.mode==="dark"?"light":"dark"}`}>Trajectory tracking control is a key technology for precisely controlling autonomous vehicles. It aims to enable the vehicle to follow a pre-defined path with ideal dynamic quality or to stabilize it in a specified position. Trajectory tracking control is a fundamental part of autonomous driving that consists of environment perception, path planning, and trajectory tracking. Trajectory tracking control can improve the tracking stability and driving safety of autonomous vehicles under complex extreme conditions. </p>

        <img src={traj} className={`d-block mx-auto`} width={`800px`} alt={`...`}/>
        <figcaption className={`text-${props.mode==="dark"?"light":"dark"}`} align={`center`}>Fig: Block diagram for trajectory tracking control system</figcaption>

        <h4 className={`text-${props.mode==="dark"?"light":"dark"}`}>Applications</h4>
        <p className={`text-${props.mode==="dark"?"light":"dark"}`}>Trajectory tracking control can be applied to a wide range of autonomous vehicles that have complex dynamics, constraints, and objectives. Some examples are:
        <ul>
            <li><strong>Driver-less cars:</strong> Trajectory tracking control can enable driver-less cars to avoid obstacles, maintain lane keeping, and follow desired speed profiles while satisfying safety and comfort constraints.</li>
            <li><strong>Tracked vehicles:</strong> Trajectory tracking control can enable tracked vehicles to maneuver in various environments while considering nonlinearities due to slipping while skid-steering.</li>
            <li><strong>Robot manipulators:</strong> Trajectory tracking control can enable robot manipulators to perform tasks such as welding, painting, assembly, etc. while considering kinematic and dynamic constraints.</li>
        </ul></p>

        <h4 className={`text-${props.mode==="dark"?"light":"dark"}`}>Advantages:</h4>
        <p className={`text-${props.mode==="dark"?"light":"dark"}`}>
            <ul>
                <li>It can handle multiple inputs and outputs in a systematic way.</li>
                <li>It can explicitly consider constraints on inputs and outputs.</li>
                <li>It can use information on future disturbances and set-points when available.</li>
                <li>It can deal with non-linearities and time delays without linearization.</li>
            </ul>
        </p>

        <h4 className={`text-${props.mode==="dark"?"light":"dark"}`}>Disadvantages:</h4>
        <p className={`text-${props.mode==="dark"?"light":"dark"}`}>
            <ul>
                <li>It requires a reliable model of the vehicle that captures its essential dynamics.</li>
                <li>It requires solving an optimization problem online at each time step, which can be computationally demanding.</li>
                <li>It may not guarantee stability or robustness under model uncertainties or disturbances.</li>
            </ul>
        </p>


        <h4 className={`text-${props.mode==="dark"?"light":"dark"}`}>Conclusion</h4>
        <p className={`text-${props.mode==="dark"?"light":"dark"}`}>Trajectory tracking control is a technique that uses models and optimization to enable autonomous vehicles to follow a pre-defined path with ideal dynamic quality. It can handle complex dynamics and future events, but it also has challenges such as model accuracy, computation time, and stability issues. Therefore, trajectory tracking control should be carefully designed and tuned to suit the specific characteristics and requirements of each application.</p>
    </div>
  )
}

export default Exp8
