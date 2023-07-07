import react from "react";
import { View,  Text , StyleSheet  } from "react-native";
import SwiperHotel from "../components/SwiperHotel";
import HotelDetails from "../components/HotelDetails";

const HotelScreen = ({navigation})=>{

    const id = navigation.getParam('id');
    console.log(id)
    return <View style={styles.swiper}>
        <SwiperHotel id={id}></SwiperHotel>
        <HotelDetails id={id}></HotelDetails>
    </View>

}

const styles = StyleSheet.create({
swiper :{
    flex : 1
}
});

export default HotelScreen;