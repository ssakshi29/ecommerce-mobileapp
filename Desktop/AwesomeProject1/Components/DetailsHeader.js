import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Favorite from './Favorite';

const styles = StyleSheet.create({
  mainContainer: {
    display: 'flex',
    flexDirection: 'row',

    marginTop: 60,
    marginBottom: 20,
    justifyContent: 'space-between',
  },
  leftContainer: {
    // display: 'flex',
    //flexDirection: 'row',
    // justifyContent: 'flex-start',
  },
  rightContainer: {
    // display: 'flex',
    // flexDirection: 'row',
    //justifyContent: 'flex-end',
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
const DetailsHeader = ({isFavorite}) => {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.textX}>X</Text>
      <Text style={styles.textE}>E</Text>
      <Favorite isFavorite={isFavorite} />
    </View>
  );
};

export default DetailsHeader;
