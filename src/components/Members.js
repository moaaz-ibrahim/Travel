import React from "react";
import { View ,Text , StyleSheet , TextInput } from "react-native";
// import { TextInput } from "react-native-gesture-handler";
import { Ionicons } from '@expo/vector-icons';
import { useState } from "react";
import CustomButton from "./CustomButton";
import Spacer from "./Spacer";
import { TouchableOpacity } from "react-native-gesture-handler";
const Members = ({backDrop})=>{

    const [value , setValue] = useState('Member Name')

    return <View style={styles.container}>
        <Text style={{color: '#0a293b' , fontWeight:'bold' , marginBottom : 25}}>Members</Text>
        <View style={styles.inputs}>
            <View style={styles.input}>
            <Ionicons name="checkbox" style={{justifyContent : 'center', top :'5%', marginHorizontal :10 , marginLeft : 25 ,}} size={24} color="#e3e3e3" />
            <TextInput  onChangeText={(t)=>{setValue(t)}} style={styles.textInput} value={value}></TextInput>
            </View>
        </View>
        <View style={styles.inputs}>
            <View style={styles.input}>
            <Ionicons name="checkbox" style={{justifyContent : 'center', top :'5%', marginHorizontal :10 , marginLeft : 25 ,}} size={24} color="#e3e3e3" />
            <TextInput  onChangeText={(t)=>{setValue(t)}} style={styles.textInput} value={value}></TextInput>
            </View>
        </View>
        <View style={styles.inputs}>
            <View style={styles.input}>
            <Ionicons name="checkbox" style={{justifyContent : 'center', top :'5%', marginHorizontal :10 , marginLeft : 25 ,}} size={24} color="#e3e3e3" />
            <TextInput  onChangeText={(t)=>{setValue(t)}} style={styles.textInput} value={value}></TextInput>
            </View>
        </View>
        <View style={styles.inputs}>
            <View style={styles.input}>
            <Ionicons name="checkbox" style={{justifyContent : 'center', top :'5%', marginHorizontal :10 , marginLeft : 25 ,}} size={24} color="#e3e3e3" />
            <TextInput  onChangeText={(t)=>{setValue(t)}} style={styles.textInput} value={value}></TextInput>
            </View>
        </View>
        <Spacer space={150}></Spacer>
        <TouchableOpacity onPress={()=>{backDrop()}}>

        <CustomButton title={'ADD & CONTINUE'}></CustomButton>
        </TouchableOpacity>
    </View>
}

const styles= StyleSheet.create({
container : {
    // backgroundColor :'red' , 
    alignSelf :'flex-start' , 
    justifyContent : 'flex-start', 
    marginTop :60, 
    position: 'absolute',
    right: -150 
    // right : 100, 
    // width : '100%' , 
    // height :'100%', 


    // marginTop: 40
    // width:
} , 
input : {
    // borderWidth : 1 , 
    width : 300 , 
    height: 50 , 
    backgroundColor :'#fafafa',
    borderRadius:10 , 
    flexDirection :'row'
    
} , 
inputs: {

    marginVertical: 10
},
textInput:{
    // borderWidth : 1 , 
    width : 200, 
    height: 40, 
    alignSelf: 'center', 
    color : '#b2b2b2' , 
    fontWeight :'bold'

}
});

export default Members;