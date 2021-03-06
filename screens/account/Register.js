import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { Image } from 'react-native'
//Otros imports diferentes de las raices
import RegisterForm from '../../utils/components/account/RegisterForm'


export default function Register() {
    return (
        <KeyboardAwareScrollView>
            <Image
                source={require("../../assets/restaurant-logo.png")}
                resizeMode="contain"
                style={styles.image}
            />
            <RegisterForm/>
        </KeyboardAwareScrollView>
    )
}

const styles = StyleSheet.create({
    image:{
        height:130,
        width:"40%",
        marginBottom:20        
    }
})
