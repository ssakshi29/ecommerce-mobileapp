import React, {useState, useEffect} from 'react';
import {View, FlatList, StyleSheet, TouchableOpacity, Text} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'baseline',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 9,
    paddingHorizontal: 10,
    borderRadius: 18,
    borderColor: 'lightblue',
    borderStyle: 'solid',
    borderWidth: 0.5,
    backgroundColor: 'white',
    shadowColor: 'greyWhite',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 1.8,
    shadowRadius: 2,
    elevation: -10,
    marginVertical: 12,
    marginHorizontal: 5,
  },
  textron: {
    fontSize: 12,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.14,
    color: '#013b6e',
    textTransform: 'capitalize',
  },
  selectedItem: {
    backgroundColor: 'grey',
  },
});
const ProductCategory = ({handleCategory}) => {
  const [data, setData] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);

  const fetchData = async () => {
    const res = await fetch('https://fakestoreapi.com/products/categories');
    const val = await res.json();
    setData(['ALL', ...val]);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const renderCategory = ({item}) => {
    return (
      <TouchableOpacity
        style={[styles.container]}
        onPress={() => handleCategory(item)}>
        <View style={styles.button}>
          <Text style={styles.textron}>{item}</Text>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.container}>
      {data && (
        <FlatList
          horizontal
          data={data}
          renderItem={renderCategory}
          // Extractor={(item, index) => item.id}
          showsHorizontalScrollIndicator={false}
          onPress={item => setSelectedItem(item)}
        />
      )}
    </View>
  );
};

export default ProductCategory;
