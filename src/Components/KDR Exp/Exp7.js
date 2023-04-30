import React from 'react'
import exp31 from "../exp31.jpg"
import exp32 from "../exp32.png"
import exp33 from "../exp33.jpg"
import exp34 from "../exp34.jpg"
import exp35 from "../exp35.jpg"
import exp36 from "../exp36.jpg"
// import "./Exp7css"



export default function Exp7K(props) {
  return (
    <div>
        <div className='container my-lg-5'>
      <h1 className={`text-${props.mode==="dark"?"light":"dark"}`}><strong>Dobot Magician</strong></h1>
        </div>
      <h2 className={`text-${props.mode==="dark"?"light":"dark"}`}><strong>Experiment-3</strong> </h2>
        <div className={`my-4`} />
      <h3 className={`text-${props.mode==="dark"?"light":"dark"}`}><strong>Aim: Demonstration of laser engraving and grey scale engraving task</strong></h3>
      <div className='container my-5'/>
        <p className={`text-${props.mode==="dark"?"light":"dark"}`}>The LaserEngraving is different is from the grayscale engraving. The former uses
            the same firmware and DobotStudio function module as those of the Write & Draw function, and it can only engrave a vector graphics by drawing lines while the latter can engrave a grayscale image.</p>
        <img src={exp31} className={`d-block mx-auto`} alt={`..`}/>
        <img src={exp32} className={`d-block mx-auto`} alt={`..`}/>
        <h5 className={`text-${props.mode==="dark"?"light":"dark"}`}></h5>
        <ul className={`text-${props.mode==="dark"?"light":"dark"}`}>
            <li>Installing a Laser Kit:
            <p>A laser kit includes a laser as shown in below figure</p></li>
            <img src={exp33} className={`d-block mx-auto`} alt={`..`}/>
            <li>Connecting the DobotStudio:
            <p>Choose leaser as end effector</p></li>
            <img src={exp34} className={`d-block mx-auto`} alt={`..`}/>
        </ul>
        <h5 className={`text-${props.mode==="dark"?"light":"dark"}`}>Importing Image Files and Setting Engraving Parameters</h5>
        <p className={`text-${props.mode==="dark"?"light":"dark"}`}>When performing a laser-engraving task, a built-in or a custom image file is
            required. Only a PLT or SVG image can be used. The built-in image file is located in the directory:
        <ul>
            <li>Installation</li>
            <li>Directory\DobotStudio\config\prefab\system\source.</li>
            <li>Prerequisites
            <p>A PLT or SVG image file has been created
                <ul>
            <li>When using a laser, wear lasing protective eyeglass.</li>
                <li>Never aim the laser at a person’s eye and clothes or stare at the laser from
                    within the beam.</li>
                <li>In the central laser focus, a high temperature heat is created and can burn
                    materials such as papers and wooden boards.</li>
                <li>Never aim the laser at a person and their clothes.</li>
                <li>Do not allow the children to play with the Dobot Magician. Monitor the robotic
                    arm while it is running and power off it once the movement is complete.</li>
                <li>If you cannot set the laser to be at its minimum focus, it’s probably because
                    the focal length is long. To shorten the focal length, slightly turn the sliver
                    lens screw (as shown in Figure) on the bottom of the laser kit.</li>
                <li>The point marked by a red box, as shown in Figure, corresponds to the position of
                    the end-effector of the Dobot Magician. This point changes its position only within the
                    annular area when the robotic arm moves.</li>
                <li>Once this step is complete, the next time you start to engrave, directly import a PLT or
                    SVG image file without adjusting the position of the laser kit, and click SyncPos, and
                    then click Start to start engraving on the paper.</li>
                <li>When engraving, click Pause to pause the engraving and Stop to halt the engraving.
                    below figure shows the effect of the laser-engraving</li>
                </ul>
            </p></li>
            <img src={exp35} className={`d-block mx-auto`} alt={`..`}/>
            <li>Installing a Grayscale-engraving Kit
            <ul>
                <li>Both grayscale-engraving and laser-engraving use the laser kit as the end-effector.</li>
                <li>Click Setting on the LaserEngraving page.</li>
                <li>Set the JunctionVel (junction velocity), PlanAcc (linear acceleration), and Acc
                    (acceleration), for example, set all to 5</li>
                <li>The Dobot Magician automatically moves above the position of the start point
                    of the laser-engraving.</li>
                <li>When engraving, click Pause to pause the engraving and Stop to halt the
                    engraving. Figure, shows the effect of the laser-engraving</li>
            </ul></li>
        </ul></p>
        <img src={exp36} className={`d-block mx-auto`} alt={`..`}/>
        <h5 className={`text-${props.mode==="dark"?"light":"dark"}`}></h5>
        <p className={`text-${props.mode==="dark"?"light":"dark"}`}></p>
    </div>
  )
}
