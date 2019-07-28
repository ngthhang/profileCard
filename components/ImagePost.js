import React, { Component } from 'react';
import { StyleSheet, View, Image, ScrollView } from 'react-native';

export default class ImagePost extends Component {
    render(){
        return (
           <ScrollView contentContainerStyle={styles.containerImagePost}>
              <View style={styles.imgGroup1}>
                {imgData.slice(0, centerImgData).map(item => {
                        return <Image source={item.imgSource} style={styles.ImagePost}/>
                })}
              </View>
               <View style={styles.imgGroup2}>
                  {imgData.slice(centerImgData).map(item =>{
                      return (<Image source={item.imgSource} style={styles.ImagePost} />)
                  })}
              </View>
           </ScrollView>

        );
    }
}

const styles=StyleSheet.create({
    containerImagePost: {
        flex: 0.4,
        flexDirection:'row',
        padding: 10,
    },
    imgGroup1: {
        flex: 0.5,
        flexDirection:'column',
        alignItems:'center',
    },

    imgGroup2: {
      flex: 0.5,
        flexDirection:'column',
        alignItems:'center',
    }, 
    ImagePost: {
        height: 150,
        width: 150, 
        borderRadius: 20,
        marginBottom: 10,
    },

  
})
const imgData = [
    { id: 1, imgSource: require('../assets/imagePost/1.jpg') },
    { id: 2, imgSource: require('../assets/imagePost/2.jpg') },
    { id: 3, imgSource: require('../assets/imagePost/3.jpg') },
    { id: 4, imgSource: require('../assets/imagePost/4.jpg') },
    { id: 5, imgSource: require('../assets/imagePost/5.jpg') },
    { id: 6, imgSource: require('../assets/imagePost/6.jpg') },
]
const centerImgData = Math.floor(imgData.length / 2);
