import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default class BottomTab extends Component {
  render() {
    return (
      <View style={styles.containerBottomTab}>
          <AntDesign name='home' size={27} color='black'/>
          <AntDesign name='pluscircleo' size={27} color='black'/>
          <AntDesign name='user' size={27} color='black'/>
      </View>
    );
  }
}

const styles= StyleSheet.create({
  containerBottomTab: {
    flex: 0.15,
    flexDirection:'row',
    justifyContent:'space-around',
    alignItems:'center'
  }
})