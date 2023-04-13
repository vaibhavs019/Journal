import React from 'react'

function Exp2B(props) {
  return (
    <div>
      <h2 className={`text-${props.mode==="dark"?"light":"dark"}`}>Experiment-2B</h2>
      <h3 className={`text-${props.mode==="dark"?"light":"dark"}`}>Transfer Function of Time Domain Signal using any Simulation software</h3>

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
                <a className={`nav-link ms-3 my-1 text-${props.mode==="light"?"dark":"light"}`} href="#item-3-2">Example</a>
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
              <p className={`text-${props.mode==="dark"?"light":"dark"}`}>.</p>
            </div>
            <div id="item-1-2">
              <h5 className={`text-${props.mode==="dark"?"light":"dark"}`}>Example</h5>
              <p className={`text-${props.mode==="dark"?"light":"dark"}`}>...</p>
            </div>
            <div id="item-3">
              <h4 className={`text-${props.mode==="dark"?"light":"dark"}`}>Time domain signal</h4>
              <p className={`text-${props.mode==="dark"?"light":"dark"}`}>Time domain refers to the analysis of mathematical functions, physical signals or time series of economic or environmental data, with respect to time. In the time domain, the signal or function's value is known for all real numbers, for the case of continuous time, or at various separate instants in the case of discrete time. An oscilloscope is a tool commonly used to visualize real-world signals in the time domain. A time-domain graph shows how a signal changes with time, whereas a frequency-domain graph shows how much of the signal lies within each given frequency band over a range of frequencies.</p>
            </div>
            <div id="item-3-1">
              <h5 className={`text-${props.mode==="dark"?"light":"dark"}`}>Formula</h5>
              <p className={`text-${props.mode==="dark"?"light":"dark"}`}>...</p>
            </div>
            <div id="item-3-2">
              <h5 className={`text-${props.mode==="dark"?"light":"dark"}`}>Item 3-2</h5>
              <p className={`text-${props.mode==="dark"?"light":"dark"}`}>...</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Exp2B
