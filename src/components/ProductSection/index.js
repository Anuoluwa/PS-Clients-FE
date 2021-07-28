import React, { useState } from 'react';
import FilterSection from '../FilterSection';
import ProductList from '../ProductList';
import styles from './index.module.scss';

const ProductSection = () => {

    const [categoryName, setCategoryName] = useState();

    const handleCategoryClick = (event) => {
        setCategoryName(event.target.textContent)
        console.log(event.target.textContent)
    }

    return(
        <div className={styles._}>
            <div className={styles.category_section}>
                <FilterSection handleCategoryClick={handleCategoryClick} />
            </div>
            <div className={styles.product_showcase}>
                <ProductList categoryName={categoryName}/>
            </div>
        </div>
    )
}

export default ProductSection;