import { StyleSheet, Text, View,TouchableOpacity} from 'react-native'
import React from 'react'
import Icon from "react-native-vector-icons/Ionicons";

const TabNavigationButton=(props)=>{
  return (
    <TouchableOpacity activeOpacity={0.4}>
      <Icon name={props.type} color="saddlebrown" size={30}/>
    </TouchableOpacity>
  )
}

const TabNavigation = () => {
  return (
    <View style={styles.TabNavigationWrapper}>
      <TabNavigationButton type="home"></TabNavigationButton>
      <TabNavigationButton type="location"></TabNavigationButton>
      <TabNavigationButton type="cart"></TabNavigationButton>
      <TabNavigationButton type="person"></TabNavigationButton>
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