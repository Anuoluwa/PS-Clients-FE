import React from 'react';
import CatalogueHero from '../components/CatalogueHero';
import CatalogueTable from '../components/CatalogueTable';
import Layout from '../components/Layout';
import ProductHeader from '../components/ProductHeader';



const Catalogue = () => {
    return(
       <Layout>
           <CatalogueHero />
           <CatalogueTable />
       </Layout>
    )
}

export default Catalogue