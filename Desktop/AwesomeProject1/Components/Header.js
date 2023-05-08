import React, {useContext} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {AuthContext} from '../store/AuthContextProvider';
const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    padding: 10,
    margin: 10,
    justifyContent: 'space-between',
  },
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
const Header = () => {
  const authCtx = useContext(AuthContext);
  return (
    <View style={styles.mainContainer}>
      <Ionicons name="ios-grid" size={25} />
      <View style={styles.container}>
        <Text style={styles.textX}>X</Text>
        <Text style={styles.textE}>E</Text>
      </View>
      <AntDesign name="logout" size={24} onPress={authCtx.logout} />
    </View>
  );
};

export default Header;
