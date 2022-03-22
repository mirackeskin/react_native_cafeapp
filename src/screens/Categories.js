import { StyleSheet, Text, View,SafeAreaView } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import HeaderCategories from '../components/HeaderCategories'
import HeaderTitleCategories from '../components/HeaderTitleCategories'
import ProductsCategories from '../components/ProductsCategories'
import TabNavigation from '../components/TabNavigation'

const Categories = () => {
  return (
    <SafeAreaView style={styles.CategoriesMainWrapper}>
      <HeaderCategories name="Kahve"></HeaderCategories>
      <HeaderTitleCategories></HeaderTitleCategories>
      <ProductsCategories></ProductsCategories>
      <TabNavigation></TabNavigation>
    </SafeAreaView>
  )
}

export default Categories

const styles = StyleSheet.create({
    CategoriesMainWrapper:{
        backgroundColor:"#F7EFE9",
        flexDirection:"column",
        flex:1,
    }
})