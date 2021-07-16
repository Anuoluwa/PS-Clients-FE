import React from 'react';
import Footer from '../Footer';
import Nav from '../Nav';
import styles from './index.module.scss';

const Layout = ({children}) => {
    return(
        <div className={styles._}>
            <nav className={styles.nav}>
                <Nav />
            </nav>
            <main className={styles.main}>
                {children}
            </main>
            <footer className={styles.footer}>
                <Footer />
            </footer>
        </div>
    )
}

export default Layout