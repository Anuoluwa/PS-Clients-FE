import React from 'react';
import HeroSection from '../components/HeroSection';
import Layout from '../components/Layout';
import ProductSection from '../components/ProductSection';
import RegisterSupplierInfo from '../components/RegisterSupplierInfo';

const Home = () => {
    return(
        <Layout>
            <HeroSection />
            <ProductSection />
            <RegisterSupplierInfo />
        </Layout>
    )
}

export default Home;