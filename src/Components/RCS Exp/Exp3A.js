import React from 'react'
import rc from "../RC.png";
import rl from "../RL.png";

function Exp3A(props) {
  return (
      <>
    <div>
      <h2 className={`text-${props.mode==="dark"?"light":"dark"}`}>Experiment-3A</h2>
      <h3 className={`text-${props.mode==="dark"?"light":"dark"}`}>Time domain analysis of an electric circuit(RLC circuit)</h3>
        <div className={`my-5`}/>
        <h4 className={`text-${props.mode==="dark"?"light":"dark"}`}>Resistance</h4>
          <p className={`text-${props.mode==="dark"?"light":"dark"}`}>According to Ohm’s law, there is a relation between the current flowing through a conductor and the potential difference across it. It is given by,</p>
          <p className={`text-${props.mode==="dark"?"light":"dark"}`}>V is directly proportional to I, </p>
          <p className={`text-${props.mode==="dark"?"light":"dark"}`}>V = I * R</p>
          <p className={`text-${props.mode==="dark"?"light":"dark"}`}>where,
          <li className={`text-${props.mode==="dark"?"light":"dark"}`}>V is the potential difference measured across the conductor (in volts)</li>
          <li className={`text-${props.mode==="dark"?"light":"dark"}`}>I is the current through the conductor (in amperes)</li>
          <li className={`text-${props.mode==="dark"?"light":"dark"}`}>R is the constant of proportionality called resistance (in ohms)</li>
          </p>
          <p className={`text-${props.mode==="dark"?"light":"dark"}`}>Factors Affecting Electrical Resistance</p>
          <li className={`text-${props.mode==="dark"?"light":"dark"}`}>The cross-sectional area of the conductor</li>
          <li className={`text-${props.mode==="dark"?"light":"dark"}`}>Length of the conductor</li>
          <li className={`text-${props.mode==="dark"?"light":"dark"}`}>The material of the conductor</li>
          <li className={`text-${props.mode==="dark"?"light":"dark"}`}>The temperature of the conducting material</li>
          <p className={`text-${props.mode==="dark"?"light":"dark"}`}></p>

        <div className={`my-4`}/>
        <h4 className={`text-${props.mode==="dark"?"light":"dark"}`}>Inductance</h4>
          <p className={`text-${props.mode==="dark"?"light":"dark"}`}>Inductance is the tendency of an electrical conductor to oppose a change in the electric current flowing through it. L is used to represent the inductance, and Henry is the SI unit of inductance. 1 Henry is defined as the amount of inductance required to produce an emf of 1 volt in a conductor when the current change in the conductor is at the rate of 1 Ampere per second.</p>
          <p className={`text-${props.mode==="dark"?"light":"dark"}`}>An electric current flowing through a conductor creates a magnetic field around it. The strength of the field depends upon the magnitude of the current. The generated magnetic field follows any changes in the current, and from Faraday’s law of induction, we know that changing the magnetic field induces an electromotive force in the conductor. Considering this principle, inductance is defined as the ratio of the induced voltage to the rate of change of current causing it. The electronic component designed to add inductance to a circuit is an inductor.</p>
          <p className={`text-${props.mode==="dark"?"light":"dark"}`}></p>

          <p className={`text-${props.mode==="dark"?"light":"dark"}`}>Factors Affecting Electrical Resistance</p>
          <li className={`text-${props.mode==="dark"?"light":"dark"}`}>Number of Wire Turns in the Coil</li>
          <li className={`text-${props.mode==="dark"?"light":"dark"}`}>Coil Area</li>
          <li className={`text-${props.mode==="dark"?"light":"dark"}`}>Core material</li>
          <li className={`text-${props.mode==="dark"?"light":"dark"}`}>Coil length</li>
          <p className={`text-${props.mode==="dark"?"light":"dark"}`}></p>

        <div className={`my-4`}/>
        <h4 className={`text-${props.mode==="dark"?"light":"dark"}`}>Capacitance</h4>
          <p className={`text-${props.mode==="dark"?"light":"dark"}`}>Capacitance is the ratio of the change in the electric charge of a system to the corresponding change in its electric potential.</p>
          <p className={`text-${props.mode==="dark"?"light":"dark"}`}>The conducting plates have some charges Q1 and Q2 (Usually, if one plate has +q, the other has –q charge). The electric field in the region between the plates depends on the charge given to the conducting plates. We also know that potential difference (V) is directly proportional to the electric field hence we can say,</p>
          <p className={`text-${props.mode==="dark"?"light":"dark"}`}>Q is directly proportional to V</p>
          <p className={`text-${props.mode==="dark"?"light":"dark"}`}>Q = C * V</p>
          <p className={`text-${props.mode==="dark"?"light":"dark"}`}>where,
            <li className={`text-${props.mode==="dark"?"light":"dark"}`}>V is the potential difference</li>
            <li className={`text-${props.mode==="dark"?"light":"dark"}`}>Q is the electric field around the capacitor</li>
            <li className={`text-${props.mode==="dark"?"light":"dark"}`}>C is the constant of proportionality called as Capacitance</li>
          </p>
          <p className={`text-${props.mode==="dark"?"light":"dark"}`}>Factors Affecting Electrical Resistance</p>
          <li className={`text-${props.mode==="dark"?"light":"dark"}`}>The effect of dielectric on capacitance is that the greater the permittivity of the dielectric, the greater the capacitance, likewise lesser the permittivity of the dielectric the lesser is the capacitance. Some materials offer less opposition to the field flux for a given amount of field force. Materials with greater permittivity allow more field flux. Hence greater charge is collected.</li>
          <li className={`text-${props.mode==="dark"?"light":"dark"}`}>The effect of spacing on the capacitance is that it is inversely proportional to the distance between the plates.</li>
          <li className={`text-${props.mode==="dark"?"light":"dark"}`}>The effect of the area of the plate is that the capacitance is directly proportional to the area. The larger the plate area, the more the capacitance value.</li>
     </div>

        <div className={`my-5`} />
        <h3 className={`text-${props.mode==="dark"?"light":"dark"}`}>What is RLC circuit?</h3>
        <p className={`text-${props.mode==="dark"?"light":"dark"}`}>An RLC circuit is an electrical circuit consisting of a resistor (R), an inductor (L), and a capacitor (C), connected together in series or in parallel. The RLC circuit is a type of filter circuit that can be used to either filter out certain frequencies or to resonate at a particular frequency.</p>
        <p className={`text-${props.mode==="dark"?"light":"dark"}`}>When an RLC circuit is excited by a voltage source, the circuit's behavior depends on the frequency of the input signal. At low frequencies, the inductor dominates and the circuit behaves like a high-pass filter, allowing high-frequency signals to pass through while attenuating low-frequency signals. At high frequencies, the capacitor dominates and the circuit behaves like a low-pass filter, allowing low-frequency signals to pass through while attenuating high-frequency signals.</p>
        <p className={`text-${props.mode==="dark"?"light":"dark"}`}>At a certain frequency, known as the resonant frequency, the impedance of the RLC circuit is minimized, resulting in a peak in the circuit's response. This phenomenon is known as resonance, and it can be used in applications such as radio tuning circuits and in electrical power transmission systems.</p>
       <h4 className={`text-${props.mode==="dark"?"light":"dark"}`}>RC circuit</h4>
        <p className={`text-${props.mode==="dark"?"light":"dark"}`}>A resistor-capacitor circuit (RC CIrcuit) is an electrical circuit consisting of passive components like resistors and capacitors, driven by the current source or the voltage source.

          The capacitor stores energy and the resistor connected to the circuit control the rate of charging or discharging.

          The charging and the discharging of the capacitor is not an instant process but takes some time. If the resistor and capacitor are connected in series, the capacitor charges gradually through the resistor, until the voltage across the resistor is equal to the supply voltage.</p>


        <img src={rc} className={`d-block mx-auto`} width="450px" height="300px" alt="..."/>
        <div className={`card-body align="center"`}>
          <p className={`card-text text-${props.mode==="dark"?"light":"dark"}`} align={`center`}>Fig: RC circuit using Simulink</p>
        </div>

        <h4 className={`text-${props.mode==="dark"?"light":"dark"}`}>RL circuit</h4>
        <p className={`text-${props.mode==="dark"?"light":"dark"}`}>RL Circuits (resistor – inductor circuit) also called RL network or RL filter is a type of circuit having a combination of inductors and resistors and is usually driven by some power source. As such, an RL circuit has the inductor and a resistor connected in either parallel or series combination with each other. They are either driven by the current (parallel) or a voltage (series) source.</p>
        <div className={`my-3`} />
        <img src={rl} className={`d-block mx-auto`} width={`450px`} height={`300px`} align={`center`} alt="..."/>
        <div className={`card-body align="center"`}>
          <p className={`card-text text-${props.mode==="dark"?"light":"dark"}`} align={`center`}>Fig: RL circuit using Simulink</p>
        </div>
      </>
  )
}

export default Exp3A
