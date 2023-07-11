import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Calendar } from 'react-native-calendars';
import { Fontisto } from '@expo/vector-icons';
import ElementCalendar from './ElementCalendar';
import CustomButton from './CustomButton';
import Spacer from './Spacer';
import { TouchableOpacity } from 'react-native-gesture-handler';
import FullCalendar from './FullCalendar';
import Members from './Members';



// type = 1 -> calendar
// type = 0 -> Person
const renderCustomHeader = (date) => {
  const month = date.toString("MMMM yyyy"); // Format the month and year as desired
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerText}>{month}</Text>
    </View>
  );
};

const getMonthAbbreviation = (monthNumber) => {
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];

  if (monthNumber >= 1 && monthNumber <= 12) {
    return months[monthNumber - 1];
  } else {
    return '';
  }
};

const SheetContent = ( {backButton , backDrop , type}) => {
  
  return (
    <>
    {type ? (<FullCalendar backButton={backButton} backDrop={backDrop} ></FullCalendar>) : 
    (<Members backButton={backButton} backDrop={backDrop} ></Members>) }
  
    </>
  
  );
};

const styles = StyleSheet.create({
 
});

export default SheetContent;
