import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import Bookings from './Bookings';

const CustomNavBar = ({navigation , title , notification ,back}) => {
  return (
    <View style={styles.navBar}>
      <View style={styles.row}>
      <AntDesign style={{marginRight :0 , marginLeft :-25 }} onPress={()=>{go.navigation.goBack()}} name="arrowleft" size={20} color="white" />
        
        <Text style={styles.title}>{title}</Text>
        <EvilIcons style={styles.bell} name="bell" size={30} color="white" />
      </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  navBar: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: 200,
    backgroundColor: '#0a293b',
  },
  row: {
    flexDirection: 'row',
    // justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 10,
    marginTop : 30,
    marginBottom : 10
  },
  menu: {
    alignSelf: 'center',
    marginLeft: 10,
  },
  bell: {
    marginRight: 10,
  },
  title: {
    color: 'white',
    fontSize: 18,
  },
  bookingsContainer:{
    marginTop : 20
  }
});

export default CustomNavBar;
