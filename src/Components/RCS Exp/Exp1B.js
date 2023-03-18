import React from 'react'
import add from '../add.png';
import diff from '../diff.png';

function Exp1B(props) {
  return (
    <>
      <h2 className={`text-${props.mode==="dark"?"light":"dark"}`}>Experiment-1B</h2>
      <h3 className={`text-${props.mode==="dark"?"light":"dark"}`}>Aritmetic operations, logical operators and Mathematical unctions using simulation sotware</h3>

        <div className={`container my-5`}>
        <div className="row">
            <div className="col-2">
                <nav id="navbar-example3" className="h-100 flex-column align-items-stretch pe-4 border-end">
                    <nav className="nav nav-pills flex-column">
                        <a className={`nav-link text-${props.mode==="light"?"dark":"light"}`} href="#item-1">Arithemetic Operations</a>
                        <nav className="nav nav-pills flex-column">
                            <a className={`nav-link ms-3 my-1 text-${props.mode==="light"?"dark":"light"}`} href="#item-1-1">Addition</a>
                            <a className={`nav-link ms-3 my-1 text-${props.mode==="light"?"dark":"light"}`} href="#item-1-2">Subtraction</a>
                            <a className={`nav-link ms-3 my-1 text-${props.mode==="light"?"dark":"light"}`} href="#item-1-3">Multiplication</a>
                            <a className={`nav-link ms-3 my-1 text-${props.mode==="light"?"dark":"light"}`} href="#item-1-4">Division</a>
                            <a className={`nav-link ms-3 my-1 text-${props.mode==="light"?"dark":"light"}`} href="#item-1-5">Exponent</a>
                        </nav>
                        <nav className="nav nav-pills flex-column">
                        <a className={`nav-link text-${props.mode==="light"?"dark":"light"}`} href="#item-2">Logical Operators</a>
                            <a className={`nav-link ms-3 my-1 text-${props.mode==="light"?"dark":"light"}`} href="#item-2-1">AND Operator</a>
                            <a className={`nav-link ms-3 my-1 text-${props.mode==="light"?"dark":"light"}`} href="#item-2-2">OR Operator</a>
                            <a className={`nav-link ms-3 my-1 text-${props.mode==="light"?"dark":"light"}`} href="#item-2-3">NOT Operator</a>
                        </nav>
                        <a className="nav-link" href="#item-3">Mathematical Functions</a>
                        <nav className="nav nav-pills flex-column">
                            <a className="nav-link ms-3 my-1" href="#item-3-1">Mathematical Functions</a>
                            <a className="nav-link ms-3 my-1" href="#item-3-2">Logarithmic Functions</a>
                            <a className="nav-link ms-3 my-1" href="#item-3-3">Remainder Functions</a>
                            <a className="nav-link ms-3 my-1" href="#item-3-4">Ceiling Functions</a>
                        </nav>
                    </nav>
                </nav>
            </div>

            <div className="col-8">
                <div data-bs-spy="scroll" data-bs-target="#navbar-example3" data-bs-smooth-scroll="true"
                     className="scrollspy-example-2" tabIndex="0">
                    <div id="item-1">
                        <h4 className={`text-${props.mode==="dark"?"light":"dark"}`}><strong>Arithmetic Operations</strong></h4>
                        <p className={`text-${props.mode==="dark"?"light":"dark"}`}>Arithmetic (from Ancient Greek ἀριθμός (arithmós) 'number', and τική [τέχνη] (tikḗ [tékhnē]) 'art, craft') is an elementary part of mathematics that consists of the study of the properties of the traditional operations on numbers—addition, subtraction, multiplication, division, exponentiation, and extraction of roots. In the 19th century, Italian mathematician Giuseppe Peano formalized arithmetic with his Peano axioms, which are highly important to the field of mathematical logic today.</p>
                    </div>
                    <div id="item-1-1">
                        <h5 className={`text-${props.mode==="dark"?"light":"dark"}`}><strong>Addition</strong></h5>
                        <p className={`text-${props.mode==="dark"?"light":"dark"}`}>The addition is a mathematical process of adding things together. The addition process is denoted by ‘+’ sign. It involves combining two or more numbers into a single term. In addition process, the order does not matter. It means that the addition process is commutative. It can involve any type of number whether it be a real or complex number, fraction, or decimals.</p>
                        <h6 className={`text-${props.mode==="dark"?"light":"dark"}`}><strong>Rules of addition</strong></h6>
                        <p className={`text-${props.mode==="dark"?"light":"dark"}`}>The following are the addition rules for integers:
                        <li className={`text-${props.mode==="dark"?"light":"dark"}`}>Addition of two positive integers is a positive integer.</li>
                        <li className={`text-${props.mode==="dark"?"light":"dark"}`}>Addition of two negative integers is a negative integer.</li>
                        <li className={`text-${props.mode==="dark"?"light":"dark"}`}>While adding positive and negative integers, subtract the integers and use the sign of the largest integer number.</li>
                        </p>
                         <img src={add} className="d-block w-100" alt="..."/>
                        <div className={`card-body align="center"`}>
                            <p className={`card-text text-${props.mode==="dark"?"light":"dark"}`}>Fig: Addition of two 3*3 matrix using MATLAB</p>
                        </div>
                    </div>
                    <div className={`my-3`}id="item-1-2">
                        <h5 className={`text-${props.mode==="dark"?"light":"dark"}`}><strong>Subtraction</strong></h5>
                        <p className={`text-${props.mode==="dark"?"light":"dark"}`}>The subtraction operation gives the difference between two numbers. Subtraction is denoted by ‘-‘ sign. It is almost similar to addition but is the conjugate of the second term. It is the inverse process of addition. The addition of the term with the negative term is known as subtraction. This process is mostly used to find how many are left when some things are taken away.</p>
                        <h6 className={`text-${props.mode==="dark"?"light":"dark"}`}><strong>Rules of subtraction</strong></h6>
                        <p className={`text-${props.mode==="dark"?"light":"dark"}`}>The following are the subtraction rules for integers:
                            <li className={`text-${props.mode==="dark"?"light":"dark"}`}>If both the signs of the integers are positive, the answer will be the positive integer.</li>
                            <li className={`text-${props.mode==="dark"?"light":"dark"}`}>If both the signs of the integers are negative, the answer will be the negative integer.</li>
                            <li className={`text-${props.mode==="dark"?"light":"dark"}`}>If the signs of the integers are different, subtract the values, and take the sign from the largest integer value.</li>
                        </p>
                        <img src={diff} className="d-block w-100" alt="..."/>
                        <div className={`card-body align="center"`}>
                            <p className={`card-text text-${props.mode==="dark"?"light":"dark"}`}>Fig: Subtraction of two 3*3 matrix using MATLAB</p>
                        </div>
                    </div>

                    <div className={`my-3`} id="item-1-3">
                        <h5 className={`text-${props.mode==="dark"?"light":"dark"}`}><strong>Multiplication</strong></h5>
                        <p className={`text-${props.mode==="dark"?"light":"dark"}`}>Multiplication is known as repeated addition. It is denoted by ‘×’ or ‘*’. It also combines with two or more values to result in a single value. The multiplication process involves multiplicand, multiplier. The result of the multiplication of multiplicand and the multiplier is called the product</p>
                       <h6 className={`text-${props.mode==="dark"?"light":"dark"}`}><strong>Rules of multiplication</strong></h6>
                        <p className={`text-${props.mode==="dark"?"light":"dark"}`}>The following are the multiplication rules for integers:
                            <li className={`text-${props.mode==="dark"?"light":"dark"}`}>The product of two positive integers is a positive integer.</li>
                            <li className={`text-${props.mode==="dark"?"light":"dark"}`}>The product of two negative integers is a positive integer.</li>
                            <li className={`text-${props.mode==="dark"?"light":"dark"}`}>The product of positive and negative integer is a negative integer.</li>
                        </p>
                        <img src={diff} className="d-block w-100" alt="..."/>
                        <div className={`card-body align="center"`}>
                            <p className={`card-text text-${props.mode==="dark"?"light":"dark"}`}>Fig: Subtraction of two 3*3 matrix using MATLAB</p>
                        </div>
                    </div>
                    <div className={`my-3`} id="item-1-4">
                        <h5 className={`text-${props.mode==="dark"?"light":"dark"}`}><strong>Division</strong></h5>
                        <p className={`text-${props.mode==="dark"?"light":"dark"}`}>The division is usually denoted by ‘÷‘ and is the inverse of multiplication. It constitutes two terms dividend and divisor, where the dividend is divided by the divisor to give a single term value. When the dividend is greater than the divisor, the result obtained is greater than 1, or else it would be less than 1.</p>
                        <h6 className={`text-${props.mode==="dark"?"light":"dark"}`}><strong>Rules of division</strong></h6>
                        <p className={`text-${props.mode==="dark"?"light":"dark"}`}>The following are the division rules for integers:
                            <li className={`text-${props.mode==="dark"?"light":"dark"}`}>The division of two positive integers is a positive integer.</li>
                            <li className={`text-${props.mode==="dark"?"light":"dark"}`}>The division of two negative integers is a positive integer.</li>
                            <li className={`text-${props.mode==="dark"?"light":"dark"}`}>The division of integers with different signs results in the negative integer.</li>
                        </p>
                        <img src={diff} className="d-block w-100" alt="..."/>
                        <div className={`card-body align="center"`}>
                            <p className={`card-text text-${props.mode==="dark"?"light":"dark"}`}>Fig: Subtraction of two 3*3 matrix using MATLAB</p>
                        </div>
                    </div>
                    <div className={`my-3`} id="item-1-5">
                        <h5 className={`text-${props.mode==="dark"?"light":"dark"}`}><strong>Exponent</strong></h5>
                        <p className={`text-${props.mode==="dark"?"light":"dark"}`}>Exponent is defined as the method of expressing large numbers in terms of powers. That means, exponent refers to how many times a number multiplied by itself.</p>
                        <h6 className={`text-${props.mode==="dark"?"light":"dark"}`}><strong>Laws of exponents</strong></h6>
                        <p className={`text-${props.mode==="dark"?"light":"dark"}`}>The following are the division rules for integers:
                            <li className={`text-${props.mode==="dark"?"light":"dark"}`}>a^m* a^n = a^(m+n)</li>
                            <li className={`text-${props.mode==="dark"?"light":"dark"}`}>(a^m)^n = a^(mn)</li>
                            <li className={`text-${props.mode==="dark"?"light":"dark"}`}>The division of two negative integers is a positive integer.</li>
                            <li className={`text-${props.mode==="dark"?"light":"dark"}`}>The division of integers with different signs results in the negative integer.</li>
                        </p>
                        <img src={diff} className="d-block w-100" alt="..."/>
                        <div className={`card-body align="center"`}>
                            <p className={`card-text text-${props.mode==="dark"?"light":"dark"}`}>Fig: Subtraction of two 3*3 matrix using MATLAB</p>
                        </div>
                    </div>

                    <div id="item-2">
                        <h4 className={`text-${props.mode==="dark"?"light":"dark"}`}>Logical Operators</h4>
                        <p className={`text-${props.mode==="dark"?"light":"dark"}`}>...</p>
                    </div>
                    <div id="item-2-1">
                        <h5 className={`text-${props.mode==="dark"?"light":"dark"}`}>AND Operator</h5>
                        <p className={`text-${props.mode==="dark"?"light":"dark"}`}>...</p>
                    </div>
                    <div id="item-2-2">
                        <h5 className={`text-${props.mode==="dark"?"light":"dark"}`}>OR Operator</h5>
                        <p className={`text-${props.mode==="dark"?"light":"dark"}`}>...</p>
                    </div>
                    <div id="item-2-3">
                        <h5 className={`text-${props.mode==="dark"?"light":"dark"}`}>NOT Operator</h5>
                        <p className={`text-${props.mode==="dark"?"light":"dark"}`}>...</p>
                    </div>

                    <div id="item-3">
                        <h4 className={`text-${props.mode==="dark"?"light":"dark"}`}>Mathematical Functions</h4>
                        <p className={`text-${props.mode==="dark"?"light":"dark"}`}>...</p>
                    </div>
                    <div id="item-3-1">
                        <h5 className={`text-${props.mode==="dark"?"light":"dark"}`}>Exponential Function</h5>
                        <p className={`text-${props.mode==="dark"?"light":"dark"}`}>...</p>
                    </div>
                    <div id="item-3-2">
                        <h5 className={`text-${props.mode==="dark"?"light":"dark"}`}>Logarithmic Function</h5>
                        <p className={`text-${props.mode==="dark"?"light":"dark"}`}>...</p>
                    </div>
                    <div id="item-3-3">
                        <h5 className={`text-${props.mode==="dark"?"light":"dark"}`}>Remainder Function</h5>
                        <p className={`text-${props.mode==="dark"?"light":"dark"}`}>...</p>
                    </div>
                    <div id="item-3-4">
                        <h5 className={`text-${props.mode==="dark"?"light":"dark"}`}>Ceiling Function</h5>
                        <p className={`text-${props.mode==="dark"?"light":"dark"}`}>...</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Exp1B
