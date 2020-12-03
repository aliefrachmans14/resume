import React from 'react'
import './ContactItem.css'

function ContactItem(props) {
    return (
        <div className="contact-item">
            <div className="contact-item-icon">
                <i>{props.contactIcon}</i>
            </div>
            <div className="contact-item-text">
                <h4>{props.contactTitle}</h4>
                <p>{props.contactText}</p>
            </div>
        </div>
    )
}

export default ContactItem
