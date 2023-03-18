import React from 'react'

function Exp3B(props) {
  return (
    <div>
      <h2 className={`text-${props.mode==="dark"?"light":"dark"}`}>Experiment-3B</h2>
      <h3 className={`text-${props.mode==="dark"?"light":"dark"}`}>Time domain analysis oF an electric circuit(Mechanical circuit)</h3>
    </div>
  )
}

export default Exp3B
