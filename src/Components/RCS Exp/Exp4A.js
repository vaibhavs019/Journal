import React from 'react'
import Centroid from '../Centroid.png';
import Asymptotes from '../Asymptotes.png';





function Exp4A(props) {
  return (
      <>
    <div>
      <h2 className={`text-${props.mode==="dark"?"light":"dark"}`}>Experiment-4A</h2>
      <h3 className={`text-${props.mode==="dark"?"light":"dark"}`}>Root Locus analysis of signal using simulation software</h3>
        <div className='container my-5'/>
        <h4 className={`my-3 text-${props.mode==="dark"?"light":"dark"}`}><strong>Root Locus</strong></h4>
        <p className={`text-${props.mode==="dark"?"light":"dark"}`}>The root locus is a graphical representation in s-domain and it is symmetrical about the real axis. Because the open loop poles and zeros exist in the s-domain having the values either as real or as complex conjugate pairs.</p>

      <div className={`my-4`} />
        <h4 className={` text-${props.mode==="dark"?"light":"dark"}`}><strong>Procedure to draw root locus</strong></h4>
        <p className={`text-${props.mode==="dark"?"light":"dark"}`}>
            <div className={`my-3`} />
                <h5 className={`text-${props.mode==="dark"?"light":"dark"}`}><strong>Step-1:</strong> Locate the open loop poles and zeros in the ‘s’ plane.</h5>
                <div className={`container my-3`} />
                {/*<img src={`#`} className={`img-fluid`} alt="..." />*/}
                <div className={`container my-3`} />

                <h5 className={`text-${props.mode==="dark"?"light":"dark"}`}><strong>Step-2:</strong> Find the number of root locus branches.</h5>
                    <p className={`text-${props.mode==="dark"?"light":"dark"}`}>
                        We know that the root locus branches start at the open loop poles and end at open loop zeros. So, the number of root locus branches N is equal to the number of finite open loop poles P or the number of finite open loop zeros Z, whichever is greater.
                        <p>Mathematically, we can write the number of root locus branches N as: </p>
                        <li className={`text-${props.mode==="dark"?"light":"dark"}`}>N = P,  if P is greater than or equal to Z</li>
                        <li className={`text-${props.mode==="dark"?"light":"dark"}`}>N = Z,  if Z is greater than P</li>
                    </p>
                {/*<div className={`container my-3`} />*/}
                {/*<img src={diff} className={`img-fluid`} alt="..." />*/}
                <div className={`container my-3`} />

                <h5 className={`text-${props.mode==="dark"?"light":"dark"}`}><strong>Step-3:</strong> Identify and draw the real axis root locus branches.</h5>
                    <p className={`text-${props.mode==="dark"?"light":"dark"}`}>If the angle of the open loop transfer function at a point is an odd multiple of 1800, then that point is on the root locus. If odd number of the open loop poles and zeros exist to the left side of a point on the real axis, then that point is on the root locus branch. Therefore, the branch of points which satisfies this condition is the real axis of the root locus branch.</p>
                {/*<div className={`container my-3`} />*/}
                {/*<img src={diff} className={`img-fluid`} alt="..." />*/}
                <div className={`container my-3`} />

                <h5 className={`text-${props.mode==="dark"?"light":"dark"}`}><strong>Step-4:</strong> Find the centroid and the angle of asymptotes.</h5>
                <p className={`text-${props.mode==="dark"?"light":"dark"}`}>
                    <li className={`text-${props.mode==="dark"?"light":"dark"}`}>If P=Z, then all the root locus branches start at finite open loop poles and end at finite open loop zeros.</li>

                    <li className={`text-${props.mode==="dark"?"light":"dark"}`}>If P>Z , then Z number of root locus branches start at finite open loop poles and end at finite open loop zeros and P−Z number of root locus branches start at finite open loop poles and end at infinite open loop zeros</li>
                    <li className={`text-${props.mode==="dark"?"light":"dark"}`}>If Z>P , then P number of root locus branches start at finite open loop poles and end at finite open loop zeros and Z−P number of root locus branches start at infinite open loop poles and end at finite open loop zeros.</li>
                    <p className={`text-${props.mode==="dark"?"light":"dark"}`}>So, some of the root locus branches approach infinity, when P≠Z. Asymptotes give the direction of these root locus branches. The intersection point of asymptotes on the real axis is known as centroid.

                        We can calculate the centroid α by using this formula,</p>
                    <img src={Centroid} className={`img-fluid d-block w-800px mx-auto`} width={`800px`} align={`center`} alt="..." />
                    <p className={`my-3 text-${props.mode==="dark"?"light":"dark"}`}>The formula for the angle of asymptotes θ is</p>
                    <img src={Asymptotes}  className={`d-block w-300px mx-auto`}  width={`300px`} alt="..." />
                    <p className={`my-3 text-${props.mode==="dark"?"light":"dark"}`}>Where q = 0,1,2,.....,(P-Z)-1</p>
                </p>
                <div className={`container my-3`} />

                <div className={`container my-3`} />

            <h5 className={`text-${props.mode==="dark"?"light":"dark"}`}><strong>Step-5:</strong> Find the intersection points of root locus branches with an imaginary axis.</h5>
                    <p className={`text-${props.mode==="dark"?"light":"dark"}`}>
                        We can calculate the point at which the root locus branch intersects the imaginary axis and the value of K at that point by using the Routh array method and special case.
                        <li>If all elements of any row of the Routh array are zero, then the root locus branch intersects the imaginary axis and vice-versa.</li>
                        <li>Identify the row in such a way that if we make the first element as zero, then the elements of the entire row are zero. Find the value of K for this combination.</li>
                        <li>Substitute this K value in the auxiliary equation. You will get the intersection point of the root locus branch with an imaginary axis.</li>
                    </p>
                {/*<div className={`container my-3`} />*/}
                {/*<img src={diff} className={`img-fluid`} alt="..." />*/}
                <div className={`container my-3`} />

                <h5 className={`text-${props.mode==="dark"?"light":"dark"}`}><strong>Step-6:</strong> Find Break-away and Break-in points.</h5>
                        <li>If there exists a real axis root locus branch between two open loop poles, then there will be a break-away point in between these two open loop poles.</li>
                        <li>If there exists a real axis root locus branch between two open loop zeros, then there will be a break-in point in between these two open loop zeros.</li>
                        <p className={`my-3`}><strong>Note - </strong>Break-away and break-in points exist only on the real axis root locus branches. Follow these steps to find break-away and break-in points.
                        <ul>Write K in terms of s from the characteristic equation 1+G(s)H(s)=0.</ul>
                            <li>Differentiate K with respect to s and make it equal to zero. Substitute these values of s in the above equation.</li>
                            <li>The values of s for which the K value is positive are the break points.</li>
                        </p>

                {/*<div className={`container my-3`} />*/}
                {/*<img src={diff} className={`img-fluid`} alt="..." />*/}
                <div className={`container my-3`} />

                <h5 className={`text-${props.mode==="dark"?"light":"dark"}`}><strong>Step-7:</strong> Find the angle of departure and the angle of arrival.</h5>
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
            <iframe title={`rootlocus`} src="https://lpsa.swarthmore.edu/Root_Locus/RLDraw.html" width="100%" height="650px" frameborder="0">Root Locus</iframe>

    
</>
  )
}

export default Exp4A
