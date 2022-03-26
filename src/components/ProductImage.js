import { StyleSheet, Text, View ,Image,Dimensions} from 'react-native'
import React from 'react'

const {width,height}=Dimensions.get("screen");

const ProductImage = () => {
    
  return (
    <View style={styles.wrapper}>
      <View style={styles.imageContainer}> 
        <Image style={{width:"100%",height:"100%"}} resizeMode='stretch' source={require("../../assets/images/fincan.png")}></Image>
      </View>
    </View>
  )
}

export default ProductImage

const styles = StyleSheet.create({
    wrapper:{
        width:"100%",
        height:"30%",
        backgroundColor:"#F7EFE9",
        justifyContent: 'center' ,
        alignItems:"center",
    },
    imageContainer:{
        width:(height/20)*3,
        height:(height/20)*3,
    }
})