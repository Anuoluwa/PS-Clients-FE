import React from 'react';
import dateFormat from 'dateformat';
import product_placeholder from '../../assets/images/product_placeholder.jpg';
import styles from './index.module.scss';
import { withRouter } from 'react-router';

const CatalogueItem  = ({productPhotoURL, productName, category, composition, supplier, history, ...product}) => {
    const createdAt = dateFormat(`${product?.createdAt}`, "mmm dS, yyyy")
    const expirationDate = dateFormat(`${product?.expirationDate}`, "mmm dS, yyyy")

    return(
        <div className={styles.table_row} onClick={() => history.push(`/product/${product?._id}`)}>
            <div className={styles.col}>
                <div className={styles.product_image}>
                    <img src={productPhotoURL || product_placeholder} alt="" />
                </div>
                <p>{productName}</p>
            </div>
            <div className={styles.col}>
                <p>{category?.category}</p>
            </div>
            <div className={styles.col}>
                <p>{composition}</p>
            </div>
            <div className={styles.col}>
                <p>{supplier?.supplierName}</p>
            </div>
            <div className={styles.col}>
                <p>{product?.approvedProductNo}</p>
            </div>
            <div className={styles.col}>
                <p>{createdAt}</p>
            </div>
            <div className={styles.col}>
                <p>₦{product?.costPerUnit}</p>
            </div>
            <div className={styles.col}>
                <p>{expirationDate}</p>
            </div>
        </div>
    )
}

export default withRouter (CatalogueItem)