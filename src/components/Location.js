import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { Entypo } from '@expo/vector-icons';
import axios from "axios";
const Location = ({address , navigation}) => {
    // const customMarker = require('../../assets/marker.png');
    const [latitude, setLatitude] = useState(0)
    const [longitude, setLongitude] = useState(0)
    useEffect(()=>{

        const geocodeAddress = async () => {
            const options = {
              method: 'GET',
              url: 'https://trueway-geocoding.p.rapidapi.com/Geocode',
              params: {
                address: address,
                language: 'en'
              },
              headers: {
                'X-RapidAPI-Key': '91494d9e2bmsh3928ea77414d0e9p163f23jsn6556cf59bade',
                'X-RapidAPI-Host': 'trueway-geocoding.p.rapidapi.com'
              }
            };
      
            try {
              const response = await axios.request(options);
            //   console.log(response.data.results[0].location);
              setLatitude(response.data.results[0].location.lat)
              setLongitude(response.data.results[0].location.lng)
            } catch (error) {
              console.error(error);
            }
          };
      
          geocodeAddress();
    },[])
    
    
  return (
    <View style={styles.container} >
        <Text style={styles.dest}>Location</Text>
      {/* <Text style={styles.dest}>{title}</Text> */}
      <MapView onPress={()=>{navigation.navigate('Location' , {longitude , latitude})}}
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
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    marginLeft: 25,
    marginRight: 25,
    // width : '100%'
  },
  dest: {
    color: "#0a293b",
    fontWeight: "bold",
    fontSize: 19,
    marginBottom: 10,
  },
  map: {
    height: 200,
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
});

export default Location;
