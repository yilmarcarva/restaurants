import { size } from 'lodash'
import React, {useState} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Input,Button, Icon } from 'react-native-elements'
//Imports diferentes de los raices
import { validateEmail } from '../../helpers'


export default function RegisterForm() {
    const [showPassword, setshowPassword] = useState(false)
    const [showPasswordConfirm, setPasswordConfirm] = useState(false)
    const [formData, setFormData] = useState(defaultFormValues())
    const [errorEmail, setErrorEmail] = useState("")
    const [errorPassword, setErrorPassword] = useState("")
    const [errorConfirm, setErrorConfirm] = useState("")

    const onChange =(e, type) =>{
        setFormData({...formData, [type]: e.nativeEvent.text})
       
    }

    const registerUser = () =>{
        if(!validateData()){
            return;
        }
        
        console.log("vamos bien malparido")
    }

    const validateData = () =>{
        setErrorConfirm("")
        setErrorEmail("")
        setErrorPassword("")
        let isValid = true
        
        if(!validateEmail(formData.email)){
            setErrorEmail("Debes de ingresar un E-mail válido.")
            isValid=false
        }

        if(size(formData.password)<6){
            setErrorPassword("Debes ingresar una contraseña de al menos 6 caracteres.")
            isValid=false
        }

        if(size(formData.confirm)<6){
            setErrorConfirm("Debes ingresar una contraseña de al menos 6 caracteres.")
            isValid=false
        }
        if(formData.confirm!==formData.password){
            setErrorConfirm("Las contraseñas deben ser iguales")
            setErrorPassword("Las contraseñas deben ser iguales")
            isValid=false 
            
        }
        return isValid
    }

    return (
        <View style={styles.form}>
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
        <Input
            containerStyle={styles.input}
            placeholder="Confirmar Contraseña"
            password={true}
            secureTextEntry={!showPasswordConfirm}
            onChange={(e) => onChange(e,"confirm")}
            errorMessage={errorConfirm}
            defaultValue={formData.confirm}
            rightIcon={<Icon
                type="material-community"
                name={showPasswordConfirm ? "eye-off-outline" :"eye-outline"}
                iconStyle={styles.icon}
                onPress={() => setPasswordConfirm(!showPasswordConfirm)}
                />}
            
        />
        <Button
            title="Registrar Usuario"
            buttonStyle={styles.button}
            containerStyle={styles.btnContainer}
            onPress={()=> registerUser()}
        />
        </View>
    )
}

const defaultFormValues = () =>{
    return { email: "", password:"", confirm:""}
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
    },
    icon: {
        color: "#c1c1c1"
    }

})
