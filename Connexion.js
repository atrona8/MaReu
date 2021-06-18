import React, { Component } from 'react'
import {View,StyleSheet, TextInput, Button,FlatList,Text, Alert} from 'react-native'
import MyHeader from './MyHeader'
import isUserIdentified from './API/APIMaReu'
import users from './API/UserData'
export default class Connexion extends  Component {
  
  
    constructor(props) {
      super(props)

      let mdp = Text
      let email = Text
      let title = "connexion"
      let user
      }
      _loginInputChanged(text) {
        this.email= text
        console.log("login : "+this.email)
      }
      _mdpInputChanged(text) {
        this.mdp= text
        console.log("mdp : "+this.mdp)
      }


      createAlertConnexionEchec = () =>{
      Alert.alert(
        "Echec de Connexion",
        "Vérifiez vos identifiants",
        [
          {
            text: "Ok",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel"
          }
        ]
      );
      }

       _connexion = (email,password) => {

        users.forEach(user => {
          if(user.email == email && user.password == password){
            this.props.navigation.navigate("ListReu")
          }
          this.createAlertConnexionEchec()
        });
      }
    
    
  
  
  
    render() {
        return (
          <View style={styles.main_container}>
            <View >
                 <MyHeader/>
            </View>
            

            <View style={styles.container1}>

            <View  style={styles.containerTitle}>
                <Text style={styles.title}>
                  Connexion
                </Text>
            </View>

            <View style={styles.containerInput} >

                  <TextInput style={styles.textinput}
                                placeholder="Email"
                                onChangeText={(text) => this._loginInputChanged(text)}
                                
                                />
            </View>

            <View style={styles.containerInput} >

                  <TextInput style={styles.textinput}
                                placeholder="Mot de passe"
                                onChangeText={(text) => this._mdpInputChanged(text)}
                                
                                />
            </View  >

            <View style={styles.containerButton} >

                <Button  title="Valider"
                          onPress={() => this._connexion(this.email,this.mdp) }
                          />
                      
            </View  >

            <View style={styles.containerButton} >

              <Button  title="S'inscrire" style={styles.iButton}
                        onPress={() => this.props.navigation.navigate("Inscription") }
                        />

            </View>


      
          </View>
          </View>
              )
    }

  }
  const styles = StyleSheet.create({
    container1: {
      flex:1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
     main_container: {
       flex:1,
          //marginTop: 20,
          //alignItems: 'baseline',
          //justifyContent: '',
    
    },
    containerTitle:{
      flex:2,
    },
    containerInput:{
      flex:1,
    },
    containerButton:{
      flex:1,
    },
      title: {
  
        fontWeight: 'bold',
        fontSize: 20,
        color:'#3C4359'
      },

      textinput: {
        marginLeft: 5,
        marginRight: 5,
        height: 50,
        borderColor: '#000000',
        borderWidth: 1,
        paddingLeft: 5
      },
      iButton: {
        color:"#BAD9C2",
        borderRadius:3,
      }
    })
  

