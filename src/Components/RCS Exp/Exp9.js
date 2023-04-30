import React from 'react'
import cont from "./flightcontroller.png"


function Exp9(props) {
  return (
    <div>
        <h2 className={`text-${props.mode==="dark"?"light":"dark"}`}>Experiment-9</h2>
        <div className='container my-4'/>
        <h3 className={`text-${props.mode==="dark"?"light":"dark"}`}>To understand the basic of controller schemes for drones</h3>
        <div className='container my-4'/>
        <h4 className={`text-${props.mode==="dark"?"light":"dark"}`}>Introduction</h4>
        <p className={`text-${props.mode==="dark"?"light":"dark"}`}>Controller scheme for drones is an essential part of drone operation. The controller scheme can be defined as a set of instructions or algorithms that dictate the behaviour of the drone. The controller scheme is responsible for controlling the stability, manoeuvrability, and orientation of the drone.</p>
        <p className={`text-${props.mode==="dark"?"light":"dark"}`}>The basic controller scheme for drones consists of three parts: the sensors, the control algorithm, and the actuators. The sensors provide feedback to the control algorithm, which calculates the desired output for the actuators. The actuators then generate the appropriate motion to achieve the desired output.</p>

        <img src={cont} className={`d-block mx-auto`} width={`800px`} alt={`...`}/>
        <figcaption className={`text-${props.mode==="dark"?"light":"dark"}`} align={`center`}>Fig: Block diagram for UAV flight controller</figcaption>

        <h4 className={`text-${props.mode==="dark"?"light":"dark"}`}>Sensors</h4>
        <p className={`text-${props.mode==="dark"?"light":"dark"}`}>The sensors used in drone control are typically accelerometers, gyroscopes, and magnetometers. These sensors measure the acceleration, rotation, and magnetic fields, respectively, of the drone. The sensors send this data to the control algorithm, which uses it to determine the orientation and movement of the drone.</p>

        <h4 className={`text-${props.mode==="dark"?"light":"dark"}`}>Control Algorithms</h4>
        <p className={`text-${props.mode==="dark"?"light":"dark"}`}>The control algorithm is the heart of the controller scheme. It is responsible for processing the sensor data and generating the desired output for the actuators. The control algorithm can be either a simple proportional-integral-derivative (PID) controller or a more advanced algorithm such as a model predictive controller.
            <ul>
                <li><h5>PID Controller</h5><p>The PID controller is the simplest form of the control algorithm. It uses the error between the desired output and the measured output to calculate the appropriate output for the actuators. The error is calculated by subtracting the desired output from the measured output. The PID controller consists of three parts: the proportional, integral, and derivative terms.</p><p>
                    The proportional term is proportional to the error and determines the immediate output. The integral term is proportional to the integral of the error over time and corrects any steady-state errors. The derivative term is proportional to the rate of change of the error and helps to dampen any oscillations.
                </p></li>
                <li><h5>Model Predictive Controller</h5><p>The model predictive controller is a more advanced algorithm that uses a mathematical model of the drone to predict its behavior. The controller then calculates the appropriate output for the actuators based on the predicted behavior. The model predictive controller can be more accurate and efficient than a PID controller, but it requires a more complex mathematical model and more processing power.</p></li>
            </ul></p>

        <h4 className={`text-${props.mode==="dark"?"light":"dark"}`}>Actuators</h4>
        <p className={`text-${props.mode==="dark"?"light":"dark"}`}>The actuators are the final component of the controller scheme. They generate the motion required to achieve the desired output. The most common actuators used in drone control are motors and servos. The motors are responsible for generating the thrust required for the drone to move, while the servos are responsible for controlling the orientation of the drone.</p>

        <h4 className={`text-${props.mode==="dark"?"light":"dark"}`}>Conclusion</h4>
        <p className={`text-${props.mode==="dark"?"light":"dark"}`}>The basic controller scheme for drones consists of three components: sensors, control algorithm, and actuators. The sensors measure the acceleration, rotation, and magnetic fields of the drone and send this data to the control algorithm. The control algorithm uses this data to generate the appropriate output for the actuators. The actuators generate the motion required to achieve the desired output. The basic controller scheme can be implemented using a simple PID controller or a more advanced model predictive controller.</p>

    </div>
  )
}

export default Exp9
