import React from 'react'
import ss3 from "../ss3.png";
import ss2 from "../ss2.png";
import ss from "../ss.png";
import Exp_4 from "../Exp_4.MOV";


export default function Exp4a(props) {
    return (
        <div>
            <h1 className={`text-${props.mode==="dark"?"light":"dark"}`}><strong>Experiment-4A</strong></h1>
            <h2 className={`text-${props.mode==="dark"?"light":"dark"}`}><strong>Title: VIRTUAL MODELING FOR KINEMATIC AND DYNAMIC VERIFICATION ANY ONE ROBOTIC STRUCTURE USING SUITABLE SOFTWARE</strong> </h2>
            <h3 className={`text-${props.mode==="dark"?"light":"dark"}`}><strong>Aim: To verify the kinematic and dynamic modelling of given model as robotic structure using Coppeliasim software.</strong></h3>
            <div className='container my-5'/>
            <h4 className={`my-3 text-${props.mode==="dark"?"light":"dark"}`}>Introduction</h4>
            <p className={`text-${props.mode==="dark"?"light":"dark"}`}>The robotics simulator CoppeliaSim, with integrated development environment, is based on a
                distributed control architecture: each object/model can be individually controlled via an
                embedded script, a plugin, ROS / ROS2 nodes, remote API clients, or a custom solution. This
                makes CoppeliaSim very versatile and ideal for multi-robot applications. Controllers can be
                written in C/C++, Python, Java, Lua, Matlab or Octave. Following are just a few of
                CoppeliaSim's applications:</p>
            <p className={`text-${props.mode==="dark"?"light":"dark"}`}>
                <li className={`text-${props.mode==="dark"?"light":"dark"}`}></li>
                <li className={`text-${props.mode==="dark"?"light":"dark"}`}></li>
                <li className={`text-${props.mode==="dark"?"light":"dark"}`}></li>
                <li className={`text-${props.mode==="dark"?"light":"dark"}`}></li>
                <li className={`text-${props.mode==="dark"?"light":"dark"}`}></li>
                <li className={`text-${props.mode==="dark"?"light":"dark"}`}></li>
                <li className={`text-${props.mode==="dark"?"light":"dark"}`}></li>
                <li className={`text-${props.mode==="dark"?"light":"dark"}`}></li>
            </p>
            <p className={`text-${props.mode==="dark"?"light":"dark"}`}></p>
            <p className={`text-${props.mode==="dark"?"light":"dark"}`}></p>
            <div className="container my-6">
                <div id="carouselExample" className="carousel slide">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={ss3} className="d-block w-100" alt="IMG_1438"/>
                        </div>
                        <div className="carousel-item">
                            <img src={ss2} className="d-block w-100" alt="ss"/>
                        </div>
                        <div className="carousel-item">
                            <img src={ss} className="d-block w-100" alt="ss"/>
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
                <div className='continer my-4' />
            <h5><strong>Procedure</strong></h5>
            <p className={`text-${props.mode==="dark"?"light":"dark"}`}>
                <li className={`text-${props.mode==="dark"?"light":"dark"}`}></li>
                <li className={`text-${props.mode==="dark"?"light":"dark"}`}></li>
                <li className={`text-${props.mode==="dark"?"light":"dark"}`}></li>
                <li className={`text-${props.mode==="dark"?"light":"dark"}`}></li>
                <li className={`text-${props.mode==="dark"?"light":"dark"}`}></li>
                <li className={`text-${props.mode==="dark"?"light":"dark"}`}></li>
                <li className={`text-${props.mode==="dark"?"light":"dark"}`}></li>
                <li className={`text-${props.mode==="dark"?"light":"dark"}`}></li>
                <li className={`text-${props.mode==="dark"?"light":"dark"}`}></li>
                <li className={`text-${props.mode==="dark"?"light":"dark"}`}></li>
            </p>
                <div className='conatiner my-4'/>
                <video controls width="100%" height="100%">
                    <source src={Exp_4} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className='conatiner my-4'/>
            <h5><strong>Conclusion</strong></h5>
            <p>One of the critical modeling as kinematics and dynamics of given model is can be verified with using suitable Coppeliasim software.</p>
            </div>
        </div>
    )
}
