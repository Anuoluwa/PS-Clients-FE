import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './index.module.scss';

const Nav = () => {

    const [menuOpen, setMenuOpen] = useState(false);

    const showMenu = () => {
        setMenuOpen(!menuOpen)
    }


    return(
        <div className={styles._}>
            <div className={styles.container}>
                <div className={styles.logo}>
                    <NavLink to="/"><h2><strong>PharmaServ</strong></h2></NavLink>
                </div>
                <div className={`${menuOpen ? styles.hamburger_menu+ ' ' + styles.toggle : styles.hamburger_menu}`} onClick={showMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div className={`${menuOpen ? styles.nav_menu+ ' ' + styles.toggle : styles.nav_menu}`}>
                    <ul className={styles.menu_list}> 
                        <li><NavLink exact={true} to="/" activeClassName={styles.selected}>Products</NavLink></li>
                        <li><NavLink to="/catalogue" activeClassName={styles.selected}>Catalogue</NavLink></li>
                        <li><NavLink to="/contact" activeClassName={styles.selected}>Contact</NavLink></li>
                        <li><NavLink to="/cart" activeClassName={styles.selected}>Cart</NavLink></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Nav;