import React from "react";
import { Text , View ,StyleSheet } from "react-native";
import { AntDesign } from '@expo/vector-icons';
const BookingElement = ({title , icon , desc})=>{
    return <View style={styles.container}>
        <View style={styles}>

        </View>
        <View style={styles.icon}>
        {icon}
        </View>
        <View style={styles.colContainer} >
        <Text style={styles.title}>{title}</Text>
        {/* {<br></br>} */}
        <Text style={styles.desc}>{desc}</Text>
        </View>
        <AntDesign style={styles.down} name="down" size={10} color="#e2e2e2" />
        {/* <View style={styles.icon}>
        {icon}
        </View> */}

        
    </View>
}

const styles=  StyleSheet.create({
    container :{
        backgroundColor :'white', 
        height : 70 ,
         borderRadius :10 , 
         flexDirection : 'row', 
         marginVertical : 10
        //  justifyContent :'space-between'
    } , 
    icon : {
        justifyContent :'center' , 
        marginLeft :15

    } , 
    title: {
        justifyContent : 'center' , 
        // alignSelf :'center' , 
        // marginLeft :10, 
        fontWeight :'bold', 
        fontSize :16
    } , 
    colContainer : {
        flexDirection : 'column' , 
        marginLeft :15 ,
        marginTop :16
    },
    desc :{
        // alignSelf : 'center' , 
        fontSize :10 ,
        color : 'gray' ,
        // marginLeft :16
        marginTop :5
    }, 
    down :{
        // left :150 ,
        // color :'red' , 
        position : 'absolute', 
        left: '90%', 
        top :30 , 
        
        // justifyContent : 'center' ,
        // alignSelf :'center'
    }
})
export default BookingElement ;