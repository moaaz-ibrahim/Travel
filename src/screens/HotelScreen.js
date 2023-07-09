import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import SwiperHotel from "../components/SwiperHotel";
import HotelDetails from "../components/HotelDetails";
import HotelPhotos from "../components/HotelPhotos";
import { DESTINATIONS } from "../../dummyData";
import TextDetails from "../components/TextDetails";
import Spacer from "../components/Spacer";
import Location from "../components/Location";
import ReviewsContainer from "../components/ReviewsContainer";
import { StatusBar } from "expo-status-bar";
import CustomButton from "../components/CustomButton";
const HotelScreen = ({ navigation }) => {
  const id = navigation.getParam("id");
  console.log(id);
  const name = DESTINATIONS[id].name;
  const photos = DESTINATIONS[id].hotel_photos;
  const description = DESTINATIONS[id].description; 
  const benefits = DESTINATIONS[id].benefits;
  const houseRules = DESTINATIONS[id].house_rules;
  const address= DESTINATIONS[id].address;
  const rate = DESTINATIONS[id].rating;
  const reviews = DESTINATIONS[id].reviews;
  // console.log(photos);
  console.log(address)

  return (
    <ScrollView style={styles.container}>
      <StatusBar style="dark"></StatusBar>
      <View style={styles.swiper}>
        <SwiperHotel id={id} />
      </View>
      <View style={styles.details}>
        <HotelDetails id={id} />
      </View>
      <View style={styles.photos}>
        <HotelPhotos photos={photos} navigation={navigation}/>
      </View>
      <TextDetails title={'Describtion'} content={description} maxChar={150}></TextDetails>
      <TextDetails title={'Benefits'} content={benefits} maxChar={150}></TextDetails>
      <TextDetails title={'House Rules'} content={houseRules} maxChar={150}></TextDetails>
      <Location address={address} navigation={navigation}></Location>
      <ReviewsContainer rate={rate} reviewsNum={reviews.length} reviews={reviews}></ReviewsContainer>
     <Spacer space={100}></Spacer>
      <CustomButton title={'BOOK NOW!' } go={{ target :'Booking', name ,navigation}} ></CustomButton>
      <Spacer space={50}></Spacer>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor : '#f5f5f5'
  },
  swiper: {
    height: 250, 
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
