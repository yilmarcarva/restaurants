import React, {useState, useRef, useEffect} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Button } from 'react-native-elements'
import {useNavigation} from '@react-navigation/native'
import Toast from 'react-native-easy-toast'
//Imports fuera de raiz
import { closeSession, getCurrentUser } from '../../utils/actions'
import Loading from '../../utils/components/Loading'
import InfoUser from '../../utils/components/account/InfoUser'
import AccountOptions from '../../utils/components/account/AccountOptions'

export default function UserLogged() {
    const toastRef = useRef()
    const navigation=useNavigation()

    const [loading, setLoading] = useState(false)
    const [loadingText, setLoadingText] = useState("")
    const [user, setUser] = useState(null)

    useEffect(() => {
       setUser(getCurrentUser())
    }, [])

    return (
        <View style={styles.container}>
            {  
               user && (
                <View>
                    <InfoUser user={user} setLoading={setLoading} setLoadingText={setLoadingText}/> 
                    <AccountOptions
                    user={user}
                    toastRef={toastRef}
                    />
                </View>
               )
            }

            <Button
                title="Cerrar sesión"
                buttonStyle={styles.btnCloseSesion}
                titleStyle={styles.btnCloseSesionTitle}
                onPress={() => {
                    closeSession()
                    navigation.navigate("restaurants")
                }}
            />
            <Toast ref={toastRef} position="center" opacity={0.9}/>
            <Loading isVisible={loading} text={loadingText} />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        minHeight:"100%",
        backgroundColor: "#f9f9f9"
    },
    btnCloseSesion:{
        marginTop: 30,
        borderRadius: 5,
        backgroundColor: "#fff",
        borderTopWidth: 1,
        borderBottomWidth: 1,
        paddingVertical: 10,
        width: "60%",
        alignSelf: "center",
        borderLeftWidth:1,
        borderRightWidth:1,
        borderColor:"#442484"
    },
    btnCloseSesionTitle: {
        color: "#442484"
    }
})
