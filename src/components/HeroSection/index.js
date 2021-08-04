import React from 'react';
import { BiChevronsRight } from 'react-icons/bi'
import hero_img from '../../assets/images/pharmacist-rafiki.svg'
import ellipse_bg from '../../assets/images/ellipse2.svg'
import { PrimaryButton } from '../../elements/CustomButton';
import styles from './index.module.scss';

const HeroSection = () => {
    return(
        <section className={styles._}>
            <div className={styles.ellipse}>
                <svg width="1006" height="679" viewBox="0 0 1006 679" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1162.5 -19C1162.5 170.613 1099.72 649.257 839.5 677C579.28 704.743 -65.7128 418.911 6.50004 128C78.7128 -162.911 586.817 -72.8786 807.471 -72.8786C1003.71 -52.0711 1162.5 -208.613 1162.5 -19Z" fill="#8300E0" fill-opacity="0.5"/>
                </svg>
            </div>
            <div className={styles.container}>
                <div className={styles.hero_text}>
                    <div className={styles.text_content}>
                        <h1>Your Healthcare <br className={styles.desktop_break} /> e-Procurement Partner</h1>
                        <p>Save money and streamline your pharmaceutical purchasing activities, with access to over 2,000+ SKU’s.
                        We are committed to serve healthcare providers with smarter procurement solutions.</p>
                        <PrimaryButton className={styles.hero_button}>Product List</PrimaryButton>
                    </div>
                </div>
                <div className={styles.hero_image}>
                    <img src={hero_img} alt="hero image"/>
                </div>

                {/* <div className={styles.hero_one}>
                    <div className={styles.hero_text}>
                        <p>Welcome to PharmaServe 👋</p>
                        <h1 className={styles.title}>GET YOUR <span>DRUGS</span></h1>
                        <div className={styles.mini_details}>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste repellat natus, sit amet consectetur adipisicing</p>
                        </div>
                        <div className={styles.link_container}>
                            <p>View All</p><BiChevronsRight className={styles.icon_right}/>
                        </div>
                    </div>
                </div>
                <div className={styles.hero_two}>
                    <div className={styles.hero_two_content}>
                        <div className={styles.featured_drug}>
                            <small>Featured</small>
                        </div>
                        <div className={styles.featured_details}>
                            <h2>Ibuprofen</h2>
                            <h2>₦2,500</h2>
                        </div>
                    </div>
                </div>
                <div className={styles.hero_three}>
                    <div className={styles.hero_three_content}>
                        <div className={styles.featured_drug}>
                            <small>Featured</small>
                        </div>
                        <div className={styles.featured_details}>
                            <h2>Capsule</h2>
                            <h2>₦1,500</h2>
                        </div>
                    </div>
                </div> */}
            </div>
        </section>
    )
}
export default HeroSection;