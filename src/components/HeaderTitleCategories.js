import { StyleSheet, Text, View,Dimensions } from 'react-native'
import React from 'react'

const {width,height}=Dimensions.get("screen");

const HeaderTitleCategories = () => {
  return (
    <View style={styles.HeaderTitleMainWrapper}>
      <Text style={styles.HeaderTitleText}>It's Great <Text style={styles.HeaderTitleTextBold}>Day for Coffee.</Text> </Text>
    </View>
  )
}

export default HeaderTitleCategories

const styles = StyleSheet.create({
    HeaderTitleMainWrapper:{
        backgroundColor:"#F7EFE9",
        width:"100%",
        height:"15%",
        justifyContent:"center",
        paddingLeft:width/39
    },
    HeaderTitleText:{
      fontSize:width/10,
      color:"#593A30"
    },
    HeaderTitleTextBold:{
      fontSize:width/10,
      fontWeight:'bold',
      color:"#D09777"
    }
})