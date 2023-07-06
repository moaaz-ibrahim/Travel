import React from "react";
import { View , Text, StyleSheet, FlatList , Image } from "react-native";
import { DESTINATIONS } from "../../dummyData";
const Distenations= ()=>{
    
    return <View style={styles.container}>
        <Text style={styles.dest}>Destinations To visit</Text>
        <FlatList
        horizontal
        keyExtractor={(e)=>e.id}
        data={DESTINATIONS} renderItem={({item})=>{
            return <View style={styles.imgContainer}>
                {/* { item.id === 1 ? <View style={{marginLeft: 10}}></View> : null} */}
                <Image style={styles.img} source={{uri : item.imageUrl}}></Image>
                <Text>{item.name}</Text>
                <Text style={{fontWeight: 'bold'}}>Book Now</Text>
            </View>
        }} ></FlatList>
    </View>
}
const styles = StyleSheet.create({
container : {
    marginTop : 40,
}, 
dest : {
    color: '#0a293b',
    fontWeight : 'bold' , 
    fontSize: 25, 
    marginLeft : 10, 
    marginBottom: 10
},
imgContainer:{
    flexDirection : 'column',
    // borderWidth :1, 
    // marginRight: 15, 
    alignContent: 'center',
    justifyContent: 'center', 
    alignItems:'center', 
    backgroundColor: 'white', 
    borderRadius: 10,
     height :150 , 
     width : 250 , 
     marginLeft: 20
},
img : {
    width: '100%',
    height:100, 
    bottom: '10%'
    
    }
})
export default Distenations;