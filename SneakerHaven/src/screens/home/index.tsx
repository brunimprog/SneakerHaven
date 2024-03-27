import React from 'react';
import { SafeAreaView } from 'react-native';

import NavBar from '../components/navbar'
import Product from '../product/product.index'

const Home: React.FC = () => {
    return (
        <SafeAreaView>
            <NavBar />
            <Product />
        </SafeAreaView>
    );
};

export default Home;