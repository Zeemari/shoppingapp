import React, {useState} from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, FlatList, Button } from 'react-native';

import Toast from 'react-native-toast-message';

const CheckoutScreen = ({ checkoutItems, removeProduct, navigation }) => {
  const [successMessage, setSuccessMessage] = useState("");

  const handleRemoveFromCart = (item) => {
    removeProduct(item);
    const message = `item removed from cart!`
    setSuccessMessage(message);
    Toast.show({
      type: 'error',
      text1: 'opps...',
      text2: message,
      visibilityTime: 3000,
      autoHide: true,
    })
  }

  const renderItem = ({item}) => (
    <View>
    <View style={styles.checkoutItem}>
      <View style={styles.imageTextStyle}>
      {item.image && <Image source={item.image} style={styles.itemImage} />}
      <Text style={styles.itemName}>{item.name}</Text>
      </View>
      <TouchableOpacity style={styles.removeButton} onPress={() => handleRemoveFromCart(item.id)}>
        <Text style={styles.removeButtonText}>-</Text>
      </TouchableOpacity>
    </View>
        <TouchableOpacity style={styles.buttonStyle} onPress={() => navigation.navigate('OrderSuccessful')}>
          <Text style={styles.buttonText}>Order Successful</Text>
        </TouchableOpacity>
    </View>
  )

  return (
    <View style={styles.container}>
      <FlatList
        data={checkoutItems}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.flatListContent}
      />
      <Toast ref={(ref) => Toast.setRef(ref)} />
    </View>
  );
};

export default CheckoutScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
  },
  flatListContent: {
    paddingBottom: 20,
  },
  checkoutItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    padding: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
  },
  imageTextStyle:{
    flexDirection: 'row',
    justifyContent: 'start',
    alignItems: 'center',
  },
  itemName: {
    fontSize: 16,
  },
  removeButton: {
    backgroundColor: '#dc3545',
    borderRadius: 20,
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  removeButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  itemImage: {
    width: 50,
    height: 50,
    borderRadius: 10,
    marginRight: 10,
  },
  buttonStyle: {
    // marginTop: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#000',
    borderRadius: 0,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
    fontWeight: '600'
  }
})
