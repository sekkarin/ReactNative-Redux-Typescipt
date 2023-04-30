import React from 'react';
import {FlatList, Text, View, Image, Pressable, NodeHandle} from 'react-native';
// import {product} from '../data/produect';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../utils/type';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { productsSlice } from '../store/productsSlice';

type ProductsProps = NativeStackScreenProps<RootStackParamList, "Products">;
// type Proprs= {

// }
const RenderProduct = ({productDetial}) => {
  const product = useSelector((state)=>state.products.products)
  return (
    <FlatList
      data={product}
      keyExtractor={e => e.id}
      numColumns={2}
      renderItem={({item}) => {
        return (
          <Pressable onPress={()=>{
            productDetial(item.id)
          }} className="w-1/2">
            <Text className="text-lg font-bold p-2 text-center">
              {item.name}
            </Text>
            {/* <Text>{item.image}</Text> */}
            <Image
              // alt={item.description}
              source={{uri: item.image}}
              className="w-full aspect-square"
            />
          </Pressable>
        );
      }}
    />
  );
};

export const ProductsScreen: React.FC = (): JSX.Element => {

  
  const dispatch = useDispatch()

  const navigation = useNavigation()
  // navigation.setOptions({headerShown:false})
  const productDetailHandler = (id:string)=>{
    dispatch(productsSlice.actions.setSelectedProduct(id))
    navigation.navigate('ProductsDetails')
    // console.log('asd');
    
  }
  return (
    <View className="flex items-center justify-center bg-w">
      <RenderProduct productDetial={productDetailHandler} />
    </View>
  );
};

export default ProductsScreen;
