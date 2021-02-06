import React from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import Login from './login'

export default function CustomButton ( { text, width, onClick } ) {
    return(
        <TouchableOpacity onPress = {onClick}>
            <View style={styles.button}>
                <Text style={styles.buttonText}>{ text }</Text>
            </View>
        </TouchableOpacity>
    )   
};

const styles = StyleSheet.create( {
    button: {
        backgroundColor: 'rgba(44, 37, 56, 0.8)',
        borderRadius: 100,
        marginTop: 5,
        fontSize: 18,
        height: 50,
        width: '100%',
        justifyContent: 'center',
    },
    buttonText: {
        textTransform: 'uppercase',
        textAlign: 'center',
        fontSize: 18,
        fontFamily: 'Nyata-FTR',
        color: 'rgba(255, 255, 255, 0.7)',
    }
})