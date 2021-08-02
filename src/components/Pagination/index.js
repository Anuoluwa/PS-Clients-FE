import React from 'react';
import { HiOutlineChevronLeft, HiOutlineChevronRight } from 'react-icons/hi';
import Button, { PrimaryButton } from '../../elements/CustomButton';

import styles from './index.module.scss';

const Pagination = () => {
    return(
        <div className={styles._}>
            <div className={styles.container}>
                <div className={styles.display_text}>
                    <p>Displaying Page 1 of 20</p>
                </div>
                <div className={styles.page_btn_container}>
                    <Button className={styles.direction_btn}> <HiOutlineChevronLeft /> </Button>
                    <Button className={`${styles.num_btn} ${styles.active_btn}`}>1</Button>
                    <Button className={styles.num_btn}>2</Button>
                    <Button className={styles.num_btn}>3</Button>
                    <Button className={styles.num_btn}>4</Button>
                    <Button className={styles.num_btn}>5</Button>
                    <Button className={styles.direction_btn}><HiOutlineChevronRight /></Button>
                </div>
            </div>
        </div>
    )
}

export default Pagination