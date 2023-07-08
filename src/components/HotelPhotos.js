import React from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from "react-native";
import { DESTINATIONS } from "../../dummyData";

const HotelPhotos = ({ photos }) => {
  const renderListItem = ({ item, index }) => {
    if (index === 0) {
      return (
        <>
          <View style={styles.spacer}></View>
          <TouchableOpacity>
            <View style={styles.imgContainer}>
              <Image style={styles.img} source={{ uri: item }} />
            </View>
          </TouchableOpacity>
        </>
      );
    }

    return (
      <TouchableOpacity>
        <View style={styles.imgContainer}>
          <Image style={styles.img} source={{ uri: item }} />
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.rowContainer}>
      <Text style={styles.dest}>Hotel Photos</Text>
      <Text style={{marginRight: 10 , color :'gray' , fontWeight: '600'}}>See All</Text>
      </View>
     
      <FlatList
        horizontal
        keyExtractor={(item) => item.id}
        data={photos}
        renderItem={renderListItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  spacer: {
    marginLeft: 15,
  },
  container: {
    marginTop: 35,
    // backgroundColor :'red'
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
    width: 135,
    height: 130, // Set a fixed height or adjust as needed
    marginLeft: 15,
    borderRadius: 20,
  },
  img: {
    width: "100%",
    height: "100%",
    borderRadius: 20,
  },
  rowContainer : {
    flexDirection :'row' , 
    justifyContent : 'space-between'
  }
});

export default HotelPhotos;
