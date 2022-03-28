import { StyleSheet, Text, View ,SafeAreaView} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { useRoute } from '@react-navigation/native';
import ProductHead from '../components/ProductHead';
import ProductBody from '../components/ProductBody';
import ProductImage from '../components/ProductImage';


const Product = (props) => {  
  const Route=useRoute();
  
  return (
    <SafeAreaView style={styles.ProductMainWrapper}>
      <ProductHead headTitle={Route.params.title}></ProductHead>
      <ProductImage></ProductImage>
      <ProductBody productTitle={Route.params.title} price={Route.params.price} ></ProductBody>
    </SafeAreaView>
  )
}

export default Product

const styles = StyleSheet.create({
  ProductMainWrapper:{
    flex:1,
    backgroundColor:"#F7EFE9",
    flexDirection:"column"
  },
  
})