import React from 'react'

function Exp3A(props) {
  return (
    <div>
      <h2 className={`text-${props.mode==="dark"?"light":"dark"}`}>Experiment-3A</h2>
      <h3 className={`text-${props.mode==="dark"?"light":"dark"}`}>Time domain analysis oF an electric circuit(RLC circuit)</h3>
     </div>
  )
}

export default Exp3A
