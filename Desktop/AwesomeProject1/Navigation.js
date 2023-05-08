import React, {useContext, useEffect} from 'react';
import ProductDetail from './Components/ProductDetail';
import ProductList from './Components/ProductList';
import HeaderTitle from './Components/HeaderTitle';
import MyCart from './Components/MyCart';
import CartTitle from './Components/CartTitle';
import SplashScreen from 'react-native-splash-screen';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';
import {AuthContext} from './store/AuthContextProvider';
import AntDesign from 'react-native-vector-icons/AntDesign';

const stack = createNativeStackNavigator();

function AuthStack() {
  return (
    <stack.Navigator
      screenOptions={{
        headerShadowVisible: false,
        headerTitle: () => <HeaderTitle />,
      }}>
      <stack.Screen name="Login" component={LoginScreen} />
    </stack.Navigator>
  );
}

const AuthenticatedStack = () => {
  return (
    <stack.Navigator
      screenOptions={{
        headerShadowVisible: false,
        headerTitle: () => <HeaderTitle />,
      }}>
      <stack.Screen
        name="ProductList"
        component={ProductList}
        options={{headerShown: false}}
      />
      <stack.Screen
        name="ProductDetail"
        component={ProductDetail}
        options={{
          headerStyle: {backgroundColor: 'white'},
          contentStyle: {backgroundColor: 'white'},
        }}
      />
      <stack.Screen
        name="MyCart"
        component={MyCart}
        title="My Cart"
        options={{
          headerTitle: () => <CartTitle />,
        }}
      />
    </stack.Navigator>
  );
};
const Navigation = () => {
  const authCtx = useContext(AuthContext);
  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      border: 'transparent',
    },
  };
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <NavigationContainer theme={theme}>
      {!authCtx.isAuthenticated && <AuthStack />}
      {authCtx.isAuthenticated && <AuthenticatedStack />}
    </NavigationContainer>
  );
};

export default Navigation;
