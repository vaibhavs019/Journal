import React from 'react'
import Exp_3_1 from "../Exp_3_1.mp4"
import exp_3_1_1 from "../exp_3_1_1.png"
import exp_3_1_2 from "../exp_3_1_2.png"
import exp_3_1_3 from "../exp_3_1_3.png"
import { saveAs } from 'file-saver';
// import "./Exp3A.css"




const downloadFile = () => {
    fetch('../Exp_3_model.ttt')
        .then(response => response.blob())
        .then(blob => {
            saveAs(blob, 'Exp_3_model.ttt');
        });
};


export default function Exp3a(props) {
    return (
        <>
        <div>
            <div className='container my-lg-5'>
                <h1 className={`text-${props.mode==="dark"?"light":"dark"}`}><strong>Experiment-3A</strong></h1>
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
                <ul>
                <li className={`text-${props.mode==="dark"?"light":"dark"}`}>Simulation of factory automation systems</li>
                <li className={`text-${props.mode==="dark"?"light":"dark"}`}>Remote monitoring</li>
                <li className={`text-${props.mode==="dark"?"light":"dark"}`}>Hardware control</li>
                <li className={`text-${props.mode==="dark"?"light":"dark"}`}>Fast prototyping and verification</li>
                <li className={`text-${props.mode==="dark"?"light":"dark"}`}>Safety monitoring</li>
                <li className={`text-${props.mode==="dark"?"light":"dark"}`}>Fast algorithm development</li>
                <li className={`text-${props.mode==="dark"?"light":"dark"}`}>Robotics related education</li>
                <li className={`text-${props.mode==="dark"?"light":"dark"}`}>Product presentation</li></ul>
            </p>
            <p className={`text-${props.mode==="dark"?"light":"dark"}`}></p>
            <p className={`text-${props.mode==="dark"?"light":"dark"}`}></p>
            <div className="container my-6">
                <div id="carouselExample" className="carousel slide">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={exp_3_1_1} className="d-block w-100" alt="IMG_1438"/>
                        </div>
                        <div className="carousel-item">
                            <img src={exp_3_1_2} className="d-block w-100" alt="ss"/>
                        </div>
                        <div className="carousel-item">
                            <img src={exp_3_1_3} className="d-block w-100" alt="ss"/>
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
                <div className='container my-5' />
                <h5><strong className={`text-${props.mode==="dark"?"light":"dark"}`}>Procedure</strong></h5>
                <p className={`text-${props.mode==="dark"?"light":"dark"}`}>
                    <ul>
                    <li className={`text-${props.mode==="dark"?"light":"dark"}`}>We will start by making the chassis first by adding a cuboid and providing the
                        dimensions as per our requirement and we will position it such that it is little above
                        the ground just like the ground clearance of any car.</li>
                    <li className={`text-${props.mode==="dark"?"light":"dark"}`}>Then we will make a joint and wheel for the right side of the chassis, by simply
                        adding revolute joints and modifying its diameter as per our requirement. Then we
                        will add the wheel by adding a cylinder with some height so that it looks like a wheel
                        and then in the scene hierarchy we must add wheel to the joint created earlier and
                        positioning it origin at some height above the plane while considering joint as parent
                        frame.</li>
                    <li className={`text-${props.mode==="dark"?"light":"dark"}`}>Then we will rotate the joint by 90deg about x axis and then add it to the chassis in
                        the scene hierarchy and adjust the model it such that it looks chassis is connected to
                        wheel using the joint.</li>
                    <li className={`text-${props.mode==="dark"?"light":"dark"}`}>We will add joint and wheels for the right side by simply copying the left joint and
                        wheel and pasting it and defining the positions where they will be added. We will
                        make them the child of the chassis in the scene hierarchy. The body moved a little bit in
                        the z-direction to avoid ground attachment.</li>
                    <li className={`text-${props.mode==="dark"?"light":"dark"}`}>We will create an inclined plane and make body is respond able and reduce the
                        friction of the plane in the dynamic properties of the plane to detect the model and so
                        that it can easily move on it.</li>
                    <li className={`text-${props.mode==="dark"?"light":"dark"}`}>Now, child script(Non-threaded, Lua) is added to Chassis.</li>
                    <li className={`text-${props.mode==="dark"?"light":"dark"}`}>Initialising the functions in the script by recognizing left and right joint and set them to do
                        velocity control and add some target value for the velocity using the correct functions from
                        the CoppeliaSim regular api.</li>
                    <li className={`text-${props.mode==="dark"?"light":"dark"}`}>Now we write function for the position and velocity of our car using the correct functions
                        from the api.</li>
                    <li className={`text-${props.mode==="dark"?"light":"dark"}`}>We will add a graph and add a graph stream in the script corresponding to the chassis
                        and define all the parameters for it.</li>
                    <li className={`text-${props.mode==="dark"?"light":"dark"}`}>Finally we will draw the path of the car using the proper function in the script and
                        defining all the parameters for it.</li>
                    </ul>
                </p>

                <div className={`youtube tutorial my-4`}>
                    <iframe width="100%" height={"650px"} src="https://www.youtube.com/embed/uoL4J9QDZK0"
                            title="YouTube video player" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen></iframe>
                </div>

                <div>
                    <h5><strong className={`text-${props.mode==="dark"?"light":"dark"}`}>Simulation of model</strong></h5>
                <video controls width="100%" height="100%">
                    <source src={Exp_3_1} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className='container my-4'/>
                <h5><strong className={`text-${props.mode==="dark"?"light":"dark"}`}>Conclusion</strong></h5>
                <p className={`text-${props.mode==="dark"?"light":"dark"}`}>One of the critical modeling as kinematics and dynamics of given model is can be verified with using suitable Coppeliasim software.</p>
                </div>
            </div>


            <a  href='https://www.coppeliarobotics.com/helpFiles/en/apiFunctions.htm' target="_blank" rel="noreferrer" >API for CoppeliaSim</a>

            <button onClick={downloadFile}>Download model file</button>


        </div>
</>
    )
}
