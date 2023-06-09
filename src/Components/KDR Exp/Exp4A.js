import React from 'react'
import ss_4_2_1 from "../ss_4_2_1.png";
import ss_4_2_2 from "../ss_4_2_2.png";
import ss_4_2_3 from "../ss_4_2_3.png";
import Exp_4 from "../Exp_4.MOV";
// import "./Exp4A.css"


export default function Exp4a(props) {
    return (
        <>
        <div>
            <div className='container my-lg-5'>
            <h1 className={`text-${props.mode==="dark"?"light":"dark"}`}><strong>Experiment-4A</strong></h1>
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
                            <img src={ss_4_2_1} className="d-block w-100 mx-auto" alt="model"/>

                        </div>
                        <div className="carousel-item">
                            <img src={ss_4_2_2} className="d-block w-100 mx-auto" alt="script"/>

                        </div>
                        <div className="carousel-item">
                            <img src={ss_4_2_3} className="d-block w-100 mx-auto" alt="simulation"/>

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
            <h5><strong className={`text-${props.mode==="dark"?"light":"dark"}`}>Procedure</strong></h5>
            <p className={`text-${props.mode==="dark"?"light":"dark"}`}>
                <ul><li className={`text-${props.mode==="dark"?"light":"dark"}`}>Create a new scene in CoppeliaSim: Open CoppeliaSim and create a new scene by selecting "File" > "New Scene" from the main menu.</li>
                    <li className={`text-${props.mode==="dark"?"light":"dark"}`}>Add a robot model: To add a robot model, select "Model" > "Add Model" from the main menu. Choose a robot model that you want to use for your wall follower robot. You can also create your own robot model if you have the necessary skills.</li>
                    <li className={`text-${props.mode==="dark"?"light":"dark"}`}>Add sensors to the robot: To make the line follower robot, add the line sensor module at the bottom of the robot, facing down. The line sensor module should be able to detect the desired colored line that the robot will follow.</li>
                    <li className={`text-${props.mode==="dark"?"light":"dark"}`}>Program the robot: Use the CoppeliaSim API to write the control program for your robot. To make the robot follow the line, the program should read the sensor data and adjust the robot's movement to follow the line.</li>
                    <li className={`text-${props.mode==="dark"?"light":"dark"}`}>Test and refine the robot: Test the robot to see how it performs. If it's not following the line/wall properly, adjust the programming or the sensor placement until you get the desired result.</li>
                    <li className={`text-${props.mode==="dark"?"light":"dark"}`}>Save and export the scene: Once you're satisfied with the robot's performance, save the scene by selecting "File" > "Save Scene As" from the main menu. You can also export the scene as a standalone executable file that can be run on other computers.</li>
                    {/*<li className={`text-${props.mode==="dark"?"light":"dark"}`}></li>*/}
                    {/*<li className={`text-${props.mode==="dark"?"light":"dark"}`}></li>*/}
                    {/*<li className={`text-${props.mode==="dark"?"light":"dark"}`}></li>*/}
                    {/*<li className={`text-${props.mode==="dark"?"light":"dark"}`}></li>*/}
                </ul>
            </p>


                <div className={`youtube tutorial my-4`}>
                    <iframe width="100%" height="650px" src="https://www.youtube.com/embed/ugHmacZhR0I"
                            title="YouTube video player" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen></iframe>
                </div>

                <div>
                    <h5><strong className={`text-${props.mode==="dark"?"light":"dark"}`}>Simulation of model</strong></h5>
                <video controls width="100%" height="100%">
                    <source src={Exp_4} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                </div>
                <div className='conatiner my-4'/>
            <h5><strong className={`text-${props.mode==="dark"?"light":"dark"}`}>Conclusion</strong></h5>
            <p className={`text-${props.mode==="dark"?"light":"dark"}`}>One of the critical modeling as kinematics and dynamics of given model is can be verified with using suitable Coppeliasim software.</p>
            </div>

        </div>
        <a  href='https://www.coppeliarobotics.com/helpFiles/en/apiFunctions.htm' target="_blank" rel="noreferrer" >API for CoppeliaSim</a>
        </>
    )
}
