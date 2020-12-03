import { faDownload } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-scroll'
import Profpic from '../img/profpic.png'
import Button from './Button'
import './Header.css'

export default function Header() {
    const downloadIcon = <FontAwesomeIcon icon={faDownload} />

    return (
        <div className="header-section" id="about">
            <div className='container'>
                <div className="header-container">
                    <div className="col">
                        <img src={Profpic} alt="Alief Rachman Septiana" className="profile-image" />
                    </div>
                    <div className="col header-info">
                        <h2>Alief Rachman Septiana</h2>
                        <h4>Hello, I’m a web-developer based on Jakarta. I have rich experience in web site design & building and customization.</h4>
                        <div className="buttons">
                            <Link
                                to="portfolio"
                                spy={true}
                                smooth={true}
                                offset={-100}
                                duration={500}
                            >
                                <Button text="View Portfolio" type="secondary" />
                            </Link>
                            <a href="/files/Resume.pdf" target="_blank" download>
                                <Button text="Download Resume" type="primary" icon={downloadIcon} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
