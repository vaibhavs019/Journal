import React from 'react'

function Exp4A(props) {
  return (
    <div>
      <h2 className={`text-${props.mode==="dark"?"light":"dark"}`}>Experiment-4A</h2>
      <h3 className={`text-${props.mode==="dark"?"light":"dark"}`}>Aritmetic operations, logical operators and Mathematical unctions using simulation sotware</h3>
      <iframe src="https://lpsa.swarthmore.edu/Root_Locus/RLDraw.html" width="100%" height="500px" frameborder="0">Root Locus</iframe>
      
    </div>
  )
}

export default Exp4A
