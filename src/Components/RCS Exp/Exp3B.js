import React from 'react'
import msd from "../MSD.png";
import { MathComponent } from "mathjax-react";

function Exp3B(props) {
  return (
    <div>
      <h2 className={`text-${props.mode==="dark"?"light":"dark"}`}>Experiment-3B</h2>
      <h3 className={`text-${props.mode==="dark"?"light":"dark"}`}>Time domain analysis oF an electric circuit(Mechanical circuit)</h3>

        <div className={`my-5`}/>
        <h4 className={`text-${props.mode==="dark"?"light":"dark"}`}>Mass spring damper</h4>
        <p className={`text-${props.mode==="dark"?"light":"dark"}`}>A mass spring damper is a device consisting of a mass, a spring, and a damper that is attached to a structure in order to reduce the dynamic response of the structure. The frequency of the damper is tuned to a particular structural frequency so that when that frequency is excited, the damper will resonate out of phase with the structural motion. Energy is dissipated by the damper inertia force acting on the structure. This model is well-suited for modelling object with complex material properties such as nonlinearity and viscoelasticity.</p>
        <div className={`my-3`} />
        <img src={msd} className={`d-block mx-auto`} width={`450px`} height={`300px`} align={`center`} alt="..."/>
        <div className={`card-body align="center"`}>
          <p className={`card-text text-${props.mode==="dark"?"light":"dark"}`} align={`center`}>Fig: Mass spring damper</p>
        </div>
      
        <div className={`my-5`}/>
        <h5 className={`text-${props.mode==="dark"?"light":"dark"}`}>Mass</h5>
        <p className={`text-${props.mode==="dark"?"light":"dark"}`}>A mass is denoted by M. If a force f is applied on it & it displaces distance x, then <MathComponent  tex ={String.raw`\ f =  M \frac{d^2x}{dt^2}`} />  </p>
        <p className={`text-${props.mode==="dark"?"light":"dark"}`}>If a force f is applied on a mass M and it displaces distance x1 in the direction of f and distance x2 in the direction opposite, then <MathComponent tex={String.raw` f = M ({\frac{d^2x_1}{dt^2} - \frac{d^2x_2}{dt^2}})`} /> </p>

        <div className={`my-5`}/>
        <h5 className={`text-${props.mode==="dark"?"light":"dark"}`}>Spring</h5>
      <p className={`text-${props.mode==="dark"?"light":"dark"}`}>A spring is denoted by K. If a force f is applied on it & it displaces distance x, then <MathComponent  tex ={String.raw`\ f =  kx`} />  </p>
      <p className={`text-${props.mode==="dark"?"light":"dark"}`}>If a force f is applied on a mass M and it displaces distance x1 in the direction of f and distance x2 in the direction opposite, then <MathComponent tex={String.raw` f = k(x_1-x_2)`} /> </p>

        <div className={`my-5`}/>
        <h5 className={`text-${props.mode==="dark"?"light":"dark"}`}>Damper</h5>
      <p className={`text-${props.mode==="dark"?"light":"dark"}`}>A damper is denoted by D or B. If a force f is applied on it & it displaces distance x, then <MathComponent  tex ={String.raw`\ f =  D \frac{dx}{dt}`} />  </p>
      <p className={`text-${props.mode==="dark"?"light":"dark"}`}>If a force f is applied on a mass M and it displaces distance x1 in the direction of f and distance x2 in the direction opposite, then <MathComponent tex={String.raw` f = D ({\frac{dx_1}{dt} - \frac{dx_2}{dt}})`} /> </p>

        <div className={`my-4`} />
        <h5 className={`text-${props.mode==="dark"?"light":"dark"}`}>Transfer function</h5>
        <p className={`text-${props.mode==="dark"?"light":"dark"}`}><MathComponent tex={String.raw`G(s) = \frac{R(s)}{C(s)} = \frac{1}{Ms^2 + Bs + k}`}/> </p>

      <div className={`my-4`} />
      <h5 className={`text-${props.mode==="dark"?"light":"dark"}`}>Example of Mass Spring Damper system</h5>
      <p className={`text-${props.mode==="dark"?"light":"dark"}`}> </p>
    </div>
  )
}

export default Exp3B
