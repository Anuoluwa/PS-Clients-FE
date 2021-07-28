import React, { useEffect, useState } from 'react';
import { IoFilterCircleOutline } from 'react-icons/io5';
import { connect } from 'react-redux';
import { loadCategories, loadSuppliers } from '../../redux/actions/filterActions';
import FilterItem from '../FilterItem';
import styles from './index.module.scss';


const FilterSection = (props) => {

       useEffect(() => {
        props.loadCategories()
        props.loadSuppliers()
    }, [])

  
    const {categories, suppliers, isLoading}  = props.filters;
    console.log(categories)
    console.log(suppliers)
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
                                        <FilterItem handleCategoryClick={props.handleCategoryClick} key={category?._id} {...category}/>
                                    )
                                })
                            }
                        </ul>
                    </div>
                    <div className={styles.filter_title}>
                        <IoFilterCircleOutline className={styles.filter_icon} /> 
                        <h3>Supplier Filter</h3>
                    </div>
                    <div className={styles.filter_list}>
                        <ul>
                            {
                               isLoading ? <p>Loading...</p> :
                                suppliers.map((supplier) => {
                                    return(
                                        <FilterItem  key={supplier?._id} supplierName={supplier?.supplierName} {...supplier}/>
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
    filters:state.filters
})

export default connect(mapStateToProps, { loadCategories, loadSuppliers }) (FilterSection); 