import {Text, View, StyleSheet} from 'react-native';
import React, {useContext} from 'react';
import Icons from 'react-native-vector-icons/Ionicons';
import {CartContext} from './Store/CartContext';

const Cart = ({item}) => {
  const cartContextCtx = useContext(CartContext);

  function cartHandler() {
    cartContextCtx.addItemToCart(item);
  }

  return (
    <View style={styles.footerContainer}>
      <Text style={styles.price}>
        <Text style={styles.dollar}>$</Text>
        {item.price}
      </Text>
      <View style={styles.btn}>
        <Text style={{color: 'darkblue'}}>
          <Icons
            name="cart-outline"
            size={15}
            color="darkblue"
            style={styles.cart}
            onPress={cartHandler}
          />
          Add To Cart
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  price: {
    color: '#013b6e',
    fontWeight: 'bold',
    fontSize: 30,
  },
  dollar: {
    fontSize: 15,
  },
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 25,
    // marginBottom: 25,
    borderRadius: 18,
    backgroundColor: 'white',
    paddingVertical: 30,
    paddingHorizontal: 20,
    alignContent: 'stretch',
  },
  cart: {
    marginRight: 30,
  },
  btn: {
    backgroundColor: '#F5F5F5',
    padding: 15,
    borderRadius: 20,
    borderWidth: 0.01,
  },
});

export default Cart;
