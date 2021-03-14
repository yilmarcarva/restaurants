import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Input,Button } from 'react-native-elements'

export default function ChangeDisplayNameForm({displayName, setShowModal, toastRef}) {
    return (
        <View style={styles.view}>  
           <Input
                placeholder="Ingresar Nombres y apellidos"
                containerStyle={styles.input}
                defaultValue={displayName}
                rightIcon={{
                    type: "material-community",
                    name: "account-circle-outline",
                    color: "#c2c2c2"
                }}
           />
           <Button
                title="Cambiar Nombres y apellidos"
                containerStyle={styles.btnContainer}
                buttonStyle={styles.btn}
           />
        </View>
    )
}

const styles = StyleSheet.create({
    view:{
        alignItems: "center",
        paddingVertical: 10
    },
    input:{
        marginBottom: 10,

    },
    btnContainer: {
        width: "75%",
        alignSelf: "center",
    },
    btn: {
        backgroundColor: "#442484"
    }
})
