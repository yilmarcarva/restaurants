import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Input,Button } from 'react-native-elements'


export default function RegisterForm() {
    return (
        <View style={styles.form}>
        <Input
            containerStyle={styles.input}
            placeholder="Ingresa tu E-mail"
        />
        <Input
            containerStyle={styles.input}
            placeholder="Ingresa tu Contraseña"
            password={true}
            secureTextEntry={true}
        />
        <Input
            containerStyle={styles.input}
            placeholder="Confirmar Contraseña"
            password={true}
            secureTextEntry={true}
        />
        <Button
            title="Registrar Usuario"
            buttonStyle={styles.button}
            containerStyle={styles.btnContainer}
        />
        </View>
    )
}

const styles = StyleSheet.create({
    form: {
        marginTop: 30
    },
    input: {
        width: "100%",
        borderColor:"#442484"
    },
    button: {
        backgroundColor: "#442484",
        
    },
    btnContainer:{
        marginTop: 20,
        width: "80%",
        alignSelf: "center",
        borderRadius: 10
    }

})
