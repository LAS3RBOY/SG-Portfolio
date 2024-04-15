import React from 'react'
import { Row, Col } from 'reactstrap'
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Contact = () => {
    return (
        <>
            <div className="contact d-flex justify-content-center align-items-center " style={{ height: "88vh" }}>
                <div className="container">
                    <Row>
                        <Col className='d-flex justify-content-center align-items-center flex-column' style={{ gap: "1rem" }}>
                            <div className="topic fs-5 fw-bold" style={{ marginTop: "2rem" }}>Contact</div>
                            <div className="icon d-flex gap-5 ">
                                <div className="linkedin">
                                    <a href="https://www.linkedin.com/in/sahil-gupta-b94134202/"><FaLinkedin size={30} color='#0077b5' /> </a>
                                </div>
                                <div className="github">
                                    <a href="https://github.com/LAS3RBOY"><FaGithub size={30} color='black' /></a>
                                </div>
                            </div>
                            <div className="name fs-5 fw-bolder" style={{ color: "orange" }}>Sahil Gupta</div>
                            <div className="emails">
                                <a href="mailto:sahilgupta1107@gmail.com" className=' text-decoration-none text-black '>sahilgupta1107@gmail.com</a>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        </>
    )
}

export default Contact