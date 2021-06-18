import React, { Component } from 'react'
import { Header, SearchBar } from "react-native-elements";
import Icon from 'react-native-vector-icons/FontAwesome';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StyleSheet, Text, View,TextInput } from 'react-native';

export default class MyHeader extends Component {

    constructor(props) {
        super(props);
        this.renderAppName = () =>{
            return(
                <Text style={styles.nameApp}  >Ma réu</Text>
            );
        };
    
    }
  
    render() {
        return (
            <SafeAreaProvider >
               
                <Header style={styles.header}
                leftContainerStyle= {{flex:3}}
                leftComponent={ this.renderAppName() }
                rightComponent={ <Icon name="bars" size="25px" color="#fff"/>}

                />
            </SafeAreaProvider>
    )
    }
}
const styles = StyleSheet.create({
    header:{
        //marginBottom:
    },
    nameApp:{
        marginLeft : 15,
        fontSize: 20,
        color: '#fff',
    },

});
