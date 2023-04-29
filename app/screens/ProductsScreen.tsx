import React from 'react';
import {FlatList, Text, View, Image} from 'react-native';
import {product} from '../data/produect';

const RenderProduct: React.FC = () => {
  return (
    <FlatList
      data={product}
      keyExtractor={e => e.id}
      numColumns={2}
      renderItem={({item}) => {
        return (
          <View className="w-1/2">
            <Text className="text-lg font-bold p-2 text-center">
              {item.name}
            </Text>
            {/* <Text>{item.image}</Text> */}
            <Image
              // alt={item.description}
              source={{uri: item.image}}
              className="w-full aspect-square"
            />
          </View>
        );
      }}
    />
  );
};

export const ProductsScreen: React.FC = (): JSX.Element => {
  return (
    // <View className="flex flex-1 flex-col justify-center items-center h-full">

    // </View>
    <View className="flex items-center justify-center bg-w">
      <RenderProduct />
    </View>
  );
};

export default ProductsScreen;
