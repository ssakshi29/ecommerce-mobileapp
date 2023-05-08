import React, {useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  Text,
  Pressable,
  Dimensions,
  Image,
} from 'react-native';
import ProductListGrid from './ProductListGrid';
import Header from './Header';
import ProductCategory from './ProductCategory';
import Icons from 'react-native-vector-icons/Ionicons';
import {Button} from '@rneui/themed';
import HeaderTitle from './HeaderTitle';

const ProductList = ({navigation}) => {
  const [data, setData] = useState([]);
  const [filterdata, setFilterData] = useState([]);
  const [category, setCategory] = useState('');
  const {width} = Dimensions.get('window');
  const fetchData = async () => {
    const res = await fetch('https://fakestoreapi.com/products');
    const val = await res.json();
    setData(val);
    setFilterData(val);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleCategory = item => {
    if (item !== 'ALL') {
      const newData = data.filter(product => product.category === item);
      setCategory(item);
      setFilterData(newData);
    } else {
      setData(data);
      setFilterData(data);
    }
  };

  const pressHandler = () => {
    navigation.navigate('MyCart');
  };

  const renderItem = ({item}) => {
    return (
      <ProductListGrid
        item={item}
        image={item.image}
        title={item.title}
        price={item.price}
        rate={item.rating.rate}
        navigation={navigation}
      />
    );
  };

  return (
    <View style={styles.mainContainer}>
      <Header />

      <Text style={styles.header}> Our Product</Text>
      <View>
        <ProductCategory handleCategory={handleCategory} />
      </View>
      <View style={styles.container}>
        {filterdata && (
          <FlatList
            data={filterdata}
            renderItem={renderItem}
            // Extractor={(item, index) => item.id}
            numColumns="2"
          />
        )}
      </View>
      <View style={styles.headerFooterStyle}>
        <Icons
          name="cart-outline"
          size={20}
          color="darkblue"
          style={styles.cart}
          onPress={pressHandler}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: '#F3F1F1',
    marginTop: 30,
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  header: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  headerFooterStyle: {
    position: 'absolute',
    borderRadius: 45,
    height: 65,
    width: 65,
    backgroundColor: 'grey',
    top: 730,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 3,
    marginHorizontal: 165,
  },
});

export default ProductList;
