import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { NavigationContainer, useNavigation } from '@react-navigation/native'
import { ProductsScreen } from '../screens'

import ProductsDetailsScreen from '../screens/ProductsDetailsScreen';
import ShoppingCart from '../screens/ShoppingCart';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from '../utils/type';
import { Button } from '@rneui/themed';
import { useSelector } from 'react-redux';
import {  selectNumberOfItem } from '../store/cartSlicec';

const Stack = createNativeStackNavigator<RootStackParamList>()
const Navigation = () => {
    // useSelector
    // selectNumberOfItem
    const numberOfItems = useSelector(selectNumberOfItem)
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Products'>
                <Stack.Screen name='Products' options={({navigation})=>
                    ({
                    // headerShown: false
                    title:"Products",
                    headerTitleAlign:"center",
                    headerRight: () => (
                    <Button
                    containerStyle={{borderRadius:360}}
                        buttonStyle={{ backgroundColor: 'transparent' }}
                        title={`${numberOfItems}`}
                        titleStyle={{color:'black',fontWeight:'500'}}
                        icon={{
                            name: 'shopping-cart',
                            type: 'feather',
                            size: 24,
                            color: 'black',
                        }}
                        onPress={() => {
                            // const router = useNavigation()
                            // console.log('Press');
                            navigation.navigate('Cart')

                        }}
                    />)
                })} component={ProductsScreen}></Stack.Screen>
                <Stack.Screen options={{ presentation: 'card' }} name='ProductsDetails' component={ProductsDetailsScreen}></Stack.Screen>
                <Stack.Screen name='Cart' component={ShoppingCart}></Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation