import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import Bookings from './Bookings';

const NavBar = () => {
  return (
    <View style={styles.navBar}>
      <View style={styles.row}>
        <Feather name="menu" size={24} style={styles.menu} color="white" />
        <Text style={styles.title}>egyliere</Text>
        <EvilIcons style={styles.bell} name="bell" size={30} color="white" />
      </View>
      <View style={styles.bookingsContainer}>
        <Bookings />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  navBar: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: 250,
    backgroundColor: '#0a293b',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
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
    fontSize: 25,
  },
  bookingsContainer:{
    marginTop : 35
  }
});

export default NavBar;
