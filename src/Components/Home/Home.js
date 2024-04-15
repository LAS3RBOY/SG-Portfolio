import React from 'react'
import { Row, Col } from 'reactstrap'
// import self from '../Images/self3.jpg'
import { FaLinkedin, FaGithub } from "react-icons/fa";
import './Home.css'

const Home = () => {
    return (
        <>
            <div className="content bg-light d-flex justify-content-center align-items-center " style={{ height: "88vh" }}>
                <div className="container container11 bg-light" style={{ gap: "20px" }}>
                    <Row className='mt-2'>
                        <Col className='d-flex flex-column justify-content-evenly intro order-2 order-md-1'>
                            <h1 className=' fw-bolder' style={{ fontSize: "3rem" }}>Front-End React Developer</h1>
                            <p className=' fs-5 ' style={{ color: "#555", fontWeight: "500" }}>Hi, I'm <span className='fw-medium fs-2' style={{ color: "orange" }}> Sahil Gupta</span>. A passionate Front-end React Developer based in Mumbai, India. 📍</p>
                            <span className='d-flex gap-3 social-media'>
                                <a href="https://www.linkedin.com/in/sahil-gupta-b94134202/"><FaLinkedin size={30} color='#0077b5' /></a>
                                <a href="https://github.com/LAS3RBOY"> <FaGithub size={30} color='black' /></a>
                            </span>
                        </Col>
                        <Col className='self d-flex justify-content-center align-items-center order-1 order-md-2'>
                            <div className="image1">
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        </>
    )
}

export default Home