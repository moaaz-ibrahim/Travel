import React from "react";
import { View , Text , StyleSheet } from "react-native";


const CustomIcon = ({icon , text})=>{

    return <View style={styles.container}>
        <View style={styles.icon}>
        {icon}

        </View>
        <Text style={{fontWeight: 'bold'}}>{text}</Text>
    </View>
}

const styles = StyleSheet.create({
container :{
    flexDirection :'row', 
    marginLeft :15 , 
    marginVertical : 15 , 

}, 
icon: {
    marginRight: 10 , 
    borderRadius :25
}
})
export default CustomIcon;