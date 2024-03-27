import React, { useEffect, useState } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';

import getSneakers from '../../services/sneakersData';
import Card from '../components/cardProduct';

const Product: React.FC = () => {

    const [sneakers, setSneakers] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = getSneakers();
                setSneakers(response.sneakers)
            } catch (error) {
                console.log(error)
            }
        }
        fetchData()
    }, [])

    return (
        <View style={style.list}>
            <FlatList
                data={sneakers}
                renderItem={({ item }) => <Card {...item} />}
                numColumns={2} />
        </View>
    )
}

const style = StyleSheet.create({
    list: {
        flex: 1
    }
})

export default Product;