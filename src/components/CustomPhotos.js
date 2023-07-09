import React, { useState } from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image, Modal, TouchableWithoutFeedback } from "react-native";
import { SafeAreaView } from "react-navigation";
import ImageViewer from 'react-native-image-zoom-viewer';
import Spacer from "./Spacer";
import { Ionicons } from '@expo/vector-icons';

const CustomPhotos = ({ photos, title, seeAll, limit }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(0);

  const openModal = (index) => {
    setSelectedPhotoIndex(index);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const renderListItem = ({ item, index }) => {
    return (
      <TouchableOpacity onPress={() => openModal(index)}>
        <View style={styles.imgContainer}>
          <Image style={styles.img} source={{ uri: item }} />
        </View>
      </TouchableOpacity>
    );
  };

  const limitedPhotos = limit === 4 ? [photos.slice(0, 2), photos.slice(2, 4)] : null;

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.rowContainer}>
          <Text style={styles.dest}>{title}</Text>
          {seeAll ? <Text style={{ marginRight: 10, color: 'gray', fontWeight: '600' }}>See All</Text> : null}
        </View>
        {limit === 4 ? (
          <>
            <FlatList
              horizontal
              keyExtractor={(item) => item}
              data={limitedPhotos[0]}
              renderItem={renderListItem}
            />
            <Spacer space={15} />
            <FlatList
              horizontal
              keyExtractor={(item) => item}
              data={limitedPhotos[0]}
              renderItem={renderListItem}
            />
          </>
        ) : (
          <FlatList
            horizontal
            keyExtractor={(item) => item}
            data={photos}
            renderItem={renderListItem}
          />
        )}
      </View>
      <Modal visible={modalVisible} transparent={true}>
        <View style={styles.modalContainer}>
          <TouchableWithoutFeedback onPress={closeModal}>
            <ImageViewer
              imageUrls={photos.map(uri => ({ url: uri }))}
              index={selectedPhotoIndex}
              renderHeader={() => (
                <View style={styles.closeButtonContainer}>
                  <TouchableOpacity onPress={closeModal}>
                  {/* <Ionicons name="close" size={24} color="white" /> */}
                  <Text style={styles.closeText}>Tap any where to close </Text>
                  </TouchableOpacity>
                </View>
              )}
            />
          </TouchableWithoutFeedback>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
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
    width: 160,
    height: 150,
    marginLeft: 20,
    borderRadius: 10,
  },
  img: {
    width: "100%",
    height: "100%",
    borderRadius: 10,
  },
  rowContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  modalContainer: {
    flex: 1,
    backgroundColor: "black",
    justifyContent: "center",
  },
  closeButtonContainer: {
    position: "absolute",
    top: 30,
    right: 20,
    // backgroundColor :'red'
  },
  closeText : {
    color: 'white' , 
    // alignSelf : 'center' ,
    top :50 , 
    right :80
  }
});

export default CustomPhotos;
