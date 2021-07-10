import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { loadProducts } from '../../redux/actions/productAction';
import EmptyState from '../EmptyState';
import LoadingState from '../LoadingState';
import Pagination from '../Pagination';
import ProductHeader from '../ProductHeader';
import ProductItem from '../ProductItem';
import styles from './index.module.scss';

const ProductList = (props) => {

    useEffect(() => {
        props.loadProducts()
    }, [])

    const { products, isLoading } = props.products
    console.log(products)

    const total_products = products?.length

    if(isLoading){
        return(
            <div>
                 <LoadingState />
            </div>
        )
    }

    return(
        <div className={styles._}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <>
                        <ProductHeader total_products={total_products}/>
                    </>
                    <div className={styles.cards_container}>
                        {
                            products?.length == 0 ? <EmptyState message="No Product Found"/> :

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
