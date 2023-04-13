import React from 'react'

function Exp4B(props) {
  return (
      <>
    <div>
      <h2 className={`text-${props.mode==="dark"?"light":"dark"}`}>Experiment-4B</h2>
      <h3 className={`text-${props.mode==="dark"?"light":"dark"}`}>Bode Plot analysis of signal using simulation sotware</h3>
      <div className='container my-5'/>
      <h4 className={`my-3 text-${props.mode==="dark"?"light":"dark"}`}><strong>Bode Plot</strong></h4>
      <p className={`text-${props.mode==="dark"?"light":"dark"}`}></p>


      <h4 className={`my-2 text-${props.mode==="dark"?"light":"dark"}`}>Procedure to draw root locus</h4>
      <p className={`text-${props.mode==="dark"?"light":"dark"}`}>

        <h5 className={`text-${props.mode==="dark"?"light":"dark"}`}>Step-1: Locate the open loop poles and zeros in the ‘s’ plane.</h5>
        <div className={`container my-3`} />
        {/*<img src={`#`} className={`img-fluid`} alt="..." />*/}
        <div className={`container my-3`} />

        <h5 className={`text-${props.mode==="dark"?"light":"dark"}`}>Step-2: Find the number of root locus branches.</h5>
        <p className={`text-${props.mode==="dark"?"light":"dark"}`}>
          We know that the root locus branches start at the open loop poles and end at open loop zeros. So, the number of root locus branches N is equal to the number of finite open loop poles P or the number of finite open loop zeros Z, whichever is greater.
          <p>Mathematically, we can write the number of root locus branches N as: </p>
          <li className={`text-${props.mode==="dark"?"light":"dark"}`}>N = P,  if P is greater than or equal to Z</li>
          <li className={`text-${props.mode==="dark"?"light":"dark"}`}>N = Z,  if Z is greater than P</li>
        </p>
        {/*<div className={`container my-3`} />*/}
        {/*<img src={diff} className={`img-fluid`} alt="..." />*/}
        <div className={`container my-3`} />

        <h5 className={`text-${props.mode==="dark"?"light":"dark"}`}>Step-3: Identify and draw the real axis root locus branches.</h5>
        <p className={`text-${props.mode==="dark"?"light":"dark"}`}>If the angle of the open loop transfer function at a point is an odd multiple of 1800, then that point is on the root locus. If odd number of the open loop poles and zeros exist to the left side of a point on the real axis, then that point is on the root locus branch. Therefore, the branch of points which satisfies this condition is the real axis of the root locus branch.</p>
        {/*<div className={`container my-3`} />*/}
        {/*<img src={diff} className={`img-fluid`} alt="..." />*/}
        <div className={`container my-3`} />

        <h5 className={`text-${props.mode==="dark"?"light":"dark"}`}>Step-4: Find the centroid and the angle of asymptotes.</h5>
        <li>Centroid = </li>

        <li></li>
        <li></li>
        <p className={`text-${props.mode==="dark"?"light":"dark"}`}></p>
        {/*<div className={`container my-3`} />*/}
        {/*<img src={diff} className={`img-fluid`} alt="..." />*/}
        <div className={`container my-3`} />

        <h5 className={`text-${props.mode==="dark"?"light":"dark"}`}>Step-5: Find the intersection points of root locus branches with an imaginary axis.</h5>
        <p className={`text-${props.mode==="dark"?"light":"dark"}`}>
          We can calculate the point at which the root locus branch intersects the imaginary axis and the value of K at that point by using the Routh array method and special case.
          <li>If all elements of any row of the Routh array are zero, then the root locus branch intersects the imaginary axis and vice-versa.</li>
          <li>Identify the row in such a way that if we make the first element as zero, then the elements of the entire row are zero. Find the value of K for this combination.</li>
          <li>Substitute this K value in the auxiliary equation. You will get the intersection point of the root locus branch with an imaginary axis.</li>
        </p>
        {/*<div className={`container my-3`} />*/}
        {/*<img src={diff} className={`img-fluid`} alt="..." />*/}
        <div className={`container my-3`} />

        <h5 className={`text-${props.mode==="dark"?"light":"dark"}`}>Step-6: Find Break-away and Break-in points.</h5>
        <li>If there exists a real axis root locus branch between two open loop poles, then there will be a break-away point in between these two open loop poles.</li>
        <li>If there exists a real axis root locus branch between two open loop zeros, then there will be a break-in point in between these two open loop zeros.</li>
        {/*<div className={`container my-3`} />*/}
        {/*<img src={diff} className={`img-fluid`} alt="..." />*/}
        <div className={`container my-3`} />

        <h5 className={`text-${props.mode==="dark"?"light":"dark"}`}>Step-7: Find the angle of departure and the angle of arrival.</h5>
        <p className={`text-${props.mode==="dark"?"light":"dark"}`}>The Angle of departure and the angle of arrival can be calculated at complex conjugate open loop poles and complex conjugate open loop zeros respectively.
          <div className={`container my-2`} />
          <p className={`text-${props.mode==="dark"?"light":"dark"}`}>
            The formula for the angle of departure ϕd is
            <p className={`text-${props.mode==="dark"?"light":"dark"}`}>ϕd = 180 − ϕ</p>
            The formula for the angle of arrival ϕa is
            <p> ϕa = 180 − ϕ</p>
            Where,
            <p> ϕ = ∑ϕP − ∑ϕZ </p>
          </p>
        </p>
        {/*<div className={`container my-3`} />*/}
        {/*<img src={diff} className={`img-fluid`} alt="..." />*/}
        <div className={`container my-3`} />
      </p>
    </div>
    <iframe title={`rootlocus`} src="https://lpsa.swarthmore.edu/Bode/bodeDraw.html?c=6&num=s&den=s^2%2B2s%2B100" width="100%" height="650px"
            frameBorder="0">Root Locus</iframe>
      </>

)
}

export default Exp4B
