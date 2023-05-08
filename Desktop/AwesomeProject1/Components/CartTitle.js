import {Text, View, StyleSheet} from 'react-native';
import React, {Component} from 'react';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  textE: {
    fontFamily: 'DancingScript-Regular',
    fontWeight: 'bold',
    fontSize: 20,
    color: 'darkblue',
  },
});
export class CartTitle extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.textE}>My Cart</Text>
      </View>
    );
  }
}

export default CartTitle;
