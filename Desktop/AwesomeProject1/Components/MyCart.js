import {
  View,
  StyleSheet,
  Text,
  FlatList,
  Dimensions,
  ImageBackground,
  Image,
} from 'react-native';
import {useContext, useEffect} from 'react';
import {CartContext} from './Store/CartContext';
const styles = StyleSheet.create({
  box: {
    width: 370,
    height: 100,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 20,
    backgroundColor: '#F5F5F5',
    borderRadius: 20,
    paddingTop: 15,
    shadowColor: 'lightgrey',
    paddingHorizontal: 5,
    display: 'flex',
    flexDirection: 'row',
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
    width: Dimensions.get('window').width * 0.13,
    height: Dimensions.get('window').width * 0.13,
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
    fontSize: 20,
  },
  dollar: {
    fontSize: 12,
  },

  imgbox: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius:
      Math.round(
        Dimensions.get('window').width + Dimensions.get('window').height,
      ) / 2,
    width: Dimensions.get('window').width * 0.15,
    height: Dimensions.get('window').width * 0.15,
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
    width: Dimensions.get('window').width * 0.19,
    height: Dimensions.get('window').width * 0.19,
    borderColor: '#99e6ff',
    borderWidth: 3,
    // borderColor: '#013b6e',
  },
  box1: {
    marginLeft: 20,
    flexDirection: 'column',
  },
  qty: {
    marginTop: 25,
    marginLeft: 70,
    fontSize: 18,
    color: 'darkblue',
    fontWeight: 'bold',
  },
});

const MyCart = () => {
  const cartContextCtx = useContext(CartContext);
  const data = cartContextCtx.cartItems;

  const renderItem = ({item}) => {
    return (
      <View style={styles.box}>
        <ImageBackground style={styles.imgOuterBox}>
          <ImageBackground style={styles.imgbox}>
            <View style={styles.imageContainer}>
              <Image source={{uri: item.image}} style={styles.imag} />
            </View>
          </ImageBackground>
        </ImageBackground>
        <View style={styles.box1}>
          <Text style={styles.text}>{item.title.slice(0, 20)}</Text>
          <Text style={styles.price}>
            <Text style={styles.dollar}>$</Text>
            {item.price}
          </Text>
        </View>
        <Text style={styles.qty}>{item.qty}</Text>
      </View>
    );
  };

  return (
    <View>
      {console.log(data)}

      <FlatList data={data} renderItem={renderItem} />
    </View>
  );
};

export default MyCart;
