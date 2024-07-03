import * as React from 'react';
import { useState } from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import ProductsScreen from './screens/ProductScreen';
import CheckoutScreen from './screens/CheckoutScreen';
import OrderSuccessfullScreen from './screens/OrderSuccessfullScreen.js'

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function MainTabs({ checkoutItems, addProduct, removeProduct }) {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Products">
        {props => <ProductsScreen {...props} addProduct={addProduct} />}
      </Tab.Screen>
      <Tab.Screen name="Checkout">
        {props => <CheckoutScreen {...props} checkoutItems={checkoutItems} removeProduct={removeProduct} />}
      </Tab.Screen>
    </Tab.Navigator>
  );
}

export default function Index() {
  const [checkoutItems, setCheckoutItems] = useState([]);

  const addProduct = (product) => {
    setCheckoutItems([...checkoutItems, product]);
  };

  const removeProduct = (id) => {
    setCheckoutItems(checkoutItems.filter(item => item.id !== id));
  };

  return (
      <Stack.Navigator>
        <Stack.Screen name="Main" options={{ headerShown: false }}>
          {props => (
            <MainTabs
              {...props}
              checkoutItems={checkoutItems}
              addProduct={addProduct}
              removeProduct={removeProduct}
            />
          )}
        </Stack.Screen>
        <Stack.Screen name="OrderSuccessful" component={OrderSuccessfullScreen} />
      </Stack.Navigator>
  );
}

const styles = StyleSheet.create({});
