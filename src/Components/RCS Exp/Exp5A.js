import React from 'react'

function Exp5A(props) {
  return (
    <div>
      <h2 className={`text-${props.mode==="dark"?"light":"dark"}`}>Experiment-5A</h2>
      <h3 className={`text-${props.mode==="dark"?"light":"dark"}`}>Open Loop Control System(OLCS) analysis using simulation sotware</h3>
    </div>
  )
}

export default Exp5A
