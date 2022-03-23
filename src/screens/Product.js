import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { useRoute } from '@react-navigation/native';

const Product = (props) => {  
  const Route=useRoute();
  return (
    <View>
      <Text>{Route.params.title}</Text>
    </View>
  )
}

export default Product

const styles = StyleSheet.create({})