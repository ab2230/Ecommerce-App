import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';


const Slider = ({clothesData}) => {
  return (
    <ScrollView horizontal style={styles.container}>
      {clothesData.map(item => (
        <View key={item.id} style={styles.itemBox}>
            <View style={styles.imageContainer}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <View style={styles.discountBadge}>
                <Text style={styles.discountText}>{item.discount}</Text>
                </View>
            </View>
          <View style={styles.subContainer}> 
            <FontAwesome name="star" size={16} color='gold' />
            <Text style={styles.rating}>{item.rating}</Text>
            <View style={styles.pricesContainer}>
                <Text style={styles.originalPrice}>{item.originalPrice}</Text>
                <Text style={styles.discountedPrice}>{item.discountedPrice}</Text>
            </View>
            </View>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  subContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemBox: {
    marginRight: 15,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'gray',
    borderRadius: 10,
    borderWidth:1,
  },
  imageContainer: {
    position: 'relative',
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 10,
  },
  discountBadge: {
    position: 'absolute',
    top: 10,
    left: 10,
    backgroundColor: 'orange',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 30,
  },
  discountText: {
    color: 'black',
    fontWeight: 'bold',
  },
  rating: {
    color: 'black',
    fontWeight: 'bold',
    marginRight:10
  },
  pricesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  originalPrice: {
    textDecorationLine: 'line-through',
    color: 'red',
  },
  discountedPrice: {
    color: 'green',
    fontWeight: 'bold',
  },
});

export default Slider;
