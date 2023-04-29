import {
  View,
  Text,
  FlatList,
  useWindowDimensions,
  ScrollView,
} from 'react-native';
import React from 'react';
import {product as getProduct} from '../data/produect';
import {Image} from 'react-native';
import {Button} from '@rneui/themed';

const ProductsDetailsScreen = () => {
  const {width} = useWindowDimensions();
  const product = getProduct[0];

  const addToCart = () => {
    console.log('Add to cart');
  };
  return (
    <View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          data={product.images}
          renderItem={({item}) => {
            return (
              <Image
                source={{uri: item}}
                style={{width: width, aspectRatio: 1}}
              />
            );
          }}
        />
        <View className="p-5">
          <Text className="text-2xl font-medium my-3 text-black ">
            {product.name}
          </Text>
          <Text className="font-bold text-[18] tracking-[1.5] ">
            ${product.price}
          </Text>
          <Text className="my-3 text-lg text-black  font-light">
            {product.description}
          </Text>
        </View>
      </ScrollView>
      <Button
        onPress={addToCart}
        containerStyle={{
          position: 'absolute',
          bottom: 30,
          width: '90%',
          alignSelf: 'center',
          padding: 10,
          //   backgroundColor: 'black',
        }}
        titleStyle={{fontSize: 16}}
        buttonStyle={{borderRadius: 100, backgroundColor: 'black'}}
        // background={}
        title={'Hello'}
      />
    </View>
  );
};

export default ProductsDetailsScreen;
