import React from 'react';
import { BiChevronsRight } from 'react-icons/bi'
import styles from './index.module.scss';

const HeroSection = () => {
    return(
        <div className={styles._}>
            <div className={styles.container}>
                <div className={styles.hero_one}>
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
                </div>
            </div>
        </div>
    )
}
export default HeroSection;