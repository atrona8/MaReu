import React, { Component } from 'react'

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Connexion from '../Connexion'
import Inscription from '../Inscription'
import ListReu from '../ListReu'


export default class Navigation extends Component {

    render() {
        const Stack = createStackNavigator();
        return (

            <NavigationContainer >
               <Stack.Navigator initialRouteName="Connexion">
                 <Stack.Screen name="Connexion" 
                               component={Connexion} 
                               options={{headerShown:false}}
                               />
                 <Stack.Screen name="Inscription" 
                               component={Inscription}
                               options={{headerShown:false}} />
                 <Stack.Screen name="ListReu" 
                               component={ListReu} 
                               options={{headerShown:false}}/>
               </Stack.Navigator>
             </NavigationContainer>
        )
         }
}