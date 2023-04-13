import React from 'react'
import ss_4_1_1 from "../ss_4_1_1.png";
import ss_4_1_2 from "../ss_4_1_2.png";
import ss_4_1_3 from "../ss_4_1_3.png";
import ss_4_1_4 from "../ss_4_1_4.png";
import Exp_4_2 from "../Exp_4_2.mp4";



export default function Exp4b(props) {
return (
    <div>
        <div className='container my-lg-5'>
        <h1 className={`text-${props.mode==="dark"?"light":"dark"}`}><strong>Experiment-4B</strong></h1>
        </div>
        <h2 className={`text-${props.mode==="dark"?"light":"dark"}`}><strong>Title:</strong> Virtual modelling for Kinematic and Dynamic verification of any one robotic structure using suitable software.</h2>
        <div className='container my-4'/>
        <h3 className={`text-${props.mode==="dark"?"light":"dark"}`}><strong>Aim:</strong> To verify the kinematic and dynamic modelling of given model as robotic structure using Coppeliasim software.</h3>
        <div className='container my-5'/>
        <h4 className={`my-3 text-${props.mode==="dark"?"light":"dark"}`}>Introduction</h4>
            <p className={`text-${props.mode==="dark"?"light":"dark"}`}>The robotics simulator CoppeliaSim, with integrated development environment, is based on a
                distributed control architecture: each object/model can be individually controlled via an
                embedded script, a plugin, ROS / ROS2 nodes, remote API clients, or a custom solution. This
                makes CoppeliaSim very versatile and ideal for multi-robot applications. Controllers can be
                written in C/C++, Python, Java, Lua, Matlab or Octave. Following are just a few of
                CoppeliaSim's applications:</p>
            <p className={`text-${props.mode==="dark"?"light":"dark"}`}>
                <li className={`text-${props.mode==="dark"?"light":"dark"}`}>Simulation of factory automation systems</li>
                <li className={`text-${props.mode==="dark"?"light":"dark"}`}>Remote monitoring</li>
                <li className={`text-${props.mode==="dark"?"light":"dark"}`}>Hardware control</li>
                <li className={`text-${props.mode==="dark"?"light":"dark"}`}>Fast prototyping and verification</li>
                <li className={`text-${props.mode==="dark"?"light":"dark"}`}>Safety monitoring</li>
                <li className={`text-${props.mode==="dark"?"light":"dark"}`}>Fast algorithm development</li>
                <li className={`text-${props.mode==="dark"?"light":"dark"}`}>Robotics related education</li>
                <li className={`text-${props.mode==="dark"?"light":"dark"}`}>Product presentation</li>
            </p>
            <p className={`text-${props.mode==="dark"?"light":"dark"}`}></p>
            <p className={`text-${props.mode==="dark"?"light":"dark"}`}></p>
        <div className="container my-6">
            <div id="carouselExample" className="carousel slide">
                <div className="carousel-inner">

                    <div className="carousel-item active">
                        <img src={ss_4_1_1} className="d-block" height="650px" alt="model"/>

                    </div>
                    <div className="carousel-item">
                        <img src={ss_4_1_2} className="d-block" height="650px" alt="script"/>

                    </div>
                    <div className="carousel-item">
                        <img src={ss_4_1_3} className="d-block" height="650px" alt="simulation"/>

                    </div>
                    <div className="carousel-item">
                        <img src={ss_4_1_4} className="d-block" height="650px" alt="simulation"/>

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
            <div className='continer my-5' />
            <h5><strong className={`text-${props.mode==="dark"?"light":"dark"}`}>Procedure</strong></h5>
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

            <div className={`youtube tutorial my-4`}>
                <iframe width="100%" height="650px" src="https://www.youtube.com/embed/iD2Dc6r7PeQ"
                        title="YouTube video player" frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen></iframe>
            </div>

            <div>
                <h5><strong className={`text-${props.mode==="dark"?"light":"dark"}`}>Simulation of model</strong></h5>
                <video controls width="100%" height="100%">
                    <source src={Exp_4_2} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
            <div className='conatiner my-4'/>
            <h5><strong className={`text-${props.mode==="dark"?"light":"dark"}`}>Conclusion</strong></h5>
            <p className={`text-${props.mode==="dark"?"light":"dark"}`}>One of the critical modeling as kinematics and dynamics of given model is can be verified with using suitable Coppeliasim software.</p>
        </div>
        <a  href='https://www.coppeliarobotics.com/helpFiles/en/apiFunctions.htm' target="_blank" rel="noreferrer" >API for CoppeliaSim</a>
    </div>
)
}
