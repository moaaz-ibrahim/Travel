import react from "react";
import { View , Text, StyleSheet, FlatList , Image } from "react-native";
import { ROOMS } from "../../dummyData";

const GalleryScreen = ()=>{
    return <View >
        <FlatList
        data={ROOMS}
        keyExtractor={(e)=>e.id}
        renderItem={({item})=>{
            return<View style={{width: 200,  height:200}}>
                <Image style={{height: 100 , width: 100}} source={{uri : item.imageUrl}}></Image>

            </View> 
        }}
        ></FlatList>
    </View>
};

const styles= StyleSheet.create({

});
export default GalleryScreen ;