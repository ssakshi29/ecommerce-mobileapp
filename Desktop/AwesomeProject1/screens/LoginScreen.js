/* eslint-disable react/self-closing-comp */
// import {Text, View, StyleSheet, Image} from 'react-native';
import React, {useContext} from 'react';
import {AuthContext} from '../store/AuthContextProvider';
import {Button} from '@rneui/themed';
import {WebView} from 'react-native-webview';
import {View, Text, Image, Pressable, StyleSheet} from 'react-native';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
// import LoginSVG from '../assets/misc/login.svg';
// import GoogleSVG from '../assets/misc/google.svg';
// import FacebookSVG from '../assets/misc/facebook.svg';
// import TwitterSVG from '../assets/misc/twitter.svg';

// import CustomButton from '../components/CustomButton';
import InputField from '../Components/InputField';

const styles = StyleSheet.create({
  authContent: {
    marginTop: 64,
    marginHorizontal: 32,
    padding: 16,
    borderRadius: 8,
    elevation: 2,
    shadowColor: 'black',
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.35,
    shadowRadius: 4,
  },
  buttons: {
    marginTop: 100,
    paddingVertical: 6,
    paddingHorizontal: 12,
  },
  img: {
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    marginHorizontal: 60,
  },
  imageStyle: {height: 32, width: 32},
});
const LoginScreen = () => {
  const {googleSignIn} = useContext(AuthContext);
  const navigation = useNavigation();
  return (
    <View
      // eslint-disable-next-line react-native/no-inline-styles
      style={{flex: 1, justifyContent: 'center'}}>
      <View
        // eslint-disable-next-line react-native/no-inline-styles
        style={{paddingHorizontal: 25}}>
        <View
          // eslint-disable-next-line react-native/no-inline-styles
          style={{alignItems: 'center'}}></View>
        <Text>Login</Text>
        <InputField
          label={'Email ID'}
          icon={
            <MaterialIcons
              name="alternate-email"
              size={20}
              color="#666"
              //   style={{marginRight: 5}}
            />
          }
          //boardType="email-address"
        />
        <InputField
          label={'Password'}
          icon={
            <Ionicons
              name="ios-lock-closed-outline"
              size={20}
              color="#666"
              //   style={{marginRight: 5}}
            />
          }
          inputType="password"
          fieldButtonLabel={'Forgot?'}
          // fieldButtonFunction={() => {}}
        />
        <Button onPress={() => {}}>Login</Button>

        <Text
          // eslint-disable-next-line react-native/no-inline-styles
          style={{textAlign: 'center', color: '#666', marginVertical: 30}}>
          Or, Sign in with
        </Text>
        <View
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            marginBottom: 20,
          }}>
          <Pressable onPress={googleSignIn}>
            <Image
              style={styles.imageStyle}
              source={require('../assets/google.png')}
            />
          </Pressable>

          <Pressable>
            <Image
              style={styles.imageStyle}
              source={require('../assets/linkedin.png')}
            />
          </Pressable>

          <Pressable>
            <Image
              style={styles.imageStyle}
              source={require('../assets/fb.png')}
            />
          </Pressable>
        </View>
        <View
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginBottom: 30,
          }}>
          <Text>New to the app?</Text>
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;
