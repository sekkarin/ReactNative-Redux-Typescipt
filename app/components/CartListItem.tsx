import { View, Text, StyleSheet, Image } from 'react-native';
import { Button } from '@rneui/themed';
import { useDispatch } from 'react-redux';
import { cartSlice } from '../store/cartSlicec';

interface propTypes {
  cartItem: {
    product: {
      id: string;
      image: string;
      name: string;
      price: number;
    };
    size: number;
    quantity: number;
  };
  // cartItem: Object;
}

const CartListItem: React.FC<propTypes> = ({ cartItem }) => {
  const dispatch = useDispatch()
  // console.log(cartItem);


  const increaseQuanity = () => {
    dispatch(cartSlice.actions.changeQuantity({
      productId: cartItem.product.id,
      amount: 1
    }))
  }
  const decreaseQuantity = () => {
    dispatch(cartSlice.actions.changeQuantity({
      productId: cartItem.product.id,
      amount: -1
    }))
  }




  return (
    <View style={styles.container}>
      <Image source={{ uri: cartItem.product.image }} style={styles.image} />

      <View style={styles.contentContainer}>
        <Text style={styles.name}>{cartItem.product.name}</Text>
        <Text style={styles.size}>Size {cartItem.size}</Text>

        <View style={styles.footer}>
          {/* <Icon name="sc-telegram" type="evilicon" color="#517fa4" /> */}

          <Button
            // background={'transparent'}
            // containerStyle={{backgroundColor:}}
            buttonStyle={{ backgroundColor: 'transparent' }}
            icon={{
              name: 'minus-circle',
              type: 'font-awesome',
              size: 24,
              color: 'black',
            }}
            onPress={
              decreaseQuantity
            }
          />
          <Text style={styles.quantity}>{cartItem.quantity}</Text>
          <Button
            buttonStyle={{ backgroundColor: 'transparent' }}
            icon={{
              name: 'plus-circle',
              type: 'font-awesome',
              size: 24,
              color: 'black',
            }}
            onPress={
              increaseQuanity
          }
          />
          <Text style={styles.itemTotal}>
            $ {cartItem.product.price * cartItem.quantity}
          </Text>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    padding: 10,
    paddingHorizontal: 20,
    flexDirection: 'row',
  },
  contentContainer: {
    flex: 1,
    marginLeft: 10,
  },
  image: {
    width: '40%',
    aspectRatio: 1,
  },
  name: {
    fontWeight: '500',
    fontSize: 18,
  },
  size: {
    fontSize: 16,
    color: 'gray',
  },
  quantity: {
    marginHorizontal: 10,
    fontWeight: 'bold',
    color: 'gray',
  },
  footer: {
    marginTop: 'auto',
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemTotal: {
    fontSize: 16,
    marginLeft: 'auto',
    fontWeight: '500',
  },
});
export default CartListItem;