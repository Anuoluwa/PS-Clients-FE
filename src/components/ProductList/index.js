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

    // Get all available products
    const { products, isLoading } = props.products
    console.log(products)

    //Get total number of available products
    const total_products = products?.length

    
    let product_title = "All Products" // define title globally

    //change all product title to the clicked category 
    if(props.categoryName){
        product_title = props.categoryName
    }

    // Get product by category 
    const products_by_category = products.filter((product) => {
        return product?.category.category === props.categoryName
    })

    // Get total number of product in a category
    let total_products_in_category = products_by_category?.length

    if(props.supplierName){
        product_title = props.supplierName
    }

    // Get product by supplier 
    const products_by_supplier = products.filter((product) => {
        return product?.supplier?.supplierName === props.supplierName
    })

    console.log(products_by_supplier)

    // Get total number of product in a category
    let total_products_in_supplier = products_by_supplier?.length
   
   

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
    
                        {
                            props.categoryName ? 
                            (<ProductHeader product_title={props.categoryName}  total_products={total_products_in_category} /> ) :

                            props.supplierName ? 
                            (<ProductHeader product_title={props.supplierName}  total_products={total_products_in_supplier} /> ) : 
                            
                            <ProductHeader product_title={product_title}  total_products={total_products} />
                        }
                    </>
                    <div className={styles.cards_container}>
                        {
                            props.categoryName  ? (
                                total_products_in_category == 0 ? <EmptyState message="No available product in this category"/> :
                                products_by_category.map((product) => {
                                    return(
                                        <ProductItem key={product?.id} {...product} />
                                    )
                                }) 
                            ) :

                            props.supplierName  ? (
                                total_products_in_supplier == 0 ? <EmptyState message={`No available product by ${props.supplierName}`}/> :
                                products_by_supplier.map((product) => {
                                    return(
                                        <ProductItem key={product?.id} {...product} />
                                    )
                                }) 
                            ) :

                            (
                                total_products == 0 ? <EmptyState message="No Product Found"/> :
                                products.map((product) => {
                                    return(
                                        <ProductItem key={product?._id} {...product}/>
                                    )
                                })
                            )
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
