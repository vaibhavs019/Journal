import React from 'react'
import msd from "../MSD.png";

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
        <p className={`text-${props.mode==="dark"?"light":"dark"}`}></p>

        <div className={`my-5`}/>
        <h5 className={`text-${props.mode==="dark"?"light":"dark"}`}>Spring</h5>
        <p className={`text-${props.mode==="dark"?"light":"dark"}`}></p>

        <div className={`my-5`}/>
        <h5 className={`text-${props.mode==="dark"?"light":"dark"}`}>Damper</h5>
        <p className={`text-${props.mode==="dark"?"light":"dark"}`}></p>

    </div>
  )
}

export default Exp3B
