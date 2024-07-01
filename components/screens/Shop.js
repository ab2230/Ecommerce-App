import { StyleSheet,SafeAreaView, View, Text } from 'react-native'
import React from 'react'
import { Slider, Categories, AdsBoard, SearchBox, TitleBar} from '../common';
import { clothesData, Category } from '../data';
const Shop = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.titleBarContainer}>
            <TitleBar />
            <SearchBox />
            </View>
          <AdsBoard />
          <Categories allCategories={Category}/>
          <View style={styles.sliderContainer}>
            <Text style={styles.title}>عروض</Text>
            <Slider clothesData={clothesData}/>
          </View>
        </SafeAreaView>
      );
}

export default Shop

const styles = StyleSheet.create({
    container: {
    
    },
    sliderContainer: {
        marginVertical:10,
        marginHorizontal:5,
        backgroundColor: "#fff",
    },
    titleBarContainer: {
        backgroundColor:'#fff',
        paddingVertical:20,
        borderBottomEndRadius:30,
        borderBottomStartRadius:30
    },
    title: {
        color: 'black',
        fontWeight: 'bold',
        alignItems: 'flex-end',
        padding:10,
      },
  });