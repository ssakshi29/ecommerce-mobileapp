import React, {useContext, useEffect} from 'react';
import CartContextProvider from './Components/Store/CartContext';
import Navigation from './Navigation';
import AuthContextProvider, {AuthContext} from './store/AuthContextProvider';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import {WebView} from 'react-native-webview';

function App() {
  const authCtx = useContext(AuthContext);

  useEffect(() => {
    async function fetchToken() {
      const storedToken = await AsyncStorage.getItem('token');

      if (storedToken) {
        authCtx.authenticate(storedToken);
      }
    }

    fetchToken();
  });

  return (
    <AuthContextProvider>
      <CartContextProvider>
        <Navigation />
      </CartContextProvider>
    </AuthContextProvider>
  );
}

export default App;
