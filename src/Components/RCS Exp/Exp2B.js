import React from 'react'
import {MathComponent} from "mathjax-react";

function Exp2B(props) {
  return (
    <div>
      <h2 className={`text-${props.mode==="dark"?"light":"dark"}`}>Experiment-2B</h2>
      <h3 className={`text-${props.mode==="dark"?"light":"dark"}`}>Transfer Function of Time Domain Signal using any Simulation software</h3>
<div className={`my-4`} />
      <div class="row">
        <div class="col-2">
          <nav id="navbar-example3" class="h-100 flex-column align-items-stretch pe-4 border-end">
            <nav class="nav nav-pills flex-column">
              <a className={`nav-link text-${props.mode==="light"?"dark":"light"}`} href="#item-1">Transfer function</a>
              <nav class="nav nav-pills flex-column">
                <a className={`nav-link ms-3 my-1 text-${props.mode==="light"?"dark":"light"}`} href="#item-1-1">Formula</a>
                <a className={`nav-link ms-3 my-1 text-${props.mode==="light"?"dark":"light"}`} href="#item-1-2">Example</a>
              </nav>
              <a className={`nav-link text-${props.mode==="light"?"dark":"light"}`} href="#item-3">Time domain signal</a>
              <nav class="nav nav-pills flex-column">
                <a className={`nav-link ms-3 my-1 text-${props.mode==="light"?"dark":"light"}`} href="#item-3-1">Formula</a>
                <a className={`nav-link ms-3 my-1 text-${props.mode==="light"?"dark":"light"}`} href="#item-3-2">Characteristics</a>
              </nav>
            </nav>
          </nav>
        </div>

        <div class="col-8">
          <div data-bs-spy="scroll" data-bs-target="#navbar-example3" data-bs-smooth-scroll="true" class="scrollspy-example-2" tabindex="0">
            <div id="item-1">
              <h4 className={`text-${props.mode==="dark"?"light":"dark"}`}>Transfer function</h4>
              <p className={`text-${props.mode==="dark"?"light":"dark"}`}>It is a mathematical statement (equation) that describes the transfer characteristics of a system. A transfer function defines the relationship between the input to a system and its output. It is typically written in the frequency domain (S-domain), rather than the time domain(t-domain). The Laplace transform is used to map the time domain representation to frequency domain representation.
              a transfer function is a convinient way to represent a linear, time varient system in terms of its input-output relationship. it is obtain by applying a laplace transform to differential equation describing system dyanamics, assuming zero initial condition. in the absence of these equation a transfer function can also be estimated from measured input-output data.</p>
            </div>
            <div id="item-1-1">
              <h5 className={`text-${props.mode==="dark"?"light":"dark"}`}>Formula </h5>
              <p className={`text-${props.mode==="dark"?"light":"dark"}`}><MathComponent tex={String.raw`TF = \frac{Laplace \; transform \; of \;Output} {\!Laplace \;transform \;of \;Input} = \frac{R(s)}{C(s)}`} /></p>
            </div>
            <div id="item-1-2">
              <h5 className={`text-${props.mode==="dark"?"light":"dark"}`}>Example</h5>
              <p className={`text-${props.mode==="dark"?"light":"dark"}`}>Let input be an unit step signal of amplitude 2 and response of </p>
              <MathComponent tex={String.raw`Tf = \frac{L[r(t)]}{L[u(t)]}`}/>
              <div className={`my-4`}/>
              <MathComponent tex={String.raw`Tf = \frac{L[\frac{-3e^{-8t}}{20} + {\frac{e^{-3t}}{15}} + {\frac{1}{12}}]}{L[2]} `} />
              <div className={`my-4`}/>
              <MathComponent tex={String.raw` Tf = \frac{s(s+2)}{s(s+3)(s+8)} `} />
            </div>
            <div id="item-3">
              <h4 className={`text-${props.mode==="dark"?"light":"dark"}`}>Time domain signal</h4>
              <p className={`text-${props.mode==="dark"?"light":"dark"}`}>Time domain refers to the analysis of mathematical functions, physical signals or time series of economic or environmental data, with respect to time. In the time domain, the signal or function's value is known for all real numbers, for the case of continuous time, or at various separate instants in the case of discrete time. An oscilloscope is a tool commonly used to visualize real-world signals in the time domain. A time-domain graph shows how a signal changes with time, whereas a frequency-domain graph shows how much of the signal lies within each given frequency band over a range of frequencies.</p>
            </div>
            <div id="item-3-1">
              <h5 className={`text-${props.mode==="dark"?"light":"dark"}`}>Formula</h5>
              <p className={`text-${props.mode==="dark"?"light":"dark"}`}><MathComponent tex={String.raw`x(t) = A\:Sin({2 \pi ft + \phi})`}/> </p>
            </div>
            <div id="item-3-2">
              <h5 className={`text-${props.mode==="dark"?"light":"dark"}`}>Characteristics of time domain signal</h5>
              <p className={`text-${props.mode==="dark"?"light":"dark"}`}>
                <ul>
                  <li><strong>Amplitude:</strong> The amplitude of a time-domain signal refers to the strength or magnitude of the signal. It is usually measured as the difference between the maximum and minimum values of the signal.</li>
                  <li><strong>Frequency:</strong> The frequency of a time-domain signal refers to the number of cycles or oscillations that occur per unit time. It is usually measured in Hertz (Hz), which represents the number of cycles per second.</li>
                  <li><strong>Period:</strong> The period of a time-domain signal is the time it takes for one complete cycle or oscillation to occur. It is the inverse of the frequency and is measured in seconds.</li>
                  <li><strong>Phase:</strong> The phase of a time-domain signal refers to the relative timing of the signal with respect to a reference waveform. It is measured in radians or degrees and indicates the amount of delay or shift of the signal.</li>
                  <li><strong>Rise time:</strong> The rise time of a time-domain signal is the time it takes for the signal to rise from a low value to a high value. It is an important parameter for measuring the speed and performance of electronic systems.</li>
                  <li><strong>Peak time:</strong> The peak time is the time taken by the system response to reach its maximum value after a step input is applied. It is the time taken by the response to reach its first peak, which is often the maximum value of the response. It is usually measured in seconds.</li>
                  <li><strong>Peak overshoot:</strong> The peak overshoot is the maximum percentage by which the system response overshoots the steady-state value after a step input is applied. It is the difference between the maximum value of the response and the steady-state value, expressed as a percentage of the steady-state value.</li>
                  <li><strong>Settling time:</strong> Settling time is the time taken by the system response to reach and remain within a specified range around the steady-state value after a step input is applied. A shorter settling time indicates a faster and more accurate response of the system.</li>
                  <li><strong>Decay time:</strong> The decay time of a time-domain signal is the time it takes for the signal to decay from a high value to a low value. It is also an important parameter for measuring the performance of electronic systems.</li>
                  <li><strong>DC offset:</strong> The DC offset of a time-domain signal refers to the constant value added to the signal. It can affect the behavior and performance of electronic systems and is usually removed by AC-coupling.</li>
                </ul>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Exp2B
