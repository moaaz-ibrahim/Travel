import React from "react";
import { View, Text, FlatList, StyleSheet, ImageBackground } from "react-native";
import { TOP_DEALS } from "../../dummyData";
import { AntDesign } from "@expo/vector-icons";

const Deals = () => {
  const renderListItem = ({ item, index }) => {
    if (index === 0) {
      
      return (<>
      
      
          <View style={styles.spacer}></View>
        <View style={styles.dealContainer}>
          <ImageBackground style={styles.dealImg} source={{ uri: item.imageUrl }}>
            <Text style={styles.dealName}>{item.name}</Text>
          </ImageBackground>
        </View>
        </>
      );
    }

    return (
      <View style={styles.dealContainer}>
        <ImageBackground style={styles.dealImg} source={{ uri: item.imageUrl }}>
          <Text style={styles.dealName}>{item.name}</Text>
        </ImageBackground>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.details}>
        <Text style={styles.deal}>Top Deals</Text>
        <View style={styles.dealsViewAllContainer}>
          <Text style={styles.viewAll}> View All</Text>
          <AntDesign style={{ marginLeft: 10, color: "#0a293b" }} name="arrowright" size={24} color="black" />
        </View>
      </View>
      <FlatList data={TOP_DEALS} horizontal renderItem={renderListItem} />
    </View>
  );
};

const styles = StyleSheet.create({
  details: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  container: {
    marginTop: 40,
  },
  deal: {
    color: "#0a293b",
    fontWeight: "bold",
    fontSize: 19,
    marginLeft: 22,
    marginBottom: 20,
  },
  dealContainer: {
    flexDirection: "column",
    width: 220,
    height: 150,
    backgroundColor: "red",
    borderRadius: 10,
    overflow: "hidden",
    marginLeft: 15,
  },
  dealImg: {
    width: "100%",
    height: "100%",
    justifyContent: "flex-end",
  },
  dealName: {
    color: "white",
    alignSelf: "flex-end",
    fontWeight: "bold",
    fontSize: 20,
    marginBottom: 15,
    marginRight: 10,
  },
  spacer: {
    // width: 10,
    // height: 150,
    marginLeft: 15
    
  },
  dealsViewAllContainer: {
    flexDirection: "row",
    marginRight: 18,
  },
  viewAll: {
    marginTop: 5,
    fontWeight: "500",
    color: "#0a293b",
    
  },
});

export default Deals;
