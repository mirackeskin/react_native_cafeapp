import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const TabNavigationButton=(props)=>{
  return (
    <View>
      <Text>{props.title}</Text>
    </View>
  )
}

const TabNavigation = () => {
  return (
    <View style={styles.TabNavigationWrapper}>
      <TabNavigationButton title="button"></TabNavigationButton>
      <TabNavigationButton title="button"></TabNavigationButton>
      <TabNavigationButton title="button"></TabNavigationButton>
      <TabNavigationButton title="button"></TabNavigationButton>
    </View>
  )
}

export default TabNavigation

const styles = StyleSheet.create({
    TabNavigationWrapper:{
        backgroundColor:"white",
        width:"100%",
        height:"10%",
        borderTopEndRadius:50,
        borderTopStartRadius:50,

        flexDirection:"row",
        justifyContent:"space-around",
        alignItems:"center"
    }
})