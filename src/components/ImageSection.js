import React from 'react';
import { View, ImageBackground, Text, StyleSheet, Button, TouchableOpacity } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={{
          uri:
            'https://images.unsplash.com/photo-1503220317375-aaad61436b1b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80',
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
    height: 200,
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
    width: '50%',
    height: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
  },
  text: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    marginLeft: 10
  },
  desc :{
    color: 'gray',
    fontWeight: 20,
    fontSize: 14,
    // fontWeight: 'bold',
    alignSelf: 'flex-start',
    marginLeft: 10,
    marginTop :10
  }
,
btn : {
    flexDirection: 'row',
    alignSelf :'flex-start',
    marginLeft : 15 ,
    marginTop :15,
    width :150 ,
    height: 40,
    backgroundColor: '#1e1e1e',
    borderRadius :10
},
btnInside :{
    alignSelf: 'center',
    fontWeight :'bold',
    justifyContent: 'center',
    left : '50%' , 
    color: 'white'
}
});

export default App;
