import React, {useState} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Input,Icon,Button } from 'react-native-elements'
import {useNavigation} from '@react-navigation/native'
//Imports fuera de la raiz
import Loading from '../Loading'
import { validateEmail } from '../../helpers'
import { loginWithEmail } from '../../actions'
import { isEmpty } from 'lodash'

export default function LoginForm() {
    const [showPassword, setshowPassword] = useState(false)
    const [formData, setFormData] = useState(defaultFormValues())
    const [errorEmail, setErrorEmail] = useState("")
    const [errorPassword, setErrorPassword] = useState("")
    const [loading, setLoading] = useState(false)

    const navigation= useNavigation()

    const onChange =(e, type) =>{
        setFormData({...formData, [type]: e.nativeEvent.text})
       
    }

    const doLogin= async() =>{
        if(!validateData()){
            return;
        }

        setLoading(true)
        const result = await loginWithEmail(formData.email, formData.password)
        setLoading(false)
        if(!result.statusResponse){
            setErrorEmail(result.error)
            setErrorPassword(result.error)
            return
        }
        navigation.navigate("account")
    }

    const validateData = () =>{
        setErrorEmail("")
        setErrorPassword("")
        let isValid = true
        
        if(!validateEmail(formData.email)){
            setErrorEmail("Debes de ingresar un E-mail válido.")
            isValid=false
        }
        if(isEmpty(formData.password)){
            setErrorPassword("Debe ingresar una contraseña")
        }
        return isValid
    }

    return (
        <View style={styles.container}>
              <Input
            containerStyle={styles.input}
            placeholder="Ingresa tu E-mail"
            onChange={(e) => onChange(e,"email")}    
            rightIcon={<Icon
                type="material-community"
                name="at"
                iconStyle={styles.icon}
                />}
            keyboardType="email-address"
            errorMessage={errorEmail}
            defaultValue={formData.email}
        />
        <Input
            containerStyle={styles.input}
            placeholder="Ingresa tu Contraseña"
            password={true}
            secureTextEntry={!showPassword}
            onChange={(e) => onChange(e,"password")}
            errorMessage={errorPassword}
            defaultValue={formData.password}
            rightIcon={<Icon
                type="material-community"
                name={showPassword ? "eye-off-outline" :"eye-outline"}
                iconStyle={styles.icon}
                onPress={() => setshowPassword(!showPassword)}
                />}
            
        />
          <Button
            title="Iniciar Sesión"
            buttonStyle={styles.button}
            containerStyle={styles.btnContainer}
            onPress={()=> doLogin()}
        />
         <Loading
            isVisible={loading} text="Iniciando sesión, un momento por favor"/>
        </View>
    )
    
}

const defaultFormValues = () =>{
    return { email: "", password:""}
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 30
    },
     button: {
        backgroundColor: "#1f61b8",
        
    },
    btnContainer:{
        marginTop: 20,
        width: "80%",
        alignSelf: "center",
        borderRadius: 10
    },
    icon: {
        color: "#c1c1c1"
    }

})
