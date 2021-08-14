import React, { useState } from 'react';
import { HiOutlineChevronLeft, HiOutlineChevronRight } from 'react-icons/hi';
import Button, { PrimaryButton } from '../../elements/CustomButton';

import styles from './index.module.scss';

const Pagination = ({data, RenderComponent, title, pageLimit, dataLimit}) => {


    const [pages] = useState(Math.round(data.length / dataLimit));
    const [currentPage, setCurrentPage] = useState(1)

    function goToNextPage(){
        setCurrentPage((page) => page + 1)
    }

    function goToPreviousPage(){
        setCurrentPage((page) => page - 1)
    }

    function changePage(event) {
        const pageNumber = Number(event.target.textContent)
        setCurrentPage(pageNumber)
    }

    const getPaginatedData = () => {
        const startIndex = currentPage * dataLimit - dataLimit
        const endIndex = startIndex + dataLimit;
        return data.slice(startIndex, endIndex)
    }

    const getPaginatedGroup = () => {
        let start = Math.floor((currentPage - 1) / pageLimit) * pageLimit
        return new Array(pageLimit).fill().map((_, idx) => start + idx + 1);
    }

    return(
        <div className={styles._}>
            <div className={styles.container}>
                <div className={styles.display_text}>
                    <p>Displaying Page 1 of 20</p>
                </div>
                <div className={styles.page_btn_container}>
                    <Button 
                        onClick={goToPreviousPage}
                        className={`${styles.direction_btn} ${currentPage === 1 ? `${styles.disabled}` : ''}`}> <HiOutlineChevronLeft /> </Button>
                    
                    {/* show page numbers */}
                    {
                        getPaginatedGroup().map((item, index) => (
                            <Button 
                                key={index}
                                onClick={changePage}
                                className={`${styles.num_btn} ${currentPage === item ? `${styles.active_btn}`: null }`}>
                                    {item}
                            </Button>
                        ))
                    }
                    {/* <Button className={`${styles.num_btn} ${styles.active_btn}`}>1</Button>
                    <Button className={styles.num_btn}>2</Button>
                    <Button className={styles.num_btn}>3</Button>
                    <Button className={styles.num_btn}>4</Button>
                    <Button className={styles.num_btn}>5</Button> */}
                    <Button
                        onClick={goToNextPage} 
                        className={`${styles.direction_btn} ${currentPage === pages ? `${styles.disabled}` : ''}`}><HiOutlineChevronRight /></Button>
                </div>
            </div>
        </div>
    )
}

export default Pagination