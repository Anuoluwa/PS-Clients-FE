import React from 'react'; 
import styles from './index.module.scss';

const CategoryItem = ({handleCategoryClick, ...category}) => {
    return(
        <li onClick={handleCategoryClick} className={styles.list_item}>{category?.category}</li>
    )
}

export default CategoryItem;