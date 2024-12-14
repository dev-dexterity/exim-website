import React from 'react'
import './contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import call_icon from '../../assets/phone-icon.png'
import loc_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft, faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';

const contact = () => {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "7ae1e0b9-4043-43b0-a5f8-ab055357e095");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };


  return (
    <div className='contact'>
      <div className="contact-col">
        <h3>Send Us a Message <img src={msg_icon} alt="" /> </h3>
        <p>Feel free to reach out through contact form or find our contact information below.Clear all your Questions via call or mail us at the given email</p>
        <ul>
            <li><img src={mail_icon} alt="" />prabhaeximnetwork@gmail.com</li>
            <li> <img src={call_icon} alt="" /> +91 8485862943</li>
            <li> <img  src={loc_icon} alt="" /> Shree Ramkrushna Heights Flat no. 402 Ghule Nagar Vadgoan Budruk Pune 411041</li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
            <label>Your Name</label>
            <input type="text" name='name' placeholder='Enter your Name' required/>
            <label>Phone Number</label>
            <input type="tel" name='phone' placeholder='Enter your mobile number' required/>
            <label>Write your message here</label>
            <textarea name="message" rows="6" placeholder='Enter your Message' required></textarea>
            <button type='submit' className='btn dark-btn'>Submit Now <FontAwesomeIcon className='right-arrow' icon={faArrowRight} /> </button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  )
}

export default contact
