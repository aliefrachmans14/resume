import React from 'react'
import './FooterItem.css'

function FooterItem(props) {
    return (
        <div className="footer-social">
            <a href={props.socialLink} target="_blank" rel="noreferrer">
                <div className='footer-social-icon'>
                    <i>{props.socialIcon}</i>
                </div>
            </a>
        </div>
    )
}

export default FooterItem
