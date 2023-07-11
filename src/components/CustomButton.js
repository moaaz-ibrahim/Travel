import React, { useRef, useState } from "react";
import { View , Text  ,StyleSheet , Button  , TouchableOpacity } from "react-native";
import BottomSheet from "./BottomSheetView";


const CustomButton = ({title , go})=>{
  
    {return go ? <>
    
     <View style={styles.container}>
        <Button onPress={()=>{go.navigation.navigate(go.target ,{name : go.name} )}} color={'white'} title={title}></Button>
    </View>
    </> : <>
    
     <TouchableOpacity style={styles.customContainer}  >
        <Text style={styles.title}>{title}</Text>
        {/* <Bo modalRef={modalRef} closeModal={closeModal} /> */}
    </TouchableOpacity>
    </>}
} 

const styles = StyleSheet.create({
    container : {
        marginTop: 10 ,
        backgroundColor :'#0a293b' , 
        marginHorizontal :25, 
        borderRadius :8 , 
        height : 50 , 
        alignItems: 'center' , 
        justifyContent : 'center'
    },
    customContainer : {
        marginTop: 10 ,
        backgroundColor :'#0a293b' , 
        marginHorizontal :25, 
        borderRadius :8 , 
        height : 50 , 
        alignItems: 'center' , 
        justifyContent : 'center',
        // fontSize : 20
    },
    title:  {
        color: 'white' , 
        fontWeight : 'bold'
    }

})

export default CustomButton