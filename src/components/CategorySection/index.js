import React, { useEffect, useState } from 'react';
import { IoFilterCircleOutline } from 'react-icons/io5';
import { connect } from 'react-redux';
import { loadCategories } from '../../redux/actions/categoryActions';
import CategoryItem from '../CategoryItem';
import styles from './index.module.scss';


const CategorySection = (props) => {

       useEffect(() => {
        props.loadCategories()
    }, [])

  
    const {categories, isLoading}  = props.categories;
    console.log(categories)
    return(
        <div className={styles._}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.filter_title}>
                        <IoFilterCircleOutline className={styles.filter_icon} /> 
                        <h3>Category Filter</h3>
                    </div>
                    <div className={styles.filter_list}>
                        <ul>
                           {
                               isLoading ? <p>Loading...</p> :
                                categories.map((category) => {
                                    return(
                                        <CategoryItem handleCategoryClick={props.handleCategoryClick} key={category?._id} {...category}/>
                                    )
                                })
                           }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    categories:state.categories
})

export default connect(mapStateToProps, { loadCategories }) (CategorySection); 