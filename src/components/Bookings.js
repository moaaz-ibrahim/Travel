import React from "react";
import { View,  Text, StyleSheet } from "react-native";
import { AntDesign } from '@expo/vector-icons';
const Bookings = ()=>{
    return <View style={styles.container}>
        <Text style={styles.name}>Hello, Salem</Text>
        <View style={styles.bookingContainer}>
        <Text style={styles.bookings}>0 Bookings</Text>
        <AntDesign style={styles.arrow} name="right" size={20} color="white" />
        </View>
        
    </View>
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignSelf: 'center', 
        width : '72%',
        borderWidth : 0.3,
        height: 50,
        borderColor : 'white',
        borderRadius : 8, 
        justifyContent : 'space-between',
        
    },
    name: {
       
        fontFamily :'Arial',
        color : 'white',
        alignSelf: 'center',
        marginLeft : 10,
        fontWeight : 'bold'
    }, 
    bookings : {
        color :'white' , 
        alignSelf: 'center',
        marginRight :10
    },
    bookingContainer : {
        flexDirection : 'row',
        width : 100,
        justifyContent: 'flex-start',
        left : '24%'
    },
    arrow :{
        marginTop: 15 ,
        marginRight :18,
        // backgroundColor : 'red'
    }
})
export default Bookings;