import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
export default class CountFollowers extends Component{ 
    render() {
        return (
      <View style={styles.containerCountFollowers}>
          <View style={styles.displayCountPhotos}>
                <Text style={styles.count}>210</Text>
                <Text style={styles.thingsToCount}>Photos</Text>
          </View>

          <View style={styles.displayCountFollwers}>
                <Text style={styles.count}>100</Text>
                <Text style={styles.thingsToCount}>Followers</Text>
          </View>

          <View style={styles.displayCountFollowing}>
                <Text style={styles.count}>50</Text>
                <Text style={styles.thingsToCount}>Following</Text>
          </View>
      </View>  
    
    );
    }
    
} 

const styles= StyleSheet.create({
    containerCountFollowers: {
        flex: 0.2,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-around'
    },
    displayCountPhotos: {
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'column'
    },

    displayCountFollwers: {
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'column',
    },

    displayCountFollowing: {
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'column'
    },  

    count: {
        fontSize:25,
        fontWeight:'500',
        color:'#000'
    },

    thingsToCount: {
        fontSize:20,
        fontWeight:'100',
        color:'#757575'
    }
})