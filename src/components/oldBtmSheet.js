import React, { useRef, useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Animated, Dimensions } from 'react-native';
import SheetContent from './SheetContent';
import CustomButton from './CustomButton';
import Spacer from './Spacer';

const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').width;

const BottomSheet = () => {
  const [sheetVisible, setSheetVisible] = useState(false);
  const translateY = useRef(new Animated.Value(0)).current;
//   const [overlay , setOverlay] = useState(false);

  const openSheet = () => {
    setSheetVisible(true);
    Animated.timing(translateY, {
      toValue: 90 , // Adjust the height as per your requirement
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const closeSheet = () => {
    Animated.timing(translateY, {
      toValue: 800,
      duration: 300,
      useNativeDriver: true,
    }).start(() => {
      setSheetVisible(false);
    });
  };

  const renderSheetContent = () => {
    return (
      <View style={styles.sheetContent}>
        {/* <Text style={styles.title}>Bottom Sheet Content</Text> */}
        {/* Add your content here */}
        <SheetContent></SheetContent>
        {/* <Spacer space={ }></Spacer> */}
        {/* <CustomButton title={'Select'}></CustomButton> */}
        <TouchableOpacity onPress={closeSheet} style={styles.closeButton}>
          <Text style={styles.closeButtonText}>Select</Text>
        </TouchableOpacity>
      </View>
    );
  };
  const dimensions=  Dimensions.get('window'); 
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={openSheet} style={styles.button}>
        <Text style={styles.buttonText}>Open Bottom Sheet</Text>
      </TouchableOpacity>

      {sheetVisible && (
        <Animated.View
          style={[
            styles.sheetContainer,
            {
              transform: [{ translateY: translateY }],
            },
          ]}
        >
          {renderSheetContent()}
        </Animated.View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    // width: '150%' ,
  },
  button: {
    marginTop: 10 ,
    backgroundColor :'#0a293b' , 
    marginHorizontal :25, 
    borderRadius :8 , 
    height : 50 , 
    width: 250,
    alignItems: 'center' , 
    justifyContent : 'center',
  },
  buttonText: {
    fontSize: 14,
    color: 'white',
  },
  sheetContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: SCREEN_HEIGHT * 0.9, 
    width :SCREEN_WIDTH * 1 ,
   backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingHorizontal: 20,
    paddingTop: 20,
    // marginTop : 10

  },
  sheetContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center', 
    // width: '100%'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  closeButton: {
    marginTop: 300 ,
        backgroundColor :'#0a293b' , 
        marginHorizontal :25, 
        borderRadius :3 , 
        height : 50 , 
        width : 200,
        alignItems: 'center' , 
        justifyContent : 'center',
        bottom: 200, 
        // marginBottom
  },
  closeButtonText: {
    fontSize: 16,
    color: 'white',
  },
});

export default BottomSheet;
