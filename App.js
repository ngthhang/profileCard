import React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native'; 
import TopScreen from './components/TopScreen';
import Header from './components/Header';
import CountFollowers from './components/CountFollowers';
import ImagePost from "./components/ImagePost";
import BottomTab from './components/BottomTab';

export default function App() {
  return (
    <View style={styles.container}>
      <TopScreen/>
      <Header/>
      <CountFollowers/>
      <ImagePost/>
      <BottomTab/>
    </View>
  );
}

const styles=StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      flexDirection:'column'
    }
});