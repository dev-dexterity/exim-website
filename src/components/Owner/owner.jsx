import React from "react";
import './owner.css'
import KD from '../../assets/play.png'

const Owner = () => {
    return (
        <div className="owner">
            <div className="left-pro">
                <img src={KD} alt="" />
                <p1>  <h2>Kaustubh Dahiwal (Proprietor)</h2> 
                    <br />
                    <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo voluptates atque quibusdam dolores soluta officiis consequatur! Accusamus tempore provident rerum voluptatibus. Voluptatibus natus corporis maiores porro! Ipsa eum ipsum laudantium. 
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure ea itaque quis blanditiis, dolore dolores quidem enim esse labore ipsam officiis repellat animi assumenda molestias ab omnis ut repellendus neque?
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