import {Text, View, StyleSheet} from 'react-native';
import React from 'react';
import {AirbnbRating} from '@rneui/themed';
const styles = StyleSheet.create({
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingText: {fontSize: 15, color: 'grey'},

  titleContainer: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#dcdcdc',
    borderRadius: 15,
    // marginTop: 5,
    marginBottom: 20,
    justifyContent: 'space-evenly',
    alignContent: 'stretch',
  },
  text: {
    alignSelf: 'flex-start',
    fontWeight: 'bold',
    fontSize: 18,
    color: 'darkblue',
    fontFamily: 'verdana',
  },

  titleText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
});

const DetailContent = ({item}) => {
  return (
    <View style={styles.titleText}>
      <Text style={styles.text}>{item.title.slice(0, 25)}</Text>
      <View style={styles.ratingContainer}>
        <AirbnbRating
          count={1}
          defaultRating={item.rating.rate}
          size={12}
          showRating={false}
        />
        <Text style={styles.ratingText}>({item.rating.rate})</Text>
      </View>
    </View>
  );
};

export default DetailContent;
