import React from 'react'
import { MathComponent } from "mathjax-react";

function Exp2C() {
  return (
    <div>
       <MathComponent tex={String.raw`\int_0^1 x^2\ dx`} />;
    </div>
  )
}

export default Exp2C
