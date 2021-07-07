import React from 'react';
import Footer from '../Footer';
import Nav from '../Nav';
import styles from './index.module.scss';

const Layout = ({children}) => {
    return(
        <div className={styles._}>
            <div className={styles.nav}>
                <Nav />
            </div>
            <div className={styles.main}>
                {children}
            </div>
            <div className={styles.footer}>
                <Footer />
            </div>
        </div>
    )
}

export default Layout