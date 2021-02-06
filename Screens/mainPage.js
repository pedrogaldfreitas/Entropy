import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import 'react-native-gesture-handler';
import Login from '../Components/login';
import LinearGradient from 'react-native-linear-gradient';
import KeyboardAvoid from 'react-native-keyboard-avoid';



export default function mainPage({ navigation }) {  

  return (
      <View style={styles.background}>
        <LinearGradient style={styles.lineargradient}
                        colors={['#13134e', '#25097f', '#510e87', '#46232d']}
                        start={{x: 0.5, y: 0}}
                        end={{x: 1, y: 1}}>
          <StatusBar style="auto" />
          <KeyboardAvoidingView behavior='padding' keyboardVerticalOffset={120} style={styles.loginPart}>
            <Text style={styles.title}>
                E N T R O P Y
            </Text>
            <Login />
          </KeyboardAvoidingView>
          <TouchableOpacity onPress={() => navigation.navigate("Sign Up")}>
            <Text style={styles.signUpButton}>Sign Up</Text>
          </TouchableOpacity>
          <View behavior='position' style={styles.bottomtags}>
            <Text style = {{color: 'rgba(255, 255, 255, 0.3)', fontSize: 10, textAlign: 'center'}}>
              This is a test application made by Pedro Freitas. The intention is an application made for 
              finding parties. Please don't Zuckerberg me and steal my idea. Thanks.
              {'\n \n'}
              Created in Visual Studio Code and React Native
            </Text>
          </View>
        </LinearGradient>
      </View>
  );
}


const styles = StyleSheet.create({
  title: {
    color: 'rgba(255, 255, 255, 0.7)',
    fontSize: 60,
    marginBottom: 10,
    fontFamily: 'Nyata-FTR',
  },
  background: {
    flex: 1,
    backgroundColor: '#2d106b',
    alignItems: 'center',
    justifyContent: 'center'
  },
  lineargradient: {
    alignItems: 'center',
    justifyContent: 'center',
    height: "100%",
    width: "100%",
  },
  loginPart: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomtags: {
    position: 'absolute',
    bottom: 13,
    width: '90%'
  },
  signUpButton: {
    color: 'rgba(255, 255, 255, 0.7)',
    marginTop: 10,
    fontSize: 20,
    fontFamily: 'Nyata-FTR',
  },

});