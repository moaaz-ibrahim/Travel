import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from './src/screens/HomeScreen';
import GalleryScreen from './src/screens/GalleryScreen';
import HotelScreen from './src/screens/HotelScreen';
import LocationScreen from './src/screens/LocationScreen';
import BookingScreen from './src/screens/BookingScreen';
// import Fonts from './src/fonts/Fonts';
// import * as Font from 'expo-font';
// import { useEffect } from 'react';

const navigator = createStackNavigator(
  {
    Home: {
      screen : HomeScreen, 
      navigationOptions : {
        headerShown: false
      }
    },
    Gallery : {
      screen : GalleryScreen , 
      navigationOptions : {
        headerShown : false
      }
    }, 
    Hotel: {
      screen : HotelScreen, 
    navigationOptions : {
      headerShown : false
    }
    }, 
    Location :{
      screen: LocationScreen, 
      navigationOptions: {
        headerShown : false
      } 
    } , 
    Booking :{
      screen :BookingScreen
    }
  },
  // {initialRouteName : 'Gallery'}
);
const AppContainer =createAppContainer(navigator);
export default function App(){
  // useEffect(()=>{
  //   Font.loadAsync({Fonts}).then(()=>{})
  // })
  return<View style={styles.container}>
    <StatusBar style='light'></StatusBar>
    <AppContainer></AppContainer>
  </View>
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  backgroundColor : '#ece9e4'
  },
});