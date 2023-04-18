import React from 'react'
import exp21 from "../exp21.jpg"
import exp22 from "../exp22.jpg"
import exp23 from "../exp23.png"
export default function Exp6K(props) {
  return (
    <div>
        <div className='container my-lg-5'>
      <h1 className={`text-${props.mode==="dark"?"light":"dark"}`}><strong>Dobot Magician</strong></h1>
        </div>
      <h2 className={`text-${props.mode==="dark"?"light":"dark"}`}><strong>Experiment-2</strong> </h2>
        <div className={`my-4`} />
      <h3 className={`text-${props.mode==="dark"?"light":"dark"}`}><strong>Aim: Demonstration of writing and drawing task</strong></h3>
      <div className='container my-5'/>
        <p className={`text-${props.mode==="dark"?"light":"dark"}`}>The below figure shows the process flow of writing and drawing</p>
        <img src={exp21} className={`d-block mx-auto`} alt={`...`}/>
        <h5 className={`text-${props.mode==="dark"?"light":"dark"}`}>Installing a writing and drawing kit</h5>
        <p className={`text-${props.mode==="dark"?"light":"dark"}`}>A writing and drawing kit consists of a pen and a pen holder</p>
        <img src={exp22} className={`d-block mx-auto`} alt={`..`}/>

        <h5 className={`text-${props.mode==="dark"?"light":"dark"}`}>Connecting the DobotStudio</h5>
        <p className={`text-${props.mode==="dark"?"light":"dark"}`}>
            <ul>
            <li className={`text-${props.mode==="dark"?"light":"dark"}`}>Lunch the Dobot studio and click on the COM port and connect the dobot. If the current
                firmware of the Dobot Magician is the 3D Printing firmware instead of the Dobot
                firmware, the Select tool dialog box is displayed, asking if you want to switch to the
                Dobot firmware. In this case, perform the following steps to switch to this firmware.</li>
            <li className={`text-${props.mode==="dark"?"light":"dark"}`}>The Dobot firmware upgrade window is displayed</li>
            <li className={`text-${props.mode==="dark"?"light":"dark"}`}>Click Confirm to upgrade the Dobot firmware, as shown in Figure. When the
                upgrade process bar shows 100%, and a short beep sound is heard, it means that the
                firmware is upgraded successfully, as shown in Figure. In this case, the LED
                indicator turns from red to green. Then click Quit to exit</li>
            <li className={`text-${props.mode==="dark"?"light":"dark"}`}>During the firmware upgrade, do not stop it. Otherwise, errors occur.</li>
            <li className={`text-${props.mode==="dark"?"light":"dark"}`}>Then click and connect write and draw</li>
            <li className={`text-${props.mode==="dark"?"light":"dark"}`}>Chose the pen as end effector</li>
            <li className={`text-${props.mode==="dark"?"light":"dark"}`}>Importing Image Files and Setting Writing Parameters. The imported image should
                be placed within the annular area on the Write & Draw page, as shown in Figure. If
                not, the robotic arm reaches its limited position and cannot draw or write. In this case,
                the image is highlighted with a red border</li>
                <img src={exp23} className={`d-block mx-auto`} height={`450px`} alt={`..`} />
            <li className={`text-${props.mode==="dark"?"light":"dark"}`}> Click Open on the Write & Draw page to import a built-in PLT or SVG
                image file from the DobotStudio installation directory
                InstallatonDirectory\DobotStudio\config\prefab\system\source, You can
                also import your custom PLT or SVG image file.</li>
            <li className={`text-${props.mode==="dark"?"light":"dark"}`}>Click a shape in the Input Shapes area, Click Input Texts on the Write
                & Draw page to input texts, and set its style, and then click OK to display
                the text on the annular area</li>
            <li className={`text-${props.mode==="dark"?"light":"dark"}`}>Click Open to import an image file such as BMP, JEPG, or PNG to
                convert this image to its corresponding SVG file that the DobotStudio
                supports, as shown in Figure. Once this image is imported, the SVG
                Converter dialog box is displayed, as shown in Figure. In this
                dialog box, drag the slider to set the black and white threshold, and click
                Convert Bitmap To SVG to perform the conversion, and then click Plot
                to Main Scene to display the converted SVG file on the annular area of the write & Draw page.</li></ul>
        </p>

        <h5 className={`text-${props.mode==="dark"?"light":"dark"}`}>Write and draw page</h5>
        <p className={`text-${props.mode==="dark"?"light":"dark"}`}>
            <ul>
            <li className={`text-${props.mode==="dark"?"light":"dark"}`}>Click Write & Draw to set the Dobot Magician’s Velocity (mm/s),
                junction velocity (JunctionVel: mm/s), PlanAcc (mm/s2), acceleration
                (Acc: mm/s2), PenUpOffset (mm), PenDown (mm)</li>
            <li className={`text-${props.mode==="dark"?"light":"dark"}`}>Adjust the Position of the Pen Nib, Press and hold the unlock button on the
                Forearm to move the Dobot Magician to raise and lower the pen nib until it
                slightly squeezes the paper. You can also jog the robotic arm in the
                Cartesian or Joint coordinate system to slowly pull the Z axis down to a
                suitable vertical position for writing,</li>
            <li className={`text-${props.mode==="dark"?"light":"dark"}`}>Click on AutoZ and SyncoPos and then start for writing. When writing,
                click Pause to pause the writing and Stop to halt the writing</li></ul>

        </p>

    </div>
  )
}
