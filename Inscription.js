import React, { Component } from 'react'
import {View,StyleSheet, TextInput, Button,FlatList,Text} from 'react-native'
import Select from 'react-select'
import MyHeader from './MyHeader'

export default class Inscription extends Component {
    constructor() {
        super()
        let mdp = Text
        let email = Text
        let name = Text
        let poste = Text
        

        }
        _emailInputChanged(text) {
          this.email= text
          console.log("email : "+this.email)
        }
        _nameInputChanged(text) {
          this.name= text
          console.log("name : "+this.name)
        }
        _posteInputChanged(text) {
          this.poste= text
          console.log("poste : "+this.poste)
        }
        _mdpInputChanged(text) {
          this.mdp= text
          console.log("mdp : "+this.mdp)
          console.log("postes :"+this.postes)

        }
        
      
      
    
    
    
      render() {

        const options=
         [ 
          { value: 'Directeur', label: 'Directeur' },
          { value: 'Manager', label: 'Manager' },
          { value: 'Marketing', label: 'Marketing' },
          { value: 'Developpeur', label: 'Developpeur' },
        ]


          return (
            <View style={styles.main_container}>
              <View >
                   <MyHeader/>
              </View>
              
  
              <View style={styles.container1}>
  
              <View  style={styles.containerTitle}>
                  <Text style={styles.title}>
                    Inscription
                  </Text>
              </View>
  
              <View style={styles.containerInput} >
  
              <TextInput style={styles.textinput}
                            placeholder="Email"
                            onChangeText={(text) => this._emailInputChanged(text)}
                            
                            />
              </View>
              <View style={styles.containerInput} >
  
              <TextInput style={styles.textinput}
                            placeholder="Mot de passe"
                            onChangeText={(text) => this._mdpInputChanged(text)}
                            
                            />
              </View  >
              <View style={styles.containerInput} >
  
              <TextInput style={styles.textinput}
                            placeholder="Nom"
                            onChangeText={(text) => this._nameInputChanged(text)}
                            
                            />
              </View  >
              <View style={styles.conflex} >
                <Text>Qu'elle poste occupez vous ?</Text>
                <Select options={options}
                        onChange={ (value) => this._posteInputChanged(value)}
                        placeholder="Qu'elle poste occupez vous ?"
                          />
              </View  >
              <View style={styles.containerButton} >
              <Button  title="Valider"
                        onPress={() => [] }
                        />
              </View  >
              <View style={styles.containerButton} >
              <Button  title="Retour"
                        onPress={() => this.props.navigation.navigate('Connexion') }
                        />
              </View  >
  
        
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
        flex:2,
      },
      containerButton:{
        flex:3,
      },
      conflex:{
        flex:3,
        alignItems: 'flex-end',
        justifyContent: 'center',

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
        }
      })
    
  
  
