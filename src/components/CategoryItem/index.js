import React from 'react'; 
import styles from './index.module.scss';

const CategoryItem = ({...category}) => {
    return(
       
        <li className={styles.list_item}>{category?.category}</li>
    )
}

export default CategoryItem;