import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
//Imports de las pantallas
import RestaurantsStack from './RestaurantsStack'
import FavoritesStack from './FavoritesStack'
import AccountStack from './AccountStack'
import TopRestaurantsStack from './TopRestaurantsStack'
import SearchStack from './SearchStack'
import { Icon } from 'react-native-elements'

const Tab=createBottomTabNavigator()

export default function Navigation() {
    const screenOptions=(route,color)=>{
        let iconName
        switch (route.name) {
            case "restaurants":
                iconName="compass-outline"
                break;
            case "favorites":
                iconName="heart-outline"
                break;
            case "top-restaurants":
                iconName="star-outline"
                break;
            case "search":
                iconName="magnify"
                break;
            case "account":
                iconName="home-outline"
                break;
        }

        return (
            <Icon 
                type="material-community"
                name={iconName}
                size={22}
                color={color}
            />
        )
    }
    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName="restaurants"
                tabBarOptions={{
                    inactiveTintColor:"#6d97cc",
                    activeTintColor:"#2985d2"
                }}
                screenOptions={({route}) => ({
                    tabBarIcon: ({color}) => screenOptions(route,color)
                })}
            >
                <Tab.Screen
                    name="restaurants"
                    component={RestaurantsStack}
                    options={{title: "Restaurantes"}}
                />
                 <Tab.Screen
                    name="favorites"
                    component={FavoritesStack}
                    options={{title: "Favoritos"}}
                />
                 <Tab.Screen
                    name="top-restaurants"
                    component={TopRestaurantsStack}
                    options={{title: "Top 5"}}
                />
                 <Tab.Screen
                    name="search"
                    component={SearchStack}
                    options={{title: "Buscar"}}
                />
                 <Tab.Screen
                    name="account"
                    component={AccountStack}
                    options={{title: "Cuenta"}}
                />
            </Tab.Navigator>
        </NavigationContainer>
    )
}
