import React from 'react'
import exp11 from "../exp11.png";
import exp12 from "../exp12.png";
import exp13 from "../exp13.png";
import exp14 from "../exp14.jpg";
import exp15 from "../exp15.jpg";
import Cartesian from "../Cartesian.gif";
// import "./Exp5.css"



export default function Exp5(props) {
  return (
      <>
    <div>
        <div className='container my-lg-5'>
        <h1 className={`text-${props.mode==="dark"?"light":"dark"}`}><strong>Dobot Magician</strong></h1>
        </div>
        <h2 className={`text-${props.mode==="dark"?"light":"dark"}`}><strong>Experiment-1</strong> </h2>
        <div className={`my-4`} />
        <h3 className={`text-${props.mode==="dark"?"light":"dark"}`}><strong>Aim: Demonstration of performing teaching and playback task</strong></h3>
        <div className='container my-5'/>

        <h5 className={`text-${props.mode==="dark"?"light":"dark"}`}>Installing a suction cup</h5>
        <p className={`text-${props.mode==="dark"?"light":"dark"}`}>A suction cup kit is the default end-effector shipped with the Dobot Magician. When using the suction cup kit, an air pump is necessary, as shown in Figure. </p>
        <img src={exp11} className={`d-block  mx-auto`} height={`250px`} alt="..." />
        <div className={`card-body align="center"`}>
            <p className={`card-text text-${props.mode==="dark"?"light":"dark"}`} align={`center`}>Fig: Suction cup kit</p>
        </div>
        <div className={`my-3`} />
        <h5 className={`text-${props.mode==="dark"?"light":"dark"}`}>Procedure</h5>
        <p className={`text-${props.mode==="dark"?"light":"dark"}`}>Connect the air pump’s power cable SW1 to the SW1 connector on the Dobot Magician base  rear panel and the single cable GP1 to the GP1 connector and follow the below given figure  to install vacuum and other gripper for further operations.</p>
        <img src={exp12} className={`d-block  mx-auto`} height={`250px`} alt="..." />
        <div className={`my-3`} />
        <img src={exp13} className={`d-block  mx-auto`} height={`350px`} alt="..." />

        <div className={`my-3`} />
        <h5 className={`text-${props.mode==="dark"?"light":"dark"}`}>Teaching and playback page</h5>
        <p className={`text-${props.mode==="dark"?"light":"dark"}`}>
            <ul>
            <li className={`text-${props.mode==="dark"?"light":"dark"}`}>The Teaching & Playback page in the software to access it, select
                Connect > Teaching & Playback on the DobotStudio page.</li>
            <li className={`text-${props.mode==="dark"?"light":"dark"}`}>In both Easy and Pro modes, you can switch between Easy and Pro modes,
                set loop, speed percentage, and acceleration percentage</li>
            <li className={`text-${props.mode==="dark"?"light":"dark"}`}>In both Easy and Pro modes, you can save points, set the motion mode and
                the pause time for a save point</li>
            <li className={`text-${props.mode==="dark"?"light":"dark"}`}>In both Easy and Pro modes, you can edit a highlighted save point such as
                copy, paste, cut, switch between motion modes, modify name and coordinates</li>
            <li className={`text-${props.mode==="dark"?"light":"dark"}`}>Pro mode: To enter the Pro mode from the current Easy mode, click the
                Easy/Pro slider, as shown in Figure. Apart from all the functions in
                the default Easy mode, the Pro mode allows the robotic arm to run a save
                point each time, detect lost-steps, work in offline mode, and perform the
                multiplexed I/O interface.</li></ul>
            <img src={exp14} className={`d-block  mx-auto`} height={`250px`} alt="..." />

            <p className={`my-3 text-${props.mode==="dark"?"light":"dark"}`}>Regarding the jogging speed and acceleration in the Joint coordinate system and
                Cartesian coordinate system, we recommend that it should be lessthan 500mm/sifloaded
                and that less than 800mm/s if not loaded.</p>
            <img src={exp15} className={`d-block  mx-auto`} height={`250px`} alt="..." />
            <ul>

            <li className={`text-${props.mode==="dark"?"light":"dark"}`}>Jog the Dobot Magician in the Cartesian or Joint coordinate system to move the
                suction cup close enough to the small cube for picking-up. For example, the
                suction cup reaches this location called position A.</li>
            <li className={`text-${props.mode==="dark"?"light":"dark"}`}>Select SuctionCup on the Operation Panel to turn on the air pump to pick
                up the small cube.</li>
            <li className={`text-${props.mode==="dark"?"light":"dark"}`}>Set the PauseTime to 1 second in the Save Point area.</li>
            <li className={`text-${props.mode==="dark"?"light":"dark"}`}>Click +Point to save the coordinate corresponding to the position A</li>
            <li className={`text-${props.mode==="dark"?"light":"dark"}`}>Before using offline mode, Dobot Magician needsto be reset by clicking Home
                to make Dobot Magician more accurate. For the details please refer to Appendix
                A Dobot Magician Homing Operation</li>
            <li className={`text-${props.mode==="dark"?"light":"dark"}`}>If press down Key button for long time, Dobot Magician will execute
                homing operation directly.</li></ul>
        </p>


    </div>
      </>
  )
}
