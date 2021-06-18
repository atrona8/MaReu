import React, { Component } from 'react'
import ReuItem from './ReuItem'
import reu from './API/ReuData'
import MyHeader from './MyHeader'
import {View, TextInput, Button,FlatList,Text} from 'react-native'


export default class ListReu extends Component {
    render() {
        return (
            <View>
                
                <MyHeader/>
                <FlatList
                data={reu}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({item}) => <ReuItem reunion={item}   /> }
           
                />
             </View>
        )
    }
}
