import React from 'react'
import { Row, Col } from 'reactstrap'
import './Footer.css'

const Footer = () => {
    return (
        <div className='content11 bg-black text-light'>
            <div className="container">
                <Row>
                    <Col className='text-center fw-bold p-5'>Copyright &copy; 2024. All rights are reserved</Col>
                </Row>
            </div>
        </div>
    )
}

export default Footer