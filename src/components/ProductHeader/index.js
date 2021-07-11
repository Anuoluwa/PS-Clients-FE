import React from 'react';
import SearchComponent from '../SearchComponent';
import styles from './index.module.scss';

const ProductHeader = ({total_products}) => {
    return(
        <div className={styles.header}>
            <div className={styles.header_title}>
                <h2>All Products</h2>
                <small>{total_products ? total_products : "--"} Products Found</small>
            </div>
            <div className={styles.search_input}>
                <SearchComponent 
                title="Products"/>
            </div>
        </div>
    )
}

export default ProductHeader;