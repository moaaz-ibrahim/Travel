import react from "react";
import { View , Text, StyleSheet, FlatList , Image, ScrollView } from "react-native";
import { ROOMS } from "../../dummyData";
import HotelPhotos from "../components/HotelPhotos";
import CustomPhotos from "../components/CustomPhotos";
import { AntDesign } from '@expo/vector-icons';
import { SafeAreaView } from "react-navigation";


const GalleryScreen = ({navigation})=>{
    const photos = navigation.getParam('photos');
    // console.log(photos)
    return <SafeAreaView>
        <ScrollView>
    <View style={styles.container} >
    <View style={styles.header}>
    <AntDesign style={{marginRight :20 , marginLeft :15}} onPress={()=>{navigation.goBack()}} name="arrowleft" size={20} color="black" />
    <Text style={styles.dest}>Gallery</Text>
    </View>
    <View>
        <CustomPhotos photos={photos} title={'Suites'}></CustomPhotos>
        <CustomPhotos photos={photos} title={'Rooms'} limit={4}></CustomPhotos>
        <CustomPhotos photos={photos} title={'Resturants'} limit={4}></CustomPhotos>
        
    </View> 

</View>
</ScrollView>
    </SafeAreaView>

    
   
};

const styles= StyleSheet.create({
container: {
    marginTop :25,  
    
}, 
header : {
    flexDirection : 'row' , 
    marginBottom :-16
},
dest: {
    color: "#0a293b",
    fontWeight: "bold",
    fontSize: 19,
    marginBottom: 20,
  },
});
export default GalleryScreen ;