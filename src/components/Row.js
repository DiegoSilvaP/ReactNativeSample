import React, {useState} from 'react';
import {View, Text} from 'react-native';
import estilos from '../assets/styles'

export default ({data}) => {
    return(
        <View style={estilos.postsStyle}>
            <Text>{data}</Text>
        </View>
    )
}
