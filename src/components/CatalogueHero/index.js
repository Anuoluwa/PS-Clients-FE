import React from 'react';
import styles from './index.module.scss';

const CatalogueHero = () => {
    return(
        <div className={styles._}>
            <div className={styles.container}>
                <h2>Product <span>Catalogue</span></h2>
                <p>Browse through the catalogue of the various medical products available on our platform</p>
            </div>
        </div>
    )
}

export default CatalogueHero