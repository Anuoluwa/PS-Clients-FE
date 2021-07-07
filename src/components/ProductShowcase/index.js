import React from 'react';
import styles from './index.module.scss';

const ProductShowcase = () => {
    return(
        <div className={styles._}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.header}>
                        <div className={styles.header_title}>
                            <h2>All Drugs</h2>
                            <small>500</small>
                        </div>
                        <div className={styles.search_input}>
                            
                        </div>
                    </div>
                    <div className={styles.cards_container}>
                        <div className={styles.card_item}>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductShowcase
