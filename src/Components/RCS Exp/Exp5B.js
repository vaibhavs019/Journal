import React from 'react'

function Exp5B(props) {
  return (
    <div>
      <h2 className={`text-${props.mode==="dark"?"light":"dark"}`}>Experiment-5B</h2>
      <h3 className={`text-${props.mode==="dark"?"light":"dark"}`}>Close Loop Control System(CLCS) analysis using simulation sotware</h3>
    </div>
  )
}

export default Exp5B
