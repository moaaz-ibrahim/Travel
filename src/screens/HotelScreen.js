import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import SwiperHotel from "../components/SwiperHotel";
import HotelDetails from "../components/HotelDetails";
import HotelPhotos from "../components/HotelPhotos";
import { DESTINATIONS } from "../../dummyData";
import TextDetails from "../components/TextDetails";
import Spacer from "../components/Spacer";

const HotelScreen = ({ navigation }) => {
  const id = navigation.getParam("id");
  console.log(id);
  const photos = DESTINATIONS[id].hotel_photos;
  const description = DESTINATIONS[id].description; 
  const benefits = DESTINATIONS[id].benefits;
  const houseRules = DESTINATIONS[id].house_rules;
  console.log(photos);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.swiper}>
        <SwiperHotel id={id} />
      </View>
      <View style={styles.details}>
        <HotelDetails id={id} />
      </View>
      <View style={styles.photos}>
        <HotelPhotos photos={photos} />
      </View>
      <TextDetails title={'Describtion'} content={description} maxChar={150}></TextDetails>
      <TextDetails title={'Benefits'} content={benefits} maxChar={150}></TextDetails>
      <TextDetails title={'House Rules'} content={houseRules} maxChar={150}></TextDetails>
     <Spacer space={100}></Spacer>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  swiper: {
    height: 250, // Adjust the height as needed
    backgroundColor : 'red'
  },
  details: {
    // paddingHorizontal: 20,
    paddingTop: 10,
  },
//   photos: {
//     paddingHorizontal: 20,
//     paddingTop: 20,
//   },
});

export default HotelScreen;
