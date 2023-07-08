import React from 'react';
import { View, ImageBackground, Text, StyleSheet, Button, TouchableOpacity } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={{
          uri:
            'https://images.unsplash.com/photo-1506929562872-bb421503ef21?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=468&q=80',
        }}
        style={styles.imageBackground}
        imageStyle={styles.image}
      >
        <View style={styles.filter} />
        <Text style={styles.text}>
          Enjoy new Extraordinary {'\n'} destinations and stays
        </Text>
        <Text style={styles.desc}>
          book your next trip with egyliere {'\n'} with top-notch hotels and events.
        </Text>
        {/* <View style={styles.btn}>
        <Button  title='START BOOKING'></Button>

        </View> */}
        
        <TouchableOpacity style={styles.btn}>
            <Text style={styles.btnInside}>START BOOKING</Text>
        </TouchableOpacity>
        
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 400,
    height: 250,
    backgroundColor: 'red',
  },
  imageBackground: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    resizeMode: 'cover',
  },
  filter: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    // marginLeft : 40, 
    // backgroundColor : 'red'
    // marginTop :20, 
    // marginLeft : 100
  },
  text: {
    paddingLeft : 20,  
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    marginLeft: '3%', 
    marginTop :15
  },
  desc :{
    paddingLeft : 20,
    color: '#474747',
    fontWeight: '400',
    fontSize: 14,
    // fontWeight: 'bold',
    alignSelf: 'flex-start',
    marginLeft: '3%',
    marginTop :3
  }
  
,
btn : {
  marginLeft : 20,
    flexDirection: 'row',
    alignSelf :'flex-start',
    marginLeft : '8%' ,
    marginTop :15,
   height : 40,
   width : 160,
    backgroundColor: '#1e1e1e',
    borderRadius :5, 
    
},
btnInside :{
    alignSelf: 'center',
    fontWeight :'bold',
    justifyContent: 'center',
    left : '75%' ,
     
    color: 'white',
    fontSize: 12,
    // padding :5
}
});

export default App;
