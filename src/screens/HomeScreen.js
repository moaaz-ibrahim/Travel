import React from "react";
import { ScrollView, Text , View } from "react-native";
import SearchBar from "../components/SearchBar";
import NavBar from "../components/NavBar";
import ImageSection from "../components/ImageSection";
import Destinations from "../components/Destinations";
import Deals from "../components/Deals";
import BottomBar from "../components/BottomBar";
import Spacer from "../components/Spacer";


const HomeScreen = ({navigation})=>{
    // console.log(navigation)
    
 return <View style={{flex: 1 , backgroundColor: '#f5f3e9'}} >
    <NavBar></NavBar>
    <ScrollView >

    <SearchBar></SearchBar>
    <ImageSection></ImageSection>
    <Destinations navigation={navigation}></Destinations>
    <Deals></Deals>
    <Spacer space={30}></Spacer>
    </ScrollView>
<BottomBar navigation ={navigation}></BottomBar>
 </View>
};

export default HomeScreen;