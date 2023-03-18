import React from 'react'

function Exp2B(props) {
  return (
    <div>
      <h2 className={`text-${props.mode==="dark"?"light":"dark"}`}>Experiment-2B</h2>
      <h3 className={`text-${props.mode==="dark"?"light":"dark"}`}>Transfer function of time domain signal using any simulation software</h3>
    </div>
  )
}

export default Exp2B
