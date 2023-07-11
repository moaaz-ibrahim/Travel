import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { View ,Text ,StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const ElementCalendar = ({title})=>{
    const [value, setValue] = useState(0)
    useEffect(()=>{
        value <0 ? setValue(0) : null
    },[value])
    return <View style={styles.element}>
           <Text style={{fontWeight : 'bold' , marginBottom : 16}}>{title}</Text>
           <View style={styles.container}>

           <View style={{ marginHorizontal : 40}}>
           <View style={styles.rowContainer}>
             <TouchableOpacity style={styles.controllerContaner} onPress={()=>{setValue(value-1)}}>
             <Text style={{color : 'white'}}>-</Text>
             </TouchableOpacity>
             <Text style={{fontWeight: 'bold' , fontSize :18 , marginTop :8}}>{value}</Text>
             <TouchableOpacity style={styles.controllerContaner} onPress={()=>{setValue(value+1)}}>
             <Text style={{color : 'white'}}>+</Text>
             </TouchableOpacity>
           </View>
   
           </View>
           </View>
         </View>
   }

   const styles = StyleSheet.create({
    element : {
        marginVertical : 10,
      
      },
      container : {
        borderWidth : 1 , 
        padding : 5 , 
        borderRadius :10 , 
        borderColor : '#f5f5f5'
      },
      rowContainer: {
        flexDirection :'row' , 
        justifyContent: 'space-between'
      } , 
      controllerContaner : {
        fontSize : 25 , 
        backgroundColor :'#aecef4' ,
        width : 40 ,
        height : 40, 
        marginHorizontal : 20 , 
        alignItems :'center',  
        justifyContent :'center' ,
        borderRadius : 10
        
      }
   })

export default ElementCalendar;