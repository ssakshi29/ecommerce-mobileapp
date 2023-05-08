import React, {createContext, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {GoogleSignin} from '@react-native-google-signin/google-signin';

export const AuthContext = createContext({
  token: '',
  isAuthenticated: false,
  logout: () => {},
  googleSignIn: () => {},
});

const AuthContextProvider = ({children}) => {
  const [authToken, setAuthToken] = useState();

  const googleSignIn = () => {
    GoogleSignin.configure({
      // androidClientId: 'ADD_YOUR_ANDROID_CLIENT_ID_HERE',
      iosClientId:
        '363731851219-70p39k3h5oiu1drjs2l353c8rb5ce63g.apps.googleusercontent.com',
    });
    GoogleSignin.hasPlayServices()
      .then(hasPlayService => {
        if (hasPlayService) {
          GoogleSignin.signIn()
            .then(userInfo => {
              console.log(JSON.stringify(userInfo.idToken));
              setAuthToken(userInfo.idToken);
              AsyncStorage.setItem('token', JSON.stringify(userInfo.idToken));
            })
            .catch(e => {
              console.log('ERROR IS: ' + JSON.stringify(e));
            });
        }
      })
      .catch(e => {
        console.log('ERROR IS: ' + JSON.stringify(e));
      });
  };

  function logout() {
    setAuthToken(null);
    AsyncStorage.removeItem('token');
  }

  const value = {
    token: authToken,
    isAuthenticated: !!authToken,
    logout: logout,
    googleSignIn: googleSignIn,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;
