import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';


export default class ReuItem extends Component {

    constructor(props){
        super(props)
        const reu = this.props.reunion
        let emails = " "
       reu.users.forEach(user => {
          this.emails += user.email+", "
       });
    }
    

    render() {
        const reu = this.props.reunion

        return (
            <View style={styles.containerReu}>

                 <View style={styles.containerImg}>

                        <View style={styles.circle}> </View>
                 </View>

                 <View style={styles.containerText}>

                    <View style={styles.cinfoReu}>
                        <Text style={styles.infoReu}>{reu.name} - {reu.hDebut} - {reu.salle}</Text>
                    
                    </View>

                    <View style={styles.cinfoUsers}>

                            <Text style={styles.infoUsers}>
                                 {this.emails}
                            </Text>

                    </View>

                     
                 </View >

                 <View style={styles.containerIcon}>

                         <Icon name="trash" size="20px" color="black"/>

                 </View>

            </View>
        );
    };
    

}
const styles = StyleSheet.create({
    containerReu:{
        flexDirection : 'row',
        margin:5,
        height:60,
        backgroundColor:"white"
    },
    containerText:{
        flex:3,
        marginRight:5,
        flexDirection: 'column',
        color:"black"
    },
    containerImg:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
      },
    containerIcon :{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
  
    },
    cinfoUsers :{
    
        flex:1,
    },
    infoUsers :{
        numberOfLines:1,
        fontSize: 12,
        fontStyle: 'italic',
    
    },
    cinfoReu :{
        flex: 1,

    } ,
    infoReu :{
        fontWeight: 'bold',
        fontSize: 15,

    } ,
    circle: {
        height: 30,
        width:  30,

        borderRadius: 30/2 ,
        backgroundColor:"#D90D32"
        
    }
})

