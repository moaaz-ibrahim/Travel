import React, { useState } from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

const BottomNavBar = ({navigation}) => {
  // console.log(props)
  const activeColor = '#e8eaed';
  const normalColor = 'white';
  const [activeTap, setActiveTap] = useState('home');
  const [color,setColor] = useState(normalColor);
// Yet to come 
  // const handleClick = ()=>{
  //   navigation.navigate('Gallery')
  // }

  return (
    <View style={styles.container}>
      {/* {activeTap === 'home' ? ():} */}
      <TouchableOpacity style={styles.tab} onPress={()=>{setActiveTap('home')}}>
      <AntDesign  name="home" size={20} color="white" />
        <Text style={styles.tabText}>Home</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.tab} onPress={()=>{setActiveTap('book')}}>
      <Entypo name="text-document" size={20} color="white" />
        <Text style={styles.tabText}>Book</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.tab} onPress={()=>{setActiveTap('services')}}>
      <FontAwesome5 name="servicestack" size={20} color="white" />
        <Text style={styles.tabText}>Services</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.tab} onPress={()=>{setActiveTap('gallery')}}>
      <Ionicons name="person" size={20} color="white" />
        <Text style={styles.tabText}>Gallery</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#0a293b",
    borderTopWidth: 1,
    // borderTopColor: "#ccc",
    height: 80,
    // marginBottom : 20
  },
  tab: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 10,
    marginBottom :10
  },
  tabText: {
    fontSize: 12,
    color : 'white'
  },
});

export default BottomNavBar;
