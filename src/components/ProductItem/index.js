import React from 'react';
import { HiOutlineShoppingCart } from 'react-icons/hi';
import { PrimaryButton } from '../../elements/CustomButton';
import product_placeholder from '../../assets/images/product_placeholder.jpg'
import styles from './index.module.scss';
import { withRouter } from 'react-router';

const ProductItem = ({productName, costPerUnit, productPhotoURL, description, history, ...item}) => {
    return(
        <div className={styles.card_item} onClick={() => history.push(`/product/${item?._id}`)}>
            <div className={styles.drug_image}>
                <img src={productPhotoURL || product_placeholder} alt={productName}/>
            </div>
            <div className={styles.details}>
                <div className={styles.text}>
                    <h3>{productName}</h3>
                    <p>{description}</p>
                </div>
                <div className={styles.price_order}>
                    <h3>₦{costPerUnit}</h3>
                    <PrimaryButton className={styles.order_button}><HiOutlineShoppingCart className={styles.order_icon} /> Order</PrimaryButton>
                </div>
            </div>
        </div>
    )
}

export default withRouter(ProductItem) 