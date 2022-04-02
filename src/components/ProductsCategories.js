import { StyleSheet, Text, View ,ScrollView,Image,Dimensions,TouchableOpacity} from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';


const {width,height}=Dimensions.get("screen");

const ProductCard=(props)=>{
  const Navigation=useNavigation();
  const {title,price}=props;
  
  return (
    <TouchableOpacity price={props.price} activeOpacity={0.6} onPress={()=>Navigation.navigate("Product",({title,price}))} style={styles.ProductCardMainWrapper}>
        <View style={styles.ProductCardImageWrapper}>
          <Image resizeMode='stretch' source={require("../../assets/images/fincan.png")} style={styles.ProductImage}></Image>
        </View>
        <View style={styles.ProductCardContentWrapper}>
          <Text   style={styles.ProductCardText}>{props.title}</Text>
          <Text style={{fontSize:24}}> {">"} </Text>
        </View>

    </TouchableOpacity>
  )
}

const ProductsCategories = () => {
  return (
    <ScrollView style={styles.ProductsWrapper}>
      <ProductCard price={14.99} title="Espresso"></ProductCard>
      <ProductCard price={4.99} title="Cappucino"></ProductCard>
      <ProductCard price={12.99} title="Machiato"></ProductCard>
      <ProductCard price={6.99} title="Latte"></ProductCard>
      <ProductCard price={9.99} title="Turkish Coffee"></ProductCard>
      <ProductCard price={9.99} title="Americano"></ProductCard>      
    </ScrollView>
  )
}

export default ProductsCategories

const styles = StyleSheet.create({
    ProductsWrapper:{
        backgroundColor:"#F7EFE9",
        width:"100%",
        flexGrow:1
    },
    ProductCardMainWrapper:{
      height:height/10,    
      flexDirection:"row",
      marginTop:10,
      marginBottom:10,
      paddingLeft:width/39,
      paddingRight:width/39
    },
    ProductCardImageWrapper:{
      height:"100%",
      width:height/10
    },
    ProductImage:{
      width:"100%",
      height:"100%"
    },
    ProductCardContentWrapper:{
      backgroundColor:"#F7EFE9",
      height:"100%",
      flexGrow:1,
      flexDirection:"row",
      alignItems:"center",
      justifyContent:"space-between",
      paddingLeft:width/39,
      paddingRight:width/39,
    },
    ProductCardText:{
      fontSize:20,
      flex:1 //yazı sığmadığında alt satıra iner
    }
})






