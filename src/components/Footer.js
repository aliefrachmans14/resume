import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import FooterItem from './FooterItem'
import './Footer.css'
import { Link } from "react-router-dom";

import logo from '../img/initial-name-logo.svg'
import { faBehance, faDribbble, faFacebookF, faGithub, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faCopyright } from '@fortawesome/free-solid-svg-icons';

function Footer() {
    const facebookIcon = <FontAwesomeIcon icon={faFacebookF} />
    const twitterIcon = <FontAwesomeIcon icon={faTwitter} />
    const instagramIcon = <FontAwesomeIcon icon={faInstagram} />
    const linkedinIcon = <FontAwesomeIcon icon={faLinkedin} />
    const dribbleIcon = <FontAwesomeIcon icon={faDribbble} />
    const behanceIcon = <FontAwesomeIcon icon={faBehance} />
    const githubIcon = <FontAwesomeIcon icon={faGithub} />
    const copyrightIcon = <FontAwesomeIcon icon={faCopyright} />

    const socialList = [
        {
            socialLink: 'https://web.facebook.com/alief.rs',
            socialIcon: facebookIcon
        },
        {
            socialLink: 'https://twitter.com/alfrchmn',
            socialIcon: twitterIcon
        },
        {
            socialLink: 'https://www.instagram.com/aliefrachmans_/',
            socialIcon: instagramIcon
        },
        {
            socialLink: 'https://www.linkedin.com/in/alief-rachman-s/',
            socialIcon: linkedinIcon
        },
        {
            socialLink: 'https://dribbble.com/aliefrachman',
            socialIcon: dribbleIcon
        },
        {
            socialLink: 'https://www.behance.net/aliefrachmans14',
            socialIcon: behanceIcon
        },
        {
            socialLink: 'https://github.com/aliefrachmans14',
            socialIcon: githubIcon
        },
    ]

    return (
        <div className="footer">
            <div className="container">
                <div className="footer-top">
                    <div className="row footer-main">
                        <div className="col-lg-6 footer-main-content">
                            <div className="footer-logo">
                                <Link to="/">
                                    <img src={logo} alt="logo" />
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-6 footer-main-content">
                            <h4>Follow Me</h4>
                            <div className="footer-social">
                                {
                                    socialList.map((socials) => {
                                        return (
                                            <FooterItem
                                                socialLink={socials.socialLink}
                                                socialIcon={socials.socialIcon}
                                            />
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <div className="dividing-line">
                    <hr />
                </div>
                <div className="footer-copyright">
                    <p>Copyright {copyrightIcon} 2020 All rights reserved | Alief Rachman Septiana</p>
                </div>
            </div>
        </div>
    )
}

export default Footer
