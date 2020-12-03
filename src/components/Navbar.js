import React, { useState, useEffect } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import './Navbar.css';
import logo from '../img/initial-name-logo.svg'
import { Container } from "react-bootstrap";

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
    const [navbar, setNavbar] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const scrollToTop = () => {
        scroll.scrollToTop();
    };

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        }
        else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);

    const shadowNavbar = () => {
        if (window.scrollY >= 80) {
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    }

    window.addEventListener('scroll', shadowNavbar);

    return (
        <>
            <nav className={navbar ? 'navbar scroll' : 'navbar'} id="navbar">
                <Container>
                    <Link
                        spy={true}
                        smooth={true}
                        duration={500}
                        className="navbar-logo"
                        onClick={closeMobileMenu && scrollToTop}
                    >
                        <img src={logo} alt="logo" />
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click ? "fas fa-times" : "fas fa-bars"} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link
                                activeClass="active"
                                to="about"
                                spy={true}
                                smooth={true}
                                offset={-150}
                                duration={500}
                                className='nav-links' onClick={closeMobileMenu} replace
                            >About</Link>
                        </li>
                        <li className='nav-item'>
                            <Link
                                activeClass="active"
                                to="skills"
                                spy={true}
                                smooth={true}
                                offset={-80}
                                duration={500}
                                className='nav-links' onClick={closeMobileMenu} replace
                            >Skills</Link>
                        </li>
                        <li className='nav-item'>
                            <Link
                                activeClass="active"
                                to="experiences"
                                spy={true}
                                smooth={true}
                                offset={-90}
                                duration={500}
                                className='nav-links' onClick={closeMobileMenu} replace
                            >Experiences</Link>
                        </li>
                        <li className='nav-item'>
                            <Link
                                activeClass="active"
                                to="portfolio"
                                spy={true}
                                smooth={true}
                                offset={-75}
                                duration={500}
                                className='nav-links' onClick={closeMobileMenu} replace
                            >Portfolio</Link>
                        </li>
                        <li className='nav-item'>
                            <Link
                                activeClass="active"
                                to="contact"
                                spy={true}
                                smooth={true}
                                offset={-75}
                                duration={500}
                                className='nav-links' onClick={closeMobileMenu} replace
                            >Contact</Link>
                        </li>
                    </ul>
                </Container>
            </nav>
        </>
    );
}

export default Navbar;
