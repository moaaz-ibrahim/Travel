import react from "react";
import { View,  Text , StyleSheet  } from "react-native";
import SwiperHotel from "../components/SwiperHotel";

const HotelScreen = ({navigation})=>{

    const id = navigation.getParam('id')
    return <View style={styles.swiper}>
        <SwiperHotel id={id}></SwiperHotel>
    </View>

}

const styles = StyleSheet.create({
swiper :{
    flex : 1
}
});

export default HotelScreen;