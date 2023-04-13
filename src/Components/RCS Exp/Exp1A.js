import React from 'react'
import MATLAB from '../MATLAB.png'
import Simulink from '../Simulink.png'

function Exp1A(props) {
  return (
    <>
      <h2 className={`text-${props.mode==="dark"?"light":"dark"}`}>Experiment-1A</h2>
      <h3 className={`text-${props.mode==="dark"?"light":"dark"}`}>Introduction to modeling and simulation software</h3>

        <div className={`container my-5`}>
        <div className="row">
            <div className="col-2">
                <nav id="navbar-example3" className="h-100 flex-column align-items-stretch pe-4 border-end">
                    <nav className="nav nav-pills flex-column">
                        <a className={`nav-link text-${props.mode==="light"?"dark":"light"}`} href="#item-1">MATLAB</a>
                        <nav className="nav nav-pills flex-column">
                            <a className={`nav-link ms-3 my-1 text-${props.mode==="light"?"dark":"light"}`} href="#item-1-1">Interfaces</a>
                            <a className={`nav-link ms-3 my-1 text-${props.mode==="light"?"dark":"light"}`} href="#item-1-5">Features</a>
                            <a className={`nav-link ms-3 my-1 text-${props.mode==="light"?"dark":"light"}`} href="#item-1-6">Commands</a>
                            <a className={`nav-link ms-3 my-1 text-${props.mode==="light"?"dark":"light"}`} href="#item-1-8">Plotting</a>

                        </nav>
                        <nav className="nav nav-pills flex-column">
                        <a className={`nav-link text-${props.mode==="light"?"dark":"light"}`} href="#item-2">Simulink</a>
                            <a className={`nav-link ms-3 my-1 text-${props.mode==="light"?"dark":"light"}`} href="#item-2-1">Introduction</a>
                            <a className={`nav-link ms-3 my-1 text-${props.mode==="light"?"dark":"light"}`} href="#item-2-2">Simulink support</a>

                        </nav>
                        <a className={`nav-link text-${props.mode==="light"?"dark":"light"}`}href="#item-3">Commands in MATLAB</a>
                    </nav>
                </nav>
            </div>

            <div className="col-8">
                <div data-bs-spy="scroll" data-bs-target="#navbar-example3" data-bs-smooth-scroll="true"
                     className="scrollspy-example-2" tabIndex="0">
                    <div id="item-1">
                        <h4 className={`text-${props.mode==="dark"?"light":"dark"}`}><strong>MATLAB</strong></h4>
                        <p className={`text-${props.mode==="dark"?"light":"dark"}`}>Introduction to matlab: MATLAB stands for matrix laboratory. It is a high performance language that is used for technical computing. It was developed by Cleve Molar of the company Mathworks.Inc in the year 1984. It is written in c, c++, java. It allows matrix manipulation, plotting of function, implementation of algorithms and creation of users interfaces.</p>
                    </div>
                    <div id="item-1-1">
                        <h4 className={`text-${props.mode==="dark"?"light":"dark"}`}><strong>Interfaces </strong></h4>
                        <p className={`text-${props.mode==="dark"?"light":"dark"}`}>In this interface there are three windows:
                        <li className={`text-${props.mode==="dark"?"light":"dark"}`}>Command window</li>
                        <li className={`text-${props.mode==="dark"?"light":"dark"}`}>Editor(script)</li>
                        <li className={`text-${props.mode==="dark"?"light":"dark"}`}>Workspace</li>
                        </p>
                        <img src={MATLAB} className={`img-fluid`} alt="..." />
                        <div className={`card-body align="center"`}>
                            <p className={`card-text text-${props.mode==="dark"?"light":"dark"}`} align={`center`}>Fig: Preview of MATLAB</p>
                        </div>
                    </div>
                    <div className={`my-3`}id="item-1-2">
                        <h6 className={`text-${props.mode==="dark"?"light":"dark"}`}><strong>Command window</strong></h6>
                        <p className={`text-${props.mode==="dark"?"light":"dark"}`}>This window is used for quick prototyping. These statements cannot be saved, thus this can be used for mall executable programs.</p>
                            
                    </div>

                    <div className={`my-3`} id="item-1-3">
                        <h6 className={`text-${props.mode==="dark"?"light":"dark"}`}><strong>Editor(script)</strong></h6>
                        <p className={`text-${props.mode==="dark"?"light":"dark"}`}>In this we can write larger program with multiple statement. This can be saved by giving the file extension “.m”.</p>
                        
                    </div>
                    <div className={`my-3`} id="item-1-4">
                        <h6 className={`text-${props.mode==="dark"?"light":"dark"}`}><strong>Workspace</strong></h6>
                        <p className={`text-${props.mode==="dark"?"light":"dark"}`}>In this window the value of the variable that are created in the course of the program are displayed.</p>
                        
                      
                    </div>
                    <div className={`my-3`} id="item-1-5">
                         <h4 className={`text-${props.mode==="dark"?"light":"dark"}`}><strong>Features</strong></h4>
                        <p className={`text-${props.mode==="dark"?"light":"dark"}`}>Basic features of MATLAB:
                            <li className={`text-${props.mode==="dark"?"light":"dark"}`}>MATLAB is a high-level language</li>
                            <li className={`text-${props.mode==="dark"?"light":"dark"}`}>Interactive graphics</li>
                            <li className={`text-${props.mode==="dark"?"light":"dark"}`}>A large library of mathematical function</li>
                            <li className={`text-${props.mode==="dark"?"light":"dark"}`}>Data access and processing</li>
                            <li className={`text-${props.mode==="dark"?"light":"dark"}`}>Interactive environment</li>
                            <li className={`text-${props.mode==="dark"?"light":"dark"}`}>MATLAB can interface with different language</li>
                            <li className={`text-${props.mode==="dark"?"light":"dark"}`}>MATLAB’s application programming interface(API)</li>
                        </p>
                        
                    </div>
                    <div className={`my-3`} id="item-1-6">
                        <h4 className={`text-${props.mode==="dark"?"light":"dark"}`}><strong>Commands</strong></h4>
                        <p className={`text-${props.mode==="dark"?"light":"dark"}`}>here are some of the commands that are used in matlab</p>
                        
                      
                    </div>
                    <div className={`my-3`} id="item-1-7">
                        <h6 className={`text-${props.mode==="dark"?"light":"dark"}`}><strong>Ploting in matlab</strong></h6>
                        <p className={`text-${props.mode==="dark"?"light":"dark"}`}>Plotting is a graphical representation of a data set that shows a relationship between two or more variables. Matlab plays an essential role in field of mathematics, science, engineering technology and finance for statistical and data analysis.</p>
                        <p className={`text-${props.mode==="dark"?"light":"dark"}`}><strong>Example:</strong> Plot the function sin (a) on the interval [0, 3π], we first create a vector of a values ranging from 0 to 3π, then compute the sine of these values, and finally plot the result:</p>
                        <li className={`text-${props.mode==="dark"?"light":"dark"}`}>>>a = 0:pi/100:3*pi;  % range is same as used while creating vector  </li>
                        <li className={`text-${props.mode==="dark"?"light":"dark"}`}>>>b = sin(a);  </li>
                        <li className={`text-${props.mode==="dark"?"light":"dark"}`}>>>plot (a, b)  </li>
                      
                    </div>
                    <div className={`my-3`} id="item-1-8 ">
                         <h4 className={`text-${props.mode==="dark"?"light":"dark"}`}><strong>Ploting</strong></h4>
                        <p className={`text-${props.mode==="dark"?"light":"dark"}`}>There are multiple steps involved in plotting-
                            <li className={`text-${props.mode==="dark"?"light":"dark"}`}>creating ploting </li>
                            <li className={`text-${props.mode==="dark"?"light":"dark"}`}>Adding titles, axis labels, and annotation</li>
                            <li className={`text-${props.mode==="dark"?"light":"dark"}`}>creating multiple plots</li>
                            <li className={`text-${props.mode==="dark"?"light":"dark"}`}>line,color and mark style</li>
                            <li className={`text-${props.mode==="dark"?"light":"dark"}`}>Setting axis scales and annotation plots</li>
                            <li className={`text-${props.mode==="dark"?"light":"dark"}`}>Generating sub-plot etc.</li>
                            </p>
                        
                    </div>

                    <div id="item-2">
                        <h4 className={`text-${props.mode==="dark"?"light":"dark"}`}>Simulink</h4>
                        <p className={`text-${props.mode==="dark"?"light":"dark"}`}>Simulink is a simulation and model-based design environment for dyanamic and embedded systems, which are integrated with MATLAB. Simulink was developed by a computer software company MathWorks.
Simulink is a data flow graphical programming language tool for modelling simulating and analysing multi domain dynamic systems it is basically a graphical blog diagram tool with a customizable set of block libraries it also allows you to incorporate matlab algorithms into model as well as export the simulation result into matlab for further analysis.
</p>
<p className={`text-${props.mode==="dark"?"light":"dark"}`}>Here are some following that Simulink supports:
                            <li className={`text-${props.mode==="dark"?"light":"dark"}`}>System-level design </li>
                            <li className={`text-${props.mode==="dark"?"light":"dark"}`}>Simulation</li>
                            <li className={`text-${props.mode==="dark"?"light":"dark"}`}>Automatic code generation.</li>
                            <li className={`text-${props.mode==="dark"?"light":"dark"}`}>Testing and verification of embedded systems.</li>
                            </p>
                            <p className={`text-${props.mode==="dark"?"light":"dark"}`}>The simulink library browsers the collection of many libraries it offers commonly used block, continuous, dashboard, logic and bit operation, math operation etc.</p>
                        <img src={Simulink} className={`img-fluid`} alt="..." />
                        <div className={`card-body align="center"`}>
                            <p className={`card-text text-${props.mode==="dark"?"light":"dark"}`} align={`center`}>Fig: Preview of Simulink</p>
                        </div>
                    </div>

                    <div id="item-3">
                        <h4 className={`my-3 text-${props.mode==="dark"?"light":"dark"}`}>Commands in MATLAB</h4>
                        <p className={`text-${props.mode==="dark"?"light":"dark"}`}>Commands for Managing a Session
                        <table className={`text-${props.mode==="dark"?"light":"dark"}`}>
                                <tbody><tr>
                                <th>Command</th>
                                <th>Purpose</th>
                                </tr>
                                <tr>
                                <td>clc</td>
                                <td>Clears command window.</td>
                                </tr>
                                <tr>
                                <td>clear</td>
                                <td>Removes variables from memory.</td>
                                </tr>
                                <tr>
                                <td>exist</td>
                                <td>Checks for existence of file or variable.</td>
                                </tr>
                                <tr>
                                <td>global</td>
                                <td>Declares variables to be global.</td>
                                </tr>
                                <tr>
                                <td>help</td>
                                <td>Searches for a help topic.</td>
                                </tr>
                                <tr>
                                <td>lookfor</td>
                                <td>Searches help entries for a keyword.</td>
                                </tr>
                                <tr>
                                <td>quit</td>
                                <td>Stops MATLAB.</td>
                                </tr>
                                <tr>
                                <td>who</td>
                                <td>Lists current variables.</td>
                                </tr>
                                <tr>
                                <td>whos</td>
                                <td>Lists current variables (long display).</td>
                                </tr>
                                </tbody></table>
                                <table className={`text-${props.mode==="dark"?"light":"dark"}`}>
                                <tbody><tr>
                                <th>Command</th>
                                <th>Purpose</th>
                                </tr>
                                <tr>
                                <td>cd</td>
                                <td>Changes current directory.</td>
                                </tr>
                                <tr>
                                <td>date</td>
                                <td>Displays current date.</td>
                                </tr>
                                <tr>
                                <td>delete</td>
                                <td>Deletes a file.</td>
                                </tr>
                                <tr>
                                <td>diary</td>
                                <td>Switches on/off diary file recording.</td>
                                </tr>
                                <tr>
                                <td>dir</td>
                                <td>Lists all files in current directory.</td>
                                </tr>
                                <tr>
                                <td>load</td>
                                <td>Loads workspace variables from a file.</td>
                                </tr>
                                <tr>
                                <td>path</td>
                                <td>Displays search path.</td>
                                </tr>
                                <tr>
                                <td>pwd</td>
                                <td>Displays current directory.</td>
                                </tr>
                                <tr>
                                <td>save</td>
                                <td>Saves workspace variables in a file.</td>
                                </tr>
                                <tr>
                                <td>type</td>
                                <td>Displays contents of a file.</td>
                                </tr>
                                <tr>
                                <td>what</td>
                                <td>Lists all MATLAB files in the current directory.</td>
                                </tr>
                                <tr>
                                <td>wklread</td>
                                <td>Reads .wk1 spreadsheet file.</td>
                                </tr>
                                </tbody></table>
                                <table className={`text-${props.mode==="dark"?"light":"dark"}`}>
                                <tbody><tr>
                                <th>Command</th>
                                <th>Purpose</th>
                                </tr>
                                <tr>
                                <td>cat</td>
                                <td>Concatenates arrays.</td>
                                </tr>
                                <tr>
                                <td>find</td>
                                <td>Finds indices of nonzero elements.</td>
                                </tr>
                                <tr>
                                <td>length</td>
                                <td>Computes number of elements.</td>
                                </tr>
                                <tr>
                                <td>linspace</td>
                                <td>Creates regularly spaced vector.</td>
                                </tr>
                                <tr>
                                <td>logspace</td>
                                <td>Creates logarithmically spaced vector.</td>
                                </tr>
                                <tr>
                                <td>max</td>
                                <td>Returns largest element.</td>
                                </tr>
                                <tr>
                                <td>min</td>
                                <td>Returns smallest element.</td>
                                </tr>
                                <tr>
                                <td>prod</td>
                                <td>Product of each column.</td>
                                </tr>
                                <tr>
                                <td>reshape</td>
                                <td>Changes size.</td>
                                </tr>
                                <tr>
                                <td>size</td>
                                <td>Computes array size.</td>
                                </tr>
                                <tr>
                                <td>sort</td>
                                <td>Sorts each column.</td>
                                </tr>
                                <tr>
                                <td>sum</td>
                                <td>Sums each column.</td>
                                </tr>
                                <tr>
                                <td>eye </td>
                                <td>Creates an identity matrix.</td>
                                </tr>
                                <tr>
                                <td>ones</td>
                                <td>Creates an array of ones.</td>
                                </tr>
                                <tr>
                                <td>zeros</td>
                                <td>Creates an array of zeros.</td>
                                </tr>
                                <tr>
                                <td>cross</td>
                                <td>Computes matrix cross products.</td>
                                </tr>
                                <tr>
                                <td>dot</td>
                                <td>Computes matrix dot products.</td>
                                </tr>
                                <tr>
                                <td>det</td>
                                <td>Computes determinant of an array.</td>
                                </tr>
                                <tr>
                                <td>inv</td>
                                <td>Computes inverse of a matrix.</td>
                                </tr>
                                <tr>
                                <td>pinv</td>
                                <td>Computes pseudoinverse of a matrix.</td>
                                </tr>
                                <tr>
                                <td>rank</td>
                                <td>Computes rank of a matrix.</td>
                                </tr>
                                <tr>
                                <td>rref</td>
                                <td>Computes reduced row echelon form.</td>
                                </tr>
                                <tr>
                                <td>cell</td>
                                <td>Creates cell array.</td>
                                </tr>
                                <tr>
                                <td>celldisp</td>
                                <td>Displays cell array.</td>
                                </tr>
                                <tr>
                                <td>cellplot</td>
                                <td>Displays graphical representation of cell array.</td>
                                </tr>
                                <tr>
                                <td>num2cell</td>
                                <td>Converts numeric array to cell array.</td>
                                </tr>
                                <tr>
                                <td>deal</td>
                                <td>Matches input and output lists.</td>
                                </tr>
                                <tr>
                                <td>iscell</td>
                                <td>Identifies cell array.</td>
                                </tr>
                                </tbody></table>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Exp1A
