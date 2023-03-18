import React from 'react'

function Exp1A(props) {
  return (
    <div>
      <h2 className={`text-${props.mode==="dark"?"light":"dark"}`}>Experiment-1A</h2>
      <h3 className={`text-${props.mode==="dark"?"light":"dark"}`}>Introduction to modelling and simulation sotware</h3>
    </div>
  )
}

export default Exp1A
