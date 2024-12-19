// components/ContactInfo.js
// pages/_app.js
import "@fortawesome/fontawesome-free/css/all.min.css";
import { FaPhoneSquareAlt } from "react-icons/fa";
import React from "react";
import styles from "./ContactInfo.module.css";
import { MdAttachEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
// import logo from "/elbrit.png";

const ContactInfo = () => {
  return (
    <div className={styles.container}>
      <div className={styles.mainContainer}>
        <div className={styles.contactItem}>
          <div>
            <FaPhoneSquareAlt className={styles.icons} />
          </div>
          <div className={styles.text}>
            <strong>Phone Number</strong>
            <br />
            <p>+974 3118 1843</p>
          </div>
        </div>
        <div className={styles.contactItem}>
          <div>
            <MdAttachEmail className={styles.icons} />
          </div>
          <div className={styles.text}>
            <strong>Email Address</strong>
            <br />
            <p>Elbritcqhr@gmail.com</p>
          </div>
        </div>
        <div className={styles.contactItem}>
          <div>
            <FaLocationDot className={styles.icons} />
          </div>
          <div className={styles.text}>
            <strong>Office Location</strong>
            <br />
            <p>Ambassador Street, Zone 61,</p>
          </div>
        </div>
      </div>
      <div className={styles.logoContainer}>
        <div className={styles.footerImageContainer}>
          <img
            src="/logo.png"
            alt="Elbrit Life Sciences Logo"
            className={styles.logo}
          />
        </div>

        <p className={styles.description}>
          Your health, physical and emotional well-being is important to us. We
          are always by your side and have made it even easier for you to find
          the necessary vitamins.
        </p>
      </div>
      <footer className={styles.footer}>
        <p>
          © Elbrit Life Sciences Private Limited. C20, BKC, G Block, Mumbai
          400051
        </p>
      </footer>
    </div>
  );
};

export default ContactInfo;
