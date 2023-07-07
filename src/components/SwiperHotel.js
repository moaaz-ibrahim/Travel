import React from 'react';
import { View, Text, StyleSheet , Image, FlatList } from 'react-native';
import Swiper from 'react-native-swiper';
import { DESTINATIONS } from '../../dummyData';

const SwiperHotel = ({id}) => {
    const hotel = DESTINATIONS[id];
    const hotelPhotos = hotel.rooms;
    // console.log(hotelPhotos)
    return (
      <View  style={styles.container}>

      <Swiper
        loop={true} // Set to true if you want the swiper to loop continuously
        autoplay={false}
        dot={<View style={styles.dot} />}
        activeDot={<View style={styles.activeDot} />} // Set to true if you want the swiper to auto-play
        >
        
        {hotelPhotos.map((photo , index)=>{
          return <View style={styles.slide} key={index}>
            <Image style={styles.img} source={{uri  : photo}}></Image>
          </View>
        })}
        
      </Swiper>
          </View>
    );
  };
  
  const styles =StyleSheet.create({
    slide: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    container: {
        borderWidth : 1 ,
        height: '25%' , 
        width : '100%'
    }, 
    img : {
      flex : 1 ,
      width : '100%' , 
      height : '100%'
    } , 
    dot: {
      backgroundColor: 'rgba(255, 255, 255, 0.7)',
      width: 5,
      height: 5,
      borderRadius: 5,
      marginHorizontal: 5,
    },
    activeDot: {
      backgroundColor: '#d29082',
      width: 30,
      height: 5,
      borderRadius: 5,
      marginHorizontal: 5,
    },
  
  }) 
  export default SwiperHotel