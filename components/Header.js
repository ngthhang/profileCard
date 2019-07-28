import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default class Header extends Component {
    render() {
    return (
        <View style={styles.Header}>
            <View style={styles.displayAvatar}>
                <Image style={styles.Avatar} source={require('../assets/imagePost/ngthhang.jpg')} />
            </View>
            <View style={styles.displayNameAndButton}>
                <View style={styles.displayName}>
                    <Text style={styles.personName}>Thuý Hằng</Text>
                    <Text style={styles.Major}>Software Engineering</Text>
                </View>
                <View style={styles.displayButton}>
                    <TouchableOpacity style={styles.followButton}  onPress={() => alert('Followed')}>
                      <Text style={{
                        fontSize: 15,
                        color: '#fff',
                      }}>Follow</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.sendMessageButton}>
                      <Ionicons name='md-send' size={23} color='#fff' onPress={() => alert('Message sent')}/>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
    }
}



const POLO_BLUE_COLOR = 'rgb(51,60,87)';
const FOLLOW_COLOR = 'rgb(71,113,246)';
const SEND_MESSAGE_COLOR = 'rgb(120,213,250)';

const styles =StyleSheet.create({
    Header: {
        flex: 0.3,
        flexDirection:'row',
    },
    displayAvatar: {
        flex: 0.3,
        justifyContent:'center',
        alignItems:'center',
        padding: 20
    },
    Avatar: {
        height: 100,
        width: 100,
        borderRadius: 50,
    },
    displayNameAndButton: {
        flex: 0.7,
        flexDirection:'column',
        justifyContent:'space-between',
        marginLeft: 7
    },
    displayName: {
        flex:0.5,
        flexDirection:'column',
        justifyContent:'center',
        marginTop: 5,
        marginBottom:10,
    },
    personName: {
        fontFamily:"Courier New",
        fontSize: 25,
        fontWeight:'900',
        marginBottom: 5,
    },
    Major: {
        fontFamily: "Courier New",
        fontSize: 18,
        fontWeight: '400',
        marginBottom: 5
    },
    displayButton: {
        flex: 0.5,
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'flex-start',
        padding:10,
    },
    followButton: {
        padding: 10,
        paddingEnd:30,
        paddingLeft: 30,
        backgroundColor: FOLLOW_COLOR,
        borderRadius: 20,
        shadowColor: POLO_BLUE_COLOR,
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,

        elevation: 4,
    },
    sendMessageButton: {
        backgroundColor: SEND_MESSAGE_COLOR,
        borderRadius: 20,
        padding: 8,
        paddingEnd:20,
        paddingLeft: 20,
        shadowColor: POLO_BLUE_COLOR,
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,

        elevation: 4,
    }
    });