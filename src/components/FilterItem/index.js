import React from 'react'; 
import styles from './index.module.scss';

const FilterItem = ({handleCategoryClick, handleSupplierClick, supplierName, ...category}) => {
    return(
        <li onClick={handleCategoryClick || handleSupplierClick} className={styles.list_item}>{category?.category ||supplierName}</li>
    )
}

export default FilterItem;