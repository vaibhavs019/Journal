import React from 'react'
import {MathComponent} from "mathjax-react";
import Laplace from '../Laplace.png';


function Exp2A(props) {
  return (
    <div>
      <h2 className={`text-${props.mode==="dark"?"light":"dark"}`}>Experiment-2A</h2>
      <h3 className={`text-${props.mode==="dark"?"light":"dark"}`}>Laplace transform and inverse laplace transform of time domain signal using any simulation software</h3>

      <div class="row">
        <div class="col-2">
          <nav id="navbar-example3" class="h-100 flex-column align-items-stretch pe-4 border-end">
            <nav class="nav nav-pills flex-column">
              <a className={`nav-link text-${props.mode==="light"?"dark":"light"}`} href="#item-1">Laplace TransForm</a>
              <nav class="nav nav-pills flex-column">
                <a className={`nav-link ms-3 my-1 text-${props.mode==="light"?"dark":"light"}`} href="#item-1-1">Formula</a>
                {/*<a className={`nav-link ms-3 my-1 text-${props.mode==="light"?"dark":"light"}`} href="#item-1-2">Item 1-2</a>*/}
              </nav>
              <a className={`nav-link text-${props.mode==="light"?"dark":"light"}`} href="#item-3">Inverse Laplace TransForm</a>
              <nav class="nav nav-pills flex-column">
                <a className={`nav-link ms-3 my-1 text-${props.mode==="light"?"dark":"light"}`} href="#item-3-1">Formula</a>
                {/*<a className={`nav-link ms-3 my-1 text-${props.mode==="light"?"dark":"light"}`} href="#item-3-2">Item 3-2</a>*/}
              </nav>

              <a className={`nav-link text-${props.mode==="light"?"dark":"light"}`} href="#item-5">General formulae</a>

              <a className={`nav-link text-${props.mode==="light"?"dark":"light"}`} href="#item-4">Applications</a>





        </nav>

          </nav>
        </div>

        <div class="col-8">
          <div data-bs-spy="scroll" data-bs-target="#navbar-example3" data-bs-smooth-scroll="true" class="scrollspy-example-2" tabindex="0">
            <div id="item-1">
              <h4 className={`text-${props.mode==="dark"?"light":"dark"}`}>Laplace TransForm</h4>
              <p className={`text-${props.mode==="dark"?"light":"dark"}`}>In mathematics, the Laplace transform, named after its discoverer Pierre-Simon Laplace (/ləˈplɑːs/), is an integral transform that converts a function of a real variable (usually t, in the time domain) to a function of a complex variables (in the complex frequency domain, also known as s-domain, or s-plane). The transform has many applications in science and engineering because it is a tool for solving differential equations.In particular, it transforms ordinary differential equations into algebraic equations and convolution into multiplication.
              The Laplace transform of a function f(t), defined for all real numbers t ≥ 0, is the function F(s), which is a unilateral transform defined by</p>
            </div>
            <div id="item-1-1">
              <h5 className={`text-${props.mode==="dark"?"light":"dark"}`}>Formula </h5>
              <p className={`text-${props.mode==="dark"?"light":"dark"}`}><MathComponent tex={String.raw` F(s) =  \int_{0}^{\infty} f(t)\,e^{-st}\,dx `} /> </p>
            </div>
            {/*<div id="item-1-2">*/}
            {/*  <h5 className={`text-${props.mode==="dark"?"light":"dark"}`}>Item 1-2</h5>*/}
            {/*  <p className={`text-${props.mode==="dark"?"light":"dark"}`}>...</p>*/}

            {/*</div>*/}
            <div id="item-3">
              <h4 className={`text-${props.mode==="dark"?"light":"dark"}`}>Inverse Laplace TransForm</h4>
              <p className={`text-${props.mode==="dark"?"light":"dark"}`}>Two integrable functions have the same Laplace transform only if they differ on a set of Lebesgue measure zero. This means that, on the range of the transform, there is an inverse transform. In fact, besides integrable functions, the Laplace transform is a one-to-one mapping from one function space into another in many other function spaces as well, although there is usually no easy characterization of the range.
                  Typical function spaces in which this is true include the spaces of bounded continuous functions, the space L∞(0, ∞), or more generally tempered distributions on (0, ∞). The Laplace transform is also defined and injective for suitable spaces of tempered distributions.</p>
            </div>
            <div id="item-3-1">
              <h5 className={`text-${props.mode==="dark"?"light":"dark"}`}>Formula</h5>
              <p className={`text-${props.mode==="dark"?"light":"dark"}`}><MathComponent tex={String.raw` f(t) = L^{-1}{[F(s)]}`}/> </p>
            </div>
            <div className={`my-5`} id="item-5">
              {/*<h5 className={`text-${props.mode==="dark"?"light":"dark"}`}>Item 3-2</h5>*/}

              {/*<p className={`text-${props.mode==="dark"?"light":"dark"}`}>...</p>*/}

              <img src={Laplace} width={`850px`} alt={`...`}/>

              <div className={`card-body align="center"`}>
                <p className={`card-text text-${props.mode==="dark"?"light":"dark"}`} align={`center`}>Table: General Laplace and time domain functions</p>
              </div>
            </div>
            <div id="item-4">
              <h4 className={`text-${props.mode==="dark"?"light":"dark"}`}>Applications</h4>
              <p className={`text-${props.mode==="dark"?"light":"dark"}`}>The Laplace transform is used frequently in engineering.the output of a linear time-invariant system can be calculated by convolving its unit impulse response with the input signal.
              Performing this calculation in Laplace space turns the convolution into a multiplication; the latter being easier to solve because of its algebraic form.The Laplace transform is invertible on a large class of functions. Given a simple mathematical or functional description of an input or output to a system, the Laplace transform provides an alternative functional description that often simplifies the process of analyzing the behavior of the system, or in synthesizing a new system based on a set of specifications.
              The Laplace transform can also be used to solve differential equations and is used extensively in mechanical engineering and electrical engineering. The Laplace transform reduces a linear differential equation to an algebraic equation, which can then be solved by the formal rules of algebra.</p>
            </div>
            {/*<div id="item-4-1">*/}
            {/*  <h5 className={`text-${props.mode==="dark"?"light":"dark"}`}>Impulse responce</h5>*/}
            {/*  <p className={`text-${props.mode==="dark"?"light":"dark"}`}>Consider a linear time-invariant system with transfer function.*/}
            {/*  The impulse response is simply the inverse Laplace transform of this transfer function:</p>*/}
            {/*</div>*/}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Exp2A
