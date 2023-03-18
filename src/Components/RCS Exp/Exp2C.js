import React from 'react'

function Exp2C(props) {
  return (
    <div>
      <h2 className={`text-${props.mode==="dark"?"light":"dark"}`}>Experiment-2C</h2>
      <h3 className={`text-${props.mode==="dark"?"light":"dark"}`}>State space analysis oF signal using simulation sotware</h3>
    </div>
  )
}

export default Exp2C
