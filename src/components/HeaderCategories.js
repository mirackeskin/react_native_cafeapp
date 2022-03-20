import { StyleSheet, Text, View ,SafeAreaView,TouchableOpacity,Dimensions} from 'react-native'
import React from 'react'



function HeaderButton (props) {
  return (
    <TouchableOpacity activeOpacity={0.8} style={styles.headerButtonWrapper}>
      <Text style={{color:"#875B4C"}}>{props.title}</Text>
    </TouchableOpacity>
  )
}

const HeaderCategories = (props) => {
  return (
    <SafeAreaView style={styles.headerCategoriesMainWrapper}>
      <HeaderButton title="Back"></HeaderButton>
      <HeaderButton title="Next"></HeaderButton>
    </SafeAreaView>
  )
}

export default HeaderCategories

const styles = StyleSheet.create({
    headerCategoriesMainWrapper:{
        backgroundColor:"#D5BEB4",
        width:"100%",
        height:"100%",

        flexDirection:"row",
        justifyContent: "space-between",
        alignItems:"center",
        paddingLeft:5,
        paddingRight:5
    },
    headerButtonWrapper:{
        backgroundColor:"#B88068",
        padding:Dimensions.get("screen").width/39,
        borderRadius:5
    }
})