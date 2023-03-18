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
                        <strong>Kinematics and Dynamics of Robots (K.D.R.)</strong> is a
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
                        <strong>Robotic Control System (R.C.S.)</strong> is a
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
