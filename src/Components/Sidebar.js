import React from 'react'
import {Link} from "react-router-dom"

export default function sidebar() {
  return (
    <>
    <div>
      </div>
    <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">Button</button>

    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
    <div class="offcanvas-header">
      <h5 class="offcanvas-title" id="offcanvasRightLabel">Subjects</h5>
      <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
      <div class="offcanvas-body">
        <Link to="/kdr">Kinematics and dynamics</Link>

      <a href="https://www.ibm.com">IBM</a>

      <h1>KDR</h1>
      <a href="https://www.ibm.com" target="_blank" rel="noreferrer">IBM</a>
      <a href='https://matlab.mathworks.com/' target="_blank" rel="noreferrer">matlab</a>
      </div>
    </div></>
  )
}