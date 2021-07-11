import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './index.module.scss';

const Nav = () => {
    return(
        <div className={styles._}>
            <div className={styles.container}>
                <div className={styles.logo}>
                    <NavLink to="/"><h2><strong>PharmaServ</strong></h2></NavLink>
                </div>
                <div className={styles.nav_menu}>
                    <ul className={styles.menu_list}> 
                        <li><NavLink to="/" activeClassName={styles.selected}>Products</NavLink></li>
                        <li><NavLink to="/catalogue">Catalogue</NavLink></li>
                        <li><NavLink to="/contact">Contact</NavLink></li>
                        <li><NavLink to="/cart">Cart</NavLink></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Nav;