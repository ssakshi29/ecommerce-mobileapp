import {View, Text, StyleSheet, TouchableHighlight} from 'react-native';
import React, {useState} from 'react';

const Size = () => {
  let [state, setState] = useState(1);
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.textColor}>Size :</Text>
      <TouchableHighlight
        onPress={() => {
          setState(1);
        }}
        underlayColor={0.85}
        style={[
          state === 1 ? styles.highlightButton : styles.button,
          styles.btn,
        ]}>
        <Text style={styles.sizeText}>US 6</Text>
      </TouchableHighlight>
      <TouchableHighlight
        onPress={() => {
          setState(2);
        }}
        underlayColor={0.85}
        style={[
          state === 2 ? styles.highlightButton : styles.button,
          styles.btn,
        ]}>
        <Text style={styles.sizeText}>US 7</Text>
      </TouchableHighlight>
      <TouchableHighlight
        onPress={() => {
          setState(3);
        }}
        underlayColor={0.85}
        style={[
          state === 3 ? styles.highlightButton : styles.button,
          styles.btn,
        ]}>
        <Text style={styles.sizeText}>US 8</Text>
      </TouchableHighlight>
      <TouchableHighlight
        onPress={() => {
          setState(4);
        }}
        underlayColor={0.85}
        style={[
          state === 4 ? styles.highlightButton : styles.button,
          styles.btn,
        ]}>
        <Text style={styles.sizeText}>US 9</Text>
      </TouchableHighlight>
    </View>
  );
};

export default Size;

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 4,
  },
  textColor: {
    color: 'grey',
    marginLeft: 20,
  },
  button: {
    alignItems: 'center',
    padding: 10,
  },
  sizeText: {
    fontWeight: 'bold',
  },
  highlightButton: {
    alignItems: 'center',
    backgroundColor: 'lightskyblue',
    borderRadius: 10,
    padding: 10,
  },
  btn: {
    marginHorizontal: 10,
  },
});
