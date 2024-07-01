import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons, FontAwesome } from '@expo/vector-icons';

const TitleBar = ({ title, onBackPress }) => {
  return (
    <View style={styles.container}>
      <View style={styles.leftIcons}>
        <TouchableOpacity>
          <FontAwesome name="bell-o" size={24} color="black" style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <FontAwesome name="shopping-cart" size={24} color="black" style={styles.icon} />
        </TouchableOpacity>
      </View>
      <Text style={styles.title}>سوق مامو</Text>
      <TouchableOpacity onPress={onBackPress} style={styles.backButton}>
        <Ionicons name="arrow-forward-outline" size={24} color="black" style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
  },
  leftIcons: {
    flexDirection: 'row',
  },
  icon: {
    marginHorizontal: 5,
  },
  title: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
  },
  backButton: {
    // Reverse the back button
  },
});

export default TitleBar;
