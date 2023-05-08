import {Text, View, StyleSheet} from 'react-native';
import React from 'react';

const styles = StyleSheet.create({
  container: {
    paddingVertical: 5,
    paddingHorizontal: 4,
    borderRadius: 8,
    backgroundColor: 'lightblue',
    alignItems: 'center',
  },
  text: {
    fontSize: 12,
    fontWeight: 'bold',
  },
});
const Discount = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text} data-testid="text-btn">
        30%
      </Text>
    </View>
  );
};

export default Discount;
