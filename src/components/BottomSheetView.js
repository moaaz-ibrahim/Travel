// Example of Bottom Sheet in React Native
// https://aboutreact.com/react-native-bottom-sheet/

// import React in our code
import React, {useState} from 'react';

// import all the components we are going to use
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Button
} from 'react-native';

//import basic react native components
import { BottomSheet } from 'react-native-btr';

//import to show social icons
import { SocialIcon } from '@rneui/themed';
import { TouchableOpacity } from 'react-native-gesture-handler';
import CustomButton from './CustomButton';
import SheetContent from './SheetContent';
import CustomIcon from './CustomIcon';
import { AntDesign } from '@expo/vector-icons';

const BottomSheetView = ({type , show ,toggle }) => {
  const [visible, setVisible] = useState(show);

  const toggleBottomNavigationView = () => {
    //Toggling the visibility state of the bottom sheet
    // console.log('show ' + show , 'visible ' + visible)
    toggle()
    setVisible(!visible);
    // console.log(toggle())
    // setVisible(false)
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        {/* <Text
          style={{
            fontSize: 20,
            marginBottom: 20,
            textAlign: 'center'
          }}>
          Example of Bottom Sheet in React Native
        </Text> */}
        
        {/* {console.log(type)} */}
        {/* <TouchableOpacity style={styles.btnContaienr} onPress={toggleBottomNavigationView}>
          {type == 1 ?(<CustomButton title={'SUPMIT REQUEST'}></CustomButton>) : ( <CustomIcon icon={<AntDesign name="plussquare" style={{borderRadius:60}}  size={24} color="#1877f3" />} text='Add another person (up to 5)'></CustomIcon>)}
          
        </TouchableOpacity> */}
        {/* <Button
          onPress={toggleBottomNavigationView}
          //on Press of the button bottom sheet will be visible
          title="Show Bottom Sheet"
        /> */}
        <BottomSheet
          visible={visible}
          //setting the visibility state of the bottom shee
          onBackButtonPress={toggleBottomNavigationView}
          //Toggling the visibility state
          onBackdropPress={toggleBottomNavigationView}
          //Toggling the visibility state
        >
          {/*Bottom Sheet inner View*/}
          <View style={styles.bottomNavigationView}>
            <View
              style={{
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'space-between',
                // height: '100%'
              }}>
              <SheetContent type={type} backButton={()=>{toggleBottomNavigationView}} backDrop={toggleBottomNavigationView}></SheetContent>
            </View>
          </View>
        </BottomSheet>
      </View>
    </SafeAreaView>
  );
};

export default BottomSheetView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 2,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#E0F7FA',
  },
  bottomNavigationView: {
    backgroundColor: '#fff',
    width: '100%',
    height: '83%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius : 30
  },
   btnContaienr :{
    width :350 , 
    paddingBottom : 25
   },
   
});