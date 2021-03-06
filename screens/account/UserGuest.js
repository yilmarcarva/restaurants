import React from 'react'
import { StyleSheet, Text, View, ScrollView, Image} from 'react-native'
import {Button} from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'

export default function UserGuest() {
const navigation = useNavigation()

    return (

        <ScrollView style={styles.viewBodys}
            centerContent
        >
            <Image
                source={require("../../assets/restaurant-logo.png")}
                resizeMode="contain"
                style={styles.image}
            />
            <Text style={styles.title}>Consulta tu Perfil en Restaurants</Text>
            <Text style={styles.description}> 
                ¿Como describirías tu mejor restaurante? Busca y visualiza los mejores restaurantes de forma sencilla, vota cuál te ha gustado más y comenta cómo ha sido tu experiencia.
            </Text>
            <Button 
                title="Ver tu perfil."
                buttonStyle={styles.button}
                onPress={() => navigation.navigate("login")}
            />
        </ScrollView>
       
    )
}

const styles = StyleSheet.create({
    viewBodys:{
        marginHorizontal: 30
    },
    image:{
        height:300,
        width:"100%",
        marginBottom:10,
        marginTop: 50
    },
    title:{
        fontWeight: "bold",
        fontSize: 19,
        marginVertical: 10,
        textAlign: "center"
    },
    description: {
        textAlign:"justify",
        marginBottom: 20,
        color: "#a65273",
        fontStyle: "italic"
    },
    button: {
        backgroundColor: "#442484"
    }
})
