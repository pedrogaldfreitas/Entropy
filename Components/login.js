import React, {Component, useState} from 'react'
import {StyleSheet, View, Text, TextInput} from 'react-native'
import auth from '@react-native-firebase/auth'
import CustomButton from './button';
import { useNavigation } from '@react-navigation/native';

export default function Login () {
    const navigation = useNavigation()

    //  Firebase Code
    const [initializing, setInitializing] = useState(true)
    const [user, setUser] = useState()
    const APIKEY = 'AIzaSyCA54y6rtZKNDVDHNQ0eslqEidwsoUtvzg'


    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loginErrorText, setLoginErrorText] = useState()


    function loginAuth() {
        if ((email.trim() === '')||(password.trim() === '')) {
            setLoginErrorText('Fields cannot be empty.')
            return;
        }

        auth().signInWithEmailAndPassword(email, password)
            .then(()=>{console.log("Signed in as " + email + " " + password); navigation.navigate("Profile Page"); setLoginErrorText('')})
            .catch((error) => {
                if (error.code === 'auth/user-disabled') {
                    setLoginErrorText('This account has been disabled.')
                }
                if (error.code === 'auth/invalid-email') {
                    setLoginErrorText('Invalid email.')
                }
                if (error.code === 'auth/user-not-found') {
                    setLoginErrorText('An account does not exist with this email address.')
                }
                if (error.code === 'auth/wrong-password') {
                    setLoginErrorText('Incorrect password.')
                }
            })
        
        /*if ((username.trim() === '')||(password.trim() === '')) {
            setLoginErrorText('Fields cannot be empty.');
        } else {
            setLoginErrorText('');
            navigation.navigate("Profile Page")
        }
        
        return;*/
    }




    return (
        <View style = {styles.logincontainer}>
            <TextInput style = {styles.inputContainer} placeholder = "Email" 
                                placeholderTextColor = 'rgba(255, 255, 255, 0.3)' 
                                keyboardAppearance = "dark"
                                autoCapitalize = "none"
                                keyboardType = "email-address"
                                onChangeText = {(textVal) => {setEmail(textVal)}}/>
            <TextInput style = {styles.inputContainer} placeholder = "Password" 
                                    placeholderTextColor = 'rgba(255, 255, 255, 0.3)' 
                                    keyboardAppearance = "dark"
                                    autoCapitalize = "none"
                                    onChangeText = {(textVal) => {setPassword(textVal)}}
                                    secureTextEntry/>
            <CustomButton text="Login" onClick = {()=>{loginAuth()}}/>
        <Text style={styles.warningText}>{loginErrorText}</Text>
        </View>
    )

}



const styles = StyleSheet.create( {
    logincontainer: { 
        width: 200,
        justifyContent: 'flex-end',
    },
    warningText: {
        fontSize: 15,
        color: 'rgb(191, 56, 33)',
        fontFamily: 'Nyata-FTR',
        marginTop: 3,
        width: '100%',
    },
    inputContainer: {
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
        borderRadius: 100,
        color: 'rgba(255, 255, 255, 0.5)',
        paddingLeft: 15,
        paddingRight: 15,
        marginTop: 5,
        fontSize: 18,
        fontFamily: 'Nyata-FTR'
    }
})