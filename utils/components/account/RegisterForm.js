import React, {useState} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Input,Button, Icon } from 'react-native-elements'


export default function RegisterForm() {
    const [showPassword, setshowPassword] = useState(false)
    const [showPasswordConfirm, setPasswordConfirm] = useState(false)
    const [formData, setFormData] = useState(defaultFormValues())


    const onChange =(e, type) =>{
        setFormData({...formData, [type]: e.nativeEvent.text})
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
        />
        <Input
            containerStyle={styles.input}
            placeholder="Ingresa tu Contraseña"
            password={true}
            secureTextEntry={!showPassword}
            onChange={(e) => onChange(e,"password")}
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
            onPress={()=> console.log(formData)}
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
