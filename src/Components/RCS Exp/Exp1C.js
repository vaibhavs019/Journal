import React from 'react'
import add from '../perDTS.png';
import diff from '../casDTS.png';


function Exp1C(props) {
  return (
    <div>
      <h2 className={`text-${props.mode==="dark"?"light":"dark"}`}><strong>Experiment-1C</strong></h2>
      <h3 className={`text-${props.mode==="dark"?"light":"dark"}`}><strong>Generation of continous(CTS) and discrete(DTS) time signal </strong></h3>
        <div className="container my-6">



        <div className='container my-4'/>
        <div class="row">
          <div class="col-2">
            <nav id="navbar-example3" class="h-100 flex-column align-items-stretch pe-4 border-end">
              <nav class="nav nav-pills flex-column">
                <a className={`nav-link text-${props.mode==="light"?"dark":"light"}`} href="#item-1">Continuous Time Signal</a>
                <nav class="nav nav-pills flex-column">
                  <a className={`nav-link ms-3 my-1 text-${props.mode==="light"?"dark":"light"}`} href="#item-1-1">Properties</a>
                  <a className={`nav-link ms-3 my-1 text-${props.mode==="light"?"dark":"light"}`} href="#item-1-2">Measures</a>
                </nav>
                <a className={`nav-link text-${props.mode==="light"?"dark":"light"}`} href="#item-2">Discrete Time Signal</a>
                <nav class="nav nav-pills flex-column">
                  <a className={`nav-link ms-3 my-1 text-${props.mode==="light"?"dark":"light"}`} href="#item-2-1">Properties</a>
                  <a className={`nav-link ms-3 my-1 text-${props.mode==="light"?"dark":"light"}`} href="#item-2-2">Measures</a>
                </nav>
              </nav>
            </nav> 
          </div>

          <div class="col-8">
            <div data-bs-spy="scroll" data-bs-target="#navbar-example3" data-bs-smooth-scroll="true" class="scrollspy-example-2" tabindex="0">
              <div id="item-1">
                <h4 className={`text-${props.mode==="dark"?"light":"dark"}`}><strong>Continuous Time Signal</strong></h4>
                <p className={`text-${props.mode==="dark"?"light":"dark"}`}>If a signal is defined at all values of t where t is a continuous variable, this is known as a continuous time signal.</p>
                <p className={`text-${props.mode==="dark"?"light":"dark"}`}>A continuous-time signal is an infinite and uncountable sequence of numbers, as are the possible values each number can have.</p>
                <p className={`text-${props.mode==="dark"?"light":"dark"}`}>A continuous-time signal x(t) is represented by an uncountably infinite number of dependent variable points (e.g., an uncountably infinite number of values across time).</p>
                <p className={`text-${props.mode==="dark"?"light":"dark"}`}>Examples: Sine wave, Cosine wave, Triangular wave,</p>
              </div>
            <div id="item-1-1">  
                <h5 className={`text-${props.mode==="dark"?"light":"dark"}`}><strong>Properties of Continuous Time Signal</strong></h5>
                <p className={`text-${props.mode==="dark"?"light":"dark"}`}>Continuous Time Signal consists of the following properties:</p>
                   <li className={`text-${props.mode==="dark"?"light":"dark"}`}>The continuous-time signals x(t) is even when</li>
                <p className={`text-${props.mode==="dark"?"light":"dark"}`}>x(−t)= x(t)</p>
                   <li className={`text-${props.mode==="dark"?"light":"dark"}`}>The continuous-time signals x(t) is odd when</li>
                <p className={`text-${props.mode==="dark"?"light":"dark"}`}>x(−t)= −x(t)</p>
                   <li className={`text-${props.mode==="dark"?"light":"dark"}`}>A continuous-time signal x(t) is said to be causal when </li>
                <p className={`text-${props.mode==="dark"?"light":"dark"}`}>x(t) =0 ; for t &lt; 0</p>
                   <li className={`text-${props.mode==="dark"?"light":"dark"}`}>A continuous-time signal x(t) is said to be anticausal when</li>
                <p className={`text-${props.mode==="dark"?"light":"dark"}`}>x(t) = 0 ; for t ≥ 0</p>
              </div>
            <div id="item-1-2">
                <h5 className={`text-${props.mode==="dark"?"light":"dark"}`}><strong>Measures of Continuous Time Signal</strong></h5>  
              </div>
            <div id="item-1-3">
                <h6 className={`text-${props.mode==="dark"?"light":"dark"}`}><strong>Energy</strong></h6>
                <p className={`text-${props.mode==="dark"?"light":"dark"}`}>The energy of a continuous-time signal x(t):</p>
                <p className={`text-${props.mode==="dark"?"light":"dark"}`}>Ex=∫∞−∞|x(t)|2dt</p>
                </div>
            <div id="item-1-4">
                <h6 className={`text-${props.mode==="dark"?"light":"dark"}`}><strong>Power</strong></h6>
                <p className={`text-${props.mode==="dark"?"light":"dark"}`}>The power of a continuous-time signal x(t):</p>
                <p className={`text-${props.mode==="dark"?"light":"dark"}`}>Px=limT→∞1T∫T/2−T/2|x(t)|2dt</p>
              </div>
              <div id="item-2">
                <h4 className={`text-${props.mode==="dark"?"light":"dark"}`}><strong>Discrete Time Signal</strong></h4>
                <p className={`text-${props.mode==="dark"?"light":"dark"}`}>A discrete time signal is a signal whose value is taken at discrete measurements. With a discrete time signal there will be time periods of n where you do not have a value. DT signals are represented using the form x[n]. Discrete signals are approximations of CT signals</p>
                <p className={`text-${props.mode==="dark"?"light":"dark"}`}>Discrete time views values of variables as occurring at distinct, separate "points in time", or equivalently as being unchanged throughout each non-zero region of time ("time period")—that is, time is viewed as a discrete variable. Thus a non-time variable jumps from one value to another as time moves from one time period to the next. A discrete signal or discrete-time signal is a time series consisting of a sequence of quantities. </p>
                <p className={`text-${props.mode==="dark"?"light":"dark"}`}>Examples: If we took the temperature reading of a room every day at the same time, the result would be a discrete-time signal. Sound recording is also an example of discrete time signal.</p>
              </div>
              <div id="item-2-1">
                <h5 className={`text-${props.mode==="dark"?"light":"dark"}`}><strong>Properties of Discrete Time Signal</strong></h5>
                <p className={`text-${props.mode==="dark"?"light":"dark"}`}>Discrete time signals consist of the following properties:</p>
                <li className={`text-${props.mode==="dark"?"light":"dark"}`}>The discrete-time signals x[n] is even when</li>
                <p className={`text-${props.mode==="dark"?"light":"dark"}`}>x[−n]=x[n]</p>
                <li className={`text-${props.mode==="dark"?"light":"dark"}`}>The discrete-time signals x[n] is odd when</li>
                <p className={`text-${props.mode==="dark"?"light":"dark"}`}>x[−n]=−x[n]</p>
                <li className={`text-${props.mode==="dark"?"light":"dark"}`}>A discrete-time signal x[n] is said to be causal when</li>
                <p className={`text-${props.mode==="dark"?"light":"dark"}`}>x[n] = 0 ; for n &lt; 0</p>
                <li className={`text-${props.mode==="dark"?"light":"dark"}`}>A discrete-time signal x[n] is said to be anticausal when</li>
                <p className={`text-${props.mode==="dark"?"light":"dark"}`}>x[n] = 0 ; for n ≥ 0</p>
              </div>
              <div id="item-2-2">
                <h5 className={`text-${props.mode==="dark"?"light":"dark"}`}><strong>Measures of Discrete Time Signal</strong></h5>
                </div>
              <div id="item-2-3">
              <h6 className={`text-${props.mode==="dark"?"light":"dark"}`}><strong>Energy</strong></h6>
                <p className={`text-${props.mode==="dark"?"light":"dark"}`}>The energy of a discrete-time signal x(t)</p>
                <p className={`text-${props.mode==="dark"?"light":"dark"}`}>Ex=∑n=−∞∞|x[n]|2</p>
                </div>
              <div id="item-2-4">
                <h6 className={`text-${props.mode==="dark"?"light":"dark"}`}><strong>Power</strong></h6>
                <p className={`text-${props.mode==="dark"?"light":"dark"}`}>When the signal is periodic, the power simplifies to</p>
                <p className={`text-${props.mode==="dark"?"light":"dark"}`}>Px=1T∫T/2−T/2|x(t)|2dt,</p>
                <p className={`text-${props.mode==="dark"?"light":"dark"}`}></p>
                <p className={`text-${props.mode==="dark"?"light":"dark"}`}></p>
                <p className={`text-${props.mode==="dark"?"light":"dark"}`}></p>
                <p className={`text-${props.mode==="dark"?"light":"dark"}`}></p>

                  <div id="carouselExample" className="carousel slide">
                      <div className="carousel-inner">
                          <div className="carousel-item active">
                              <img src={add} className={`d-block mx-auto`} height={`500px`}  align={`center`} alt="IMG_1438"/>
                          </div>
                          <div className="carousel-item">
                              <img src={diff} className={`d-block  mx-auto`} height={`200px`} width={`600px`} align={`center`} alt="ss"/>
                          </div>
                      </div>
                      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample"
                              data-bs-slide="prev">
                          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                          <span className="visually-hidden">Previous</span>
                      </button>
                      <button className="carousel-control-next" type="button" data-bs-target="#carouselExample"
                              data-bs-slide="next">
                          <span className="carousel-control-next-icon" aria-hidden="true"></span>
                          <span className="visually-hidden">Next</span>
                      </button>
                  </div>
                  <div className={`card-body align="center"`}>
                      <p className={`card-text text-${props.mode==="dark"?"light":"dark"}`} align={`center`}>Fig: Different types of signals</p>
                  </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
  )
}

export default Exp1C
