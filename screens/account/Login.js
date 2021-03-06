import React from 'react'
import { Image } from 'react-native'
import { StyleSheet, Text, View,ScrollView } from 'react-native'
import { Divider } from 'react-native-elements'

export default function Login() {
    return (
        <ScrollView>
            <Image
                source={require("../../assets/restaurant-logo.png")}
                resizeMode="contain"
                style={styles.image}
            />
            <View style={styles.container}>
                <Text>Login Form</Text>
                <CreateAccount/>
            </View>
            <Divider style={styles.divider}/>
        </ScrollView>
    )
}

function CreateAccount (props){
    return (
        <Text style={styles.register}
            onPress={() => console.log("Me voy a registrar hpta")}    
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
        height:130,
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
