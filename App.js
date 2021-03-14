import { StatusBar } from 'expo-status-bar';
import React from 'react'
//import de los imports
import Navigation from './navigations/Navigation'
import {LogBox} from 'react-native'

LogBox.ignoreAllLogs()

export default function App() {
  return (
   <Navigation/>
  )
}

