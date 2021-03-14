import React, {useState} from 'react'
import { StyleSheet, Text, View, Alert } from 'react-native'
import { Avatar } from 'react-native-elements'
//IMPORTS FUERA DE LOS DE RAIZ
import { updateProfile, uploadImage } from '../../actions'
import { loadImageFromGallery } from '../../helpers'

export default function InfoUser({ user, setLoading, setLoadingText}) {
    const [photoUrl, setphotoUrl] = useState(user.photoURL)

    const changePhoto = async() =>{
        const result = await loadImageFromGallery([1, 1])
        console.log(result)
        if(!result.status){
            return
        }
        setLoadingText("Actualizando imagen.")
        setLoading(true)
        const resultUploadImage = await uploadImage(result.image,"avatars",user.uid)
        if(!resultUploadImage.statusResponse){
            setLoading(false)
            Alert.alert("Ocurrió un problema almacenando la imagen de perfil.")
            return
        }
        const resultUpdateProfile = await updateProfile({photoURL: resultUploadImage.url})
        setLoading(false)
        if(resultUpdateProfile.statusResponse){
            setphotoUrl(resultUploadImage.url)
        }else{
            Alert.alert("Ocurrió un problema al actualizar la foto de perfil, sos pendejo")
        }
    }


    return (
        <View style={styles.container}>
            <Avatar
                rounded
                size="large"
                onPress={changePhoto}
                // containerStyle={styles.avatar}
                source={
                    photoUrl
                    ? {uri: photoUrl} 
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
