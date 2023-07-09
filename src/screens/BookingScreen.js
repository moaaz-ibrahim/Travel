import React from "react";
import { View ,Text , StyleSheet } from "react-native";
import NavBar from "../components/NavBar";
import CustomNavBar from "../components/CustomNavBar";
import { StatusBar } from "expo-status-bar";


const BookingScreen= ({navigation})=>{
    console.log(navigation);
    const name = navigation.state.params.name;
    console.log(name)
    // const HotelName= 
    return<View>
        <StatusBar style="light"></StatusBar>
        <CustomNavBar title={name}></CustomNavBar>
    </View>
}

const styles= StyleSheet.create({

})

export default BookingScreen