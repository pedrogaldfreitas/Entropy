import React, {Component, useState} from 'react';
import { TextInput, Text, View, StyleSheet, ScrollView, KeyboardAvoidingView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Button from '../Components/button'
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view'
import auth from '@react-native-firebase/auth'

export default function signUpPage ({navigation}) {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confPassword, setConfPassword] = useState('')
    const [errorText, setErrorText] = useState('')

    function signUpButton() {
        if ((email.trim() !== '')&&(password.trim() !== '')&&(confPassword.trim() !== '')) {
            if (confPassword !== password) {
                console.log("Passwords Do Not Match.")
                return;
            }
            auth().createUserWithEmailAndPassword(email, password).then(() => {console.log("User account created."); navigation.navigate("Profile Page")}).catch(error => {
                if (error.code === 'auth/email-already-in-use') {
                    setErrorText('Email already in use.')
                    console.log('Error: Email already in use.')
                } else if (error.code === auth/invalid-email) {
                    setErrorText('Email already in use.')
                    console.log('Error: Invalid email.')
                }
                
            })
        }
    }

    return(    
        
        <LinearGradient style = {styles.background}
                        colors={['#46232d', '#510e87', '#25097f', '#13134e']}
                        start={{x: 0.5, y: 0}}
                        end={{x: 1, y: 1}}>
            <Text style={styles.header}>SIGN UP</Text>
            <View style={styles.form}>
                <Text style = {styles.normalText}>     email</Text>
                <TextInput style = {styles.inputContainer}
                            autoCorrect = {false}
                            placeholderTextColor = 'rgba(255, 255, 255, 0.3)'
                            keyboardAppearance = "dark" 
                            autoCapitalize = "none" 
                            onChangeText = {(val) => {setEmail(val)}}/>
                <Text style = {styles.normalText}>     password</Text>
                <TextInput style = {styles.inputContainer}
                            autoCorrect = {false}
                            placeholderTextColor = 'rgba(255, 255, 255, 0.3)'
                            keyboardAppearance = "dark" 
                            autoCapitalize = "none"
                            onChangeText = {(val) => {setPassword(val)}} 
                            secureTextEntry />
                <Text style = {styles.normalText}>     confirm password</Text>
                <TextInput style = {styles.inputContainer}
                            autoCorrect = {false}
                            placeholderTextColor = 'rgba(255, 255, 255, 0.3)'
                            keyboardAppearance = "dark" 
                            autoCapitalize = "none" 
                            onChangeText = {(val) => {setConfPassword(val)}}
                            secureTextEntry />
                <Text style = {styles.errorText}>{errorText}</Text>
            </View>  
            <View style={styles.signUpButton}>
                <Button text="SIGN UP" onClick={() => {signUpButton()}}/>
            </View>
        </LinearGradient>
    );
        
    
    createUser = () => {

    }
}
//line 47: <TextInput style = {[styles.inputContainer, this.state.clickedStyle]}
const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: 'blue',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center'
    },
    form: {
        //alignItems: 'center',
        width: '80%',
    },
    inputContainer: {
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
        borderRadius: 100,
        color: 'rgba(255, 255, 255, 0.5)',
        paddingLeft: 15,
        paddingRight: 15,
        marginTop: 5,
        fontSize: 18,
        width: '100%',
        fontFamily: 'Nyata-FTR'
    },
    signUpButton: {
        marginTop: 10,
        width: '80%',
    },
    normalText: {
        color: 'rgba(255, 255, 255, 0.7)',
        fontSize: 17,
        fontFamily: 'Nyata-FTR',
        marginTop: 15,
        
    },
    header: {
        color: 'rgba(255, 255, 255, 0.7)',
        fontFamily: 'Nyata-FTR',
        fontSize: 50,
    },
    errorText: {
        fontSize: 15,
        color: 'rgb(191, 56, 33)',
        fontFamily: 'Nyata-FTR',
        marginTop: 3,
        width: '100%',
    },
})