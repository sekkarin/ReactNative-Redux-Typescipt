/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {ThemeProvider} from '@rneui/themed';
import Navigation from './app/navigation/navigation';
import {Provider} from 'react-redux'
import { store } from './app/store';
function App(): JSX.Element {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
      <ThemeProvider>
        {/* <SafeAreaProvider>...</SafeAreaProvider>; */}
        {/* <ProductsScreen /> */}
        {/* <ProductsDetailsScreen /> */}
        {/* <ShoppingCart /> */}
        <Navigation></Navigation>
      </ThemeProvider>
      </Provider>
    </SafeAreaProvider>
  );
}

export default App;
