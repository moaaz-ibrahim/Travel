

import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView  } from 'react-native';
import { Calendar } from 'react-native-calendars';
import { Fontisto } from '@expo/vector-icons';
import ElementCalendar from './ElementCalendar';
import CustomButton from './CustomButton';
import Spacer from './Spacer';
import { TouchableOpacity } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';


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

const FullCalendar = ({backButton , backDrop})=>{


const [selectedStartDate, setSelectedStartDate] = useState('');
const [selectedEndDate, setSelectedEndDate] = useState('');
const [markedDates, setMarkedDates] = useState({});


const getDateString = (timestamp) => {
  const date = new Date(timestamp);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  let dateString = `${year}-`;
  if (month < 10) {
    dateString += `0${month}-`;
  } else {
    dateString += `${month}-`;
  }
  if (day < 10) {
    dateString += `0${day}`;
  } else {
    dateString += day;
  }

  return dateString;
};

const getPeriod = (startTimestamp, endTimestamp) => {
  const period = {};
  let currentTimestamp = startTimestamp;
  while (currentTimestamp <= endTimestamp) {
    const dateString = getDateString(currentTimestamp);
    period[dateString] = {
      color: '#ece9e4',
      startingDay: currentTimestamp === startTimestamp,
      endingDay: currentTimestamp === endTimestamp,
    };
    currentTimestamp += 24 * 60 * 60 * 1000;
  }
  period[getDateString(startTimestamp)].color = '#09293a';
  period[getDateString(startTimestamp)].textColor = 'white';
  period[getDateString(endTimestamp)].color = '#09293a';
  period[getDateString(endTimestamp)].textColor = 'white';
  return period;
};

const setDay = (dayObj) => {
  const { dateString, day, month, year } = dayObj;
  const timestamp = new Date(year, month - 1, day).getTime();
  const newDayObj = { ...dayObj, timestamp };

  if (!selectedStartDate || selectedEndDate) {
    const period = {
      [dateString]: {
        color: '#09293a',
        endingDay: true,
        startingDay: true,
        textColor :'white'
      },
    };
    setSelectedStartDate(newDayObj);
    setSelectedEndDate('');
    setMarkedDates(period);
  } else {
    const savedTimestamp = selectedStartDate.timestamp;

    if (savedTimestamp > timestamp) {
      const period = getPeriod(timestamp, savedTimestamp);
      setSelectedStartDate(newDayObj);
      setSelectedEndDate(selectedStartDate);
      setMarkedDates(period);
    } else {
      const period = getPeriod(savedTimestamp, timestamp);
      setSelectedEndDate(newDayObj);
      setSelectedStartDate(selectedStartDate);
      setMarkedDates(period);
    }
  }
};
const getMonth =(month)=>{
  // console.log(month.length)
  console.log(month)
  if(month.length == 0)
  month ='Select'
  return month
}
const getDay = (day)=>{
  // console.log(day)
  if(day ==undefined)
  day = 'Date'
   return day;
}
return (
    <ScrollView>
      <View style={{ flex: 1 , top :-20  }}>
        <View style={styles.container}>
          <View style={styles.checkContainer}>
            <Text style={styles.check}>Check in</Text>
            <Text style={styles.check}>Check out</Text>
          </View>
          <View style={styles.dateContainer}>
            <View style={styles.date}>
              <Text style={styles.textDate}>{` ${getMonth(getMonthAbbreviation(selectedStartDate.month))} ${
                getDay(selectedStartDate.day)
              }`}</Text>
              <Fontisto name="date" style={styles.calendarIcon} size={18} color="#d59c90" />
            </View>
            <View>
              <Text style={{ marginTop: 10, fontSize: 20, color: '#1977f1' }}>&rarr;</Text>
            </View>
            <View style={styles.date}>
            <Text style={styles.textDate}>{` ${getMonth(getMonthAbbreviation(selectedEndDate.month))} ${
              getDay(selectedEndDate.day)
            }`}</Text>
            <Fontisto name="date" style={styles.calendarIcon} size={18} color="#d59c90" />
            </View>
          </View>
        </View>
        <Calendar
          style={styles.calendar}
          markingType="period"
          markedDates={markedDates}
          onDayPress={setDay}
          renderHeader={renderCustomHeader}
          theme={{backgroundColor : 'red'}}
          // headerStyle={{backgroundColor :'red'}}
        />
      </View>
      <ElementCalendar title={'Adults'}></ElementCalendar>
      <ElementCalendar title={'Infants (0-2 Years)'}></ElementCalendar>
      <ElementCalendar title={'Children (3-12 Years)'}></ElementCalendar>
      <ElementCalendar title={'Rooms'}></ElementCalendar>
      <Spacer space={10}></Spacer>
      
      <TouchableOpacity onPress={async()=>{
        try {
          await AsyncStorage.setItem('date' , `${selectedStartDate.dateString} , ${selectedEndDate.dateString}`)
        } catch (error) {
          console.log(error)
        }
        backDrop(); 
      }}>
      
      <CustomButton title={'SELECT'}></CustomButton>
      </TouchableOpacity>
      <Spacer space={30}></Spacer>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  calendar: {
    backgroundColor: "#f5f5f5",
    // top: 50,
    width: 300,
    marginBottom: 40,
    marginTop : 15
  },
  container : {
    // top : 10
  }
  ,
  checkContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  check: {
    fontWeight: "bold",
    paddingBottom: 20,
    paddingTop: 20,
    marginTop: 45,
    marginHorizontal: 10,
  },
  date: {
    width: 120,
    height: 40,
    backgroundColor: "#fafafa",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    borderRadius: 8,
  },
  

  textDate: {
    color: "#bebebe",
    marginRight: 25,
    justifyContent: "flex-start",
    marginLeft: 10,
    fontSize: 12,
  },
  dateContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  arrowRight: {},
  arrowLeft: {},
  arrowsContainer: {},
  headerContainer: {
    // backgroundColor : 'red'
  },
  headerText: {
    color: "#d8a69a",
    fontWeight: "bold",
  },
  calendarIcon :{
    right :10 , 
    
  } ,
  
});


export default FullCalendar;