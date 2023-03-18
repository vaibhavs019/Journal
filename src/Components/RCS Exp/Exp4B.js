import React from 'react'

function Exp4B(props) {
  return (
    <div>
      <h2 className={`text-${props.mode==="dark"?"light":"dark"}`}>Experiment-4B</h2>
      <h3 className={`text-${props.mode==="dark"?"light":"dark"}`}>Aritmetic operations, logical operators and Mathematical unctions using simulation sotware</h3>
    </div>
  )
}

export default Exp4B
