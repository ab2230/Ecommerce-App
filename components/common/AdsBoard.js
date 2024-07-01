import React, { useState, useRef, useEffect } from 'react';
import { View, ScrollView, Image, StyleSheet, Dimensions, Text } from 'react-native';

const { width } = Dimensions.get('window');

const adsData = [
  { id: '1', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeu6keO0gj9_yEO-MmJ6Hr9KYCEpcFAxdiuw&s' },
  { id: '2', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeu6keO0gj9_yEO-MmJ6Hr9KYCEpcFAxdiuw&s' },
  { id: '3', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeu6keO0gj9_yEO-MmJ6Hr9KYCEpcFAxdiuw&s' },
  { id: '4', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeu6keO0gj9_yEO-MmJ6Hr9KYCEpcFAxdiuw&s' },
];

const AdsBoard = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollViewRef = useRef(null);
  const intervalRef = useRef(null);

  useEffect(() => {
    startAutoSlide();
    return () => clearInterval(intervalRef.current);
  }, []);

  const startAutoSlide = () => {
    intervalRef.current = setInterval(() => {
      setActiveIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % adsData.length;
        scrollViewRef.current.scrollTo({ x: nextIndex * width, animated: true });
        return nextIndex;
      });
    }, 9000); // change image every 3 seconds
  };

  const onScroll = (event) => {
    const index = Math.round(event.nativeEvent.contentOffset.x / width);
    setActiveIndex(index);
  };

  return (
    <View style={styles.container}>
      <ScrollView
        ref={scrollViewRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={onScroll}
        scrollEventThrottle={16}
      >
        {adsData.map((ad) => (
          <Image key={ad.id} source={{ uri: ad.image }} style={styles.image} />
        ))}
      </ScrollView>
      <View style={styles.dotsContainer}>
        {adsData.map((_, index) => (
          <View
            key={index}
            style={[
              styles.dot,
              { opacity: index === activeIndex ? 1 : 0.5 }
            ]}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  image: {
    width: width-40,
    height: 200,
    resizeMode: 'cover',
    borderRadius:20,
  },
  dotsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: 'black',
    marginHorizontal: 5,
  },
});

export default AdsBoard;
