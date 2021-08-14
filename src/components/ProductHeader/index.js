import React from 'react';
import SearchComponent from '../SearchComponent';
import styles from './index.module.scss';

const ProductHeader = ({product_title, total_products, searchQuery, handleSearch, className}) => {
    return(
        <div className={`${styles.header} ${className}`}>
            <div className={styles.header_title}>
                <h2>{product_title}</h2>
                <small>{total_products} Products Found</small>
            </div>
            <div className={styles.search_input}>
                <SearchComponent
                searchQuery={searchQuery} 
                handleSearch={handleSearch}
                title="Products"/>
            </div>
        </div>
    )
}

export default ProductHeader;