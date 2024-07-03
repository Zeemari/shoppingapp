import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList, Image } from 'react-native';
import Toast from 'react-native-toast-message';

const ProductsScreen = ({ addProduct }) => {
  const [successMessage, setSuccessMessage] = useState('');

  const products = [
    { id: 1, name: 'Brown Leather Shoe', price: 12, image: require('../Images/brown-man-s-leather-derby-shoes.png') },
    { id: 2, name: 'Black Headphone', price: 10, image: require('../Images/levitating-music-headphones-display.jpg') },
    { id: 3, name: 'Hair Shampoo', price: 30, image: require('../Images/front-view-orange-shampoo-bottle-white-wall.jpg') },
    { id: 4, name: 'Skin Care Ladies', price: 90, image: require('../Images/skin-products-arrangement-wooden-blocks.jpg') },
    { id: 5, name: 'Orange LV Bag', price: 20, image: require('../Images/levitating-women-s-bag-display.jpg') },
    { id: 6, name: 'Towel', price: 60, image: require('../Images/ecological-cleaning-products-concept.jpg') },
    { id: 7, name: 'Black Headphone', price: 10, image: require('../Images/levitating-music-headphones-display.jpg') },
    { id: 8, name: 'Brown Leather', price: 50, image: require('../Images/brown-man-s-leather-derby-shoes.png') },
    { id: 9, name: 'Skin Care Ladies', price: 90, image: require('../Images/skin-products-arrangement-wooden-blocks.jpg') },
    { id: 10, name: 'Towel', price: 60, image: require('../Images/ecological-cleaning-products-concept.jpg') },
    { id: 11, name: 'Black Leather Shoe', price: 14, image: require('../Images/brown-man-s-leather-derby-shoes.png') },
    { id: 12, name: 'Hair Shampoo', price: 30, image: require('../Images/front-view-orange-shampoo-bottle-white-wall.jpg') },
  ];

  const handleAddToCart = (item) => {
    addProduct(item);
    const message = `${item.name} added to cart!`;
    setSuccessMessage(message);
    Toast.show({
      type: 'success',
      text1: 'Success',
      text2: message,
      visibilityTime: 3000,
      autoHide: true,
    });
  };

  const renderItem = React.useCallback(
    ({ item }) => (
      <View style={styles.productContainer}>
        {item.image && <Image source={item.image} style={styles.productImage} />}
        <Text style={styles.productName}>{item.name}</Text>
        <Text style={styles.productPrice}>${item.price}</Text>
        <TouchableOpacity style={styles.button} onPress={() => handleAddToCart(item)}>
          <Text style={styles.buttonText}>Add to Checkout</Text>
        </TouchableOpacity>
      </View>
    ),
    [addProduct]
  );

  return (
    <View>
      <FlatList
        data={products}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        columnWrapperStyle={styles.row}
        contentContainerStyle={styles.flatListContent}
        initialNumToRender={4}
        maxToRenderPerBatch={2}
        windowSize={5}
        removeClippedSubviews={true}
      />
      <Toast ref={(ref) => Toast.setRef(ref)} />
    </View>
  );
};

export default ProductsScreen;

const styles = StyleSheet.create({
  flatListContent: {
    padding: 10,
  },
  row: {
    flex: 1,
    justifyContent: 'space-between',
  },
  productContainer: {
    flex: 1,
    margin: 5,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
    alignItems: 'center',
    width: '48%',
    marginTop: 14,
  },
  productImage: {
    width: 150,
    height: 150,
    borderRadius: 10,
    marginBottom: 10,
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  productPrice: {
    fontSize: 14,
    color: '#888',
  },
  button: {
    marginTop: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#000',
    borderRadius: 0,
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
  },
});
