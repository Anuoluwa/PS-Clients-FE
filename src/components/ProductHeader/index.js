import React from 'react';
import SearchComponent from '../SearchComponent';
import styles from './index.module.scss';

const ProductHeader = ({product_title, total_products, total_products_in_category}) => {
    return(
        <div className={styles.header}>
            <div className={styles.header_title}>
                <h2>{product_title}</h2>
                <small>{total_products_in_category ? total_products_in_category : total_products} Products Found</small>
            </div>
            <div className={styles.search_input}>
                <SearchComponent 
                title="Products"/>
            </div>
        </div>
    )
}

export default ProductHeader;