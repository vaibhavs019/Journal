import React from 'react'

function Exp1C(props) {
  return (
    <div>
      <h2 className={`text-${props.mode==="dark"?"light":"dark"}`}>Experiment-1C</h2>
      <h3 className={`text-${props.mode==="dark"?"light":"dark"}`}>Generation of continous(CTS) and discrete(DTS) time signal </h3>
      <div className='container my-4'/>
        <div class="row">
          <div class="col-2">
            <nav id="navbar-example3" class="h-100 flex-column align-items-stretch pe-4 border-end">
              <nav class="nav nav-pills flex-column">
                <a className={`nav-link text-${props.mode==="light"?"dark":"light"}`} href="#item-1">Continuous Time Signal</a>
                <nav class="nav nav-pills flex-column">
                  <a className={`nav-link ms-3 my-1 text-${props.mode==="light"?"dark":"light"}`} href="#item-1-1">Item 1-1</a>
                  <a className={`nav-link ms-3 my-1 text-${props.mode==="light"?"dark":"light"}`} href="#item-1-2">Item 1-2</a>
                </nav>
                <a className={`nav-link text-${props.mode==="light"?"dark":"light"}`} href="#item-3">Discrete Time Signal</a>
                <nav class="nav nav-pills flex-column">
                  <a className={`nav-link ms-3 my-1 text-${props.mode==="light"?"dark":"light"}`} href="#item-3-1">Item 3-1</a>
                  <a className={`nav-link ms-3 my-1 text-${props.mode==="light"?"dark":"light"}`} href="#item-3-2">Item 3-2</a>
                </nav>
              </nav>
            </nav> 
          </div>

          <div class="col-8">
            <div data-bs-spy="scroll" data-bs-target="#navbar-example3" data-bs-smooth-scroll="true" class="scrollspy-example-2" tabindex="0">
              <div id="item-1">
                <h4 className={`text-${props.mode==="dark"?"light":"dark"}`}>Continuous Time Signal</h4>
                <p className={`text-${props.mode==="dark"?"light":"dark"}`}>...</p>
              </div>
              <div id="item-1-1">
                <h5 className={`text-${props.mode==="dark"?"light":"dark"}`}>Item 1-1</h5>
                <p className={`text-${props.mode==="dark"?"light":"dark"}`}>...</p>
              </div>
              <div id="item-1-2">
                <h5 className={`text-${props.mode==="dark"?"light":"dark"}`}>Item 1-2</h5>
                <p className={`text-${props.mode==="dark"?"light":"dark"}`}>...</p>
              </div>
              <div id="item-3">
                <h4 className={`text-${props.mode==="dark"?"light":"dark"}`}>Discrete Time Signal</h4>
                <p className={`text-${props.mode==="dark"?"light":"dark"}`}>...</p>
              </div>
              <div id="item-3-1">
                <h5 className={`text-${props.mode==="dark"?"light":"dark"}`}>Item 3-1</h5>
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

export default Exp1C
