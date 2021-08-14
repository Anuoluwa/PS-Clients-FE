import React, { useEffect, useState } from 'react';
import styles from "./index.module.scss";
import ProductHeader from '../ProductHeader';
import CatalogueItem from '../CatalogueItem';
import { loadProducts } from '../../redux/actions/productAction';
import { connect } from 'react-redux';
import LoadingState from '../LoadingState';
import EmptyState from '../EmptyState';

const CatalogueTable = (props) => {

    useEffect(() => {
        props.loadProducts()
    }, [])

    const { products, isLoading } = props.products
    console.log(products)

    const total_products = products?.length

     // Search Implementation
     const [searchQuery, setSearchQuery] = useState('')
     const handleSearch = (e) => {
        setSearchQuery(e.target.value)
     }
 
     // Get Filtered Products 
     const filtered_products = products.filter((product) => (
         product.productName.toLowerCase().includes(searchQuery.toLowerCase())
     ))

    if(isLoading){
        return(
            <LoadingState />
        )
    }

    return(
        <>
            <div className={styles.catalogue_header}>
                <ProductHeader 
                    product_title="All Products"  
                    total_products={total_products}
                    searchQuery={searchQuery} 
                    handleSearch={handleSearch} 
                    className={styles.product_header}
                    />
            </div>
            <div className={styles._}>
                <div className={styles.container}>
                    <div className={styles.table_head}>
                        <div>Product Name</div>
                        <div>Category</div>
                        <div>Composition</div>
                        <div>Supplier</div>
                        <div>NAFDAC No</div>
                        <div>Date Uploaded</div>
                        <div>Cost</div>
                        <div>Expiring Day</div>
                    </div>
                    <div className={styles.table_body}>
                        {
                            searchQuery ? (
                                filtered_products === 0 ? <EmptyState message="No Product Found"/> :
                                filtered_products.map((product) => {
                                    return(
                                        <CatalogueItem key={product?._id} {...product}/>
                                    )
                                })
                            ):
                            total_products === 0 ? <EmptyState /> :
                            products.map((product) => (
                                <CatalogueItem key={product?._id} {...product}/>
                            ))
                        }
                    </div>
                </div>  
            </div>
        </>
    )
}

const mapStateToProps = (state) => ({
    products:state.products
})

export default connect(mapStateToProps, {loadProducts}) (CatalogueTable)
