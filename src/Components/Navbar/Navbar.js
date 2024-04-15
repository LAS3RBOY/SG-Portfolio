import React, { useState } from 'react'
import './Navbar.css'
import { FaBars } from "react-icons/fa";
import { CgClose } from "react-icons/cg";
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [showSmallNavbar, SetShowSmallNavbar] = useState(false)

    return (
        <>
            <body>
                <div className={showSmallNavbar ? "first bg-black position-sticky top-0 active" : " first bg-black position-sticky top-0"} style={{ zIndex: "900" }}>
                    <div className="text-light d-flex justify-content-between align-items-center fw-medium" style={{ padding: "25px 40px 25px 50px", fontSize: "1.1rem" }}>
                        <div className="logo" style={{ fontSize: "1.5rem" }}>
                            <Link className=' text-decoration-none text-light' to='/'>
                                SG
                            </Link>
                        </div>
                        <nav>
                            <ul className='navbar-list d-flex list-unstyled gap-4 m-0 '>
                                <li onClick={() => SetShowSmallNavbar(false)}>
                                    <Link className=' text-decoration-none text-light ' to='/'>Home</Link>
                                </li>
                                <li onClick={() => SetShowSmallNavbar(false)}>
                                    <Link className=' text-decoration-none text-light ' to='/about'>About</Link>
                                </li>
                                <li onClick={() => SetShowSmallNavbar(false)}>
                                    <Link className=' text-decoration-none text-light ' to='/project'>  Projects</Link>
                                </li>
                                <li onClick={() => SetShowSmallNavbar(false)}>
                                    <Link className=' text-decoration-none text-light ' to='/contact'>Contact</Link>
                                </li>
                            </ul>
                            <div className="mobile-navbar-btn">
                                <FaBars name='menu-outline' className='mobile-nav-icon' onClick={() => SetShowSmallNavbar(true)} />
                                <CgClose name='close-outline' className='close-outline mobile-nav-icon' onClick={() => SetShowSmallNavbar(false)} />
                            </div>
                        </nav>
                    </div>
                </div>
            </body>
        </>
    )
}

export default Navbar