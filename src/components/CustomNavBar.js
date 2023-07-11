import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import Bookings from './Bookings';
import Spacer from './Spacer'
const CustomNavBar = ({navigation , title , notification ,back ,go}) => {
  console.log(go)
  return (
    <View style={styles.navBar}>
      <Spacer space={40}></Spacer>
      <View style={styles.row}>
      <AntDesign style={{marginRight :'-30%' , marginLeft :4 }} onPress={()=>{go.goBack()}} name="arrowleft" size={20} color="white" />
        
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
    height: 120,
    backgroundColor: '#0a293b',

  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '90%',
    paddingHorizontal: 10,
    marginTop : 30,
    marginBottom : 10, 
    marginHorizontal : 25, 
    paddingBottom :20
  },
  menu: {
    alignSelf: 'center',
    marginLeft: 10,
  },
  bell: {
    // marginRight: 10, 
    
    left :0
  },
  title: {
    color: 'white',
    fontSize: 15,
  },
  bookingsContainer:{
    marginTop : 20,
  }
});

export default CustomNavBar;
