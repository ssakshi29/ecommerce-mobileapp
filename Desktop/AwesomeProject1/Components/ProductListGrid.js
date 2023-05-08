import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Image,
  Dimensions,
  ImageBackground,
} from 'react-native';
import {AirbnbRating} from '@rneui/themed';
import Favorite from './Favorite';
import Discount from './Discount';
import React, {useState} from 'react';

const ProductListGrid = ({item, image, title, price, rate, navigation}) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const handlePress = () => {
    setIsFavorite(!isFavorite);
  };

  const pressHandler = () => {
    navigation.navigate('ProductDetail', {
      item: item,
      isFavorite: isFavorite,
      setIsFavorite: setIsFavorite,
      handlePress: handlePress,
    });
  };
  return (
    <View style={styles.mainContainer}>
      <Pressable onPress={pressHandler}>
        <View style={styles.box}>
          <View style={styles.favorite}>
            <View style={styles.discount}>
              <Discount />
            </View>
            <Favorite isFavorite={isFavorite} handlePress={handlePress} />
          </View>
          <ImageBackground style={styles.imgOuterBox}>
            <ImageBackground style={styles.imgbox}>
              <View style={styles.imageContainer}>
                <Image source={{uri: image}} style={styles.imag} />
              </View>
            </ImageBackground>
          </ImageBackground>

          <Text style={styles.text}>{title.slice(0, 30)}</Text>
          <Text style={styles.price}>${price}</Text>
          <View style={styles.ratingContainer}>
            <AirbnbRating
              count={5}
              defaultRating={rate}
              size={11}
              showRating={false}
            />
            <Text>({rate})</Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {},
  box: {
    width: 165,
    height: 290,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 20,
    backgroundColor: '#FFF',
    borderRadius: 20,
    paddingTop: 15,
    shadowColor: 'lightgrey',
    paddingHorizontal: 5,
  },
  imageContainer: {
    // flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  imag: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    resizeMode: 'contain',
    // border: 'none',
    overflow: 'hidden',
    transform: [{perspective: 800}, {rotateY: '200deg'}],
    borderRadius:
      Math.round(
        Dimensions.get('window').width + Dimensions.get('window').height,
      ) / 2,
    width: Dimensions.get('window').width * 0.23,
    height: Dimensions.get('window').width * 0.23,
  },
  text: {
    textAlign: 'center',
    paddingTop: 20,
    fontWeight: 'bold',
    paddingBottom: 10,
    color: 'darkblue',
  },
  price: {
    textAlign: 'center',
    color: '#013b6e',
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 20,
    fontWeight: 'bold',
  },
  ratingContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 20,
    marginLeft: 25,
  },

  favorite: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
  },
  imgbox: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius:
      Math.round(
        Dimensions.get('window').width + Dimensions.get('window').height,
      ) / 2,
    width: Dimensions.get('window').width * 0.25,
    height: Dimensions.get('window').width * 0.25,
    borderColor: 'lightblue',
    borderWidth: 30,
  },
  imgOuterBox: {
    marginLeft: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius:
      Math.round(
        Dimensions.get('window').width + Dimensions.get('window').height,
      ) / 2,
    width: Dimensions.get('window').width * 0.29,
    height: Dimensions.get('window').width * 0.29,
    borderColor: '#99e6ff',
    borderWidth: 3,
    // borderColor: '#013b6e',
  },
});

export default ProductListGrid;
