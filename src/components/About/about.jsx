import React from "react";
import "./about.css";
import left from "../../assets/favicon.ico";
import play_icon from "../../assets/play.png";

const about = () => {
  return (
    <div className="about">
      <div className="about_left">
        <img src={left} alt="" className="left" />
      </div>
      <div className="about_right">
        <h3>About Prabha Exim Networks</h3>
        <h2>Your Search Ends Here!</h2>
        <p>
          Welcome to Prabha Exim Network, your trusted partner in seamless
          global trade. We specialize in providing end-to-end import and export
          solutions, connecting businesses worldwide with efficiency,
          transparency, and reliability. Our core expertise lies in simplifying
          international trade by handling everything from procurement and
          logistics to compliance and documentation, ensuring that your goods
          reach their destination on time, every time.{" "}
        </p>
        <p>
          At Prabha Exim Network, we understand that global trade can be complex
          and daunting, which is why we make it our mission to streamline the
          entire process for you. With our extensive network of suppliers,
          shippers, and customs experts, we are able to offer personalized
          solutions tailored to your specific needs. Our services allow you to
          focus on your core business while we manage the intricacies of
          international trade.{" "}
        </p>

        <p>
          By partnering with Prabha Exim Network, you gain access to a team of
          dedicated professionals who are committed to helping you expand your
          market reach, reduce operational costs, and ensure compliance with
          global trade regulations. We are here to make your business thrive in
          the global marketplace—because your success is our success. Let’s
          navigate the world of international trade, together!
        </p>
      </div>
    </div>
  );
};

export default about;
