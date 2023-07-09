import React from "react";
import { View , Text  ,StyleSheet , Button  } from "react-native";

const CustomButton = ({title , go})=>{
    {return go ? <>
    
     <View style={styles.container}>
        <Button onPress={()=>{go.navigation.navigate(go.target)}} color={'white'} title={title}></Button>
    </View>
    </> : <>
    
     <View style={styles.container}>
        <Button color={'white'} title={title}></Button>
    </View>
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
    }
})

export default CustomButton