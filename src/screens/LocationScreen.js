import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { Entypo } from '@expo/vector-icons';
import Location from "../components/Location";
import { SafeAreaView } from "react-navigation";
import { AntDesign } from '@expo/vector-icons';
const LocationScreen = ({navigation})=>{
    const {longitude , latitude }= navigation.state.params;
    
    
  return (
    <SafeAreaView>

    
    <View style={styles.container} >
        <View style={styles.header}>
        <AntDesign style={{marginRight :20 , marginLeft :15}} onPress={()=>{navigation.goBack()}} name="arrowleft" size={20} color="black" />
        <Text style={styles.dest}>Location</Text>
        </View>

      {/* <Text style={styles.dest}>{title}</Text> */}
      <MapView 
    //   onPress={()=>{navigation.navigate('Location' , {longitude , latitude})}}
        style={styles.map}
        region={{
          latitude,
          longitude,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
        mapType="mutedStandard"
        
      >

      <Marker coordinate={{latitude , longitude}}>
        <Entypo name="location-pin" size={24} color="black" />
      </Marker>
      </MapView>
      
    </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    // marginLeft: 25,
    // marginRight: 25,
    // width : '100%'
  },
  dest: {
    color: "#0a293b",
    fontWeight: "bold",
    fontSize: 19,
    marginBottom: 10,
    
  },
  map: {
    height: '100%',
    marginBottom: 15,
  },
  location: {
    fontSize: 16,
    marginBottom: 15,
  },
  desc: {
    fontSize: 16,
    lineHeight: 24,
  },
  dest: {
    color: "#0a293b",
    fontWeight: "bold",
    fontSize: 19,
    marginBottom: 20,
  },
  header : {
    flexDirection : 'row'
  }
});





export default LocationScreen;