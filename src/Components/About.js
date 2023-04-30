import "./About.css";


export default function About(props) {
  return (
    <>
    <div className={`container my-4`}>
        <h2 className={`heading-2 text-${props.mode==="light"?"dark":"light"}`}>Subjects</h2>
        <div className="accordion accordion-flush" id="accordionPanelsStayOpenExample">
            <div className="accordion-item">
                <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse"
                            data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true"
                            aria-controls="panelsStayOpen-collapseOne">
                        <strong>Kinematics and Dynamics of Robots</strong>
                    </button>
                </h2>
                <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show"
                     aria-labelledby="panelsStayOpen-headingOne">
                    <div className="accordion-body">
                        <strong>Kinematics and Dynamics of Robots (K.D.R.)</strong> <p> Kinematics and dynamics are two related subjects in physics and engineering that deal with the motion of objects and systems.</p>
                        <p> Kinematics is the study of motion without considering the forces that cause the motion. It involves describing the position, velocity, and acceleration of objects in terms of time and space. Kinematics provides a mathematical framework for analysing motion and predicting the behavior of objects in motion. Some key topics in kinematics include the laws of motion, linear and angular motion, and trajectories.</p>
                        <p>Dynamics, on the other hand, is the study of motion in the presence of forces. It involves analyzing the forces acting on an object or system and determining how those forces affect its motion. Dynamics provides a deeper understanding of the causes of motion and can be used to predict the behavior of complex systems. Some key topics in dynamics include Newton's laws of motion, energy and momentum, and systems of particles and rigid bodies.</p>
                        <p>Both kinematics and dynamics are essential for understanding the behavior of physical systems and for designing and analyzing engineering systems. For example, in robotics, kinematics is used to determine the position and orientation of a robot's end-effector, while dynamics is used to analyze the forces acting on the robot's joints and to design control algorithms that enable the robot to move in a desired manner.</p>
                    </div>
                </div>
            </div>








            <div className="accordion-item">
                <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false"
                            aria-controls="panelsStayOpen-collapseTwo">
                        <strong>Robotic Control System</strong>
                    </button>
                </h2>
                <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse"
                     aria-labelledby="panelsStayOpen-headingTwo">
                    <div className="accordion-body">
                        <strong>Robotic Control System (R.C.S.)</strong> <p>Control system is a subject that deals with the analysis, design, and implementation of systems that regulate or control other systems or processes. Control systems can be found in a wide range of applications, including robotics, manufacturing, transportation, aerospace, and many others.</p>
                        <p>The subject of control systems is typically divided into two main areas: classical control theory and modern control theory. Classical control theory focuses on the design of control systems based on mathematical models that describe the behavior of the system. It includes techniques such as transfer function analysis, root locus analysis, and frequency response analysis. Modern control theory, on the other hand, emphasizes the use of advanced mathematical tools such as state-space analysis, optimal control, and adaptive control to design control systems that are more robust and efficient.</p>
                        <p>Some of the key topics covered in the subject of control systems include:
                            <ul>
                                <li>Modelling of physical systems using differential equations and transfer functions</li>
                                <li>Analysis of system response and stability</li>
                                <li>Design of controllers using classical and modern control techniques</li>
                                <li>Implementation of controllers using analog and digital control systems</li>
                                <li>Optimization and performance evaluation of control systems</li>
                                <li>Control systems is an important subject for engineers and scientists working in a variety of fields, as it provides them with the tools and techniques needed to design and implement effective control systems that can improve the performance and efficiency of complex systems and processes.</li>
                            </ul></p>


                    </div>
                </div>
            </div>

     </div>
    {/* <div className='container'>*/}
    {/*    <button type="button" onClick={toggleStyle} className="btn btn-dark">{btntext}</button>*/}
    {/* </div>*/}
    </div>

    <div className={`container my-5`}>
        <div className={`accordion accordion-flush`} id="accordionExample" >
            <h3 className={`heading-3 text-${props.mode==="light"?"dark":"light"}`}>About Us</h3>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                    <button className="accordion-button collapsed" type="button"  data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        <strong>Developed By</strong>
                    </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                    <div className="accordion-body"  >
                        <strong> <code> Vaibhav Satpute, Aditi Bhargava, Avanish Shimpi</code> students of Robotics and Automation department, as the mini project for subject of Kinematics and Dynamics of Robots, and Robotic Control System in the 4th semester</strong>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}
