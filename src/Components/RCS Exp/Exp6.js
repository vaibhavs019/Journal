import React from 'react'
import {MathComponent} from "mathjax-react";
import PI from "../PI.png";
import PD from "../PD.png";
import PID from "../PID.png";


function Exp6(props) {
  return (
    <div>
        <h2 className={`text-${props.mode==="dark"?"light":"dark"}`}>Experiment-6</h2>
        <h3 className={`text-${props.mode==="dark"?"light":"dark"}`}>Manual PID controller tuning using Simulink software</h3>
        <div className='container my-5'/>
        <h4 className={`text-${props.mode==="dark"?"light":"dark"}`}>What is PID</h4>
        <p className={`text-${props.mode==="dark"?"light":"dark"}`}>Proportional-Integral-Derivative (PID) control is the most common control algorithm used in industry and has been universally accepted in industrial control. The popularity of PID controllers can be attributed partly to their robust performance in a wide range of operating conditions and partly to their functional simplicity, which allows engineers to operate them in a simple, straightforward manner.</p>
        <p className={`text-${props.mode==="dark"?"light":"dark"}`}>As the name suggests, PID algorithm consists of three basic coefficients; proportional, integral and derivative which are varied to get optimal response.
         </p>

        <h5 className={`text-${props.mode==="dark"?"light":"dark"}`}>Proportional Response</h5>
        <p className={`text-${props.mode==="dark"?"light":"dark"}`}>The proportional component depends only on the difference between the set point and the process variable. This difference is referred to as the Error term. The proportional gain (Kc) determines the ratio of output response to the error signal. For instance, if the error term has a magnitude of 10, a proportional gain of 5 would produce a proportional response of 50. In general, increasing the proportional gain will increase the speed of the control system response. However, if the proportional gain is too large, the process variable will begin to oscillate. If Kc is increased further, the oscillations will become larger and the system will become unstable and may even oscillate out of control.
        <MathComponent tex={String.raw`P_{out} = K_p e(t)`}/></p>

        <h5 className={`text-${props.mode==="dark"?"light":"dark"}`}>Integral Response</h5>
        <p className={`text-${props.mode==="dark"?"light":"dark"}`}>The integral component sums the error term over time. The result is that even a small error term will cause the integral component to increase slowly. The integral response will continually increase over time unless the error is zero, so the effect is to drive the Steady-State error to zero. Steady-State error is the final difference between the process variable and set point. A phenomenon called integral windup results when integral action saturates a controller without the controller driving the error signal toward zero.
            <MathComponent tex={String.raw`I_{out} = K_i \int_{0}^{t} e(t) dt`}/></p>

        <h5 className={`text-${props.mode==="dark"?"light":"dark"}`}>Derivative Response</h5>
        <p className={`text-${props.mode==="dark"?"light":"dark"}`}>The derivative component causes the output to decrease if the process variable is increasing rapidly. The derivative response is proportional to the rate of change of the process variable. Increasing the derivative time (Td) parameter will cause the control system to react more strongly to changes in the error term and will increase the speed of the overall control system response. Most practical control systems use very small derivative time (Td), because the Derivative Response is highly sensitive to noise in the process variable signal. If the sensor feedback signal is noisy or if the control loop rate is too slow, the derivative response can make the control system unstable.
            <MathComponent tex={String.raw`D_{out} = \frac {d} {dt}e(t)`}/></p>

          <h5 className={`my-3 text-${props.mode==="dark"?"light":"dark"}`}>Different types of PID</h5>
          <p className={`text-${props.mode==="dark"?"light":"dark"}`}>PI, ID, and PD controllers are variations of the basic PID controller, which is a widely used feedback control mechanism in industrial processes.
          <ul>
                <li><strong>PI controller</strong>The PI controller is a type of PID controller that only uses proportional and integral terms. It does not use the derivative term, which means it is less sensitive to noise and can provide smoother control action. The PI controller is commonly used in systems with slow dynamics and where overshooting is not desirable.
                <MathComponent tex={String.raw`m(t) = K_p e(t) + K_i \int_{0}^{t} e(t) dt`} />
                    <img src={PI} className={`d-block mx-auto`} width={`800px`} alt={`...`}/>
                    <figcaption className={`text-${props.mode==="dark"?"light":"dark"}`} align={`center`}>Fig: Working of PI controller</figcaption></li>
<div className={`my-3`}/>

              <li><strong>PD controller</strong>The PD controller is a type of PID controller that only uses the proportional and derivative terms. It does not use the integral term, which means it can respond faster to changes in the system and can reduce overshooting. The PD controller is commonly used in systems with fast dynamics and where steady-state errors are not a concern.
                <MathComponent tex={String.raw `m(t) = K_p e(t) + K_d \frac{d}{dt} e(t)`}/>
                  <img src={PD} className={`d-block mx-auto`} width={`800px`} alt={`...`}/>
                  <figcaption className={`text-${props.mode==="dark"?"light":"dark"}`} align={`center`}>Fig: Working of PD controller</figcaption></li>
              <div className={`my-3`}/>
              <li><strong>PID controller</strong>A PID (Proportional-Integral-Derivative) controller is a type of feedback control mechanism widely used in industrial processes to control systems in a desired way. The PID controller calculates an error signal by subtracting the desired output from the actual output of the system and applies a corrective action to reduce the error. Proportional, integral and derivative all three terms are combined to calculate the PID output, which is applied as a control signal to the system. The gains of each term are adjusted to achieve the desired control performance.
                    <MathComponent tex={String.raw `u(t) = K_p e(t) + K_i \int e(t) dt + K_d \frac{d}{dt}e(t)`}/>
                  <img src={PID} className={`d-block mx-auto`} width={`800px`} alt={`...`}/>
                  <figcaption className={`text-${props.mode==="dark"?"light":"dark"}`} align={`center`}>Fig: Working of PID controller</figcaption></li>
          </ul></p>

        <h5 className={`text-${props.mode==="dark"?"light":"dark"}`}>Manual tuning of PID</h5>
          <p className={`text-${props.mode==="dark"?"light":"dark"}`}>The process of setting the optimal gains for P, I and D to get an ideal response from a control system is called tuning. There are several methods for manual tuning the PID controllers, including  Ziegler-Nichols method, Cohen-Coon method, and trial and error.
          <ul>
                <li><strong>Trial and error method:</strong>This method involves adjusting the proportional, integral, and derivative gains manually until the desired control performance is achieved. The process involves observing the system response to a step input and adjusting the gains to minimize overshoot, settling time, and steady-state error.</li>
                <li><strong>Ziegler-Nichols method: </strong>This method is a heuristic method that uses step-response tests to determine the optimal controller gains. The method involves increasing the proportional gain until the system oscillates, and then applying a formula to determine the optimal gains.</li>
                <li><strong>Cohen-Coon method:</strong>This method is another heuristic method that uses step-response tests to determine the optimal controller gains. The method involves fitting the response curve to a model and then applying a formula to determine the optimal gains.</li>

          </ul></p>

    </div>
  )
}

export default Exp6
