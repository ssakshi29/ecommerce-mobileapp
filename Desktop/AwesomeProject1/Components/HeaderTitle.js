import {Text, View, StyleSheet} from 'react-native';
import React, {Component} from 'react';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textX: {
    fontFamily: 'Georgia',
    fontWeight: 'bold',
    fontSize: 30,
    color: 'darkBlue',
  },
  textE: {
    fontFamily: 'Georgia',
    fontWeight: 'bold',
    fontSize: 30,
    color: 'lightblue',
  },
});
export class HeaderTitle extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.textX}>X</Text>
        <Text style={styles.textE}>E</Text>
      </View>
    );
  }
}

export default HeaderTitle;
