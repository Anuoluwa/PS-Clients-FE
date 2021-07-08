import React from 'react';
import { HiOutlineChevronLeft, HiOutlineChevronRight } from 'react-icons/hi';
import { PrimaryButton } from '../../elements/CustomButton';

import styles from './index.module.scss';

const Pagination = () => {
    return(
        <div className={styles._}>
            <div className={styles.container}>
                <div className={styles.display_text}>
                    <p>Displaying Page 1 of 20</p>
                </div>
                <div className={styles.page_btn_container}>
                    <PrimaryButton className={styles.direction_btn}> <HiOutlineChevronLeft /> </PrimaryButton>
                    <PrimaryButton className={`${styles.num_btn} ${styles.active_btn}`}>1</PrimaryButton>
                    <PrimaryButton className={styles.num_btn}>2</PrimaryButton>
                    <PrimaryButton className={styles.num_btn}>3</PrimaryButton>
                    <PrimaryButton className={styles.num_btn}>4</PrimaryButton>
                    <PrimaryButton className={styles.num_btn}>5</PrimaryButton>
                    <PrimaryButton className={styles.direction_btn}><HiOutlineChevronRight /></PrimaryButton>
                </div>
            </div>
        </div>
    )
}

export default Pagination