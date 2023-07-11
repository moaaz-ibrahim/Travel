import React, { useEffect, useState } from "react";
import { View ,Text , StyleSheet , ScrollView , TouchableOpacity } from "react-native";
import CustomNavBar from "../components/CustomNavBar";
import { StatusBar } from "expo-status-bar";
import BookingElement from "../components/BookingElement";
import { MaterialIcons } from '@expo/vector-icons';
import CustomButton from "../components/CustomButton";
import CustomIcon from "../components/CustomIcon";
import { AntDesign } from '@expo/vector-icons';
import Spacer from "../components/Spacer";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { BottomSheet } from 'react-native-btr';
import BottomSheetView from "../components/BottomSheetView";
import FullCalendar from "../components/FullCalendar";
// import {AsyncStorage} from 'react-native';
import AsyncStorage from "@react-native-async-storage/async-storage";
const BookingScreen = ({ navigation }) => {
  const [isBottomSheetVisible, setBottomSheetVisible] = useState(false);
  const [visible, setVisible] = useState(false);
  const [visibleTwo  ,setVisibleTwo] = useState(false);
  const [date, setDate] = useState('');

useEffect( ()=>{
const getDate = async ()=>{
    try {
        const value = await AsyncStorage.getItem('date');
        if(value.length == 0 )
       return setDate('Choose Date and time')
       const arr = value.split(',');
      const newValue = `From : ${arr[0]} to : ${arr[1]}`
        setDate(newValue)
        console.log(newValue)
    } catch (error) {
        console.log(error)
    }
};
getDate()
})

// const getDate = async ()=>{
//     try {
//         const value = await AsyncStorage.getItem('date');
//         if(value.length == 0 )
//         setDate('Choose Date and time')

//         console.log(value)
//     } catch (error) {
//         console.log(error)
//     }
// };

  const toggleBottomSheet = () => {
    setVisible(!visible); // Set visible to true when the button is clicked
  };
  const toggleBottomSheetTwo = () => {
    setVisibleTwo(!visibleTwo); // Set visible to true when the button is clicked
  };

  const name = navigation.state.params.name;

  return (
    <View >
      <StatusBar style="light"></StatusBar>
      <CustomNavBar title={name} go={navigation} />
      <ScrollView >
        <View style={styles.container}>
          <TouchableOpacity onPress={toggleBottomSheet} >
              {/* {isBottomSheetVisible && <BottomSheetView type={1} show={true}  />} */}
              {/* {showBottomSheet()} */}
              
            <BookingElement
              desc={` ${date}`}
              title={'Date & Time'}
              icon={<MaterialIcons name="date-range" size={24} color="#e9cec7" />}
              />
              {/* <BottomSheet visible={visible} onBackButtonPress={toggleBottomSheet} onBackdropPress={toggleBottomSheet}>
                <View style={{
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'space-between',
                backgroundColor : 'white'
                // height: '100%'
              }}>
                <FullCalendar></FullCalendar>

                </View>
              </BottomSheet> */}
          {visible && <BottomSheetView type={1} show={visible} toggle={()=>{toggleBottomSheet()}} />}
          </TouchableOpacity>
          {/* {showBottomSheet()} */}
          <BookingElement
            desc={'Select Room Occupancy'}
            title={'Room Occupancy'}
            icon={<MaterialIcons name="meeting-room" size={24} color="#e9cec7" />}
          />
          <BookingElement
            desc={'Select Bed size'}
            title={'Bed Size'}
            icon={<Ionicons name="bed-outline" size={24} color="#e9cec7" />}
          />
          <BookingElement
            desc={'Ocean view, suite, junior suite, room, villa, etc.'}
            title={'Room Preference'}
            icon={<AntDesign name="form" size={24} color="#e9cec7" />}
          />
          <BookingElement
            desc={'Choose meal plan'}
            title={'Meal Plan'}
            icon={<MaterialCommunityIcons name="food-fork-drink" size={24} color="#e9cec7" />}
          />
          <BookingElement
            desc={'Type further details'}
            title={'Additional Details'}
            icon={<Ionicons name="md-hand-right-outline" size={24} color="#e9cec7" />}
          />
          <Spacer space={30}></Spacer>
        </View>
        <TouchableOpacity onPress={toggleBottomSheetTwo}>
        <CustomIcon  icon={<AntDesign style={{marginLeft: 20}} name="plussquare" size={24} color="#1876f1" />} text={'Add another person (up to 5)'}></CustomIcon>
        {visibleTwo && <BottomSheetView type={0} show={visibleTwo} toggle={()=>{toggleBottomSheetTwo()}}></BottomSheetView>}
        </TouchableOpacity>
         <CustomButton title={'SUBMIT REQUEST'}></CustomButton>
         <Spacer space={150}></Spacer>
      </ScrollView>
    </View>
  );
};

const styles= StyleSheet.create({
  container : {
    marginHorizontal : 25 , 
    marginTop :30,
    flex: 1,
    backgroundColor : '#f5f5f5'
  }
});

export default BookingScreen;
