import React from "react";
import { View, Text, StyleSheet, FlatList, Image , TouchableOpacity} from "react-native";
import { DESTINATIONS } from "../../dummyData";

const Destinations = ({navigation}) => {
    // console.log(DESTINATIONS[0].id)
    const hotelNavigation = (id)=>{
    navigation.navigate('Hotel' , {id})
    }
  const renderListItem = ({ item, index }) => {
    if (index === 0) {
      
      return (<>
      
        <View style={styles.spacer}></View>
        <TouchableOpacity  onPress={()=>{hotelNavigation(item.id)}}>

        <View style={styles.imgContainer}>  
          <Image style={styles.img} source={{ uri: item.imageUrl }} />
          <Text>{item.name}</Text>
          <Text style={{ fontWeight: "bold" }}>Book Now</Text>
        </View>
        </TouchableOpacity>
        </>
      );
    }

    return (
        <TouchableOpacity onPress={()=>{hotelNavigation(item.id)}}>

      <View style={styles.imgContainer}>
        <Image style={styles.img} source={{ uri: item.imageUrl }} />
        <Text>{item.name}</Text>
        <Text style={{ fontWeight: "bold" }}>Book Now</Text>
      </View>
        </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.dest}>Destinations To Visit</Text>
      <FlatList
        horizontal
        keyExtractor={(item) => item.id}
        data={DESTINATIONS}
        renderItem={renderListItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  spacer: {
    // width: 200,
    // height: 100,
    // backgroundColor: "red",
    marginLeft : 15
  },
  container: {
    marginTop: 35,
  },
  dest: {
    color: "#0a293b",
    fontWeight: "bold",
    fontSize: 19,
    marginLeft: 22,
    marginBottom: 20,
  },
  imgContainer: {
    flexDirection: "column",
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 10,
    height: 150,
    width: 220,
    marginLeft: 15,
  },
  img: {
    width: "100%",
    height: "57%",
    bottom: "10%",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
});

export default Destinations;
