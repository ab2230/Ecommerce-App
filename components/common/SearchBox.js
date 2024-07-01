import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const SearchBox = () => {
  return (
    <View style={styles.container}>
      <Ionicons name="search-outline" size={20} color="#888" style={styles.icon} />
      <TextInput
        style={styles.input}
        placeholder="ابحث هنا"
        placeholderTextColor="#888"
        textAlign="right"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row-reverse',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    marginHorizontal: 20,
    marginTop: 20,
    paddingHorizontal: 10,
    backgroundColor: '#bcbcbc',
  },
  input: {
    flex: 1,
    fontSize: 16,
    paddingVertical: 10,
  },
  icon: {
    marginLeft: 10,
    transform: [{ scaleX: -1 }],
  },
});

export default SearchBox;
