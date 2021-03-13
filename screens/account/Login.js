import React from 'react'
import { Image } from 'react-native'
import { StyleSheet, Text, View,ScrollView } from 'react-native'
import { Divider } from 'react-native-elements'
import {useNavigation} from '@react-navigation/native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
//librerias que no son de la raiz
import LoginForm from '../../utils/components/account/LoginForm'

export default function Login() {

    return (
        <KeyboardAwareScrollView>
            <Image
                source={require("../../assets/restaurant-logo.png")}
                resizeMode="contain"
                style={styles.image}
            />
            <View style={styles.container}>
                <LoginForm/>
                <CreateAccount/>
            </View>
            <Divider style={styles.divider}/>
        </KeyboardAwareScrollView>
    )
}

function CreateAccount (props){
    const navigation = useNavigation()
    return (
        <Text style={styles.register}
            onPress={() => navigation.navigate("register")}    
        >
            ¿Aún no tienes cuenta? {""}
            <Text style={styles.btnRegistrar}>
                Regístrate
            </Text>
        </Text>
    )
}

const styles = StyleSheet.create({
    image:{
        height:140,
        width:"40%",
        marginBottom:20     
    },
    container: {
        marginHorizontal: 40
    },
    divider: {
        backgroundColor: "#442484",
        margin: 40
    },
    register: {
        marginTop:15,
        marginHorizontal: 10,
        alignSelf: "center"
    },
    btnRegistrar: {
        color: "#442484",
        fontWeight:"bold"
    }
})
