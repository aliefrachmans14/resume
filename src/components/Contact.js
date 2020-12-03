import { faAt, faGlobe, faMapMarkerAlt, faMobileAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import ContactItem from './ContactItem'
import './Contact.css'

function Contact() {
    const addressIcon = <FontAwesomeIcon icon={faMapMarkerAlt} size='2x' />
    const phoneIcon = <FontAwesomeIcon icon={faMobileAlt} size='2x' />
    const emailIcon = <FontAwesomeIcon icon={faAt} size='2x' />
    const webIcon = <FontAwesomeIcon icon={faGlobe} size='2x' />

    const contacts = [
        {
            contactIcon: addressIcon,
            contactTitle: 'Address',
            contactText: 'Pasar Minggu Kembangan, Jakarta Barat'
        },
        {
            contactIcon: phoneIcon,
            contactTitle: 'Phone',
            contactText: '+62 - 812 - 9807 - 1922'
        },
        {
            contactIcon: emailIcon,
            contactTitle: 'Email',
            contactText: 'aliefrachman85@gmail.com'
        },
        {
            contactIcon: webIcon,
            contactTitle: 'Website',
            contactText: 'https://resume-aliefrachmans.netlify.app/'
        },
    ]
    return (
        <div>
            <div className="contact" id="contact">
                <div className="container">
                    <div className="row contact-list">
                        <h2>Contact Me</h2>
                        <div className="contact-list-item">
                            {
                                contacts.map((contactList) => {
                                    return (
                                        <ContactItem
                                            contactIcon={contactList.contactIcon}
                                            contactTitle={contactList.contactTitle}
                                            contactText={contactList.contactText}
                                        />
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
