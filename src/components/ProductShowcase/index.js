import React from 'react';
import { HiOutlineShoppingCart } from 'react-icons/hi';
import { PrimaryButton } from '../../elements/CustomButton';
import Pagination from '../Pagination';
import SearchComponent from '../SearchComponent';
import styles from './index.module.scss';

const ProductShowcase = () => {
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
                        <div className={styles.card_item}>
                            <div className={styles.drug_image}>
                                <img src="https://images.unsplash.com/photo-1567427362138-e33c5022aafa?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDZ8fGRydWdzfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60" alt=""/>
                            </div>
                            <div className={styles.details}>
                                <div className={styles.text}>
                                    <h3>Multivitamin</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, dicta...</p>
                                </div>
                                <div className={styles.price_order}>
                                    <h3>₦500</h3>
                                    <PrimaryButton className={styles.order_button}><HiOutlineShoppingCart className={styles.order_icon} /> Order</PrimaryButton>
                                </div>
                            </div>
                        </div>
                        <div className={styles.card_item}>
                            <div className={styles.drug_image}>
                                <img src="https://images.unsplash.com/photo-1574043948184-144f2ef80fe3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjZ8fGRydWdzfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60" alt=""/>
                            </div>
                            <div className={styles.details}>
                                <div className={styles.text}>
                                    <h3>Multivitamin</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, dicta...</p>
                                </div>
                                <div className={styles.price_order}>
                                    <h3>₦500</h3>
                                    <PrimaryButton className={styles.order_button}><HiOutlineShoppingCart className={styles.order_icon} /> Order</PrimaryButton>
                                </div>
                            </div>
                        </div>
                        <div className={styles.card_item}>
                            <div className={styles.drug_image}>
                                <img src="https://images.unsplash.com/photo-1587620927882-1be54961c1ea?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTAwfHxkcnVnc3xlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60" alt=""/>
                            </div>
                            <div className={styles.details}>
                                <div className={styles.text}>
                                    <h3>Multivitamin</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, dicta...</p>
                                </div>
                                <div className={styles.price_order}>
                                    <h3>₦500</h3>
                                    <PrimaryButton className={styles.order_button}><HiOutlineShoppingCart className={styles.order_icon} /> Order</PrimaryButton>
                                </div>
                            </div>
                        </div>
                        <div className={styles.card_item}>
                            <div className={styles.drug_image}>
                                <img src="https://images.unsplash.com/photo-1598046937695-a8957229181d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTM2fHxkcnVnc3xlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60" alt=""/>
                            </div>
                            <div className={styles.details}>
                                <div className={styles.text}>
                                    <h3>Multivitamin</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, dicta...</p>
                                </div>
                                <div className={styles.price_order}>
                                    <h3>₦500</h3>
                                    <PrimaryButton className={styles.order_button}><HiOutlineShoppingCart className={styles.order_icon} /> Order</PrimaryButton>
                                </div>
                            </div>
                        </div>
                        <div className={styles.card_item}>
                            <div className={styles.drug_image}>
                                <img src="https://images.unsplash.com/photo-1624362772755-4d5843e67047?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTc2fHxkcnVnc3xlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60" alt=""/>
                            </div>
                            <div className={styles.details}>
                                <div className={styles.text}>
                                    <h3>Multivitamin</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, dicta...</p>
                                </div>
                                <div className={styles.price_order}>
                                    <h3>₦500</h3>
                                    <PrimaryButton className={styles.order_button}><HiOutlineShoppingCart className={styles.order_icon} /> Order</PrimaryButton>
                                </div>
                            </div>
                        </div>
                        <div className={styles.card_item}>
                            <div className={styles.drug_image}>
                                <img src="https://images.unsplash.com/photo-1567427362138-e33c5022aafa?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDZ8fGRydWdzfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60" alt=""/>
                            </div>
                            <div className={styles.details}>
                                <div className={styles.text}>
                                    <h3>Multivitamin</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, dicta...</p>
                                </div>
                                <div className={styles.price_order}>
                                    <h3>₦500</h3>
                                    <PrimaryButton className={styles.order_button}><HiOutlineShoppingCart className={styles.order_icon} /> Order</PrimaryButton>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.pagination_container}>
                        <Pagination />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductShowcase
