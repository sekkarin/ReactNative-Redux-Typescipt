import { View, Text, FlatList } from 'react-native';
import React from 'react';
import CartListItem from '../components/CartListItem';
// import { cart } from '../data/cart';
import tw from 'twrnc';
import { Button } from '@rneui/base';
import { useSelector } from 'react-redux';
import { selecctSubtotal, selectDeliveryPrice, selectTotal } from '../store/cartSlicec';

interface Prors {
  title: string;
  amount: string;
  style?: Object;
}
const ListTotle: React.FC<Prors> = ({ title, amount, style }) => {
  
  return (
    <View className="flex-row  flex justify-between " >
      <Text className='text-base text-gray-600' style={style} >{title}</Text>
      <Text className='text-base text-gray-600' style={style}>{amount} US$</Text>
    </View>
  );
}

const ShoppingCart = () => {
  const cartItem = useSelector(state=>state.cart.item)
  const subTotal = useSelector(selecctSubtotal)
  const dekiveryFee = useSelector(selectDeliveryPrice)
  const total = useSelector(selectTotal)
  return (
    <>
      <FlatList
      className='mb-16'
        data={cartItem}
        renderItem={({ item }) => {
          return <CartListItem cartItem={item} />;
        }}
        ListFooterComponent={() => {
          return <View className="p-3 border-t-2 m-5 border-gray-400">
            <ListTotle title={"Subtotla"} amount={subTotal}></ListTotle>
            <ListTotle title={"Delivery"} amount={dekiveryFee}></ListTotle>
            <ListTotle title={"Total"} amount={total} style={{ fontWeight: '500' }}></ListTotle>
          </View>

        }}
      />
      <Button
        onPress={()=>{
          console.log("press");
          
        }}
        containerStyle={{
          position: 'absolute',
          bottom: 20,
          width: '90%',
          alignSelf: 'center',
          padding: 10,
          //   backgroundColor: 'black',
        }}
        titleStyle={{ fontSize: 16 }}
        buttonStyle={{ borderRadius: 100, backgroundColor: 'black' }}
        // background={}
        title={'Check Out'}
      />
    </>
  );
};

export default ShoppingCart;
