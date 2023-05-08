import {View, Text, StyleSheet, Dimensions} from 'react-native';
import {ImageSlider} from 'react-native-image-slider-banner';
import React, {useEffect} from 'react';
import Favorite from './Favorite';
import AvailableColor from './AvailableColor';
import Discount from './Discount';
import Cart from './Cart';
import DetailContent from './DetailContent';
import Size from './Size';

const ProductDetail = ({route, navigation}) => {
  const item = route.params.item;
  const isFavorite = route.params.isFavorite;
  const handlePress = route.params.handlePress;
  const setIsFavorite = route.params.setIsFavorite;
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Favorite
          isFavorite={isFavorite}
          handlePress={() => setIsFavorite(!isFavorite)}
        />
      ),
    });
  }, [isFavorite, navigation, handlePress, setIsFavorite]);

  const img1 = item.image;
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <View style={styles.discount}>
          <Discount />
        </View>
        <View style={styles.OuterContainer}>
          <View style={styles.imageOuterContainer}>
            <View style={styles.imageContainer}>
              <View>
                <ImageSlider
                  data={[
                    {
                      img: img1,
                    },
                    {
                      img: img1,
                    },
                    {
                      img: img1,
                    },
                    {
                      img: img1,
                    },
                  ]}
                  autoPlay={false}
                  // eslint-disable-next-line react-native/no-inline-styles
                  caroselImageStyle={{
                    width: 130,
                    height: 100,
                    alignItems: 'center',
                    justifyContent: 'center',
                    resizeMode: 'contain',
                    opacity: 1,
                    marginTop: 20,
                    marginLeft: 3,
                  }}
                  //showIndicator={false}
                  // eslint-disable-next-line react-native/no-inline-styles
                  indicatorContainerStyle={{
                    bottom: -100,
                  }}
                />
              </View>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.innerBox}>
        <View style={styles.innercontent}>
          <DetailContent item={item} />
          <Text style={styles.description}>
            {item.description.slice(0, 95)}
          </Text>
          <Size />
          <AvailableColor />
        </View>
      </View>
      <View style={styles.bottomContainer}>
        <Cart item={item} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F3F1F1',
  },
  box: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius:
      Math.round(
        Dimensions.get('window').width + Dimensions.get('window').height,
      ) / 2,
    width: Dimensions.get('window').width * 0.5,
    height: Dimensions.get('window').width * 0.5,
    borderColor: 'lightblue',
    borderWidth: 30,
  },
  imageOuterContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius:
      Math.round(
        Dimensions.get('window').width + Dimensions.get('window').height,
      ) / 2,
    width: Dimensions.get('window').width * 0.59,
    height: Dimensions.get('window').width * 0.59,
    borderWidth: 0.6,
    borderLeftColor: 'lightblue',
    borderRightColor: 'lightblue',
    borderBottomColor: '#F3F1F1',
    borderTopColor: '#F3F1F1',
  },
  OuterContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius:
      Math.round(
        Dimensions.get('window').width + Dimensions.get('window').height,
      ) / 2,
    width: Dimensions.get('window').width * 0.69,
    height: Dimensions.get('window').width * 0.69,
    borderWidth: 0.6,
    borderLeftColor: 'lightblue',
    borderRightColor: 'lightblue',
    borderBottomColor: '#F3F1F1',
    borderTopColor: '#F3F1F1',
  },

  innerBox: {
    marginTop: 90,
    flex: 1,
    alignContent: 'stretch',
    width: Dimensions.get('window').width,
    backgroundColor: '#f0f0f5',
    paddingVertical: 20,
    borderRadius: 30,
    borderWidth: 0.4,
    borderColor: 'lightblue',
  },
  innerContent: {},
  description: {
    fontSize: 14,
    paddingHorizontal: 20,
    paddingVertical: 5,
    fontFamily: 'verdana',
    color: 'steelblue',
    textTransform: 'capitalize',
  },
  bottomContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    width: Dimensions.get('window').width,
  },
  discount: {
    marginTop: 40,
    marginBottom: 25,
  },
});

export default ProductDetail;
