import React from 'react';
import { IoFilterCircleOutline } from 'react-icons/io5';
import styles from './index.module.scss';


const FilterSection = () => {
    return(
        <div className={styles._}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.filter_title}>
                        <IoFilterCircleOutline className={styles.filter_icon} /> 
                        <h3>Category Filter</h3>
                    </div>
                    <div className={styles.filter_list}>
                        <ul>
                            <li>Analgesics</li>
                            <li>Anti Allergy</li>
                            <li>Anti Fungal</li>
                            <li>Anti Malaria</li>
                            <li>Antioxidant</li>
                            <li>Contraceptives</li>
                            <li>Eye Drops</li>
                        </ul>
                    </div>
                    <div className={styles.filter_title}>
                        <IoFilterCircleOutline className={styles.filter_icon} /> 
                        <h3>Brand Filter</h3>
                    </div>
                    <div className={styles.filter_list}>
                        <ul>
                            <li>Analgesics</li>
                            <li>Anti Allergy</li>
                            <li>Anti Fungal</li>
                            <li>Anti Malaria</li>
                            <li>Antioxidant</li>
                            <li>Contraceptives</li>
                            <li>Eye Drops</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FilterSection;