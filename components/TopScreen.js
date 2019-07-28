import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';



export default class TopScreen extends Component {
    render(){
        return (
           <View style={styles.onTopScreen}>
              <AntDesign name='left' size={25} color='black' />
              <AntDesign name='ellipsis1' size={25} color='black'/>
           </View>
        );
    }
}

const POLO_BLUE_COLOR = 'rgb(51,60,87)';
const FOLLOW_COLOR = 'rgb(71,113,246)';
const SEND_MESSAGE_COLOR = 'rgb(120,213,250)';

const styles= StyleSheet.create({
    onTopScreen: {
        flex: 0.1,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        marginTop: 20,
        marginLeft: 10,
        marginEnd: 10

    },
})