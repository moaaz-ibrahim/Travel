import React from "react";
import {TextInput , View, Text, StyleSheet} from 'react-native';
import { Feather } from '@expo/vector-icons';
// import { Foundation } from '@expo/vector-icons';
// import { FontAwesome } from '@expo/vector-icons';

const SearchBar = ()=>{
    return   <View style={styles.container}>

    
    <View style={styles.placeholderContainer}>
      <Text style={styles.placeholderText}>Destination</Text>
    </View>

{/* <View style= {styles.co}> */}

  <TextInput
    style={styles.input}
    value="Where to go?"
  />
    <Feather style={{left : '90%' , top: -20}} name="compass" size={24} color="red" />
{/* </View> */}
</View>
};

const styles = StyleSheet.create({
    container: {
        width: '80%',
        height: 70,
        borderRadius: 10,
        marginTop : 15 ,
        borderColor: 'black',
        paddingHorizontal: 10,
        marginBottom: 10,
        alignSelf: 'center',
        backgroundColor: 'white'
      },
      placeholderContainer: {
        position: 'absolute',
        top: 10,
        left: 10,
        right: 10,
      },
      placeholderText: {
        color: '#999999',
        fontSize: 16,
      },
      input: {
        flex : 1,
        color: '#2f4a59',
        fontSize: 16,
        marginTop:  40,
        fontWeight : 'bold', 
        fontFamily: 'Raleway',
        
      }
    // input : {
    //     backgroundColor : '#ffffff',
    //     width : '80%', 
    //     height: 80,
    //     alignSelf :'center',
    //     borderRadius : 10, 
    //     marginTop : 15, 
    //     fontWeight : 'bold',
    // }
})

export default SearchBar;

// const SearchBar = ()=>{
//     return 
// };

// const styles = StyleSheet.create({
//     container: {
//         width: '80%',
//         height: 40,
//         borderRadius: 5,
//         borderWidth: 1,
//         borderColor: 'black',
//         paddingHorizontal: 10,
//         marginBottom: 10,
//       },
//       placeholderContainer: {
//         position: 'absolute',
//         top: 10,
//         left: 10,
//         right: 10,
//       },
//       placeholderText: {
//         color: '#999999',
//         fontSize: 16,
//       },
//       input: {
//         flex: 1,
//         color: 'black',
//         fontSize: 16,
//       },
// })
