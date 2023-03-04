import { faDiscord, faFacebook, faInstagram, faLinkedin, faTelegram, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import ContactUs from '../../containers/contact-us'
import './sub-footer.css'

export function SubFooterComponent() {
    return (
        <div className='footer-container'>
        <div className='container'>
            <div className="Footer-div">
                <h5 id='contactUsCSS' className='text'><strong>Contact Us</strong></h5>
                <p><strong>Toll Free:</strong> +1-989-1225-0709</p>
                <strong>Email us at:</strong> <a href="mailto:help@lifeline.ca" target="_blank" rel='noreferrer'>support@healthassist.ca</a>
                <h5 id='followUsText'>Follow us on</h5>
                <a href='https://www.facebook.com/' target="_blank" rel='noreferrer'>
                    <FontAwesomeIcon className='socialMediaIcons' icon={faFacebook} ></FontAwesomeIcon>
                </a>
                <a href='https://www.instagram.com/' target="_blank" rel='noreferrer'>
                    <FontAwesomeIcon id='instagramCSS' className='socialMediaIcons' icon={faInstagram} ></FontAwesomeIcon>
                </a>
                <a href='https://www.linkedin.com/' target="_blank" rel='noreferrer'>
                    <FontAwesomeIcon id='linkedinCSS' className='socialMediaIcons' icon={faLinkedin} ></FontAwesomeIcon>
                </a>
                <a href='https://www.twitter.com/' target="_blank" rel='noreferrer'>
                    <FontAwesomeIcon className='socialMediaIcons' icon={faTwitter} ></FontAwesomeIcon>
                </a>
                <a href='https://wa.me/+19999999999' target="_blank" rel='noreferrer'>
                    <FontAwesomeIcon id='whatsappCSS' className='socialMediaIcons' icon={faWhatsapp} ></FontAwesomeIcon>
                </a>
                <a href='https://www.telegram.com/' target="_blank" rel='noreferrer'>
                    <FontAwesomeIcon id='telegramCSS' className='socialMediaIcons' icon={faTelegram} ></FontAwesomeIcon>
                </a>
                <a href='https://www.discord.com/' target="_blank" rel='noreferrer'>
                    <FontAwesomeIcon id='discordCSS' className='socialMediaIcons' icon={faDiscord} ></FontAwesomeIcon>
                </a>
            </div>
        </div>
        <div className='credits-section'>
            <p>Credits:  <a href='https://pngtree.com/freebackground/blue-medical-care-safety-banner_1033967.html?sol=downref&id=bef'>free background photos from pngtree.com</a></p>
        </div>
    </div>
    
    )
}

