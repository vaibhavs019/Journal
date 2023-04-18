import React from 'react'
import {MathComponent} from "mathjax-react";
import bodeplot from "../bodeplot.png";

function Exp4B(props) {
  return (
      <>
    <div>
      <h2 className={`text-${props.mode==="dark"?"light":"dark"}`}>Experiment-4B</h2>
      <h3 className={`text-${props.mode==="dark"?"light":"dark"}`}>Bode Plot analysis of signal using simulation sotware</h3>
      <div className='container my-5'/>
      <h4 className={`my-3 text-${props.mode==="dark"?"light":"dark"}`}><strong>Bode Plot</strong></h4>
      <p className={`text-${props.mode==="dark"?"light":"dark"}`}>Bode Plot is a graphical method used for design and analysis purpose of the control system. In the Bode Plot, a logarithmic scale is used that helps in simplifying the way to graphically represent the frequency response of the system.

        The idea of logarithmic scaling was provided by <strong>Hendrick W. Bode.</strong></p>
      <p className={`text-${props.mode==="dark"?"light":"dark"}`}>In bode plot, logarithmic of magnitude and logarithmic of phase angle are separately plotted for logarithmic values of frequencies.</p>
      <h5 className={`text-${props.mode==="dark"?"light":"dark"}`}>Need for bode plot</h5>
      <p className={`text-${props.mode==="dark"?"light":"dark"}`}>Previously we have seen that the basic form of frequency response curve represents a plot between magnitude and phase angle is sketched for various values of input frequency i.e., ω. In such plots, there is variation in ω from 0 to ∞ for which various values of magnitude and phase angle are achieved. However, accommodating all the values of magnitude and phase angle on a linear scale is quite difficult.</p>
      <p className={`text-${props.mode==="dark"?"light":"dark"}`}>Thus, H.W. Bode proposed a different but powerful and helpful method for the purpose of stability analysis of the control system.</p>
      <h5 className={`text-${props.mode==="dark"?"light":"dark"}`}>Bode Plot consists of 2 plots:</h5>
      <p className={`text-${props.mode==="dark"?"light":"dark"}`}>
      <ul>
        <li>Magnitude plot: <p>
          In this plot, magnitude is represented in logarithmic values against logarithmic values of frequency.
        </p>
        <p>For the transfer function G(jω)H(jω), in order to express the magnitude in logarithmic values, we need to find,</p>
        <MathComponent tex={String.raw`G(j\omega) = 20log_{10} G(j\omega) db`}/> </li>
        <li>Phase angle plot:
        <p>Here, the phase angle in degrees is sketched against logarithmic values of frequency.</p>
        <MathComponent tex={String.raw`\phi = \angle G(j\omega) H(j\omega)`}/></li>
      </ul></p>

      <h4 className={`my-2 text-${props.mode==="dark"?"light":"dark"}`}>Procedure to bode plot</h4>
      <p className={`text-${props.mode==="dark"?"light":"dark"}`}>
        <ul>
          <li>Represent the open loop transfer function in the standard time constant form.</li>
          <li>Substitute, s=jω in the above equation.</li>
          <li>Find the corner frequencies and arrange them in ascending order.</li>
          <li>Consider the starting frequency of the Bode plot as 1/10th of the minimum corner frequency or 0.1 rad/sec whichever is smaller value and draw the Bode plot upto 10 times maximum corner frequency.</li>
          <li>Draw the magnitude plots for each term and combine these plots properly.</li>
          <li>Draw the phase plots for each term and combine these plots properly.</li>
        </ul>
      </p>
      <p className={`text-${props.mode==="dark"?"light":"dark"}`}><strong>Note</strong> − The corner frequency is the frequency at which there is a change in the slope of the magnitude plot.</p>
    <div className={`my-4`}/>
      <h4 className={`text-${props.mode==="dark"?"light":"dark"}`}>Example of bode plot</h4>
      <img src={bodeplot} className="d-block mx-auto" width={`650px`} alt="..."/>
      <div className={`card-body align="center"`}>
        <p className={`card-text text-${props.mode==="dark"?"light":"dark"}`} align={`center`}>Fig: Example of bode plot</p>
      </div>


    <div className={`my-lg-5`}/>
    <iframe title={`rootlocus`} src="https://lpsa.swarthmore.edu/Bode/bodeDraw.html?c=6&num=s&den=s^2%2B2s%2B100" width="100%" height="650px"
            frameBorder="0">Root Locus</iframe>
    </div>
      </>

)
}

export default Exp4B
