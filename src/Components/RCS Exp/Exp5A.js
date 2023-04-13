import React from 'react'
import olcs from '../olcs.png';

function Exp5A(props) {
  return (
    <div>
      <h2 className={`text-${props.mode==="dark"?"light":"dark"}`}>Experiment-5A</h2>
      <h3 className={`text-${props.mode==="dark"?"light":"dark"}`}>Open Loop Control System(OLCS) analysis using simulation sotware</h3>
    <div className='container my-4'/>
        <div class="row">
          <div class="col-2">
            <nav id="navbar-example3" class="h-100 flex-column align-items-stretch pe-4 border-end">
              <nav class="nav nav-pills flex-column">
                <a className={`nav-link text-${props.mode==="light"?"dark":"light"}`} href="#item-1">Open Loop Control System</a>
                <nav class="nav nav-pills flex-column">
                  <a className={`nav-link ms-3 my-1 text-${props.mode==="light"?"dark":"light"}`} href="#item-1-1">Advantages</a>
                  <a className={`nav-link ms-3 my-1 text-${props.mode==="light"?"dark":"light"}`} href="#item-1-2">Disadvantages</a>
                  <a className={`nav-link ms-3 my-1 text-${props.mode==="light"?"dark":"light"}`} href="#item-1-3">Applications</a>
                </nav>
              </nav>
            </nav> 
          </div>

          <div class="col-8">
            <div data-bs-spy="scroll" data-bs-target="#navbar-example3" data-bs-smooth-scroll="true" class="scrollspy-example-2" tabindex="0">
              <div id="item-1">
                <h4 className={`text-${props.mode==="dark"?"light":"dark"}`}><strong>Open Loop Control System</strong></h4>
                <p className={`text-${props.mode==="dark"?"light":"dark"}`}>An open-loop system is a type of control system in which the output of the system depends on the input but the input or the controller is independent of the output of the system. These systems do not contain any feedback loop and thus are also known as non-feedback system.</p>
                <p className={`text-${props.mode==="dark"?"light":"dark"}`}>In open-loop systems, the output is neither measured nor fed back to the input for further consideration.</p>
                <p className={`text-${props.mode==="dark"?"light":"dark"}`}>In this control system, a reference input is given to the system in order to get the desired output. But the achieved output is not considered by the system for further reference input.</p>
                <p className={`text-${props.mode==="dark"?"light":"dark"}`}>Basically, according to the required output, an input is provided to the controller of the system. Depending on the achieved input, the controller generates the control signal which is fed to the processing unit. Thus according to the control signal, proper processing is performed and output is achieved.</p>
                <p className={`text-${props.mode==="dark"?"light":"dark"}`}>But as there is no feedback path present in the system, thus whether the achieved output is desired or not the input has nothing to do with it.</p>
                <p className={`text-${props.mode==="dark"?"light":"dark"}`}>Examples: Traffic light Controller and Washing machine</p>
                  <img src={olcs} width={`850px`} alt={`...`}/>
                  <figcaption className={`text-${props.mode==="dark"?"light":"dark"}`} align={`center`}>Open Loop control system</figcaption>

              </div>
                <div className={`my-5`}/>
            <div id="item-1-1">  
                <h5 className={`text-${props.mode==="dark"?"light":"dark"}`}><strong>Advantages of Open Loop Control System</strong></h5>
                   <li className={`text-${props.mode==="dark"?"light":"dark"}`}>These systems possess simplicity in construction and ease of maintenance.</li>
                   <li className={`text-${props.mode==="dark"?"light":"dark"}`}>Due to the lesser number of units, overall the system is economic.</li>
                   <li className={`text-${props.mode==="dark"?"light":"dark"}`}>The output provided by the system shows stability.</li>
                   <li className={`text-${props.mode==="dark"?"light":"dark"}`}>The operation is quite convenient.</li>
              </div>
                <div className={`my-4`}/>
            <div id="item-1-2">
                <h5 className={`text-${props.mode==="dark"?"light":"dark"}`}><strong>Disadvantages of Open Loop Control System</strong></h5> 
                   <li className={`text-${props.mode==="dark"?"light":"dark"}`}>These systems require timely recalibration.</li>
                   <li className={`text-${props.mode==="dark"?"light":"dark"}`}>The systems are more prone to errors.</li>
                   <li className={`text-${props.mode==="dark"?"light":"dark"}`}>The changes in the desired output can be the result of internal or external disturbances.</li>
              </div>
                <div className={`my-4`}/>
            <div id="item-1-3">
                <h5 className={`text-${props.mode==="dark"?"light":"dark"}`}><strong>Applications of Open Loop Control System</strong></h5>
                <p className={`text-${props.mode==="dark"?"light":"dark"}`}>Open-loop systems widely find their applications in the following domains:</p>
                   <li className={`text-${props.mode==="dark"?"light":"dark"}`}>In the traffic light controlling system</li>
                   <li className={`text-${props.mode==="dark"?"light":"dark"}`}>TV remote control</li>
                   <li className={`text-${props.mode==="dark"?"light":"dark"}`}>Immersion Rod</li>
                   <li className={`text-${props.mode==="dark"?"light":"dark"}`}>Automatic washing machines,</li>
                   <li className={`text-${props.mode==="dark"?"light":"dark"}`}>In room heaters,</li>
                   <li className={`text-${props.mode==="dark"?"light":"dark"}`}>Automatic door opening and closing systems etc.</li>
                </div>
            
              </div>
            </div>
          </div>
        </div>
    
  )
}

export default Exp5A
