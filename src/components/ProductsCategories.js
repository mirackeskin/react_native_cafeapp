import { StyleSheet, Text, View ,ScrollView} from 'react-native'
import React from 'react'

const ProductCard=(props)=>{
  return (
    <View>
        <Text>{props.title}</Text>
    </View>
  )
}

const ProductsCategories = () => {
  return (
    <ScrollView style={styles.ProductsWrapper}>
      <ProductCard title="Product Card"></ProductCard>
    </ScrollView>
  )
}

export default ProductsCategories

const styles = StyleSheet.create({
    ProductsWrapper:{
        backgroundColor:"#F7EFE9",
        width:"100%",
        height:150,
        flexGrow:1
    }
})