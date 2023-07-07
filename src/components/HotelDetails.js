import react from "react";
import { View, Text, StyleSheet , Image } from "react-native";
import { DESTINATIONS } from "../../dummyData";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
const HotelDetails = ({ id }) => {
  // console.log(id);
  const hotel = DESTINATIONS[id];

  return (
    <View style={styles.container}>
      <Text style={styles.name}>{hotel.name}</Text>
      <View style={styles.location}>
        <Ionicons
          name="md-location-sharp"
          style={{ paddingRight: 7 }}
          size={24}
          color="#1e7af1"
        />
        <Text style={{ fontSize: 14 }}>{hotel.address}</Text>
      </View>
      <View style={styles.details}>
        <View style={{flexDirection : 'row' , width : '33%'}}>
        <View style={{ paddingRight: 10 }}>
          <FontAwesome5 name="hotel" size={24} color="#1e7af1" />
        </View>
        <Text style>{hotel.type}</Text>

        </View>
        <View style={{ flexDirection : 'row' ,  width : '33%' }}>
          <View style={{paddingRight:4}}>
            <FontAwesome name="phone" size={24} color="#1e7af1" />
          </View>
          <Text>{hotel.phone_number}</Text>
        </View>
      <View style={styles.imgContainer}>
        <Image style={styles.img} source={{uri : hotel.logo}} ></Image>
      </View>
      </View>
      <View style={styles.line}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    marginTop: 25,
    marginLeft: 25,
    marginRight :25
  },
  name: {
    fontSize: 25,
    fontWeight: "bold",
    paddingBottom: 25,
  },
  location: {
    flexDirection: "row",
    paddingBottom: 35,
  },
  details: {
    flexDirection: "row",
    // flexWrap: "wrap",
    // backgroundColor: 'red' , 
    height : 40
  },
  img: {
    width :70 ,
    height : 60 ,
     alignSelf: 'center',
     marginTop: 5 , 
     
    // backgroundColor: 'red'
},  
imgContainer : {
    marginLeft : 20 , 
    top  : '-8%' ,
    width :'30%',
    height :'200%',
    backgroundColor : '#E0E0D0' ,
    borderRadius : 10,
    // paddingTop : 10
    
  },
   line : {
    width: '100%' , 
    height : 2,
    backgroundColor :'#E0E0D0' , 
    marginTop :40
   }
});

export default HotelDetails;
