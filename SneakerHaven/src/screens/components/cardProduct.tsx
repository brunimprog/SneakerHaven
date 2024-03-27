import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

interface Props {
    name: string,
    price: number,
    image: string
}

const Card: React.FC<Props> = ({name, price, image}) => {
    return (
        <View style={style.card}>
            <Image source={{ uri: image }} style={style.image} />
            <Text style={style.name}>{name}</Text>
            <Text style={style.price}>{price}</Text>
        </View>
    );
};

const style = StyleSheet.create({
    card: {
        borderColor: 'black',
        backgroundColor: 'grey',
        margin: 10,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    image: {
        width: 120,
        height: 120,
        borderRadius: 6
    },
    name: {
        fontSize: 14,
        fontWeight: 'bold',
    },
    price: {
        fontSize: 14,
        fontWeight: 'bold',
    }

})

export default Card;