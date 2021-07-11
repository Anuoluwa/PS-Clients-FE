import React from 'react';
import { FiFacebook, FiInstagram, FiMail, FiPhone, FiTwitter } from "react-icons/fi"
import { NavLink } from 'react-router-dom';
import styles from './index.module.scss';

const Footer = () => {

    const date = new Date().getFullYear()
    return(
        <div className={styles._}>
            <div className={styles.container}>
                <div className={styles.first_content}>
                    <div className={styles.social_icons}>
                        <p>Follow Us:</p>
                        <FiTwitter className={styles.social_icon}/>
                        <FiInstagram className={styles.social_icon}/>
                        <FiFacebook className={styles.social_icon}/>
                    </div>
                    <div className={styles.copyright}>
                        <p>&copy; Copyright {date} PharmaServe-ng</p>
                    </div>
                </div>
                <div className={styles.second_content}>
                    <div className={styles.contact_info}>
                        <p><FiMail className={styles.contact_icon}/> pharmserve@gmail.com</p>
                        <p><FiPhone className={styles.contact_icon}/> 09072819212, 08123453446</p>
                    </div>
                    <div className={styles.quick_links}>
                        <NavLink to="/catalogue">Catalogue</NavLink>
                        <NavLink to="/">Register your pharmacy</NavLink>
                        <NavLink to="/">Privacy Policy</NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;