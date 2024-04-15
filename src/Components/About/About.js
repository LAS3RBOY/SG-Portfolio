import React from 'react'
import { Row, Col } from 'reactstrap'
import { FaHtml5, FaCss3Alt, FaReact, FaBootstrap } from 'react-icons/fa'
import { IoLogoJavascript } from "react-icons/io5";
import './About.css'


const About = () => {
    return (
        <>
            <div className="about-me d-flex justify-content-center align-items-center" style={{ height: "88vh" }}>
                <div className='container'>
                    <div className="content">
                        <Row className=''>
                            <Col>
                                <div className="about-me d-flex justify-content-center align-items-center flex-column" style={{ gap: "2rem" }}>
                                    <div className="topic fw-bold fs-5 " style={{ marginTop: "", color: "black" }}>About Me</div>
                                    <div className="info" style={{ lineHeight: "2.5rem" }}>
                                        <h4 className='fw-bolder mb-2'>I am a <span style={{ color: "orange" }}>Frontend Developer</span> </h4>
                                        <p className=' fw-medium m-0' style={{ color: "#555", fontWeight: "500", fontSize: "1.2rem" }}>Hey, my name is <span className='fw-medium fs-5' style={{ color: "orange" }}>Sahil</span> , and I'm a Frontend Developer. </p>
                                        <p className=' fw-medium m-0' style={{ color: "#555", fontWeight: "500", fontSize: "1.2rem" }}>My passion is to create and develop a clean UI/UX for my users.</p>
                                        <p className=' fw-medium m-0' style={{ color: "#555", fontWeight: "500", fontSize: "1.2rem" }}>With a strong eye for detail and a passion for creating visually appealing UI, I am dedicated to
                                            delivering high-quality code and exceptional user experiences.</p>
                                    </div>
                                </div>
                            </Col>
                            <Col>
                                <div className="techStack d-flex flex-column justify-content-center align-items-center " style={{ gap: "2rem" }}>
                                    <div className="title fw-bold fs-5" style={{ color: "black" }}>Skills</div>
                                    <div className="icons">
                                        <div className="icon-1 d-flex" style={{ gap: "2rem " }}>
                                            <div className="html"><FaHtml5 size={100} color='orange' /></div>
                                            <div className="css"><FaCss3Alt size={100} color='blue' /></div>
                                            <div className="js"><IoLogoJavascript size={100} color='#efd81d' /></div>
                                        </div>
                                        <div className="icon-2 d-flex mt-2" style={{ gap: "2rem " }}>
                                            <div className="reactjs"><FaReact size={100} color='#00d1f7' /></div>
                                            <div className="bootStrap"><FaBootstrap size={100} color='#7b11f3' /></div>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About