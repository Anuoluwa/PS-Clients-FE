import React from 'react';
import FilterSection from '../FilterSection';
import styles from './index.module.scss';

const ProductSection = () => {
    return(
        <div className={styles._}>
            <div className={styles.filter_section}>
                <FilterSection />
            </div>
            <div className={styles.product_showcase}>

            </div>
        </div>
    )
}

export default ProductSection;