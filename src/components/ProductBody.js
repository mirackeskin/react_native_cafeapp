import { StyleSheet, Text, View,Dimensions,TouchableOpacity} from 'react-native'
import React,{ useState } from 'react'


const {width,height}=Dimensions.get("screen");

const CountButton=(props)=>{ 

  const pressCountButton=()=>{
    if(props.type=="minus"){
      let count=props.count-1;
      props.callback(count);
    }else{
      let count=props.count+1;
      props.callback(count);
    }
  }
  return (
    <TouchableOpacity onPress={pressCountButton} activeOpacity={0.8} style={props.type==="minus"?styles.CountButtonLeft:styles.CountButtonRight}>
      <Text style={{color:"white",fontSize:width/13}}>{props.text}</Text>
    </TouchableOpacity>
  )
}

const ProductPriceCard=(props)=>{
  const [count,setCount]=useState(0);
  const [price,setPrice]=useState(0);

  const callbackFunction=(value)=>{
    setCount(value);//callback function ile parent'a props gönderdik.
    setPrice(value*props.price);
  }

  return (
    <View style={styles.ProductPriceCardWrapper}>
      <View style={styles.ProductPriceCardLeft}>
        <Text style={{fontSize:width/20,color:"#875B4C"}}>Espresso</Text>
        <Text style={{fontSize:width/14,fontWeight:"bold",color:"#D09777"}}>{price}£</Text>
      </View>
      <View style={styles.ProductPriceCardRight}>
        <CountButton count={count} callback={callbackFunction} text="-" type="minus"></CountButton>
        <Text style={{padding:15,fontSize:width/18}}>{count}</Text>
        <CountButton count={count} callback={callbackFunction} text="+" type="plus"></CountButton>
      </View>
    </View>
  )
}

const ProductSizeCard=()=>{
  return (
    <View style={styles.ProductSizeCardWrapper}>

    </View>
  )
}

const ProductExtras=()=>{
  return (
    <View style={styles.ProductExtrasWrapper}>

    </View>
  )
}

const AddToCart=()=>{
  return (
    <View style={styles.AddToCartWrapper}>

    </View>
  )
}

const ProductBody = (props) => {
  return (
    <View style={styles.ProductBody}>
      <ProductPriceCard price={props.price}></ProductPriceCard>
      <ProductSizeCard></ProductSizeCard>
      <ProductExtras></ProductExtras>
      <AddToCart></AddToCart>
    </View>
  )
}

export default ProductBody

const styles = StyleSheet.create({
    ProductBody:{
        width:"100%",
        height:"60%",
        backgroundColor:"#F7EFE9"
    },
    ProductPriceCardWrapper:{
      width:"100%",
      height:"25%",
      backgroundColor:"#F7EFE9",
      flexDirection:"row",
      justifyContent:"space-between",
      alignItems:"center",
      paddingLeft:width/39,
      paddingRight:width/39,
      flexGrow:1 
    },
    ProductPriceCardLeft:{
      backgroundColor:"#F7EFE9",
    },
    ProductPriceCardRight:{
      backgroundColor:"#F7EFE9",
      flexDirection:"row",
      alignItems:"center",
      justifyContent:"center",
    },
    CountButtonLeft:{
      width:width/10,
      height:width/10,
      backgroundColor:"#875B4C",
      borderTopLeftRadius:width/39,
      borderBottomLeftRadius:10,
      justifyContent:"center",
      alignItems:'center',
    },
    CountButtonRight:{
      width:width/10,
      height:width/10,
      backgroundColor:"#875B4C",
      borderTopRightRadius:width/39,
      borderBottomRightRadius:10,
      justifyContent:"center",
      alignItems:'center',
    },
    ProductSizeCardWrapper:{
      width:"100%",
      height:"25%",
      backgroundColor:"#F7EFE9",
      flexGrow:1   
    },
    ProductExtrasWrapper:{
      width:"100%",
      height:"25%",
      backgroundColor:"#F7EFE9",
      flexGrow:1 
    },
    AddToCartWrapper:{
      width:"100%",
      height:"25%",
      backgroundColor:"#F7EFE9",
      flexGrow:1
      
    }
})