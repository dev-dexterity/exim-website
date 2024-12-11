import React from "react";
import './owner.css'
import KD from '../../assets/KD.jpg'

const Owner = () => {
    return (
        <div className="owner">
            <div className="left-pro">
                <img src={KD} alt="" />
                <p1>  <h2>Kaustubh Dahiwal (Proprietor)</h2> 
                    <br />
                    <br />
                    Hello, I'm Kaustubh Dahiwal, the founder of PRABHA EXIM NETWORK . I hold a Master's in Business Administration (MBA) and have spent the last five years working as a Sales Consultant in the automobile industry. During this time, I’ve gained valuable experience in customer relationship management, effective communication, and addressing client queries, which are essential skills in any business.
                    <br/>
                    <br/>
                    Driven by my growing interest in the import-export industry, I decided to pursue my passion by launching my own international trade venture. With a focus on building long-term relationships and delivering exceptional service, I aim to facilitate seamless global trade opportunities.
                </p1>
            </div>
           {/* <div className="right">
            <img src={KD} alt="" />
                <p1>
                <h2>Prachi Dahiwal (Co-Founder)</h2> 
                <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo voluptates atque quibusdam dolores soluta officiis consequatur! Accusamus tempore provident rerum voluptatibus. Voluptatibus natus corporis maiores porro! Ipsa eum ipsum laudantium. 
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure ea itaque quis blanditiis, dolore dolores quidem enim esse labore ipsam officiis repellat animi assumenda molestias ab omnis ut repellendus neque?
            </p1>
           </div> */}
        </div>
    )
}

export default Owner