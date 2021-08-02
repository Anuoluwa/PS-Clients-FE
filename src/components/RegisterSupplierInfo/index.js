import React from 'react';
import supplier_img from '../../assets/images/medicine_rafiki.svg';
import { PrimaryButton } from '../../elements/CustomButton';
import styles from './index.module.scss';

const RegisterSupplierInfo = () => {
    return(
        <div className={styles._}>
            <div className={styles.container}>
                <div className={styles.text}>
                    <h2>Register as a <br /> <span>Supplier</span></h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio iste quaerat cumque excepturi amet soluta nesciunt earum doloribus dolores facere?</p>
                    <PrimaryButton className={styles.register_btn}>Sign Up</PrimaryButton>
                </div>
                <div className={styles.image}>
                    <img src={supplier_img} alt="supplier image"/>
                </div>
            </div>
        </div>
    )
}

export default RegisterSupplierInfo