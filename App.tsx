/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {ProductsScreen} from './app/screens';
import ProductsDetailsScreen from './app/screens/ProductsDetailsScreen';
function App(): JSX.Element {
  return (
    <>
      {/* <ProductsScreen /> */}
      <ProductsDetailsScreen />
    </>
  );
}

export default App;
