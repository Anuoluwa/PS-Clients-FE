import React from 'react';
import HeroSection from '../components/HeroSection';
import Layout from '../components/Layout';
import ProductSection from '../components/ProductSection';

const Home = () => {
    return(
        <Layout>
            <HeroSection />
            <ProductSection />
        </Layout>
    )
}

export default Home;