import { StyleSheet, Text, View,SafeAreaView } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import HeaderCategories from '../components/HeaderCategories'

const Categories = () => {
  return (
    <SafeAreaView style={styles.CategoriesMainWrapper}>
      <HeaderCategories name="Kahve"></HeaderCategories>
    </SafeAreaView>
  )
}

export default Categories

const styles = StyleSheet.create({
    CategoriesMainWrapper:{
        backgroundColor:"red",
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
        width:"100%",
        height:"10%"
    }
})