import React from 'react'
import MPC from "../MPC.png";

export default function Exp7(props) {
  return (
    <div>
        <h2 className={`text-${props.mode==="dark"?"light":"dark"}`}>Experiment-7</h2>
        <div className='container my-4'/>
        <h3 className={`text-${props.mode==="dark"?"light":"dark"}`}>To understand the basic of Model Predictive Controller(MPC)</h3>
        <div className='container my-4'/>
        <h4 className={`text-${props.mode==="dark"?"light":"dark"}`}>What is MPC?</h4>
        <p className={`text-${props.mode==="dark"?"light":"dark"}`}>Model Predictive Control (MPC), also known as Dynamical Matrix Control (DMC), Generalized Predictive Control (GPC), Receding Horizon Control (RHC). </p>
        <p className={`text-${props.mode==="dark"?"light":"dark"}`}>The basic idea behind MPC is to use a mathematical model of the system being controlled to predict its behaviour over a specified time horizon. Based on these predictions, the controller determines the optimal control inputs that will minimize a certain objective function, such as the error between the desired and actual system behaviour.</p>
        <img src={MPC} className="d-block mx-auto" width={`450px`} alt="..."/>
        <div className={`card-body align="center"`}>
            <p className={`card-text text-${props.mode==="dark"?"light":"dark"}`} align={`center`}>Fig: Block diagram of MPC</p>
        </div>
        <div className={`my-3`} />
        <p className={`text-${props.mode==="dark"?"light":"dark"}`}>MPC controllers are particularly useful in systems with complex dynamics, multiple inputs and outputs, and constraints on the control inputs and outputs. By taking into account the system's constraints and predicting its future behaviour, MPC controllers can achieve better performance than traditional PID (proportional-integral-derivative) controllers.</p>
        <p className={`text-${props.mode==="dark"?"light":"dark"}`}>To implement an MPC controller, the following steps are typically involved:
        <ol>
            <li>Develop a mathematical model of the system being controlled.</li>
            <li>Define the performance objectives and constraints on the system.</li>
            <li>Use the model to predict the future behaviour of the system over a specified time horizon.</li>
            <li>Determine the optimal control inputs that minimize the objective function, subject to the constraints.</li>
            <li>Implement the control inputs and update the predictions based on the actual system behaviour.</li>
            <li>Repeat steps 3-5 in a closed-loop fashion to continuously update the control inputs.</li>
        </ol></p>

        <h4 className={`text-${props.mode==="dark"?"light":"dark"}`}>Advantages of MPC</h4>
        <p className={`text-${props.mode==="dark"?"light":"dark"}`}><ol>
            <li>Straightforward formulation, based on well understood concepts </li>
            <li>Explicitly handles constraints</li>
            <li>Explicit use of a model</li>
            <li>Well understood tuning parameters
            <ul>
                <li>Prediction horizon</li>
                <li>Optimization problem setup</li>
            </ul></li>
            <li>Development time much shorter than for competing advanced control methods</li>
            <li>Easier to maintain: changing model or specs does not require complete redesign, sometimes can be done on the fly</li>
        </ol></p>

        <h4 className={`text-${props.mode==="dark"?"light":"dark"}`}>Emerging applications of MPC</h4>
            <p className={`text-${props.mode==="dark"?"light":"dark"}`}><ol>
                <li>Nonlinear MPC
                    <ul>
                        <li>just need a computable model (simulation)</li>
                        <li>NLP optimization</li>
                    </ul></li>
                <li>Hybrid MPC <ul>
                    <li>discrete and parametric variables</li>
                    <li>combination of dynamics and discrete mode change</li>
                    <li>mixed-integer optimization (MILP, MIQP)</li>
                </ul></li>
                <li>Engine control</li>

                <li>Large scale operation control problems
                    <ul>
                        <li>Operations management (control of supply chain)</li>
                        <li>Campaign control</li>
                    </ul></li>
                <li>Vehicle path planning and control
                    <ul>
                        <li>nonlinear vehicle models</li>
                        <li>world models</li>
                        <li>receding horizon preview</li>
                    </ul></li>
                <li>Spacecraft rendezvous with space station
                    <ul>
                        <li>visibility cone constraint</li>
                        <li>fuel optimality</li>
                    </ul></li>
                <li>Underwater vehicle guidance</li>
                <li>Missile guidance</li>
            </ol></p>
    </div>
  )
}

// <p className={`text-${props.mode==="dark"?"light":"dark"}`}></p>
// <p className={`text-${props.mode==="dark"?"light":"dark"}`}></p>