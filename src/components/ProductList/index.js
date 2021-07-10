import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { PrimaryButton } from '../../elements/CustomButton';
import { loadProducts } from '../../redux/actions/productAction';
import Pagination from '../Pagination';
import ProductItem from '../ProductItem';
import SearchComponent from '../SearchComponent';
import styles from './index.module.scss';

const ProductList = (props) => {

    useEffect(() => {
        props.loadProducts()
    }, [])

    const { products } = props.products
    console.log(products)

    return(
        <div className={styles._}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.header}>
                        <div className={styles.header_title}>
                            <h2>All Drugs</h2>
                            <small>500 Products Found</small>
                        </div>
                        <div className={styles.search_input}>
                           <SearchComponent 
                            title="Drugs"/>
                        </div>
                    </div>
                    <div className={styles.cards_container}>
                        {

                            products.map((product) => {
                                return(
                                    <ProductItem key={product?._id} {...product}/>
                                )
                            })
                        }
                    </div>
                    <div className={styles.pagination_container}>
                        <Pagination />
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    products:state.products
})

export default connect(mapStateToProps, {loadProducts}) (ProductList)
