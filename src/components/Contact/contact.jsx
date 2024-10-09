import React from 'react'
import './contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import call_icon from '../../assets/phone-icon.png'
import loc_icon from '../../assets/location-icon.png'

const contact = () => {
  return (
    <div className='contact'>
      <div className="contact-col">
        <h3>Send Us a Message <img src={msg_icon} alt="" /> </h3>
        <p>Feel free to reach out through contact form or find our contact information below.Clear all your Questions via call or mail us at the given email</p>
        <ul>
            <li><img src={mail_icon} alt="" />prabhaeximnetwork@gmail.com</li>
            <li> <img src={call_icon} alt="" /> +91 1234567890</li>
            <li> <img src={loc_icon} alt="" /> Satyam Industrial Estate, Aasmant Apts, Sr.No.1/4, Near, Opp. SNDT College, Pune, Maharashtra 411004, India</li>
        </ul>
      </div>
      <div className="contact-col"></div>
    </div>
  )
}

export default contact
