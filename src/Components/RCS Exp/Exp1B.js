import React from 'react'
import add from '../add.png';
import diff from '../diff.png';
import mult from '../Multiplication.png';
import divi from '../Division.png';
import square from '../Square.png';
import and from '../And.png';
import or from '../Or.png';
import not from '../Not.png';
import exp from '../exp.png';
import log from '../log.png';
import ceil from '../ceil.png';
import rem from '../rem.png';

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
                        <a className={`nav-link text-${props.mode==="light"?"dark":"light"}`} href="#item-3">Mathematical Functions</a>
                        <nav className="nav nav-pills flex-column">
                            <a className={`nav-link ms-3 my-1 text-${props.mode==="light"?"dark":"light"}`} href="#item-3-1">Mathematical Functions</a>
                            <a className={`nav-link ms-3 my-1 text-${props.mode==="light"?"dark":"light"}`} href="#item-3-2">Logarithmic Functions</a>
                            <a className={`nav-link ms-3 my-1 text-${props.mode==="light"?"dark":"light"}`} href="#item-3-3">Remainder Functions</a>
                            <a className={`nav-link ms-3 my-1 text-${props.mode==="light"?"dark":"light"}`} href="#item-3-4">Ceiling Functions</a>
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
                        <h5 className={`my-4 text-${props.mode==="dark"?"light":"dark"}`}><strong>Addition</strong></h5>
                        <p className={`text-${props.mode==="dark"?"light":"dark"}`}>The addition is a mathematical process of adding things together. The addition process is denoted by ‘+’ sign. It involves combining two or more numbers into a single term. In addition process, the order does not matter. It means that the addition process is commutative. It can involve any type of number whether it be a real or complex number, fraction, or decimals.</p>
                        <h6 className={`text-${props.mode==="dark"?"light":"dark"}`}><strong>Rules of addition</strong></h6>
                        <p className={`text-${props.mode==="dark"?"light":"dark"}`}>The following are the addition rules for integers:
                        <li className={`text-${props.mode==="dark"?"light":"dark"}`}>Addition of two positive integers is a positive integer.</li>
                        <li className={`text-${props.mode==="dark"?"light":"dark"}`}>Addition of two negative integers is a negative integer.</li>
                        <li className={`text-${props.mode==="dark"?"light":"dark"}`}>While adding positive and negative integers, subtract the integers and use the sign of the largest integer number.</li>
                        </p>
                         <img src={add} className="d-block w-100" alt="..."/>
                        <div className={`card-body align="center"`}>
                            <p className={`card-text text-${props.mode==="dark"?"light":"dark"}`} align={`center`}>Fig: Addition of two 3*3 matrix using MATLAB</p>
                        </div>
                    </div>
                    <div className={`my-3`}id="item-1-2">
                        <h5 className={`my-4 text-${props.mode==="dark"?"light":"dark"}`}><strong>Subtraction</strong></h5>
                        <p className={`text-${props.mode==="dark"?"light":"dark"}`}>The subtraction operation gives the difference between two numbers. Subtraction is denoted by ‘-‘ sign. It is almost similar to addition but is the conjugate of the second term. It is the inverse process of addition. The addition of the term with the negative term is known as subtraction. This process is mostly used to find how many are left when some things are taken away.</p>
                        <h6 className={`text-${props.mode==="dark"?"light":"dark"}`}><strong>Rules of subtraction</strong></h6>
                        <p className={`text-${props.mode==="dark"?"light":"dark"}`}>The following are the subtraction rules for integers:
                            <li className={`text-${props.mode==="dark"?"light":"dark"}`}>If both the signs of the integers are positive, the answer will be the positive integer.</li>
                            <li className={`text-${props.mode==="dark"?"light":"dark"}`}>If both the signs of the integers are negative, the answer will be the negative integer.</li>
                            <li className={`text-${props.mode==="dark"?"light":"dark"}`}>If the signs of the integers are different, subtract the values, and take the sign from the largest integer value.</li>
                        </p>
                        <img src={diff} className="d-block w-100" alt="..."/>
                        <div className={`card-body align="center"`}>
                            <p className={`card-text text-${props.mode==="dark"?"light":"dark"}`} align={`center`}>Fig: Subtraction of two 3*3 matrix using MATLAB</p>
                        </div>
                    </div>

                    <div className={`my-3`} id="item-1-3">
                        <h5 className={`my-4 text-${props.mode==="dark"?"light":"dark"}`}><strong>Multiplication</strong></h5>
                        <p className={`text-${props.mode==="dark"?"light":"dark"}`}>Multiplication is known as repeated addition. It is denoted by ‘×’ or ‘*’. It also combines with two or more values to result in a single value. The multiplication process involves multiplicand, multiplier. The result of the multiplication of multiplicand and the multiplier is called the product</p>
                       <h6 className={`text-${props.mode==="dark"?"light":"dark"}`}><strong>Rules of multiplication</strong></h6>
                        <p className={`text-${props.mode==="dark"?"light":"dark"}`}>The following are the multiplication rules for integers:
                            <li className={`text-${props.mode==="dark"?"light":"dark"}`}>The product of two positive integers is a positive integer.</li>
                            <li className={`text-${props.mode==="dark"?"light":"dark"}`}>The product of two negative integers is a positive integer.</li>
                            <li className={`text-${props.mode==="dark"?"light":"dark"}`}>The product of positive and negative integer is a negative integer.</li>
                        </p>
                        <img src={mult} className="d-block w-100" alt="..."/>
                        <div className={`card-body align="center"`}>
                            <p className={`card-text text-${props.mode==="dark"?"light":"dark"}`} align={`center`}>Fig: Multiplication of two 3*3 matrix using MATLAB</p>
                        </div>
                    </div>
                    <div className={`my-3`} id="item-1-4">
                        <h5 className={`my-4 text-${props.mode==="dark"?"light":"dark"}`}><strong>Division</strong></h5>
                        <p className={`text-${props.mode==="dark"?"light":"dark"}`}>The division is usually denoted by ‘÷‘ and is the inverse of multiplication. It constitutes two terms dividend and divisor, where the dividend is divided by the divisor to give a single term value. When the dividend is greater than the divisor, the result obtained is greater than 1, or else it would be less than 1.</p>
                        <h6 className={`text-${props.mode==="dark"?"light":"dark"}`}><strong>Rules of division</strong></h6>
                        <p className={`text-${props.mode==="dark"?"light":"dark"}`}>The following are the division rules for integers:
                            <li className={`text-${props.mode==="dark"?"light":"dark"}`}>The division of two positive integers is a positive integer.</li>
                            <li className={`text-${props.mode==="dark"?"light":"dark"}`}>The division of two negative integers is a positive integer.</li>
                            <li className={`text-${props.mode==="dark"?"light":"dark"}`}>The division of integers with different signs results in the negative integer.</li>
                        </p>
                        <img src={divi} className="d-block w-100" alt="..."/>
                        <div className={`card-body align="center"`}>
                            <p className={`card-text text-${props.mode==="dark"?"light":"dark"}`} align={`center`}>Fig: Division of two 3*3 matrix using MATLAB</p>
                        </div>
                    </div>
                    <div className={`my-3`} id="item-1-5">
                        <h5 className={`my-4 text-${props.mode==="dark"?"light":"dark"}`}><strong>Exponent</strong></h5>
                        <p className={`text-${props.mode==="dark"?"light":"dark"}`}>Exponent is defined as the method of expressing large numbers in terms of powers. That means, exponent refers to how many times a number multiplied by itself.</p>
                        <h6 className={`text-${props.mode==="dark"?"light":"dark"}`}><strong>Laws of exponents</strong></h6>
                        <p className={`text-${props.mode==="dark"?"light":"dark"}`}>The following are the division rules for integers:
                            <li className={`text-${props.mode==="dark"?"light":"dark"}`}>a^m* a^n = a^(m+n)</li>
                            <li className={`text-${props.mode==="dark"?"light":"dark"}`}>(a^m)^n = a^(mn)</li>
                            <li className={`text-${props.mode==="dark"?"light":"dark"}`}>The division of two negative integers is a positive integer.</li>
                            <li className={`text-${props.mode==="dark"?"light":"dark"}`}>The division of integers with different signs results in the negative integer.</li>
                        </p>
                        <img src={square} className="d-block w-100" alt="..."/>
                        <div className={`card-body align="center"`}>
                            <p className={`card-text text-${props.mode==="dark"?"light":"dark"}`} align={`center`}>Fig: Square of two 3*3 matrix using MATLAB</p>
                        </div>
                    </div>

                    <div id="item-2">
                        <h4 className={`my-4 text-${props.mode==="dark"?"light":"dark"}`}>Logical Operators</h4>
                        <p className={`text-${props.mode==="dark"?"light":"dark"}`}>A logical operator is a symbol or word used to connect two or more expressions such that the value of the compound expression produced depends only on that of the original expressions and on the meaning of the operator. Common logical operators include AND, OR, and NOT.</p>
                    </div>
                    <div id="item-2-1">
                        <h5 className={`my-4 text-${props.mode==="dark"?"light":"dark"}`}>AND (&) Operator</h5>
                        <p className={`text-${props.mode==="dark"?"light":"dark"}`}>The logical & operator doesn't check the second condition if first condition is false. It checks the second condition only if the first one is true. The evaluation in logical && expression is left to right. With the help of other Logical operators, we can convert Logical AND to Logical OR. This operator accepts two operands.<p>Suppose we have two conditions A and B. So, we can see the possible values of A & B in the below table.</p></p>
                        <div className={`my-4 container text-center border-2 text-${props.mode==="dark"?"light":"dark"}`}>
                            <div className="row align-items-start">

                                <div className={`col bg-${props.mode}`}>
                                    <ul>A</ul>
                                    <ul>True</ul>
                                    <ul>False</ul>
                                    <ul>True</ul>
                                    <ul>False</ul>
                                </div>
                                <div className={`col bg-${props.mode}`}>
                                    <ul>B</ul>
                                    <ul>True</ul>
                                    <ul>True</ul>
                                    <ul>False</ul>
                                    <ul>False</ul>
                                </div>
                                <div className={`col bg-${props.mode}`}>
                                    <ul>A & B</ul>
                                    <ul>True</ul>
                                    <ul>False</ul>
                                    <ul>False</ul>
                                    <ul>False</ul>

                                </div>
                            </div>
                        </div>
                        <img src={and} className="d-block w-100" alt="..."/>
                        <div className={`card-body align="center"`}>
                            <p className={`card-text text-${props.mode==="dark"?"light":"dark"}`} align={`center`}>Fig: And operator</p>
                        </div>
                    </div>
                    <div id="item-2-2">
                        <h5 className={`my-4 text-${props.mode==="dark"?"light":"dark"}`}>OR (||) Operator</h5>
                        <p className={`text-${props.mode==="dark"?"light":"dark"}`}>The Logical OR operator is represented with the two vertical line symbols. It works opposite to the logical AND operator, as it only gives false when both statements of the expression are not true. Otherwise, it returns true. The logical || operator doesn't check the second condition if first condition is true. It checks the second condition only if the first one is false.<p>The logical || operator accepts two operands. Suppose we have two conditions A and B. We can see the possible values of A || B in the following table.</p></p>
                        <div className={`my-4 container text-center border-2 text-${props.mode==="dark"?"light":"dark"}`}>
                            <div className="row align-items-start">

                                <div className={`col bg-${props.mode}`}>
                                    <ul>A</ul>
                                    <ul>True</ul>
                                    <ul>False</ul>
                                    <ul>True</ul>
                                    <ul>False</ul>
                                </div>
                                <div className={`col bg-${props.mode}`}>
                                    <ul>B</ul>
                                    <ul>True</ul>
                                    <ul>True</ul>
                                    <ul>False</ul>
                                    <ul>False</ul>
                                </div>
                                <div className={`col bg-${props.mode}`}>
                                    <ul>A || B</ul>
                                    <ul>True</ul>
                                    <ul>True</ul>
                                    <ul>True</ul>
                                    <ul>False</ul>
                                </div>
                            </div>
                        </div>
                        <img src={or} className="d-block w-100" alt="..."/>
                        <div className={`card-body align="center"`}>
                            <p className={`card-text text-${props.mode==="dark"?"light":"dark"}`} align={`center`}>Fig: Or operator</p>
                        </div>
                    </div>
                    <div id="item-2-3">
                        <h5 className={`my-4 text-${props.mode==="dark"?"light":"dark"}`}>NOT (!) Operator</h5>
                        <p className={`text-${props.mode==="dark"?"light":"dark"}`}>This logical operator is represented as an exclamation sign (!). This operator accepts a single argument and returns the inverse value of the corresponding argument.<p>Suppose we have an operand A. So, the Logical NOT operator will return the opposite possible values of A.</p></p>
                        <div className={`my-4 container text-center border-2 text-${props.mode==="dark"?"light":"dark"}`}>
                            <div className="row align-items-start">

                                <div className={`col bg-${props.mode}`}>
                                    <ul>A</ul>
                                    <ul>True</ul>
                                    <ul>False</ul>
                                </div>
                                <div className={`col bg-${props.mode}`}>
                                    <ul>!A</ul>
                                    <ul>False</ul>
                                    <ul>True</ul>
                                </div>
                            </div>
                        </div>
                        <img src={not} className="d-block w-100" alt="..."/>
                        <div className={`card-body align="center"`}>
                            <p className={`card-text text-${props.mode==="dark"?"light":"dark"}`} align={`center`}>Fig: Not operator</p>
                        </div>
                    </div>

                    <div id="item-3">
                        <h4 className={`my-4 text-${props.mode==="dark"?"light":"dark"}`}>Mathematical Functions</h4>
                        <p className={`text-${props.mode==="dark"?"light":"dark"}`}>In mathematics, a function is a rule that assigns each element in a set (called the domain) to a unique element in another set (called the range). A mathematical function is a special type of relation where each element in the domain corresponds to exactly one element in the range.</p><p className={`text-${props.mode==="dark"?"light":"dark"}`}>Functions can be represented using various mathematical notations, such as using function notation f(x), where "f" is the name of the function, and "x" is the input variable.</p>
                    </div>
                    <div id="item-3-1">
                        <h5 className={`my-4 text-${props.mode==="dark"?"light":"dark"}`}>Exponential Function</h5>
                        <p className={`text-${props.mode==="dark"?"light":"dark"}`}>In mathematics, an exponential function is a function of the form f(x) = a^x, where "a" is a positive constant called the base and "x" is the input variable. The base "a" is typically a real number greater than 1, but it can also be a positive fraction or even a complex number.</p>
                        <p className={`text-${props.mode==="dark"?"light":"dark"}`}>The exponential function has several important properties, such as:</p>
                        <li className={`my-1 text-${props.mode==="dark"?"light":"dark"}`}>Exponential growth: If the base "a" is greater than 1, then the function f(x) = a^x exhibits exponential growth. This means that as x increases, the value of f(x) grows at an increasing rate. For example, the function f(x) = 2^x grows exponentially, with its value doubling every time x increases by 1.</li>
                        <li className={`my-1 text-${props.mode==="dark"?"light":"dark"}`}>Exponential decay: If the base "a" is between 0 and 1, then the function f(x) = a^x exhibits exponential decay. This means that as x increases, the value of f(x) decays at a decreasing rate. For example, the function f(x) = (1/2)^x decays exponentially, with its value halving every time x increases by 1.</li>
                        <li className={`my-1 text-${props.mode==="dark"?"light":"dark"}`}>Asymptotic behavior: As x approaches infinity, the value of f(x) approaches infinity if the base "a" is greater than 1, and approaches 0 if the base "a" is between 0 and 1.</li>
                        <img src={exp} className="d-block w-100" alt="..."/>
                        <div className={`card-body align="center"`}>
                            <p className={`card-text text-${props.mode==="dark"?"light":"dark"}`} align={`center`}>Fig: Exponential function using MATLAB</p>
                        </div>
                    </div>
                    <div id="item-3-2">
                        <h5 className={`my-4 text-${props.mode==="dark"?"light":"dark"}`}>Logarithmic Function</h5>
                        <p className={`text-${props.mode==="dark"?"light":"dark"}`}>In mathematics, a logarithmic function is the inverse of an exponential function. It is a function of the form f(x) = log_a(x), where "a" is a positive constant called the base, and "x" is the input variable.</p><p className={`text-${props.mode==="dark"?"light":"dark"}`}>The logarithmic function has the following properties:</p>
                        <li className={`my-1 text-${props.mode==="dark"?"light":"dark"}`}>The domain of the function is the set of all positive real numbers.</li>
                        <li className={`my-1 text-${props.mode==="dark"?"light":"dark"}`}>The range of the function is the set of all real numbers.</li>
                        <li className={`my-1 text-${props.mode==="dark"?"light":"dark"}`}>The function is defined only for positive values of "x".</li>
                        <li className={`my-1 text-${props.mode==="dark"?"light":"dark"}`}>The function is increasing, which means that as "x" increases, the value of f(x) also increases.</li>
                        <li className={`my-1 text-${props.mode==="dark"?"light":"dark"}`}>The logarithmic function is the inverse of an exponential function. That is, if f(x) = a^x, then log_a(f(x)) = x.</li>
                        <li className={`my-1 text-${props.mode==="dark"?"light":"dark"}`}>The logarithmic function has a vertical asymptote at x = 0.</li>
                        <p className={`my-2 text-${props.mode==="dark"?"light":"dark"}`}>The most common base for logarithmic functions is the base 10 (written as log(x)) and the natural logarithm with base e (written as ln(x)). The logarithm base 10, for instance, gives the power to which 10 must be raised to obtain the value of x. Similarly, the natural logarithm gives the power to which the mathematical constant e (approximately equal to 2.71828) must be raised to obtain the value of x.</p>
                        <img src={log} className="d-block w-100" alt="..."/>
                        <div className={`card-body align="center"`}>
                            <p className={`card-text text-${props.mode==="dark"?"light":"dark"}`} align={`center`}>Fig: Logarithmic function using MATLAB</p>
                        </div>
                    </div>
                    <div id="item-3-3">
                        <h5 className={`my-4 text-${props.mode==="dark"?"light":"dark"}`}>Remainder Function</h5>
                        <p className={`text-${props.mode==="dark"?"light":"dark"}`}>n mathematics, the remainder function (also known as the modulo function or mod function) is a function that determines the remainder of the division of one number by another. It is denoted by the symbol "%". For example, if we take the expression "7 % 3", the remainder function will return the value 1, which is the remainder of dividing 7 by 3.</p><p className={`text-${props.mode==="dark"?"light":"dark"}`}>The remainder function can be used with both positive and negative numbers. When using negative numbers, the result of the remainder function depends on the language or system being used. In some cases, the function returns a negative value, while in other cases, it returns a positive value.</p>
                        <img src={rem} className="d-block w-100" alt="..."/>
                        <div className={`card-body align="center"`}>
                            <p className={`card-text text-${props.mode==="dark"?"light":"dark"}`} align={`center`}>Fig: Remainder function using MATLAB</p>
                        </div>
                    </div>
                    <div id="item-3-4">
                        <h5 className={`my-4 text-${props.mode==="dark"?"light":"dark"}`}>Ceiling Function</h5>
                        <p className={`text-${props.mode==="dark"?"light":"dark"}`}>In mathematics, the ceiling function is a function that rounds a given number up to the nearest integer that is greater than or equal to it. The symbol used for the ceiling function is ⌈x⌉, where "x" is the input value. For example, the ceiling of 2.5 is 3, while the ceiling of -2.5 is -2.</p>
                        <p className={`text-${props.mode==="dark"?"light":"dark"}`}>The ceiling function is sometimes called the "smallest integer function" because it returns the smallest integer that is greater than or equal to the input value. It is the opposite of the floor function, which rounds a given number down to the nearest integer that is less than or equal to it.</p>
                        <p className={`text-${props.mode==="dark"?"light":"dark"}`}>The ceiling function can be used with both positive and negative numbers. For positive numbers, the ceiling function is equivalent to rounding up to the nearest integer. For negative numbers, the ceiling function rounds towards zero. For example, the ceiling of -2.5 is -2, while the ceiling of -2.1 is -2.</p>
                        <img src={ceil} className="d-block w-100" alt="..."/>
                        <div className={`card-body align="center"`}>
                            <p className={`card-text text-${props.mode==="dark"?"light":"dark"}`} align={`center`}>Fig: Ceiling function using MATLAB</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Exp1B
