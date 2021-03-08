import {firebaseApp} from './firebase'
import * as firebase from 'firebase'
import 'firebase/firestore'

const db = firebase.firestore(firebaseApp)

export const isUserLogged = () =>{
    let isLogged=false
    firebase.auth().onAuthStateChanged((user) => {
        user !== null && (isLogged=true)
    })
    return isLogged
}

export const getCurrentUser = () =>{
    return firebase.auth().currentUser
}

export const closeSession = () =>{
    return firebase.auth().signOut()
}

export const registerUser = async (email,password) =>{
    const result = {statusResponde: true, error: null}
    try {
        await firebase.auth().createUserWithEmailAndPassword(email,password)
    } catch (error) {
        result.error = "El correo digitado ya está registrado"
    }
    return result
}