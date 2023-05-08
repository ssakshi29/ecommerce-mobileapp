import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const AvailableColor = () => {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.textColor}>Available Color: </Text>
      <View style={[styles.outerContainer, styles.outeCircle1]}>
        <View style={styles.innerCircle1} />
      </View>
      <View style={[styles.outerContainer, styles.outeCircle2]}>
        <View style={styles.innerCircle2} />
      </View>
      <View style={[styles.outerContainer, styles.outeCircle3]}>
        <View style={styles.innerCircle3} />
      </View>
      <View style={[styles.outerContainer, styles.outeCircle4]}>
        <View style={styles.innerCircle4} />
      </View>
    </View>
  );
};

export default AvailableColor;

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  outerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textColor: {
    color: 'grey',
    marginLeft: 15,
  },
  outeCircle1: {
    padding: 1,
    width: 30,
    height: 30,
    borderRadius: 25,
    marginHorizontal: 5,
    backgroundColor: '#FADBD8',
  },
  innerCircle1: {
    padding: 12,
    borderRadius: 15,
    width: 20,
    height: 20,
    margin: 7,
    backgroundColor: 'orange',
  },
  outeCircle2: {
    padding: 1,
    width: 30,
    height: 30,
    borderRadius: 25,
    marginHorizontal: 5,
    backgroundColor: '#FADBD8',
  },
  innerCircle2: {
    padding: 12,
    borderRadius: 15,
    width: 20,
    height: 20,
    margin: 7,
    backgroundColor: 'red',
  },
  outeCircle3: {
    padding: 1,
    width: 30,
    height: 30,
    borderRadius: 25,
    marginHorizontal: 5,
    backgroundColor: '#F5D3F3',
  },
  innerCircle3: {
    padding: 12,
    borderRadius: 15,
    width: 20,
    height: 20,
    margin: 7,
    backgroundColor: '#F692F0',
  },
  outeCircle4: {
    padding: 1,
    width: 30,
    height: 30,
    borderRadius: 25,
    marginHorizontal: 5,
    backgroundColor: '#D6EAF8',
  },
  innerCircle4: {
    padding: 12,
    borderRadius: 15,
    width: 20,
    height: 20,
    margin: 7,
    backgroundColor: 'blue',
  },
});