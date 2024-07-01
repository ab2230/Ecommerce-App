import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image, StyleSheet } from 'react-native';

export default function Categories({ allCategories }) {
  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollViewContent}
      >
        {allCategories?.map((category) => {
          return (
            <View key={category.id} style={styles.itemContainer}>
              <TouchableOpacity style={styles.button}>
                <Image
                  style={styles.image}
                  source={{ uri: category.image }}
                />
              </TouchableOpacity>
              <Text style={styles.textStyle}>{category.categoryName}</Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    
  },
  scrollViewContent: {
    paddingHorizontal: 20,
    justifyContent: 'space-between',
  },
  itemContainer: {
    alignItems: 'center',
    marginHorizontal: 5,
  },
  button: {
    borderRadius: 50,
    overflow: 'hidden',
    width: 80,
    height: 80,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  textStyle: {
    fontSize: 14,
    marginTop: 6,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#333',
  },
});
