import React from "react";
import { View , Text , FlatList, StyleSheet , ImageBackground, ScrollView } from "react-native";
import { TOP_DEALS } from "../../dummyData";
import { AntDesign } from '@expo/vector-icons';

const Deals= ()=>{
    return  <View style={styles.container}>
        <View style={styles.details}>
        <Text style={styles.deal}>Top Deals</Text>
        <View style={styles.dealsViewAllContainer}>
        <Text style={styles.viewAll}> View All</Text>
        <AntDesign style={{marginLeft : 10 , color : '#0a293b' }} name="arrowright" size={24} color="black" />

        </View>

        </View>
        <FlatList
        data={TOP_DEALS} 
        horizontal 
        renderItem={({item})=>{
            return<View style={styles.dealContainer}>
                <ImageBackground style={styles.dealImg} source={{uri : item.imageUrl}}>
                    <Text style={styles.dealName}>
                        {item.name}
                    </Text>
                </ImageBackground>
            </View>
        }}
        >
        </FlatList>
    </View>
        
}


const styles= StyleSheet.create({
    details : {
        flexDirection :'row', 
        justifyContent : 'space-between'
    }
    ,
container: {
    // height :500, 
    marginTop : 40,
    // backgroundColor:'red'
    // flex :1
}
,
deal : {
    // fontWeight :'bold' , 
    color: '#0a293b',
    fontWeight : 'bold' , 
    fontSize: 25, 
    marginLeft : 10, 
    marginBottom: 10
},
dealContainer: {
    flexDirection: 'column',
    width:250 , 
    height :150, 
    // marginRight : 10, 
    backgroundColor:'red',
    borderRadius : 10,
    overflow : 'hidden' , 
    marginLeft:20
    
},
dealImg :{
    width:'100%', 
    height:'100%',
    justifyContent: 'flex-end'
},
dealName: {
    color: 'white',
    alignSelf : 'flex-end',
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 15 , 
    marginRight: 10
},
dealsViewAllContainer: {
    flexDirection: 'row', 
    marginRight : 10,
}, 
viewAll :{
    marginTop :5 , 
    fontWeight : '500', 
    color : '#0a293b'

}
});
export default Deals;