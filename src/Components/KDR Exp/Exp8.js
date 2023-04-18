import React from 'react'
import exp41 from "../exp41.png"
import exp42 from "../exp42.jpg"
import exp43 from "../exp43.jpg"
import exp44 from "../exp44.png"
import exp45 from "../exp45.jpg"
import exp46 from "../exp46.jpg"
import exp47 from "../exp47.jpg"
import exp48 from "../exp48.jpg"
import exp49 from "../exp49.jpg"

export default function Exp8K(props) {
  return (
    <div>
        <div className='container my-lg-5'>
      <h1 className={`text-${props.mode==="dark"?"light":"dark"}`}><strong>Dobot Magician</strong></h1>
        </div>
      <h2 className={`text-${props.mode==="dark"?"light":"dark"}`}><strong>Experiment-4</strong> </h2>
        <div className={`my-4`} />
      <h3 className={`text-${props.mode==="dark"?"light":"dark"}`}><strong>Aim: Demonstration of 3d printing task</strong></h3>
      <div className='container my-5'/>
        <p className={`text-${props.mode==="dark"?"light":"dark"}`}>After installing 3D printing kit, you can import 3D module into the 3D
            printing software for 3D printing. Figure 5.118 shows the 3D printing process.</p>
        <img src={exp41} className={`d-block mx-auto`} alt={`...`}/>
        <p className={`text-${props.mode==="dark"?"light":"dark"}`}>During 3D printing, the 3D printing control software is required. You can use <strong>Repetier Host </strong>or<strong> Cura</strong> software for 3D printing.
            <ul>
            <li><strong>Repitier-Host</strong> It can slice with the third party slicing (such as
                CuraEngine, Slic3r, etc), check and modify G-Code, control 3D printing manually.
                More parameter settings make Reptier-Host very flexible.</li>
            <li><strong>Cura</strong>The slicing of Cura is fast and stable. It has strong inclusiveness to 3D
                model structure and less parameter settings.</li>
        </ul></p>

        <h5 className={`text-${props.mode==="dark"?"light":"dark"}`}>Installing a 3d printing kit</h5>
        <p className={`text-${props.mode==="dark"?"light":"dark"}`}>3D printing kit contains extruder, hot end, motor cable, filament, and filament
            holder as shown in Figure.</p>
        <img src={exp42} className={`d-block mx-auto`} alt={`...`}/>

        <h5 className={`text-${props.mode==="dark"?"light":"dark"}`}>Operating Repetier Host</h5>
        <p className={`text-${props.mode==="dark"?"light":"dark"}`}><strong>Repeiter</strong> Host has been built into DobotStudio. After burning 3D printing
            firmware, the Repetier Host page will be displayed automatically.</p>
        <p className={`text-${props.mode==="dark"?"light":"dark"}`}><strong>Prerequisites</strong>
        <ul>
            <li>The 3D printing model has been prepared.</li>
            <li>The printing platform has been prepared and please place it in the workspace
                of the Dobot Magician.</li>
            <li>Dobot Magician has been powered on.</li>
            <li>Dobot Magician has been connected to DobotStudio successfully (Only
                USB connection is supported).</li>
            <li>The 3D printing kit has been installed.</li>
        </ul></p>

        <p className={`text-${props.mode==="dark"?"light":"dark"}`}><strong>Burning Firmware</strong>
            <p className={`text-${props.mode==="dark"?"light":"dark"}`}>After burning 3D printing firmware, the Repetier Host page is displayed
                automatically, as shown in Figure.</p>
            <p className={`text-${props.mode==="dark"?"light":"dark"}`}>If the LED indicator on the base turns red, it indicates that the connection of the 3D
                printing kit is abnormal.</p>
            <p className={`text-${props.mode==="dark"?"light":"dark"}`}>If the current firmware is set for 3D printing when operating 3D printing, you can
                click Connect directly on the DobotStudio page. And then Click OK on the Select
                tool page to switch to Repetier Host, as shown.</p>
            <img src={exp43} className={`d-block mx-auto`} alt={`...`}/>
        </p>

        <h5 className={`text-${props.mode==="dark"?"light":"dark"}`}><strong>Performing 3D Printing</strong></h5>
        <p className={`text-${props.mode==="dark"?"light":"dark"}`}>Printing parameters only need to be set for the first time.
        <ul>
            <li>Click Printer Settings on the top right corner of the Pepetier Host
                page. The Printer Settings page is displayed.</li>
            <li>Set the corresponding parameters on the Connection tab as shown in the red
                box of above figure. The other parameters are set by default.</li>
            <img src={exp44} className={`d-block mx-auto`} width={`400px`} alt={`...`}/>
            <li>Click Apply.</li>
            <li>Unselect the corresponding options on the Printer tab as
                shown in the red box of, Figure and the other parameters
                are set by default. Then, click Apply.</li>
            <li>Set the corresponding parameters on the Extruder tab as shown in the red box of
                figure, the other parameters are set by default. Then, Click Apply.</li>
            <img src={exp45} className={`d-block mx-auto`} width={`400px`} alt={`...`}/>
        </ul></p>
        <p className={`text-${props.mode==="dark"?"light":"dark"}`}>Before printing, you need to test the extruder to check whether the melted filament
            flows from the nozzle of the extruder.</p>
        <p className={`text-${props.mode==="dark"?"light":"dark"}`}>The temperature of the extruder should be above 170°C. Dobot Magician will not
            start 3D printing until the filament is in the melting state. So you need to heat the
            extruder first.</p>
        <p className={`text-${props.mode==="dark"?"light":"dark"}`}>Set the heating temperature to 200°C on the Manual Control tab of the Repetier
            Host page and click, as shown in Figure.
            The heating rod will produce high temperature up to 250°C, please be careful. Do not
            let children play with it alone. The process needs to be monitored when it is running.
            After the process is completed, please turn off the equipment promptly.</p>
        <img src={exp46} className={`d-block mx-auto`} width={`400px`} alt={`...`}/>
        <p className={`text-${props.mode==="dark"?"light":"dark"}`}>During printing, if the distance from Dobot Magician to the printing platform is too
            large or too small to paste the first layer, it can lead to the nozzle blockage. For
            increasing the stickiness of the first layer, placing a masking paper on the platform is
            recommended.</p>
        <p className={`text-${props.mode==="dark"?"light":"dark"}`}>Press the Unlock key on the Forearm and drag Dobot Magician to make the
            printing head contact the surface of the masking paper (The distance between the
            printing head and the surface of the masking paper is the thickness of a sheet of A4
            paper), then release the Unlock key.</p>
        <p className={`text-${props.mode==="dark"?"light":"dark"}`}>Input command M415 on the G-Code command window and press Enter to get the
            current coordinates, as shown in Figure. Also, you can press the Key button on the
            bace of the base to get the current coordinates.</p>
        <p className={`text-${props.mode==="dark"?"light":"dark"}`}>If you cannot find the G-Code command window, please click EASY to close
            Easy Mode.</p>
        <p className={`text-${props.mode==="dark"?"light":"dark"}`}>Click load to impoert the prepared 3D printing model. You can also loadd 3D
            printing model which are DOBOTstudio, the loading path is Installation Directory/
            DobotStudio/ attachment/3DmodelStl.
            After importing the model, you can center, zoom, or rotate the model on the Object
            Placement page, as shown in below figure.</p>
        <img src={exp47} className={`d-block mx-auto`} width={`400px`} alt={`...`}/>
        <p className={`text-${props.mode==="dark"?"light":"dark"}`}>Set slicing parameters and slice up: Select Slicer from Slicer on the Slicer tab of the
            Repetier Host page, and click Configuration
            Set the slicing parameters on the Slicer page.</p>
        <p className={`text-${props.mode==="dark"?"light":"dark"}`}>The 3D printing effect depends on the slice parameters. This topic provides a
            configuration sample, you can select File > Load Config on the Slicer page to
            import it directly for printing.</p>
        <p className={`text-${props.mode==="dark"?"light":"dark"}`}>The path of the configuration sample is Installation
            directory\DobotStudio\attachment</p>
        <img src={exp48} className={`d-block mx-auto`} width={`400px`} alt={`...`}/>
        <p className={`text-${props.mode==="dark"?"light":"dark"}`}>Dobot-2.0-Vase.ini is used for printing a thin-walled vase, while Dobot-2.0-ini is used for the
            filling, the filling rate is 20%.
            Save the Printing Settings, Filament Settings and Printer Settings tabs respectively
            after importing configuration sample
            Click Slice with Slicer on the Slicer tab of the Repetier Host page and click play on the top
            corner.</p>
        <p className={`text-${props.mode==="dark"?"light":"dark"}`}>Here we choose vase mode to print, and the product after printing as shown in figure</p>
        <img src={exp49} className={`d-block mx-auto`} width={`400px`} alt={`...`}/>


        <h5 className={`text-${props.mode==="dark"?"light":"dark"}`}></h5>
        <p className={`text-${props.mode==="dark"?"light":"dark"}`}></p>
    </div>
  )
}
