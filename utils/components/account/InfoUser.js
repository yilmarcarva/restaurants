import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Avatar } from 'react-native-elements'
//IMPORTS FUERA DE LOS DE RAIZ
import { loadImageFromGallery } from '../../helpers'

export default function InfoUser({ user}) {

    const changePhoto = async () =>{
        const result = await loadImageFromGallery([1,1])
        console.log(result)
    }


    return (
        <View style={styles.container}>
            <Avatar
                rounded
                size="large"
                onPress={changePhoto}
                containerStyle={styles.avatar}
                source={
                    user.photoURL 
                    ? {url: photoURL} 
                    : require("../../../assets/avatar-default.jpg")
                }
            />
            <View style={styles.informationUser}>
                <Text style={styles.displayName}>
                    {user.displayName ? user.displayName : "Anónimo"}
                </Text>
                <Text>{user.email}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        backgroundColor: "#f9f9f9",
        paddingVertical: 30
    },
    informationUser: {
        marginLeft: 20
    },
    displayName: {
        fontWeight: "bold",
        paddingBottom: 5
    }
})
